import { BiBadgeCheck } from "react-icons/bi";

import barber2 from '../../assets/barber2.webp';

export function SAbout() {
  return (
    <>
      <div className="flex-col items-center desktop:flex-row flex justify-between max-w-[1280px] mx-auto py-10 desktop:py-20">
        <div className="flex justify-around w-full">
          <div className="hidden desktop:block before:flex before:h-full before:bg-primary-color before:w-[2px] before:rounded-full pr-12">
          </div>
          <div className="overflow-hidden shadow-2xl mb-24 desktop:mb-0 mx-4 desktop:mx-0">
            <img src={barber2} alt="Imagem barber" className="rounded hover:scale-105 transition-all duration-500 ease-in-out"/>
          </div>
        </div>
        <div className="w-[100%] max-w-[80%] desktop:max-w-[50%]">
          <ul className="font-chivo text-lg flex flex-col gap-8 text-black">
            <li className="flex gap-4 items-start">
              <div className="flex">
                <BiBadgeCheck className="w-12 h-12 text-primary-color" />
              </div>
              <span>
                <strong>Experiência Profissional: </strong>Nossa barbearia
                possui uma equipe de barbeiros altamente qualificados e
                experientes. Cada membro da equipe tem anos de experiência no
                corte e no cuidado com cabelos e barbas, garantindo que você
                receba um serviço de alta qualidade.
              </span>
            </li>
            <li className="flex gap-4 items-start">
              <div className="flex">
                <BiBadgeCheck className="w-12 h-12 text-primary-color" />
              </div>
              <span>
                <strong>Atendimento Personalizado: </strong>Valorizamos cada cliente e buscamos oferecer um atendimento personalizado. Ao escolher nossa barbearia, você receberá um serviço que atende às suas necessidades e desejos individuais, garantindo que você saia satisfeito.
              </span>
            </li>
            <li className="flex gap-4 items-start">
              <div className="flex">
                <BiBadgeCheck className="w-12 h-12 text-primary-color" />
              </div>
              <span>
                <strong>Ambiente Acolhedor: </strong>Criamos um ambiente acolhedor e descontraído em nossa barbearia. Queremos que você se sinta à vontade e relaxado enquanto desfruta de nossos serviços. A música agradável, a decoração aconchegante e o clima amigável tornam a sua visita mais agradável.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
