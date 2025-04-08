import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  // Function to check if a link is active
  const isActive = (path) => {
    return router.pathname === path;
  };

  return (
    <header
      style={{
        width: "100%",
        height: "118px",
        backgroundColor: "#0D2C44", // Figma'daki renk değeri
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 1000,
        fontFamily: "Philosopher, serif",
      }}
    >
      {/* Logo */}
      <Link href="/">
        <div
          style={{
            width: "138px",
            height: "137px",
            position: "relative",
            marginLeft: "13px",
            cursor: "pointer",
          }}
        >
          <Image
            src="/sogut-logo.png"
            alt="Söğüt Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </Link>

      {/* Navigation */}
      <nav
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
          marginRight: "13px",
        }}
      >
        <Link
          href="/"
          style={{
            color: "#FFFFFF",
            textDecoration: "none",
            fontSize: "18px",
            position: "relative",
            fontFamily: "Philosopher, serif",
          }}
        >
          bizi tanıyın!
          {isActive("/") && (
            <div
              style={{
                position: "absolute",
                bottom: "-5px",
                left: "0",
                width: "100%",
                height: "2px",
                backgroundColor: "#FFFFFF",
              }}
            />
          )}
        </Link>
        <Link
          href="/events"
          style={{
            color: "#FFFFFF",
            textDecoration: "none",
            fontSize: "18px",
            position: "relative",
            fontFamily: "Philosopher, serif",
          }}
        >
          etkinlikler
          {isActive("/events") && (
            <div
              style={{
                position: "absolute",
                bottom: "-5px",
                left: "0",
                width: "100%",
                height: "2px",
                backgroundColor: "#FFFFFF",
              }}
            />
          )}
        </Link>
        <Link
          href="/contact"
          style={{
            color: "#FFFFFF",
            textDecoration: "none",
            fontSize: "18px",
            position: "relative",
            fontFamily: "Philosopher, serif",
          }}
        >
          iletişim
          {isActive("/contact") && (
            <div
              style={{
                position: "absolute",
                bottom: "-5px",
                left: "0",
                width: "100%",
                height: "2px",
                backgroundColor: "#FFFFFF",
              }}
            />
          )}
        </Link>
      </nav>
    </header>
  );
};

export default Header;
