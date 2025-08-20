import React, { useState } from 'react';
import { providers } from '../data/providers';
import { products } from '../data/products';
import { ExternalLink, Package, ArrowLeft } from 'lucide-react';

const Providers: React.FC = () => {
  const [selectedProvider, setSelectedProvider] = useState<number | null>(null);

  // Check for hash in URL to auto-select provider
  React.useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      const providerId = parseInt(hash);
      if (providerId && providers.find(p => p.id === providerId)) {
        setSelectedProvider(providerId);
      }
    }
  }, []);

  const getProviderProducts = (providerId: number) => {
    return products.filter(product => product.providerId === providerId);
  };

  const selectedProviderData = selectedProvider 
    ? providers.find(p => p.id === selectedProvider)
    : null;

  if (selectedProvider && selectedProviderData) {
    const providerProducts = getProviderProducts(selectedProvider);

    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <button
            onClick={() => setSelectedProvider(null)}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Volver a Proveedores
          </button>

          {/* Provider Header */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/*<img
                src={selectedProviderData.logo}
                alt={selectedProviderData.name}
                className="w-24 h-24 rounded-lg object-cover shadow-md"
              />*/}
              <img
                src={`${import.meta.env.BASE_URL}${selectedProviderData.logo}`}
                alt={selectedProviderData.name}
                className="w-24 h-24 rounded-lg object-cover shadow-md"
              />
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {selectedProviderData.name}
                </h1>
                <p className="text-gray-600 mb-4">
                  {selectedProviderData.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {selectedProviderData.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
                <a
                  href={`https://${selectedProviderData.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  {selectedProviderData.website}
                </a>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Package className="h-6 w-6 mr-2 text-blue-600" />
              Productos Disponibles ({providerProducts.length})
            </h2>

            {providerProducts.length > 0 ? (
              <>
                {selectedProvider === 1 ? (
                  // Campoterra - Organized by categories
                  <div className="space-y-12">
                    {/* Pulpas */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-600 pb-2">
                        Pulpas
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {providerProducts.filter(product => product.category === 'Pulpas').map((product) => (
                          <div
                            key={product.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                          >
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                              <div className="flex items-center justify-between mb-2">
                                <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm font-medium">
                                  {product.category}
                                </span>
                              </div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {product.name}
                              </h3>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {product.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Cajitas */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-green-600 pb-2">
                        Cajitas
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {providerProducts.filter(product => product.category === 'Cajitas').map((product) => (
                          <div
                            key={product.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                          >
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                              <div className="flex items-center justify-between mb-2">
                                <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">
                                  {product.category}
                                </span>
                              </div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {product.name}
                              </h3>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {product.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bolsas */}
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-purple-600 pb-2">
                        Bolsas
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {providerProducts.filter(product => product.category === 'Bolsas').map((product) => (
                          <div
                            key={product.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                          >
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                              <div className="flex items-center justify-between mb-2">
                                <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-sm font-medium">
                                  {product.category}
                                </span>
                              </div>
                              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                {product.name}
                              </h3>
                              <p className="text-gray-600 text-sm leading-relaxed">
                                {product.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  // Other providers - Regular grid layout
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {providerProducts.map((product) => (
                      <div
                        key={product.id}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-2">
                            <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-sm font-medium">
                              {product.category}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">
                            {product.name}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {product.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-12 text-center">
                <Package className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-500 mb-2">
                  No hay productos disponibles
                </h3>
                <p className="text-gray-400">
                  Este proveedor no tiene productos registrados en este momento.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Proveedores
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trabajamos con proveedores de clase mundial para ofrecerte los mejores productos 
            y servicios. Haz clic en cualquier proveedor para ver su catálogo completo.
          </p>
        </div>

        {/* Providers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {providers.map((provider) => {
            const providerProductCount = getProviderProducts(provider.id).length;
            
            return (
              <div
                key={provider.id}
                onClick={() => setSelectedProvider(provider.id)}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
              >
                <div className="relative">
                  <img
                    src={provider.logo}
                    alt={provider.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-2xl font-bold text-white mb-1">
                      {provider.name}
                    </h2>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {provider.description}
                  </p>
                  
                  {/* Specialties */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Especialidades:</h4>
                    <div className="flex flex-wrap gap-2">
                      {provider.specialties.map((specialty, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Product Count */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div className="flex items-center text-gray-500">
                      <Package className="h-4 w-4 mr-1" />
                      <span className="text-sm">
                        {providerProductCount} productos disponibles
                      </span>
                    </div>
                    <div className="flex items-center text-blue-600 font-medium">
                      Ver Productos
                      <ExternalLink className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {providers.length}+
              </div>
              <div className="text-gray-600">Proveedores Verificados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {products.length}+
              </div>
              <div className="text-gray-600">Productos Disponibles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Providers;