import React from "react";

const AboutUs = () => {
  return (
    <div class="bg-white py-6 sm:py-8 lg:py-12">
      <div class="mx-auto max-w-screen-xl px-4 md:px-8">
        <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
          <div>
            <div class="h-64 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-auto">
              <img
                src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
                loading="lazy"
                alt="Photo by Martin Sanchez"
                class="h-full w-full object-cover object-center"
              />
            </div>
          </div>

          <div class="md:pt-8">
            <p class="text-center font-bold text-indigo-500 md:text-left">
              Who we are
            </p>

            <h1 class=" mb-4 text-center text-2xl font-bold text-gray-800 sm:text-3xl md:mb-6 md:text-left">
              About us
            </h1>

            <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
              At OneDigitalExpert, we're passionate about all things digital.
              With several years of experience in web development and digital
              marketing, we've helped countless businesses of all sizes succeed
              online. Our team of talented developers specializes in building
              front end, back end, and full stack websites that are not only
              visually stunning but also highly functional and user-friendly. We
              use cutting-edge technologies and frameworks like Vue.js and
              React.js to deliver custom web solutions that meet your unique
              needs and goals.
            </p>

            <h2 class="mb-2 text-center text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4 md:text-left   ">
              Our competitive advantage
            </h2>

            <p class="mb-6 text-gray-500 sm:text-lg md:mb-8">
              Whether you're a small business just starting out or a large
              enterprise looking to enhance your online presence, we have the
              skills, experience, and passion to help you succeed. Contact us
              today to learn more about our services and see how we can help you
              take your business to the next level.
              <br />
              <br />
              {/* <a
                href="#"
                class="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                random
              </a>{" "} */}
              But we're more than just web developers. We're also digital
              marketing experts who understand the importance of a comprehensive
              online presence. That's why we offer a range of digital marketing
              services, including search engine optimization, social media
              marketing, and email marketing, to help you reach your target
              audience and drive real results for your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
