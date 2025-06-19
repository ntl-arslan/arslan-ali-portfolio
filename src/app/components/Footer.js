export default function Footer() {
  return (
    <footer className="bg-black text-white mt-auto py-4 border-top border-secondary">
      <div className="container text-center">
        <p className="mb-2">&copy; {new Date().getFullYear()} Arslan Ali. All rights reserved.</p>
        <div className="d-flex justify-content-center gap-3">
          <a href="https://github.com/arslanneni" target="_blank" className="text-secondary text-decoration-none">GitHub</a>
          <a href="https://linkedin.com/in/arslan-ali-25a606226/" target="_blank" className="text-secondary text-decoration-none">LinkedIn</a>
          <a href="mailto:you@example.com" className="text-secondary text-decoration-none">Email</a>
        </div>
      </div>
    </footer>
  );
}
