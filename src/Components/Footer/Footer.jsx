import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <p className="mb-1">&copy; {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados.</p>
        <p className="mb-0">
          <a href="mailto:contacto@misitio.com" className="text-light text-decoration-none me-3">
            contacto@misitio.com
          </a>
          <a href="https://twitter.com/misitio" target="_blank" rel="noreferrer" className="text-light text-decoration-none me-3">
            Twitter
          </a>
          <a href="https://facebook.com/misitio" target="_blank" rel="noreferrer" className="text-light text-decoration-none">
            Facebook
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
