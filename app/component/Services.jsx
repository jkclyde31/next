import React from 'react';
import { Builder } from '@builder.io/react';

const ServicesComponent = (props) => {
  const { 
    services = [],
    serviceTitleFontSize = 'xl',
    serviceTitleFontFamily = 'sans',
    descriptionFontSize = 'base',
    descriptionFontFamily = 'sans',
    tagFontSize = 'sm',
    tagFontFamily = 'sans',
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
            <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
              {service.image && (
                <div className="relative h-48">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className={`font-semibold mb-2 ${fontSizes[serviceTitleFontSize]} ${fontFamilies[serviceTitleFontFamily]}`}>
                  {service.title}
                </h3>
                <p className={`text-gray-600 mb-4 ${fontSizes[descriptionFontSize]} ${fontFamilies[descriptionFontFamily]}`}>
                  {service.description}
                </p>
               
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