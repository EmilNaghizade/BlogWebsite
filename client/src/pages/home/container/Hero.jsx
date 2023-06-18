import Search from "../../../components/Search";

import { images } from "../../../constants";

const Hero = () => {
  return (
    <section className="container ms-auto flex flex-col px-5 py-5 lg:flex-row">
      <div className="mt-10 lg:w-1/2">
        <h1 className="font-rubik text-3xl text-center font-bold text-dark-soft md:text-5xl lg:text-4xl xl:text-5xl lg:text-left lg:max-w-[540px]">
          En ilginç makaleleri okuyun.
        </h1>
        <p className="text-dark-light mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left">
          Keşfetmek, öğrenmek ve ilham almak için mükemmel bir yer arıyorsanız, doğru adrestesiniz!
          Hoş geldiniz!
          Burada, hayatın her alanına dair bilgilendirici, eğlenceli ve ilgi çekici makaleler bulacaksınız.
        </p>
        <div className="flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative">
          <Search />
        </div>
        <div className="flex mt-4 flex-col lg:flex-row  lg:flex-nowrap lg:gap-x-4 lg:mt-7">
          <span className="text-dark-light font-semibold italic mt-2 lg:mt-4 lg:text-sm xl:text-base">
            Popüler Etiketler:
          </span>
          <ul className="flex flex-wrap gap-x-2.5 gap-y-2.5 mt-3 lg:text-sm xl:text-base">
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Dizayn
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Kullanıcı Deneyimi
            </li>
            <li className="rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold">
              Kullanıcı Arayüzü
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden lg:block lg:1/2">
        <img
          className="w-full ml-7 mt-7"
          src={images.HeroImage2}
          alt="users are reading articles"
        />
      </div>
    </section>
  );
};
export default Hero;
