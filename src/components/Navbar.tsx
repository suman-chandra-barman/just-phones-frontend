import Link from "next/link";
import { FaRegUserCircle, FaHeart } from "react-icons/fa";
import { MdOutlineViewHeadline } from "react-icons/md";

const Navbar = () => {
    return(
        <nav className="bg-base-100 shadow-sm">
            <div className="navbar container mx-auto text-[#1a2c32]">
                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <MdOutlineViewHeadline  size={25}/>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='/'>Phones</Link>
                        </li>
                        <li>
                            <Link href='/'>About</Link>
                        </li>
                    </ul>
                    </div>
                    <Link href="/" className="text-xl text-[#ff4c11] font-mono font-bold flex items-center gap-2">
                        <img src="/phonora_logo.png" alt="Phonora Logo" className="h-10 w-auto" />
                    </Link>
                </div>
            
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg">
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='/phones'>Phones</Link>
                        </li>
                        <li>
                            <Link href='/about'>About</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <button>
                        <Link href='/login' className="flex flex-col items-center align-middle">
                            <FaHeart />
                            <span className="hidden md:inline">Wishlist</span>
                        </Link>
                    </button>
                    <button>
                        <Link href='/login' className="flex flex-col items-center align-middle">
                            <FaRegUserCircle />
                            <span className="hidden md:inline">Login</span>
                        </Link>
                    </button>
                    <button className="btn btn-lg bg-[#ff4c11] text-white">
                        <Link href='/cart'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l1.4-7H6.6L7 13zM16 19a2 2 0 11-4 0 2 2 0 014 0zm-8 0a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </Link>
                        <span className="badge badge-sm">0</span>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;