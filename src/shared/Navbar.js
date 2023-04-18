import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header class="mb-8 border-b">
        <div class="mx-auto flex max-w-screen-2xl items-center justify-between px-4 md:px-8">
          <a
            href="/"
            class="text-black-800 inline-flex items-center gap-1 text-xl font-bold md:text-3xl "
            aria-label="logo"
          >
            <svg
              width="55"
              height="54"
              viewBox="0 0 57 130"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 124V101H29.5M53 124V101H29.5M29.5 101V129.5"
                stroke="#130202"
                stroke-width="7"
              />
              <circle
                cx="29.5"
                cy="26.5"
                r="22"
                stroke="black"
                stroke-width="9"
              />
              <circle cx="30" cy="26" r="5" fill="#140000" />
              <path
                d="M22.0003 92H4.00069C4.00069 92 3.50027 58.5 29.5003 58.5C55.5003 58.5 53.0003 92 53.0003 92H35.0003"
                stroke="#130202"
                stroke-width="7"
              />
            </svg>
            One <span className="text-blue-400">Digital </span> Expert
          </a>

          <nav class="hidden gap-12 lg:flex 2xl:ml-16">
            <NavLink to="/" class="text-lg font-semibold text-indigo-500">
              Home
            </NavLink>
            <NavLink
              to="/about"
              class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
            >
              Contact
            </NavLink>
          </nav>

          <div class="flex divide-x border-r sm:border-l">
            <a
              href="#"
              class="hidden h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:flex sm:h-20 sm:w-20 md:h-24 md:w-24"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>

              <span class="hidden text-xs font-semibold text-gray-500 sm:block">
                Wishlist
              </span>
            </a>

            <a
              href="#"
              class="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>

              <span class="hidden text-xs font-semibold text-gray-500 sm:block">
                Account
              </span>
            </a>

            <a
              href="#"
              class="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>

              <span class="hidden text-xs font-semibold text-gray-500 sm:block">
                Cart
              </span>
            </a>

            <button
              type="button"
              class="flex h-12 w-12 flex-col items-center justify-center gap-1.5 transition duration-100 hover:bg-gray-100 active:bg-gray-200 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-800"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
              </svg>

              <span class="hidden text-xs font-semibold text-gray-500 sm:block">
                Menu
              </span>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
