export default function AboutPage() {
  return (
    <section className="container py-5">
      <h1 className="text-light mb-4 text-center">About Me</h1>

      <div className="row align-items-center">
        {/* Image section */}
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img
            src="/neni.png" // update with your image
            alt="Arslan Ali"
            className="img-fluid rounded-circle border border-3 border-secondary"
            style={{ maxWidth: '250px' }}
          />
        </div>

        {/* Bio section */}
        <div className="col-md-8">
          <p className="text-secondary fs-5">
            Hey! I'm <strong>Arslan Ali</strong>, a passionate Full Stack Developer with a strong focus
            on building clean, efficient, and scalable web applications. I love working with technologies like 
            <strong> React</strong>, <strong>Next.js</strong>, <strong>Node.js</strong>, and <strong>PostgreSQL</strong>.
          </p>
          <p className="text-secondary fs-5">
            I specialize in building dynamic user interfaces and backends that scale. I enjoy solving complex problems 
            and continuously learning new tools and frameworks to improve my craft.
          </p>
          <p className="text-secondary fs-5">
            Outside of coding, you can find me exploring new tech trends, working on side projects, or playing cricket. 🏏
          </p>
        </div>
      </div>
    </section>
  );
}
