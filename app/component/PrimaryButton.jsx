import PropTypes from 'prop-types';
import Link from "next/link";


const PrimaryButton = ({ text, className = '', width = '266px' , href="#"}) => {
  return (
  <>
    <Link href={href} className={`max-w-[${width}] w-full`}>
      <button
        className={`
          bg-gradient-to-b from-[#373737] to-[#000000] text-white text-[15px] font-nunito font-bold
          h-[57px]   rounded-sm shadow-md whitespace-nowrap 
        
          hover:bg-gray-800 hover:scale-105 transition duration-300 ease-in-out 
          w-full  ${className}    ` 
        }
        // style={{ width }}
      >
        {text}
      </button>
    </Link>
  </>
  );
};

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  width: PropTypes.string,
};

export default PrimaryButton;
