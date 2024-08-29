import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const GalleryComponent = ({ images, columns, gap, rounded }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);
  
  // Provide default values for props
  const safeImages = images || [];
  const safeColumns = columns || 1;
  const safeGap = gap || 4;
  const safeRounded = rounded || false;

  // Determine images per page based on screen size
  const getImagesPerPage = () => {
    if (windowWidth >= 1024) return 3;
    if (windowWidth >= 768) return 3;
    return 3;
  };

  const imagesPerPage = getImagesPerPage();
  const totalPages = Math.ceil(safeImages.length / imagesPerPage);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const paginatedImages = safeImages.slice(
    (currentPage - 1) * imagesPerPage,
    currentPage * imagesPerPage
  );

  if (safeImages.length === 0) {
    return <div className="text-center py-8">No images available</div>;
  }

  return (
    <div>
      <div 
        className={`grid grid-cols-1 ${
          safeColumns === 2 ? 'sm:grid-cols-2' : 
          safeColumns === 3 ? 'sm:grid-cols-2 md:grid-cols-3' : 
          safeColumns === 4 ? 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' : ''
        } gap-${safeGap}`}
      >
        {paginatedImages.map((image, index) => (
          <div key={index} className={`overflow-hidden ${safeRounded ? 'rounded-lg' : ''} shadow-lg transition-transform duration-300 hover:scale-105 mx-auto`}>
            <img 
              src={image.src || ''} 
              alt={image.alt || ''}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-4 space-x-2">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-full bg-gray-200 disabled:opacity-50"
          >
            <ChevronLeft size={24} />
          </button>
          <span>{currentPage} / {totalPages}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-full bg-gray-200 disabled:opacity-50"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default GalleryComponent;