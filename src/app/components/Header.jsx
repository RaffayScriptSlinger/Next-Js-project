import Link from "next/link";

function Header() {
    return (
        <div>
            <header className="text-gray-600 body-font">
                <div className="container max-w-screen-lg mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">

                    <span className="ml-3 text-xl">Rs <span className="text-indigo-500">community</span></span>

                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/" className="mr-5 hover:text-gray-900">Home</Link>
                        <Link href="/about" className="mr-5 hover:text-gray-900">About</Link>
                        <Link href="/Courses" className="mr-5 hover:text-gray-900"> Courses</Link>
                        <Link href="/Contact" className="mr-5 hover:text-gray-900">Contact Us</Link>
                    </nav>
                    <Link href={"/adminPage"} >
                        <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                            Admin
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                className="w-4 h-4 ml-1"
                                viewBox="0 0 24 24"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </Link>

                </div>
            </header>
        </div>
    );
}

export default Header;
