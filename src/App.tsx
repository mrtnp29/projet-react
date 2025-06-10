import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./App.css";

const Header = () => (
  <header className="sticky top-0 z-50 bg-white/80 backdrop-blur shadow-md py-4 px-8 flex justify-between items-center">
    <div className="text-3xl font-bold text-sky-600 tracking-wider">
      ✈️ TravelVerse
    </div>
    <nav className="space-x-6 text-md font-medium text-gray-700">
      <Link to="/" className="hover:text-sky-500">Accueil</Link>
      <Link to="/destinations" className="hover:text-sky-500">Destinations</Link>
      <Link to="/blog" className="hover:text-sky-500">Blog</Link>
      <Link to="/contact" className="hover:text-sky-500">Contact</Link>
    </nav>
  </header>
);

const Footer = () => (
  <footer className="bg-gradient-to-tr from-sky-100 to-white border-t mt-16 py-6 text-center text-bubble text-lg text-sky-600">
    © 2025 TravelVerse • Explore the world, feel the vibes 🌴
  </footer>
);

const Home = () => (
  <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-blue-100 flex flex-col items-center justify-center text-center px-6">
    <motion.h1
      className="text-5xl md:text-6xl font-extrabold text-sky-700 mb-6"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Bienvenue sur TravelVerse
    </motion.h1>
    <motion.p
      className="text-lg md:text-xl text-gray-700 max-w-2xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      Le blog 2025 pour les passionnés d'aventures, de paysages à couper le souffle et de cultures du monde entier 🌍
    </motion.p>
  </div>
);

const Destinations = () => (
  <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-sky-100 p-10">
    <h2 className="text-4xl font-bold text-center text-sky-700 mb-8">Nos Destinations</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {["Islande", "Vietnam", "Brésil"].map((pays, i) => (
        <motion.div
          key={pays}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition"
          whileHover={{ scale: 1.05 }}
        >
          <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(https://source.unsplash.com/random/400x300?${pays})` }}></div>
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
    <h2 className="text-4xl font-bold text-center text-sky-700 mb-8">Blog de voyage</h2>
    <p className="text-center text-gray-600">À venir : récits d'aventures, conseils pratiques et témoignages.</p>
  </div>
);

const Contact = () => (
  <div className="min-h-screen bg-gradient-to-tr from-white to-blue-50 p-10">
    <h2 className="text-4xl font-bold text-center text-sky-700 mb-8">Contactez-nous</h2>
    <p className="text-center text-gray-600">Une question ? Envie de collaborer ? Écrivez-nous !</p>
  </div>
);

export default function App() {
  return (
    <Router>
      <Header />
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