import React from 'react';
import { Builder } from '@builder.io/react';

const GalleryComponent = ({ images, columns, gap, rounded }) => {
  // Provide default values for props
  const safeImages = images || [];
  const safeColumns = columns || 1;
  const safeGap = gap || 4;
  const safeRounded = rounded || false;

  return (
    <div 
      className={`grid grid-cols-1 ${
        safeColumns === 2 ? 'sm:grid-cols-2' : 
        safeColumns === 3 ? 'sm:grid-cols-2 md:grid-cols-3' : 
        safeColumns === 4 ? 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : ''
      } gap-${safeGap}`}
    >
      {safeImages.map((image, index) => (
        <div key={index} className={`overflow-hidden ${safeRounded ? 'rounded-lg' : ''} shadow-lg transition-transform duration-300 hover:scale-105 mx-auto`}>
          <img 
            src={image.src || ''} 
            alt={image.alt || ''}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};


export default GalleryComponent;