import React, { useState } from 'react';
import { FaRocket, FaLock, FaUsers, FaRegSmile, FaFacebook, FaTwitter, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaQuoteLeft, FaMoon, FaSun, FaInstagram } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.css';

const company = {
  name: 'TechNova',
  slogan: 'Building the Future with Tech',
  description: 'We help startups and enterprises build fast, scalable, and secure software solutions. From mobile apps to full-stack web platforms, our mission is to turn ideas into impactful products.',
  year: 2025,
};

const services = [
  { icon: <FaRocket />, title: 'Product Development', desc: 'End-to-end web and mobile app development.' },
  { icon: <FaLock />, title: 'Cybersecurity', desc: 'Secure code and infrastructure for peace of mind.' },
  { icon: <FaUsers />, title: 'Team Augmentation', desc: 'Scale your team with our top engineers.' },
  { icon: <FaRegSmile />, title: 'UI/UX Design', desc: 'Modern, user-focused design for all platforms.' },
  { icon: <FaRocket />, title: 'Cloud Solutions', desc: 'Deploy, scale, and manage in the cloud.' },
  { icon: <FaLock />, title: 'Consulting', desc: 'Expert advice for your digital transformation.' },
];

const whyChoose = [
  { icon: <FaRocket />, text: 'Fast Delivery' },
  { icon: <FaLock />, text: 'Secure Code' },
  { icon: <FaUsers />, text: 'Dedicated Team' },
  { icon: <FaRegSmile />, text: 'Great Support' },
];

const testimonials = [
  { name: 'Jane Doe', role: 'CEO, ExampleCorp', text: 'TechNova delivered our project on time and exceeded expectations!', img: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'John Smith', role: 'CTO, StartupX', text: 'Professional, responsive, and highly skilled team.', img: 'https://randomuser.me/api/portraits/men/32.jpg' },
];

function Header({ dark, setDark }) {
  return (
    <header className={`sticky-top shadow-sm ${dark ? 'bg-dark text-light' : 'bg-white text-dark'}`}>  
      <nav className="container-fluid d-flex align-items-center justify-content-between py-3 px-4">
        <span className="fw-bold fs-3" style={{letterSpacing: '1px'}}>{company.name}</span>
        <ul className="d-none d-md-flex gap-4 list-unstyled mb-0 align-items-center">
          <li><a href="#hero" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#services" className="nav-link">Services</a></li>
          <li><a href="#why" className="nav-link">Why Us</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>
        <button onClick={() => setDark(d => !d)} className="btn btn-outline-secondary ms-3" aria-label="Toggle dark mode">
          {dark ? <FaSun /> : <FaMoon />}
        </button>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" className="hero-section d-flex align-items-center justify-content-center text-center position-relative w-100">
      <div className="container-fluid position-relative z-1 py-5 px-4">
        <h1 className="display-4 fw-bold mb-3">{company.slogan}</h1>
        <p className="lead mb-4">{company.description}</p>
        <a href="#contact" className="btn btn-primary btn-lg shadow">Get Started</a>
      </div>
      <div className="hero-bg position-absolute top-0 start-0 w-100 h-100"></div>
    </section>
  );
}

