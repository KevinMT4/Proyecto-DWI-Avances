import React from 'react';
import { Phone, Mail, MapPin, MessageCircle, Facebook, Instagram } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              {/*<img 
                src="/Logo comercial RUJADO.jpg" 
                alt="Comercial RUJADO" 
                className="h-10 w-10 rounded-full object-cover"
              />*/}
              <img src={`${import.meta.env.BASE_URL}Logo comercial RUJADO.jpg`} alt="Comercial RUJADO" className="h-10 w-10 rounded-full object-cover" />
              <div className="flex flex-col">
                <span className="text-xl font-bold">Comercial RUJADO</span>
                <span className="text-xs text-gray-400">Todo para la industria del helado</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Tu socio confiable en productos para paleterías. Conectamos tu negocio con los mejores proveedores 
              de la industria del helado para impulsar tu crecimiento y éxito.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                +52 (618) 170 80-61
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-white transition-colors">Inicio</a></li>
              <li><a href="/proveedores" className="text-gray-300 hover:text-white transition-colors">Proveedores</a></li>
              <li><a href="/nosotros" className="text-gray-300 hover:text-white transition-colors">Nosotros</a></li>
              <li><a href="/contacto" className="text-gray-300 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto y Redes</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail className="h-4 w-4 mr-2 mt-1 text-blue-400" />
                <span className="text-gray-300 text-sm">la_rubencabrera@hotmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 text-blue-400" />
                <span className="text-gray-300 text-sm">
                  C. De las Rosas #933 Col. Valle Verde<br />
                  Durango, Dgo. México
                </span>
              </div>
              <div className="pt-2">
                <div className="flex space-x-3">
                  <a
                    href="https://wa.me/526181708061"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 transition-colors"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.facebook.com/share/19Z2P2VoJf/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/comercial.rujado?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-400 hover:text-pink-300 transition-colors"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Comercial RUJADO. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;