import React from "react";
import { useRouter } from "next/router";

const GlassButton = ({ text, href }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
    <button onClick={handleClick} className="glass-button">
      {text}
      <style jsx>{`
        .glass-button {
          display: inline-block;
          padding: 1rem 2rem;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.53) 0%,
            rgba(255, 255, 255, 0.3) 100%
          );
          color: white;
          text-decoration: none;
          border-radius: 15px;
          font-weight: 600;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 1);
          backdrop-filter: blur(5px);
          box-shadow: 0px 4px 20px rgba(255, 255, 255, 1);
          position: relative;
          overflow: hidden;
          width: 108px;
          height: 57px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .glass-button:hover {
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.7) 0%,
            rgba(255, 255, 255, 0.4) 100%
          );
        }

        .glass-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url("/images/pattern.png") repeat;
          opacity: 0.35;
          mix-blend-mode: soft-light;
        }
      `}</style>
    </button>
  );
};

export default GlassButton;
