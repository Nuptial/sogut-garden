import "../styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps = {} }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (err) => {
      if (err?.cancelled) return;

      const path = window.location.pathname;
      if (path !== "/" && !path.startsWith("/_next")) {
        router.replace("/");
      }
    };

    router.events.on("routeChangeError", handleRouteChange);

    return () => {
      router.events.off("routeChangeError", handleRouteChange);
    };
  }, [router]);

  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext) => {
  let appProps = {};

  if (appContext?.Component?.getInitialProps) {
    appProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  // Handle server-side redirects for non-existent pages
  if (appContext.ctx.res) {
    const path = appContext.ctx.pathname;
    if (path !== "/" && !path.startsWith("/_next")) {
      appContext.ctx.res.writeHead(302, { Location: "/" });
      appContext.ctx.res.end();
    }
  }

  return { pageProps: appProps };
};

export default MyApp;
