import React from "react";
import Head from "next/head";
import Header from "../components/Header";

const Contact = () => {
  return (
    <div>
      <Head>
        <title>Söğüt Garden - İletişim | Bize Ulaşın</title>
        <meta
          name="description"
          content="Söğüt Garden bahçe tasarımı, bakımı ve peyzaj hizmetleri için bizimle iletişime geçin. Adres, telefon numaraları ve çalışma saatlerimizi öğrenin."
        />
        <meta
          name="keywords"
          content="Söğüt Garden iletişim, bahçe tasarımı iletişim, peyzaj hizmetleri, bahçe bakımı iletişim"
        />
        <link rel="canonical" href="https://sogutgarden.com/contact" />
      </Head>

      <Header />
      <main
        style={{
          paddingTop: "118px",
          minHeight: "100vh",
          backgroundColor: "#0e1526",
          color: "white",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "50px",
              marginTop: "30px",
            }}
          >
            {/* İletişim Bilgileri */}
            <div>
              <h2
                style={{
                  fontSize: "24px",
                  marginBottom: "20px",
                  color: "white",
                }}
              >
                İletişim Bilgileri
              </h2>

              <div style={{ marginBottom: "30px" }}>
                <h3
                  style={{
                    fontSize: "18px",
                    marginBottom: "10px",
                    color: "white",
                  }}
                >
                  Adres
                </h3>
                <p style={{ lineHeight: "1.6", color: "white" }}>
                  Ören Mahallesi
                  <br />
                  Hüseyin İbrahim İzmirli Caddesi No:120A
                  <br />
                  Karadeniz Ereğli, Zonguldak
                </p>
              </div>

              <div style={{ marginBottom: "30px" }}>
                <h3
                  style={{
                    fontSize: "18px",
                    marginBottom: "10px",
                    color: "white",
                  }}
                >
                  Telefon
                </h3>
                <p style={{ lineHeight: "1.6", color: "white" }}>
                  +90 (536) 257 53 53
                  <br />
                  +90 (533) 553 75 07
                </p>
              </div>

              <div style={{ marginBottom: "30px" }}>
                <h3
                  style={{
                    fontSize: "18px",
                    marginBottom: "10px",
                    color: "white",
                  }}
                >
                  E-posta
                </h3>
                <p style={{ lineHeight: "1.6", color: "white" }}>
                  info@sogutgarden.com
                  <br />
                  support@sogutgarden.com
                </p>
              </div>

              <div>
                <h3
                  style={{
                    fontSize: "18px",
                    marginBottom: "10px",
                    color: "white",
                  }}
                >
                  Çalışma Saatleri
                </h3>
                <p style={{ lineHeight: "1.6", color: "white" }}>
                  Pazartesi - Pazar: 08:00 - 12:00
                </p>
              </div>
            </div>

            {/* İletişim Formu */}
            <div>
              <h2
                style={{
                  fontSize: "24px",
                  marginBottom: "20px",
                  color: "white",
                }}
              >
                Bize Mesaj Gönderin
              </h2>

              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                }}
              >
                <div>
                  <label
                    htmlFor="name"
                    style={{
                      display: "block",
                      marginBottom: "5px",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    Adınız
                  </label>
                  <input
                    type="text"
                    id="name"
                    style={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: "5px",
                      border: "1px solid #ddd",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      color: "white",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    style={{
                      display: "block",
                      marginBottom: "5px",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    E-posta Adresiniz
                  </label>
                  <input
                    type="email"
                    id="email"
                    style={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: "5px",
                      border: "1px solid #ddd",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      color: "white",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    style={{
                      display: "block",
                      marginBottom: "5px",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    Konu
                  </label>
                  <input
                    type="text"
                    id="subject"
                    style={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: "5px",
                      border: "1px solid #ddd",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      color: "white",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    style={{
                      display: "block",
                      marginBottom: "5px",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    style={{
                      width: "100%",
                      padding: "10px",
                      borderRadius: "5px",
                      border: "1px solid #ddd",
                      backgroundColor: "rgba(255, 255, 255, 0.1)",
                      color: "white",
                    }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  style={{
                    backgroundColor: "#0D2C44",
                    color: "white",
                    border: "none",
                    padding: "12px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontSize: "16px",
                    marginTop: "10px",
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor =
                      "rgba(255, 255, 255, 0.2)")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor =
                      "rgba(255, 255, 255, 0.1)")
                  }
                >
                  Mesaj Gönder
                </button>
              </form>
            </div>
          </div>

          {/* Harita */}
          <div style={{ marginTop: "50px" }}>
            <h2
              style={{
                fontSize: "24px",
                marginBottom: "20px",
                color: "white",
              }}
            >
              Konumumuz
            </h2>
            <div
              style={{
                width: "100%",
                height: "400px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d12378.76338047718!2d31.509535168863778!3d41.27170347495383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDE2JzIwLjAiTiAzMcKwMzAnNDUuMiJF!5e0!3m2!1sen!2str!4v1744143739346!5m2!1sen!2str"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

export default Contact;
