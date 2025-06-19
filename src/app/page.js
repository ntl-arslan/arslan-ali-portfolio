"use client";

import Image from "next/image";

export default function Home() {
	const skills = [
		{ name: "React.js", icon: "/icons/react.png" },
		{ name: "Next.js", icon: "/icons/next.png" },
		{ name: "JavaScript", icon: "/icons/javascript.png" },
		{ name: "TypeScript", icon: "/icons/typescript.png" },
		{ name: "Node.js", icon: "/icons/nodejs.png" },
		{ name: "NestJS", icon: "/icons/nestjs.png" },
		{ name: "PostgreSQL", icon: "/icons/postgresql.png" },
		{ name: "Git", icon: "/icons/git.png" },
		{ name: "Oracle", icon: "/icons/oracle.png" },
		{ name: "PHP", icon: "/icons/php.png" },
	];

	return (
		<section className="container py-5 text-light animate-fade-in">
			{/* Hero Section */}
			<div className="text-center mb-5">
				<Image
					src="/neni.png"
					alt="Arslan Ali"
					width={160}
					height={160}
					className="rounded-circle border border-3 border-light mb-4 hero-img-glow"
					priority
				/>
				<h1 className="display-4 fw-bold">
					<span className="typewriter">Hi, I'm Arslan 👋</span>
				</h1>
				<p className="lead text-secondary fade-in-delay">
					A Full Stack Developer crafting modern, fast & elegant web experiences.
				</p>
				<div className="mt-4">
					<a href="/projects" className="btn btn-primary btn-lg me-3 glow-button">View Projects</a>
					<a href="/contact" className="btn btn-outline-light btn-lg glow-button">Contact Me</a>
				</div>
			</div>

			{/* About Section */}
			<div className="bg-dark bg-opacity-50 p-5 rounded shadow mb-5 animate-fade-in">
				<h2>About Me</h2>
				<p className="text-secondary fs-5">
					I'm a self-driven developer with a deep interest in building scalable full-stack applications using 
					<strong> React</strong>, <strong> Next.js</strong>, <strong> Node.js</strong>, and <strong> PostgreSQL</strong>. 
					I enjoy solving complex problems and constantly learning new technologies.
				</p>
			</div>

			{/* Skills Section */}
			<div className="mb-5">
				<h2 className="mb-4">Skills</h2>
				<div className="row row-cols-2 row-cols-md-4 g-4">
					{skills.map((skill, index) => (
						<div className="col text-center" key={index}>
							<div className="skill-card">
								<Image
									src={skill.icon}
									alt={skill.name}
									width={48}
									height={48}
									className="mb-2"
								/>
								<p className="text-secondary">{skill.name}</p>
							</div>
						</div>
					))}
				</div>
			</div>

			{/* Experience Section */}
			<div className="mb-5 animate-fade-in">
				<h2 className="mb-4">Experience</h2>
				<ul className="list-group list-group-flush bg-transparent">
					<li className="list-group-item bg-transparent text-secondary border-secondary">
						<strong>Senior Software Engineer</strong>-- Nayatel<br />
						<small className="text-primary">Jan 2025 – Present</small><br />
						<span>
							Leading development of full-stack automation solutions for internal operations and customer portals.
							Worked on complex API integrations, backend automation, and user dashboards using NestJS, PostgreSQL, and React.
						</span>
					</li>
					<li className="list-group-item bg-transparent text-secondary border-secondary mt-3">
						<strong>Software Engineer</strong>-- Nayatel<br />
						<small className="text-primary">Feb 2024 – Jan 2025</small><br />
						<span>
  Managed and implemented Swagger for API documentation, ensuring clear and standardized API usage across teams.
  Coordinated closely with QA engineers to streamline the testing process and enable smooth QA iterations for faster delivery and fewer bugs.
</span>
					</li>
					<li className="list-group-item bg-transparent text-secondary border-secondary mt-3">
						<strong>Junior Software Engineer</strong> -- Nayatel<br />
						<small className="text-primary">April 2023 – Feb 2024</small><br />
						<span>
							Assisted in building frontend components and learned the fundamentals of backend logic,
							database relationships, and deployment workflows.
						</span>
					</li>
				</ul>
			</div>

			{/* CTA Section */}
			<div className="bg-primary bg-opacity-10 border border-primary p-5 rounded text-center mt-5 animate-fade-in">
				<h3 className="text-light">Let’s build something amazing together.</h3>
				<p className="text-secondary">Open to freelance, part-time, and collaborative tech projects.</p>
				<a href="/contact" className="btn btn-outline-light mt-3">Get in Touch</a>
			</div>
		</section>
	);
}
