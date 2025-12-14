import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300/30 text-base-content p-4 backdrop-blur-lg border border-base-300/30">
      <aside>
        <p>© {new Date().getFullYear()} / made by <a href="https://www.linkedin.com/in//Luovtyrell/" className="text-rose-600 link link-hover">Lucía Ordoñez Vilanova</a></p>
      </aside>
    </footer>

  );
};

export default Footer;