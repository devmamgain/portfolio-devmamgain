import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-8 h-8 rounded-full bg-[#808080]' />
          <div className='w-1 lg:h-96 h-80 violet-gradient' />       
           </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <br className='sm:block hidden' /> <span className='text-[#808080]'>Dev Mamgain</span>
          </h1>
          <p className={`${styles.heroSubText} mt-10 text-white-100`}>
            Welcome to my portfolio. <br className='sm:block hidden' />
            I am an Engineering student <br className='sm:block hidden' />
            Learning about new technologies <br className='sm:block hidden' />
            and creating some interesting projects<br className='sm:block hidden' />
          </p>
        </div>
      </div>
      <ComputersCanvas/>

      
    </section>
  );
};

export default Hero;
