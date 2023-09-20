import { Link } from "react-router-dom";

import logo from "../../assets/logo-barber.png";
import {
  BiPhone,
  BiMapAlt,
  BiLogoWhatsapp,
  BiLogoInstagram,
  BiLogoFacebook,
  BiLogoTwitter,
} from "react-icons/bi";

export function Footer() {
  return (
    <footer className="text-center tablet:text-left bg-secondary-color tablet:h-[18.75rem] text-white py-6 tablet:py-12 px-4 desktop:px-0 z-50 ">
      <div className="flex flex-col tablet:flex-row justify-between items-center laptop:container mx-auto">
        <div className="flex flex-col gap-2 order-3 tablet:order-1"> {/* 1 */}
          <div className="flex flex-col gap-2">
            <a href="#" className="flex items-center gap-2">
              <BiPhone className="w-8 h-8" />
              <span className="font-chivo text-lg">+55 (19) 99999-9999</span>
            </a>
            <a href="#" className="flex items-start gap-2 max-w-[300px] mt-2">
              <BiMapAlt className="w-8 h-8 min-w-min" />
              <span className="font-chivo text-lg">Rua Alumínio 897, Santa Bárbara d&apos;Oeste, SP</span>
            </a>
          </div>
          <div className="flex justify-between mt-4 max-w-[200px]">
            <a href="#">
              <BiLogoWhatsapp className="w-9 h-9" />
            </a>
            <a href="#">
              <BiLogoInstagram className="w-9 h-9" />
            </a>
            <a href="#">
              <BiLogoFacebook className="w-9 h-9" />
            </a>
            <a href="#">
              <BiLogoTwitter className="w-9 h-9" />
            </a>
          </div>
        </div>
        <div className="order-1 tablet:order-2"> {/* 2 */}
          <img src={logo} alt="Logo barber" className="w-48 shadow-red-600" />
        </div>
        <div className="flex flex-col gap-4 align-top order-2 tablet:order-3 mb-8 tablet:mb-0"> {/* 3 */}
          <div className="font-chivo">
            <nav className="text-xl">
              <ul className="flex flex-col gap-2">
                <li>
                  <Link to="/" className="hover:text-primary-color transition-color duration-500">Home</Link>
                </li>
                <li>
                  <Link to="/galeria" className="hover:text-primary-color transition-color duration-500">Galeria</Link>
                </li>
                <li>
                  <Link to="/sobre" className="hover:text-primary-color transition-color duration-500">Sobre</Link>
                </li>
                <li>
                  <Link to="/agendamento" className="hover:text-primary-color transition-color duration-500">Agendamento</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
