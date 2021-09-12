import React from "react";

import NavBar from "./navbar";
import imgHeader from "../../images/HEADER1.jpg"

const Header = () => {
  return (
    <div class="bg-indigo-900   relative overflow-hidden h-screen">
      <img
        src={imgHeader}
        class="absolute h-full w-full object-cover filter brightness-50 blur-sm"
      />
      <div class="inset-0 bg-black opacity-25 absolute"></div>
      <header class="absolute top-0 left-0 right-0 z-20">
          <NavBar/>
      </header>
      <div class="container max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
        <div class="lg:w-1/2 xl:w-1/2 flex flex-col items-start relative z-10">
          <span class="font-bold italic uppercase text-yellow-400">Stefan Kaspar</span>
          <h1 class="font-bold text-lg sm:text-5xl text-white leading-tight mt-4">
          El cine tiene que regresar de donde salió, para que el espectador se identifique y se vea como un espejo de su propia realidad.
           
          </h1>
          {/* <a
            href="#"
            class="block bg-white hover:bg-gray-100 py-3 px-4 rounded-lg text-lg text-gray-800 font-bold uppercase mt-10"
          >
            Discover
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
