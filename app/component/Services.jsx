import React from 'react';
import { Builder } from '@builder.io/react';

const ServicesComponent = (props) => {
  const { 
    services = [],
    serviceTitleFontSize = 'xl',
    serviceTitleFontFamily = 'sans',
    descriptionFontSize = 'base',
    descriptionFontFamily = 'sans',
    customClasses = ''
  } = props;

  const fontFamilies = {
    sans: 'font-sans',
    serif: 'font-serif',
    mono: 'font-mono'
  };

  const fontSizes = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl'
  };

  const customClassList = customClasses.split(',').map(cls => cls.trim()).join(' ');

  return (
    <div className={`container mx-auto py-1 ${customClassList}`}>
      {services.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden flex flex-col h-full">
              {service.image && (
                <div className="relative h-48">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className={`font-semibold mb-2 ${fontSizes[serviceTitleFontSize]} ${fontFamilies[serviceTitleFontFamily]}`}>
                  {service.title}
                </h3>
                <p className={`text-gray-600 mb-4 flex-grow ${fontSizes[descriptionFontSize]} ${fontFamilies[descriptionFontFamily]}`}>
                  {service.description}
                </p>
                {service.showButton && service.buttonText && (
                  <button 
                    className={`px-4 py-2 rounded ${service.buttonBackgroundClasses} ${service.buttonTextColor} transition-colors duration-300 mt-auto`}
                    onClick={() => {
                      if (service.buttonAction) {
                        try {
                          const action = new Function(service.buttonAction);
                          action();
                        } catch (error) {
                          console.error('Error executing button action:', error);
                        }
                      }
                    }}
                  >
                    {service.buttonText}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No services added yet. Use the Builder.io interface to add services.</p>
      )}
    </div>
  );
};

export default ServicesComponent;