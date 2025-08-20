import React from 'react';
import { Building2, Users, Award, Target, Clock, Handshake } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Target className="h-8 w-8 text-blue-600" />,
      title: "Excelencia",
      description: "Nos comprometemos a ofrecer productos para paleterías de la más alta calidad y frescura."
    },
    {
      icon: <Handshake className="h-8 w-8 text-blue-600" />,
      title: "Confianza",
      description: "Construimos relaciones duraderas con paleterías basadas en la transparencia y honestidad."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: "Colaboración",
      description: "Trabajamos en equipo para lograr el éxito mutuo con nuestras paleterías asociadas."
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-600" />,
      title: "Eficiencia",
      description: "Optimizamos la cadena de frío para brindar productos frescos y de calidad."
    }
  ];

  const stats = [
    { number: "15+", label: "Años de Experiencia" },
    { number: "300+", label: "Paleterías Satisfechas" },
    { number: "4", label: "Proveedores Especializados" },
    { number: "50+", label: "Productos para Helados" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/*<img 
              src="/Logo comercial RUJADO.jpg" 
              alt="Comercial RUJADO" 
              className="h-20 w-20 rounded-full object-cover mx-auto mb-6 shadow-lg"
            />*/}
            <img src={`${import.meta.env.BASE_URL}Logo comercial RUJADO.jpg`} alt="Comercial RUJADO" className="h-20 w-20 rounded-full object-cover mx-auto mb-6 shadow-lg" />
            <h1 className="text-5xl font-bold mb-6">Sobre Comercial RUJADO</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Desde 2009, hemos sido el puente que conecta paleterías con proveedores especializados 
              en la industria del helado, construyendo relaciones comerciales sólidas y duraderas.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
              <div className="space-y-4 text-gray-600">
                <p className="text-lg leading-relaxed">
                  Comercial RUJADO nació de la visión de crear un ecosistema comercial donde paleterías 
                  pudieran obtener productos de diferentes proveedores especializados en el mercado y asi pudieran conectarse de manera eficiente y rapida. 
                  Fundada por Ruben Cabrera en 2015, comenzamos como una pequeña empresa familiar con grandes aspiraciones.
                </p>
                <p className="text-lg leading-relaxed">
                  A lo largo de los años, hemos crecido hasta convertirnos en un referente en la industria del helado, 
                  manteniendo siempre nuestros valores fundamentales de calidad, confianza y excelencia 
                  en el servicio.
                </p>
                <p className="text-lg leading-relaxed">
                  Hoy, orgullosos de haber facilitado miles de transacciones comerciales exitosas, 
                  seguimos comprometidos con nuestro propósito: impulsar el crecimiento de las paleterías 
                  a través de alianzas estratégicas con los mejores proveedores de la industria del helado.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1352278/pexels-photo-1352278.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Historia de Comercial RUJADO"
                className="rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent rounded-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Nuestra Misión</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Conectar paleterías con proveedores de excelencia en la industria del helado, facilitando 
                relaciones comerciales que generen valor mutuo y contribuyan al crecimiento sostenible 
                de los negocios en el mercado nacional.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <Award className="h-8 w-8 text-yellow-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Nuestra Visión</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Ser reconocidos como la plataforma comercial líder en México para la industria del helado, 
                donde paleterías y proveedores encuentren las mejores oportunidades de negocio respaldadas 
                por calidad excepcional y servicio personalizado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Valores</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Los principios que guían cada una de nuestras decisiones y acciones en el día a día.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;