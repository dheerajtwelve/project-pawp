import React from 'react';

function Header() {
  return (
    // <header className="bg-white shadow p-4">
    //   <div className="container mx-auto flex justify-between items-center">
    //     <div className="flex items-center">
    //       <img src="path/to/logo.png" alt="PAWA Logo" className="h-8 mr-2" />
    //       <div>
    //         <div className="text-blue-700 font-bold text-xl">PAWA</div>
    //         <div className="text-blue-700 text-sm">Pharmacy Aide Welfare Association</div>
    //       </div>
    //     </div>
    //     <nav className="flex space-x-8">
    //       <ul className="flex space-x-4 text-lg">
    //         <li>
    //           <a href="#home" className="text-gray-600 hover:text-blue-500 transition duration-300">Home</a>
    //         </li>
    //         <li>
    //           <a href="#about" className="text-gray-600 hover:text-blue-500 transition duration-300">About Us</a>
    //         </li>
    //         <li>
    //           <a href="#activities" className="text-gray-600 hover:text-blue-500 transition duration-300">Activities</a>
    //         </li>
    //         <li>
    //           <a href="#resources" className="text-gray-600 hover:text-blue-500 transition duration-300">Resources</a>
    //         </li>
    //         <li>
    //           <a href="#contact" className="text-gray-600 hover:text-blue-500 transition duration-300">Contact Us</a>
    //         </li>
    //       </ul>
    //       <ul className="flex space-x-4 text-lg">
    //         <li>
    //           <a href="#login" className="text-gray-600 hover:text-blue-500 transition duration-300">Log in</a>
    //         </li>
    //         <li>
    //           <a href="#signup" className="text-gray-600 hover:text-blue-500 transition duration-300">Sign up</a>
    //         </li>
    //       </ul>
    //     </nav>
    //   </div>
    // </header>
    <header class="fixed w-full">
        <nav class="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
            <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                <a href="#" class="flex items-center">
                    <img src="./Images/logo.jpg" class="h-10 mr-3 sm:h-9 lg:h-20" alt="Landwind Logo" />
                </a>
                <div class="flex items-center lg:order-2">
                     <a href="#" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Log in</a>
                    <a href="https://themesberg.com/product/tailwind-css/landing-page" class="text-white bg-brand-pawa hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Sign up</a>
                    <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </div>
                <div class="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-brand-pawa bg-purple-700 rounded lg:bg-transparent lg:text-brand-pawa-700 lg:p-0" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-brand-pawa-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About Us</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Activities</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Resources</a>
                        </li>
                        <li>
                            <a href="#" class="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact Us</a>
                        </li>
                        <li>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
  );
}

export default Header;
