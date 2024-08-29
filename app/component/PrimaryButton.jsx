import PropTypes from 'prop-types';

const PrimaryButton = ({ text, className = '', width = 'auto' }) => {
  return (
    <button
      className={`bg-gradient-to-b from-[#373737] to-[#000000] text-white 
        text-[15px] font-nunito font-bold py-[12px] px-[25px] lg:px-[50px] md:[50px] rounded-sm 
        shadow-md hover:bg-gray-800 transition duration-300 ease-in-out  whitespace-nowrap
        transform hover:scale-105 w-full sm:w-auto ${className}`}
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
