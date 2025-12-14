import React from "react";
import { Github, Mail, Heart } from 'lucide-react';
import { FaMedium, FaLinkedin } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";

const Footer = () => {
  const socialLinks = [
    { icon: Mail, href: "mailto:93lopez.alejandro@gmail.com", label: "Email" },
    { icon: FaLinkedin, href: "https://linkedin.com/in/alex-lopez-ph-d-291322a8", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/Calotriton", label: "GitHub" },
    { icon: FaGoogleScholar, href: "https://scholar.google.com/citations?user=4PW4KAUAAAAJ&hl=es", label: "Scholar" },
    { icon: FaMedium, href: "https://medium.com/@StatsBio", label: "Medium" },
  ];

  return (
    <footer className="w-full bg-base-100/40 backdrop-blur-xl border-t border-base-content/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="p-8">

          <div className="flex flex-col md:flex-row justify-between gap-8 pb-6 border-b border-base-content/5">

            <div className="space-y-3">
              <h3 className="text-2xl font-bold">Àlex López, Ph.D.</h3>
              <p className="text-base-content/70 font-medium">
                Interdisciplinary ecologist (Ph.D.) and Data Scientist (M.Sc.)
              </p>
              <p className="text-sm text-base-content/60 leading-relaxed max-w-md">
                Working at the intersection of biodiversity, data analysis, statistical modelling, and machine learning.
              </p>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : "_blank"}
                  rel={social.href.startsWith('mailto') ? undefined : "noopener noreferrer"}
                  className="btn btn-sm btn-soft hover:bg-primary/10 hover:text-primary"
                  aria-label={social.label}
                  title={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-3 pt-6 text-sm">
            <p className="text-base-content/50">
              © {new Date().getFullYear()} Lucía Ordoñez Vilanova. All rights reserved.
            </p>

            <p className="text-base-content/60 flex items-center gap-2">
              <span className="text-base-content/50">Made with</span>
              <Heart className="w-4 h-4 text-rose-500 animate-pulse" />
              <span className="text-base-content/50">by</span>
              <a
                href="https://www.linkedin.com/in/Luovtyrell/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-rose-500 hover:text-rose-400 transition-colors"
              >
                Lucía Ordoñez Vilanova
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;