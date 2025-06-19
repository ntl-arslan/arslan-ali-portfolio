import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-black border-bottom border-secondary sticky-top">
      <nav className="container py-3 d-flex justify-content-between align-items-center">
        <Link href="/" className="text-decoration-none">
          <h2 className="fw-bold text-light m-0">Arslan.dev</h2>
        </Link>
        <div className="d-flex gap-4">
          <Link href="/" className="text-light text-decoration-none fw-medium">Home</Link>
          <Link href="/about" className="text-light text-decoration-none fw-medium">About</Link>
          <Link href="/projects" className="text-light text-decoration-none fw-medium">Projects</Link>
          <Link href="/contact" className="btn btn-outline-light btn-sm">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
