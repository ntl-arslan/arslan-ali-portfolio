import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticleBackground';


export const metadata = {
  title: 'Arslan.dev – Portfolio',
  description: 'Personal portfolio of Arslan Ali, full-stack developer',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="d-flex flex-column min-vh-100 text-light">
        <ParticlesBackground />
        <Header />
        <main className="flex-grow-1 container py-4">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
