import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Instagram } from 'lucide-react';
import WhatsAppIcon from '../components/WhatsAppIcon';

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Teléfono",
      details: ["+52 (618) 170 80-61"],
      color: "text-blue-600"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      details: ["la_rubencabrera@hotmail.com"],
      color: "text-green-600"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Dirección",
      details: ["C. De las Rosas #933 Col. Valle Verde", "Durango, Dgo. México"],
      color: "text-red-600"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horarios",
      details: ["Lun - Vie: 8:00 AM - 4:00 PM", "Sáb: 8:00 AM - 3:00 PM"],
      color: "text-purple-600"
    }
  ];

  const socialMedia = [
    {
      name: "WhatsApp",
      icon: <WhatsAppIcon className="h-8 w-8" />,
      url: "https://wa.me/526181708061",
      color: "bg-green-500 hover:bg-green-600",
      description: "Chatea con nosotros"
    },
    {
      name: "Facebook",
      icon: <Facebook className="h-8 w-8" />,
      url: "https://www.facebook.com/share/19Z2P2VoJf/?mibextid=wwXIfr",
      color: "bg-blue-600 hover:bg-blue-700",
      description: "Síguenos en Facebook"
    },
    {
      name: "Instagram",
      icon: <Instagram className="h-8 w-8" />,
      url: "https://www.instagram.com/comercial.rujado?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      color: "bg-pink-500 hover:bg-pink-600",
      description: "Fotos y novedades"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col items-center mb-6">
            <img 
              src="/Logo comercial RUJADO.jpg" 
              alt="Comercial RUJADO" 
              className="h-24 w-24 rounded-full object-cover shadow-2xl border-4 border-white mb-4"
            />
            <h1 className="text-5xl font-bold">Contáctanos</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Estamos aquí para ayudarte con tu paletería. Ponte en contacto con nosotros y descubre cómo 
            podemos impulsar tu negocio del helado al siguiente nivel.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-100 mb-4 ${info.color}`}>
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Social Media */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Síguenos en Redes Sociales</h2>
              <div className="space-y-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center p-4 rounded-lg text-white transition-all duration-200 transform hover:scale-105 ${social.color}`}
                  >
                    {social.icon}
                    <div className="ml-4">
                      <h3 className="font-semibold">{social.name}</h3>
                      <p className="text-sm opacity-90">{social.description}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Map & Additional Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Map Placeholder */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-80 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-500 mx-auto mb-2" />
                    <p className="text-gray-600 font-medium">Mapa de Ubicación</p>
                    <p className="text-sm text-gray-500">C. De las Rosas #933 Col. Valle Verde, Durango</p>
                  </div>
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">¿Por qué contactarnos?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Asesoramiento personalizado para tu paletería</span>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Cotizaciones competitivas en productos para helados</span>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Respuesta rápida en menos de 24 horas</span>
                  </div>
                  <div className="flex items-start">
                    <MessageCircle className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">Soporte técnico especializado en productos para paleterías</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;