function Clients() {
  return (
    <section className="py-4 bg-light w-100">
      <div className="container-fluid text-center">
        <h2 className="h5 mb-3">Trusted by</h2>
        <div className="d-flex flex-wrap justify-content-center gap-4">
          <span className="display-4 text-primary"><FaTwitter /></span>
          <span className="display-4 text-primary"><FaFacebook /></span>
          <span className="display-4 text-primary"><FaInstagram /></span>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-5 bg-white w-100">
      <div className="container-fluid">
        <h2 className="text-center fw-bold mb-4">About Us</h2>
        <p className="mx-auto text-center mb-4" style={{maxWidth: 600}}>
          TechNova is a forward-thinking company dedicated to delivering top-notch services and innovative solutions. Our vision is to drive success for our clients through expertise, creativity, and commitment.
        </p>
        <div className="row g-4 justify-content-center">
          <div className="col-md-5">
            <div className="card h-100 shadow-sm text-center">
              <div className="card-body">
                <h3 className="h5 fw-semibold mb-2">Vision</h3>
                <p className="mb-0">To empower businesses worldwide with innovative technology and reliable solutions.</p>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card h-100 shadow-sm text-center">
              <div className="card-body">
                <h3 className="h5 fw-semibold mb-2">Mission</h3>
                <p className="mb-0">To deliver high-quality, scalable, and secure products that turn ideas into impactful results.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-5 bg-light w-100">
      <div className="container-fluid">
        <h2 className="text-center fw-bold mb-5">Our Services</h2>
        <div className="row g-4">
          {services.map((s, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-4">
              <div className="card h-100 shadow-sm text-center p-4 service-card">
                <div className="display-5 mb-3 text-primary">{s.icon}</div>
                <h3 className="h6 fw-bold mb-2">{s.title}</h3>
                <p className="mb-0 text-secondary">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section id="why" className="py-5 bg-white w-100">
      <div className="container-fluid">
        <h2 className="text-center fw-bold mb-5">Why Choose Us</h2>
        <div className="row g-4 justify-content-center">
          {whyChoose.map((item, i) => (
            <div key={i} className="col-12 col-md-3">
              <div className="card h-100 shadow-sm text-center p-4 why-card">
                <div className="display-6 mb-2 text-primary">{item.icon}</div>
                <div className="fw-semibold">{item.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-5 bg-light w-100">
      <div className="container-fluid">
        <h2 className="text-center fw-bold mb-5">Testimonials</h2>
        <div className="row g-4 justify-content-center">
          {testimonials.map((t, i) => (
            <div key={i} className="col-12 col-md-5">
              <div className="card h-100 shadow-sm text-center p-4 testimonial-card">
                <FaQuoteLeft className="mb-2 text-accent" style={{fontSize: '1.5rem'}} />
                <p className="mb-3 text-secondary">{t.text}</p>
                <img src={t.img} alt={t.name} className="rounded-circle mb-2 border border-accent" style={{width: 56, height: 56, objectFit: 'cover'}} />
                <div className="fw-bold">{t.name}</div>
                <div className="text-muted small">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-5 bg-white w-100">
      <div className="container-fluid">
        <h2 className="text-center fw-bold mb-5">Contact Us</h2>
        <div className="row g-5 justify-content-center align-items-center">
          <div className="col-12 col-md-5 mb-4 mb-md-0 text-center">
            <div className="mb-3"><FaEnvelope className="me-2 text-primary" /> info@technova.com</div>
            <div className="mb-3"><FaPhone className="me-2 text-primary" /> (123) 456-7890</div>
            <div className="mb-3"><FaMapMarkerAlt className="me-2 text-primary" /> 123 Main St, City, Country</div>
            <div className="d-flex justify-content-center gap-3 mt-3">
              <a href="#" className="text-primary fs-4"><FaFacebook /></a>
              <a href="#" className="text-primary fs-4"><FaTwitter /></a>
              <a href="#" className="text-primary fs-4"><FaLinkedin /></a>
            </div>
          </div>
          <div className="col-12 col-md-7">
            <form className="card p-4 shadow-sm contact-form">
              <div className="mb-3 text-start">
                <label htmlFor="name" className="form-label">Name</label>
                <div className="input-group">
                  <span className="input-group-text"><FaUser /></span>
                  <input id="name" type="text" className="form-control" placeholder="Your Name" required />
                </div>
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="email" className="form-label">Email</label>
                <div className="input-group">
                  <span className="input-group-text"><FaEnvelope /></span>
                  <input id="email" type="email" className="form-control" placeholder="Your Email" required />
                </div>
              </div>
              <div className="mb-3 text-start">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" className="form-control" placeholder="Your Message" required rows={4}></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-4 bg-light text-center mt-auto w-100">
      <div className="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between gap-3">
        <div>© {company.year} {company.name}. All rights reserved.</div>
        <div className="d-flex gap-4">
          <a href="#hero" className="text-decoration-none text-primary">Home</a>
          <a href="#services" className="text-decoration-none text-primary">Services</a>
          <a href="#contact" className="text-decoration-none text-primary">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [dark, setDark] = useState(false);
  React.useEffect(() => {
    document.body.classList.toggle('dark-mode', dark);
  }, [dark]);
  return (
    <div className="app-root min-vh-100 d-flex flex-column w-100" style={{fontFamily: 'Inter, Poppins, sans-serif'}}>
      <Header dark={dark} setDark={setDark} />
      <Hero />
      <Clients />
      <About />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}
