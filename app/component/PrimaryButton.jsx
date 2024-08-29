import PropTypes from 'prop-types';

const PrimaryButton = ({ text, className = '', width = 'auto' }) => {
  return (
    <button
      className={`
        bg-gradient-to-b from-[#373737] to-[#000000] text-white text-[15px] font-nunito font-bold
        h-[57px] px-[25px] lg:px-[50px] md:px-[50px] rounded-sm shadow-md whitespace-nowrap 
        hover:bg-gray-800 hover:scale-105 transition duration-300 ease-in-out 
        w-full sm:w-auto ${className}`
      }
      style={{ maxWidth: width }}
    >
      {text}
    </button>
  );
};

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.string,
};

export default PrimaryButton;
