
import React from 'react';
function About() {
  return (
    <section class="bg-gray-100 text-gray-800">
      <div class="px-4 mx-auto max-w-screen-xl lg:py-10 lg:px-6">
        <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">About Us</h2>
          <p class="mb-4 font-light">Our mission is to connect Pharmacy Aides across the country on a single platform, and to provide with the necessary resources and guidance to help transition from Pharmacy aides to registered pharmacists.</p>
          <a href="#" class="inline-flex items-center font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700">
            Learn more
            <svg class="ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
