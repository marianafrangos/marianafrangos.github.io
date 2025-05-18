import Navbar from './Navbar'; // adjust path as needed
import Footer from './Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Resume from "./Resume";
import Hobbies from "./Hobbies";
import Career from "./Career";
import Projects from "./Projects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> {/* This is key */}
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </Router>
  );
}

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen text-black bg-white">
      <Navbar />
      
      <main className="flex-grow px-6 py-12 max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-8">Contact Me</h1>

        {/* Contact Info */}
        <div className="mb-10">
          <p className="mb-2">📧 Email: <a href="mailto:marianafrangos@gmail.com" className="underline">youremail@example.com</a></p>
          <p>🔗 LinkedIn: <a href="https://www.linkedin.com/in/mariana-frangos-423876197/" className="underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/yourprofile</a></p>
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              className="w-full border border-gray-300 rounded px-4 py-2"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
          >
            Send
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}

