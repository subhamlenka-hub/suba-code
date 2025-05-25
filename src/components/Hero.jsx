import "boxicons/css/boxicons.min.css";
import Spline from "@splinetool/react-spline";

const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh=6rem)]">
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0"
      >
        {/* <div className="relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#2042eb] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full">
          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1">
            <i class="bx  bx-diamond-alt"></i>
            INTRODUCING
          </div>
        </div> */}

        <div className="relative w-[95%] sm:w-48 h-10 rounded-full group overflow-hidden shadow-[0_0_15px_rgba(255,255,255,0.4)]">
          <div className="absolute inset-0 rounded-full bg-[linear-gradient(60deg,#2042eb,#656565,#2042eb)] bg-[length:200%_200%] animate-border z-0 blur-[2px] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

          <div className="absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1 text-white z-10 group-hover:shadow-[0_0_15px_#2042eb] transition-all duration-300">
            <i className="bx bx-diamond-alt" />
            INTRODUCING
          </div>
        </div>

        <style jsx>{`
          @keyframes borderTravel {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          .animate-border {
            animation: borderTravel 4s linear infinite;
          }
        `}</style>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wide my-8">
          EMAIL FOR <br />
          DEVELOPERS
        </h1>

        <p className="text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[30rem]">
          AI-Powered Communication, Tailored for Coders Suba is your intelligent <br/>
          assistant that helps you integrate email automation directly into your
          development workflow. No bloat, no noise—just clean, efficient,
          developer-friendly tools.
        </p>

        <div className="flex gap-4 mt-12">
          <a
            className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]"
            href="#"
          >
            Documentation
            <i class="bx bx-link-external ms-2"></i>
          </a>

          <a
            className="border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white"
            href="#"
          >
            Get Started
            <i class="bx bx-link-external ms-2"></i>
          </a>
        </div>
      </div>

      <Spline
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0"
        data-aos-duration="3000"
        className="absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:left-[-2%] h-full"
        scene="https://prod.spline.design/SItb3tfydI-p2FPQ/scene.splinecode"
      />
    </main>
  );
};

export default Hero;
