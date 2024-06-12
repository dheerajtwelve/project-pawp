import React from 'react';
function Organisation() {
    return (
        <section class="bg-white dark:bg-gray-900">
            <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                <div class="mr-auto place-self-center lg:col-span-7">
                    <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-4xl xl:text-5xl">Why this Organisation?</h1>
                <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">As a Health Care Employee committed to investing in the evolving future of pharmacy, working in the retail sector to gain a qualification in pharmacy. These employees are currently working under a registered pharmacist in the retail sector. The additional qualification will help
                    them evolve from the role of dispenser of
                    medicines' to 'medicine expert' in the
                    multidisciplinary health care team</p>
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src="./Images/why.png" alt="mockup" />
            </div>
        </div>
</section >
    );
}

export default Organisation;