import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const GalleryComponent = ({ images, columns, gap, rounded }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [viewingImage, setViewingImage] = useState(null);
  
  // Provide default values for props
  const safeImages = images || [];
  const safeColumns = columns || 1;
  const safeGap = gap || 4;
  const safeRounded = rounded || false;

  const imagesPerPage = 3;
  const totalPages = Math.ceil(safeImages.length / imagesPerPage);

  const startIndex = (currentPage - 1) * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = safeImages.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <div className="relative">
      {safeImages.length === 0 ? (
        <div className="text-center py-8 text-gray-500">No images available</div>
      ) : (
        <>
          <div 
            className={`grid grid-cols-1 ${
              safeColumns === 2 ? 'sm:grid-cols-2' : 
              safeColumns === 3 ? 'sm:grid-cols-2 md:grid-cols-3' : 
              safeColumns === 4 ? 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : ''
            } gap-${safeGap}`}
          >
            {currentImages.map((image, index) => (
              <div 
                key={startIndex + index} 
                className={`overflow-hidden ${safeRounded ? 'rounded-lg' : ''} shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer`}
                onClick={() => setViewingImage(image)}
              >
                <img 
                  src={image.src || ''} 
                  alt={image.alt || ''}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          {totalPages > 1 && (
            <div className="flex justify-center items-center mt-4 space-x-4">
              <button 
                onClick={handlePrevPage} 
                disabled={currentPage === 1}
                className="p-2 bg-gray-200 rounded-full disabled:opacity-50 transition-opacity duration-300"
              >
                <ChevronLeft size={24} />
              </button>
              <span>{currentPage} / {totalPages}</span>
              <button 
                onClick={handleNextPage} 
                disabled={currentPage === totalPages}
                className="p-2 bg-gray-200 rounded-full disabled:opacity-50 transition-opacity duration-300"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </>
      )}
      {viewingImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={viewingImage.src} 
              alt={viewingImage.alt} 
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button 
              onClick={() => setViewingImage(null)}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 transition-colors duration-300 hover:bg-opacity-75"
            >
              <X size={24} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};



export default GalleryComponent;