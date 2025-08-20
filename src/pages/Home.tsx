import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Award, Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import { providers } from '../data/providers';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % providers.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + providers.length) % providers.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Proveedores Confiables",
      description: "Trabajamos con los mejores proveedores de la industria del helado para garantizar calidad y frescura."
    },
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      title: "Productos de Calidad",
      description: "Todos nuestros productos para paleterías pasan por rigurosos controles de calidad y frescura."
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Alcance Nacional",
      description: "Distribución nacional especializada en productos para la industria del helado y paletas."
    }
  ];

  const benefits = [
    "Más de 15 años de experiencia en la industria del helado",
    "Red de proveedores especializados en productos para paleterías",
    "Asesoramiento personalizado para tu paletería o heladería",
    "Precios competitivos y condiciones flexibles de pago",
    "Soporte técnico especializado en productos para helados"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight flex flex-col items-center">
              <span className="text-white mb-4">Bienvenido a</span>
              <img 
                src="/Logo comercial RUJADO.jpg" 
                alt="Comercial RUJADO" 
                className="h-32 w-32 md:h-40 md:w-40 rounded-full object-cover shadow-2xl border-4 border-white"
              />
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Tu socio estratégico en productos para paleterías. Conectamos tu negocio con los mejores 
              proveedores de la industria del helado para impulsar tu crecimiento y éxito.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/proveedores"
                className="inline-flex items-center px-8 py-4 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                Ver Proveedores
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/nosotros"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-200"
              >
                Conoce Más
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Providers Carousel */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nuestros Proveedores de Confianza
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trabajamos con las marcas más reconocidas de la industria del helado
            </p>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-xl">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {providers.map((provider, index) => (
                  <div 
                    key={provider.id} 
                    className="w-full flex-shrink-0 cursor-pointer"
                    onClick={() => window.location.href = `/proveedores#${provider.id}`}
                  >
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-12 mx-4 rounded-xl">
                      <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-shrink-0">
                          <img
                            src={provider.logo}
                            alt={provider.name}
                            className="w-32 h-32 object-contain bg-white rounded-lg shadow-lg p-4"
                          />
                        </div>
                        <div className="flex-1 text-center md:text-left">
                          <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            {provider.name}
                          </h3>
                          <p className="text-lg text-gray-700 mb-6">
                            {provider.description}
                          </p>
                          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                            {provider.specialties.map((specialty, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm font-medium"
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 z-10"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-200 z-10"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {providers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir Comercial RUJADO para tu paletería?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos especializamos en conectar paleterías y heladerías con proveedores de clase mundial, 
              ofreciendo productos de la más alta calidad para tu negocio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                Ventajas de trabajar con nosotros
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  to="/contacto"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Contáctanos Ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>

            <div className="lg:pl-8">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                  alt="Productos para paleterías"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            ¿Listo para hacer crecer tu paletería?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Descubre nuestra amplia gama de proveedores y productos especializados 
            para impulsar el éxito de tu paletería o heladería.
          </p>
          <Link
            to="/proveedores"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105 shadow-lg"
          >
            Explorar Proveedores
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;