import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, title }) => {
  const pathname = usePathname();

  // Extract pathname from href to ignore hash
  const targetPathname = new URL(href, location.origin).pathname;
  const isActive = pathname === targetPathname;

  return (
    <Link
      href={href}
      className={`relative group block lg:py-0  lg:pr-0 py-2 pl-3 pr-4 text-white lg:text-[#222222] md:text-[#222222] text-[16px]  md:p-0 hover:text-[#111111] transition-colors duration-300 ${isActive ? 'font-rubik-b' : 'font-rubik'}`}
    >
      {title}
      <span
        className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#111111] transition-transform duration-300 ease-in-out transform ${isActive ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100`}
      ></span>
    </Link>
  );
};

export default NavLink;
