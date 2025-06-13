import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./App.css";

const Header = () => (
  <header className="relative w-full h-screen z-50 bg-white/80 backdrop-blur shadow-md flex flex-col justify-center items-center">
    <video autoPlay loop muted className="hero-video">
      <source src="1166309_Woman_Caucasian_3840x2160.mp4" type="video/mp4" />
    </video>

    <div className="z-10 flex flex-col items-center">
      <img src="tv-removebg-preview.png" alt="logo" height="200" className="mb-4" />
      <nav className="grid grid-cols-4 gap-10 text-lg font-medium text-white mb-6">
        <Link to="/" className="hover:text-sky-500">Accueil</Link>
        <Link to="/destinations" className="hover:text-sky-500">Destinations</Link>
        <Link to="/blog" className="hover:text-sky-500">Blog</Link>
        <Link to="/contact" className="hover:text-sky-500">Contact</Link>
      </nav>
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold text-sky-700 mb-4 text-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Bienvenue sur TravelVerse
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-gray-700 max-w-2xl text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Le blog pour les passionnés d'aventures, de paysages à couper le souffle et de cultures du monde entier
      </motion.p>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-gradient-to-tr from-sky-100 to-white border-t mt-16 py-6 text-center text-lg text-sky-600">
    © 2025 TravelVerse • Explore the world, feel the vibes
  </footer>
);

const Home = () => (
  <div className="w-full min-h-screen flex flex-col items-center text-center relative overflow-x-hidden">
    <Header />
    <div className="relative z-10 mt-20 space-y-24 w-full px-4 md:px-10">
      {/* Section 1 */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <img src="https://source.unsplash.com/600x400/?travel,nature" alt="Voyage inspiration" className="rounded-2xl shadow-md w-full" />
        <div>
          <h2 className="text-3xl font-bold text-sky-700 mb-4">Trouvez votre prochaine inspiration</h2>
          <p className="text-gray-700 text-lg">
            Que vous rêviez de plages paradisiaques, de sommets enneigés ou de cités historiques, nous avons ce qu'il vous faut.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-sky-700 mb-4">Une communauté de passionnés</h2>
          <p className="text-gray-700 text-lg">
            Rejoignez une communauté de voyageurs qui partagent leurs expériences, conseils et coups de cœur à travers le monde.
          </p>
        </div>
        <img src="https://source.unsplash.com/600x400/?people,travel" alt="Communauté de voyageurs" className="rounded-2xl shadow-md w-full" />
      </section>

      {/* Section 3 */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <img src="https://source.unsplash.com/600x400/?blog,adventure" alt="Blog de voyage" className="rounded-2xl shadow-md w-full" />
        <div>
          <h2 className="text-3xl font-bold text-sky-700 mb-4">Des récits et astuces de voyage</h2>
          <p className="text-gray-700 text-lg">
            Découvrez nos articles pour préparer vos séjours, éviter les pièges touristiques et vivre des expériences uniques.
          </p>
        </div>
      </section>
    </div>
  </div>
);

const Destinations = () => (
  <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-sky-100 p-10">
    <h2 className="text-4xl font-bold text-center text-sky-700 mb-8">Nos Destinations</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {["Islande", "Vietnam", "Brésil"].map((pays) => (
        <motion.div
          key={pays}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          whileHover={{ scale: 1.05 }}
        >
          <div
            className="h-48 bg-cover bg-center"
            style={{ backgroundImage: `url(https://source.unsplash.com/random/400x300?${pays})` }}
          ></div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-sky-600">{pays}</h3>
            <p className="text-sm text-gray-600 mt-2">Découvrez les merveilles de {pays}.</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const Blog = () => (
  <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-10">
    <Header />
    <h2 className="text-4xl font-bold text-center text-sky-700 mb-8">Blog de voyage</h2>
    <p className="text-center text-gray-600">À venir : récits d'aventures, conseils pratiques et témoignages.</p>
  </div>
);

const Contact = () => (
  <div className="min-h-screen bg-gradient-to-tr from-white to-blue-50 p-10">
    <Header />
    <h2 className="text-4xl font-bold text-center text-sky-700 mb-8">Contactez-nous</h2>
    <p className="text-center text-gray-600">Une question ? Envie de collaborer ? Écrivez-nous !</p>
  </div>
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}
