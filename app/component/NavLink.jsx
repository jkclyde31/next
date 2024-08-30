import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, title }) => {
  const pathname = usePathname();
  
  // Function to compare URLs ignoring hash
  const isActiveLink = (currentPath, linkHref) => {
    // Remove hash from both current path and link href
    const currentPathWithoutHash = currentPath.split('#')[0];
    const linkHrefWithoutHash = linkHref.split('#')[0];
    
    return currentPathWithoutHash === linkHrefWithoutHash;
  };

  const isActive = isActiveLink(pathname, href);

  return (
    <Link
      href={href}
      className={`
        block py-2 pl-3 pr-4 text-white tablet:text-[#212121] sm:text-xl rounded tablet:p-0 
        font-rubik relative
        transition-all duration-300 ease-in-out
        hover:text-[#1f1f1f1]
        ${isActive ? 'font-rubik-b' : 'font-rubik'}
      `}
    >
      {title}
      <span className={`
        tablet:absolute bottom-[-20px] left-0 w-full h-1 bg-[#1f1f1f] 
        transform origin-left transition-transform duration-300 ease-in-out
        ${isActive ? 'scale-x-100' : 'scale-x-0'}
      `}></span>
    </Link>
  );
};

export default NavLink;