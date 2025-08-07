import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" }
  ];

  const footerLinks = {
    producto: [
      { name: "Simulador", href: "#simulator" },
      { name: "Comparador", href: "#" },
      { name: "Calculadora", href: "#" },
      { name: "Precios", href: "#pricing" }
    ],
    empresa: [
      { name: "Sobre nosotros", href: "#" },
      { name: "Equipo", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Blog", href: "#" }
    ],
    legal: [
      { name: "Política de Privacidad", href: "#" },
      { name: "Términos de Uso", href: "#" },
      { name: "Cookies", href: "#" },
      { name: "Aviso Legal", href: "#" }
    ],
    soporte: [
      { name: "Centro de Ayuda", href: "#" },
      { name: "Contacto", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Estado del Sistema", href: "#" }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-xl">H</span>
                </div>
                <span className="text-2xl font-bold">Hipoteca 4.0</span>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                La plataforma más avanzada para encontrar tu hipoteca ideal. 
                Tecnología al servicio de tu futuro hogar.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center text-gray-400">
                  <Mail className="w-5 h-5 mr-3" />
                  <span>contacto@hipoteca40.com</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <Phone className="w-5 h-5 mr-3" />
                  <span>+34 900 123 456</span>
                </div>
                <div className="flex items-center text-gray-400">
                  <MapPin className="w-5 h-5 mr-3" />
                  <span>Madrid, España</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition-all duration-300 group"
                    >
                      <Icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Links Sections */}
            <div className="lg:col-span-3">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-6">Producto</h3>
                  <ul className="space-y-3">
                    {footerLinks.producto.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors duration-300"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-6">Empresa</h3>
                  <ul className="space-y-3">
                    {footerLinks.empresa.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors duration-300"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-6">Legal</h3>
                  <ul className="space-y-3">
                    {footerLinks.legal.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors duration-300"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-6">Soporte</h3>
                  <ul className="space-y-3">
                    {footerLinks.soporte.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors duration-300"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Hipoteca 4.0. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Política de Cookies
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacidad
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;