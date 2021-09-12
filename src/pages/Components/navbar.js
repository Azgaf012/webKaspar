import React from "react";

import logo from "../..//images/logoKaspar.png";

const NavBar = () => {
  return (
    <div>
        <nav class="bg-gray-800 bg-opacity-50 p-2 mt-0 fixed w-full z-10 top-0">
        <div class=" max-w-7xl mx-auto flex flex-wrap items-center">
          <div class="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
            <a  class="flex-shrink-0" href="/">
                <img class="h-8" src={logo} alt="KAV" />
                
            </a>
          </div>
          <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
            <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
              <li class="mr-3">
                <a
                  class="inline-block py-2 px-4 text-white no-underline"
                  href="#"
                >
                  Inicio
                </a>
              </li>
              <li class="mr-3">
                <a
                  class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                  href="#"
                >
                  Nosotros
                </a>
              </li>
              <li class="mr-3">
                <a
                  class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                  href="#"
                >
                  Proyectos
                </a>
              </li>
              <li class="mr-3">
                <a
                  class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4"
                  href="#"
                >
                  Servicios
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
  );
};

export default NavBar;
