import { Link } from "react-router-dom";

import barber1 from "../../assets/barber1.webp";
import scissors from "../../assets/scissors.svg";

export function Hero() {
  return (
    <>
      <div className="flex-col desktop:flex-row flex justify-between bg-secondary-color max-w-[1280px] mx-auto">
        <div className="py-30 tablet:py-40 w-[100%] desktop:max-w-[50%] bg-barber-hero bg-no-repeat bg-center bg-cover desktop:bg-secondary-color desktop:bg-none  flex flex-col items-center justify-center p-8 desktop:p-0">
          <div className="bg-secondary-color p-20 opacity-90 flex flex-col items-center tablet:items-start desktop:pl-0">
            <img
              src={scissors}
              alt="Tesoura"
              className="mb-8 tablet:mb-2 w-20 h-20 tablet:w-12 tablet:h-12"
            />
            <h1 className="text-center tablet:text-left font-chivo font-bold text-4xl tablet:text-[4rem] leading-none">
              O MELHOR
              <br /> DOS MELHORES
            </h1>
            <h2 className="text-center tablet:text-left text-3xl mt-2 font-chivo">
              Alcance o seu melhor look!
            </h2>
            <button className="bg-primary-color px-12 py-4 rounded mt-4 hover:bg-red-700 hover:text-gray-200 transition-all duration-500">
              <Link to="/agendamento" className="text-xl font-chivo">
                Agendar corte
              </Link>
            </button>
          </div>
        </div>
        <div className="w-[100%] desktop:max-w-[50%] hidden desktop:block">
          <img src={barber1} alt="Corte de cabelo" className="bg-center rounded-3xl"/>
        </div>
      </div>
    </>
  );
}
