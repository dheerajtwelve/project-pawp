import React from 'react';
function Main() {
    return (

        <section class="bg-white dark:bg-gray-900">
    <div class="grid max-w-screen-xl px-4 py-18 mx-auto lg:gap-8 xl:gap-0 lg:py-20 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl dark:text-white">Who is a<span class="text-brand-pawa"> Pharmacy Aide?</span></h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">A pharmacy aide assists pharmacists and pharmacy technicians with tasks to help pharmacy operations run smoothly</p>
            
            <a href="#" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-white font-medium text-center rounded-lg bg-brand-pawa hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Enroll Now
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img src="./Images/pharmacist.jpg" alt="mockup" />
        </div>                
    </div>
</section>
    );
}

export default Main;