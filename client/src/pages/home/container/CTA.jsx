import { BsGithub, BsLinkedin } from "react-icons/bs";

const CTA = () => {
  return (
    <>
      <svg
        className="w-full h-auto max-h-40 translate-y-[1px]"
        preserveAspectRatio="none"
        viewBox="0 0 2160 263"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Wave"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z"
          fill="#0D2436"
        />
      </svg>

      <section className="relative bg-dark-hard px-5">
        <div className="container grid grid-cols-12 mx-auto py-10 lg:text-center md:pb-20 lg:place-items-center">
          <div className="col-span-12 mb-4 md:text-lg">
            <p className="text-dark-light  text-lg leading-7 mt-6 md:text-center " style={{ fontSize: "30px", marginBottom: "45px" }}>
              Diğer işlerimize ve bize bu mecralardan da ulaşabilirsiniz.           </p>
          </div>

          <div className="col-span-12 mx-1 my-1 md:my-0   md:col-span-3 ">
            <button className="px-4 py-3 rounded-lg w-full bg-white text-primary hover:text-white hover:bg-primary font-bold flex items-center ">
              <BsGithub className="w-6 h-6" />
              <a
                href="https://github.com/aslinurunver"
                target="_blank"
                rel="noreferrer"
                className="text-center ml-5"
              >
                Aslı Ünver'in Github adresi
              </a>
            </button>
          </div>
          <div className="col-span-12 mx-1 my-1 md:my-0  md:col-span-3">
            <button className="px-4 py-3 rounded-lg w-full  bg-white text-primary hover:text-white hover:bg-primary font-bold flex items-center ">
              <BsGithub className="w-6 h-6" />
              <a
                href="https://github.com/EmilNaghizade"
                target="_blank"
                rel="noreferrer"
                className="text-center ml-5"
              >
                Emil Naghizade'nin Github adresi
              </a>
            </button>
          </div>
          <div className="col-span-12 mx-1 my-1 md:my-0  md:col-span-3">
            <button className="px-4 py-3 rounded-lg w-full bg-white text-primary hover:text-white hover:bg-primary font-bold flex items-center ">
              <BsLinkedin className="w-6 h-6" />
              <a
                href="https://www.linkedin.com/in/asl%C4%B1-nur-%C3%BCnver-8a4948215/"
                target="_blank"
                rel="noreferrer"
                className="text-center ml-5"
              >
                Aslı Ünver'in Linkedin adresi
              </a>
            </button>
          </div>
          <div className="col-span-12 mx-1 my-1 md:my-0 md:col-span-3">
            <button className="px-4 py-3 rounded-lg w-full  bg-white text-primary hover:text-white hover:bg-primary font-bold flex items-center ">
              <BsLinkedin className="w-6 h-6" />
              <a
                href="https://www.linkedin.com/in/nagizade-naghizade-98166521a/"
                target="_blank"
                rel="noreferrer"
                className="text-center ml-5"
              >
                Emil Naghizade'nin Linkedin adresi
              </a>
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default CTA;
