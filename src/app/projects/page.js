"use client";
import Image from "next/image";
//Test
const projects = [
  {
  title: "Exitlag",
  description: "Developed backend APIs and reporting modules for Exitlag using PHP, enhancing system performance and data visualization.",
  link: "https://providers.exitlag.com/login",
  image: "/exitlag.png",
  tech: ["Oracle", "PHP"],
},
  {
  title: "NAYATEL CRM",
  description: "Developed and maintained the Customer Relationship Management system for Nayatel, handling customer onboarding, billing, and service modules. Integrated Swagger for comprehensive API documentation.",
  image: "/NCRM.png",
  tech: ["NestJS", "NextJS", "Bootstrap", "PostgreSQL"],
},

  {
    title: "E-commerce Application",
    description: "E-commerce application for managing orders, users, and analytics.",
    link: "https://github.com/arslanneni/e-commerce-be.git",
    image: "/e-commerce.png",
    tech: ["React", "NestJS", "PostgreSQL"],
  },
];

export default function ProjectsPage() {
  return (
    <section className="container py-5">
      <h1 className="text-light mb-4 text-center">My Projects</h1>
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-6 col-lg-4 mb-4">
            <div className="card h-100 bg-dark border border-secondary shadow-sm">
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="card-img-top object-fit-cover"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              )}
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-light">{project.title}</h5>
                <p className="card-text text-secondary flex-grow-1">
                  {project.description}
                </p>
                <div className="mb-2">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="badge bg-secondary me-1 mb-1">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light btn-sm mt-auto"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
