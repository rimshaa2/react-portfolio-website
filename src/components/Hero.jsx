import profilepicture from "../assets/pp.png";
import { delay, motion } from "framer-motion"

const container =(delay) =>({
    hidden: {x: -100, opacity:0},
    visible: {
        x:0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay},
    },
});
const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start lg:pl-0">
            <motion.h1   
            variants = {container(0)}
            initial= "hidden"
            animate = "visible"
            className="text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Rimsha Sajid
            </ motion.h1>
            <motion.span 
            variants = {container(0.5)}
            initial= "hidden"
            animate = "visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent my-4">
              Front-end Developer
            </motion.span>
            <motion.p 
            variants = {container(1)}
            initial= "hidden"
            animate = "visible"
            className="max-w-xl py-6 font-light tracking-lighter">
              I am currently pursuing a degree in Software Engineering at COMSATS University Islamabad. My experience encompasses a variety of projects developed using C/C++, Java, HTML/CSS, and JavaScript. Additionally, I have utilized Figma to design and develop interactive UI/UX for mobile applications.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:p-8">
          <motion.img 
          initial ={{x: 100, opacity:0}}
          animate ={{x:0, opacity: 1}}
          transition ={{duration:1, delay:1.2}}
          src={profilepicture} alt="Rimsha" className="h-48 w-48 rounded-full lg:h-64 lg:w-64" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

  
  