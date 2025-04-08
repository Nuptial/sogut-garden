import React from "react";
import Link from "next/link";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Garden Design",
      description:
        "Professional garden design services to create your dream outdoor space",
      icon: "🌿",
      link: "/services/garden-design",
    },
    {
      id: 2,
      title: "Landscaping",
      description:
        "Expert landscaping solutions for both residential and commercial properties",
      icon: "🏡",
      link: "/services/landscaping",
    },
    {
      id: 3,
      title: "Event Space",
      description:
        "Beautiful outdoor venues for your special events and celebrations",
      icon: "🎉",
      link: "/services/event-space",
    },
    {
      id: 4,
      title: "Maintenance",
      description:
        "Regular garden maintenance and care services to keep your space beautiful",
      icon: "✂️",
      link: "/services/maintenance",
    },
  ];

  return (
    <section className="services-section">
      <div className="services-container">
        <h2>Our Services</h2>
        <div className="services-grid">
          {services.map((service) => (
            <Link href={service.link} key={service.id}>
              <div className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        .services-section {
          padding: 80px 0;
          background-color: #f9f9f9;
        }

        .services-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        h2 {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 50px;
          color: #333;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .service-card {
          background: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .service-card:hover {
          transform: translateY(-5px);
        }

        .service-icon {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }

        h3 {
          font-size: 1.5rem;
          margin-bottom: 15px;
          color: #333;
        }

        p {
          color: #666;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .services-section {
            padding: 40px 0;
          }

          h2 {
            font-size: 2rem;
            margin-bottom: 30px;
          }

          .services-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;
