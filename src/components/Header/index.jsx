import { Link } from "react-router-dom";
import { Offcanvas, initTE } from "tw-elements";

import logo from "../../assets/logo-barber.png";
import { HiBars4, HiXMark } from "react-icons/hi2";

export function Header() {
  initTE({ Offcanvas });

  return (
    <header className="mobile:h-22 tablet:h-24 bg-secondary-color">
      <div className="mx-auto px-4 flex justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Logo barber" className="w-16 tablet:w-24" />
          <span className="text-white text-3xl tablet:text-5xl font-lobster whitespace-nowrap">
            Barber Shop
          </span>
        </div>
        <nav className="hidden tablet:flex text-white items-center">
          <ul className="flex text-lg laptop:text-xl items-center">
            <li className="mr-2 hover:text-red-200 transition-all">
              <Link to="/">Home</Link>
            </li>
            <li className="ml-2 mr-2 hover:text-red-200 transition-all">
              <Link to="/galeria">Galeria</Link>
            </li>
            <li className="ml-2 mr-2 hover:text-red-200 transition-all">
              <Link to="/sobre">Sobre</Link>
            </li>
            <li className="ml-4 hover:text-gray-300 transition-all bg-primary-color p-2 rounded">
              <Link to="/agendamento">Agendamento</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center tablet:hidden">
          <button
            type="button"
            data-te-offcanvas-toggle
            data-te-target="#offCanvas"
            aria-controls="offCanvas"
          >
            <HiBars4 className="w-10 h-10 text-white" />
          </button>
        </div>
      </div>

      <div
        className="invisible fixed bottom-0 right-0 top-0 z-[1045] flex w-96 max-w-full translate-x-full flex-col border-none bg-secondary-color bg-clip-padding text-neutral-700 shadow-sm outline-none transition duration-300 ease-in-out [&[data-te-offcanvas-show]]:transform-none"
        id="offCanvas"
        aria-labelledby="offcanvasLabel"
        data-te-offcanvas-init
      >
        <div className="flex flex-col items-center relative">
          <img src={logo} alt="Logo barber" className="w-56" />
          <ul className="text-white text-2xl flex flex-col items-center gap-8">
            <li className="">
              <Link to="/" data-te-offcanvas-dismiss>
                Home
              </Link>
            </li>
            <li className="" data-te-offcanvas-dismiss>
              <Link to="/galeria">Galeria</Link>
            </li>
            <li className="" data-te-offcanvas-dismiss>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li
              className="ml-4 hover:text-gray-300 transition-all bg-primary-color p-2 rounded"
              data-te-offcanvas-dismiss
            >
              <Link to="/agendamento">Agendamento</Link>
            </li>
          </ul>
          <button className="absolute top-3 left-3" data-te-offcanvas-dismiss>
            <HiXMark className="text-white w-8 h-8" />
          </button>
        </div>
      </div>
    </header>
  );
}
