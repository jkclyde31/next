import Link from "next/link";
import { usePathname } from 'next/navigation';

const NavLink = ({ href, title }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link 
      href={href} 
      className={`
        block py-2 pl-3 pr-4 text-black sm:text-xl  md:p-0 
        hover:text-[#FF0000] font-rubik relative pb-[15px]
        ${isActive ? 'border-b-2 border-[#FF0000]' : ''}
      `}
    >
      {title}
    </Link>
  );
};

export default NavLink;