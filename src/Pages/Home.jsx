import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Home.css'
import { stylesWithCssVar } from "../utils/motion.ts";
import { motion, useScroll, useTransform } from "framer-motion";
import VideoDiv from './VideoDiv.jsx';


const Home = () => {

  useEffect(() => {

    gsap.to(".block-1", 4, { x: -85, y: -250, scale: 1.8, ease: "expo.inOut" });
    gsap.to(".block-2", 4, { x: 330, y: -250, scale: 1.4, ease: "expo.inOut" });
    gsap.to(".block-3", 4, { x: -500, y: 90, scale: 1.6, ease: "expo.inOut" });
    gsap.to(".block-4", 4, { x: 10, y: 90, scale: 1.2, ease: "expo.inOut" });
    gsap.to('.pstm img', { duration: 0, delay: 0, opacity: 0.06, width: '100%', ease: ".inOut" });
    const text = document.querySelector('.bg-text h1');
    gsap.set(text, { opacity: 0 });
    gsap.to(text, { duration: 1, delay: 3, opacity: 1, ease: 'power2.out', });
  },

    []);





  const myRef = useRef < HTMLDivElement | null > (null);
  const { scrollYProgress } = useScroll({
    offset: ["start end", "end end"],
  });
  const textX = useTransform(scrollYProgress, [0.1, 0.7], ["100%", "-110%"]);
  const opacitySection = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.1, 0.7], [1, 0.7]);

  const opacityBorder = useTransform(
    scrollYProgress,
    [0.7, 0.71, 0.72],
    [1, 1, 0]
  );
  const finalTextOpacity = useTransform(
    scrollYProgress,
    [0.7, 0.71, 0.72, 0.8, 0.9],
    [0, 0, 1, 1, 0]
  );

  const finalTextScale = useTransform(scrollYProgress, [0.8, 0.9], [1, 0.7]);

  const handleClick = () => {
    if (myRef.current) {
      myRef.current.focus();
    }
  };


  return (

    <div className='mt-16 ms-14'>

      <div className='lnd bg-black w-full '>
        <div className="stripes">
          <div className="s-one"></div>
          <div className="s-two"></div>
          <div className="s-three"></div>
        </div>

        <div className='pstm ' >
          <img className='pstm1' src={"https://i.pinimg.com/originals/fc/1f/99/fc1f9962f0e1171f71bf0de9c995556a.png"} alt="" />
        </div>


        <div className="bg-text">
          <h1 className="vdap text-transparent text-9xl font-poppins opacity-30">vidora</h1>
        </div>


        <div className="blocks flex items-center justify-center">
          <div className="block-1 block text-6xl ">Watch</div>
          <div className="block-2 block text-6xl ">Trending</div>
          <div className="block-3 block text-6xl">Videos</div>
          <div className="block-4 block text-6xl ">On</div>
        </div>
      </div>


      {/* 1111111111111111111111111111111111111111111111111111111111111111111111111111 */}


      <div className='shrt'>
        <div className='shrt1'>
          <img className='shrt2' src="https://i.pinimg.com/564x/dc/5d/57/dc5d57a50a53a0414b8892e56315b0ed.jpg" alt="" />
        </div>
        <div className='shrt1'>
          <img className='shrt2' src="https://i.pinimg.com/564x/03/69/53/036953de041ef66cfeda6322640074c1.jpg" alt="" />
        </div>
        <div className='shrt1'>
          <img className='shrt2' src="https://i.pinimg.com/564x/57/45/96/5745967e293744e433b9a3c30fe2ed19.jpg" alt="" />
        </div>
        <div className='shrt1'>
          <img className='shrt2' src="https://i.pinimg.com/564x/4f/3f/6f/4f3f6f921e119ef562346547232109f4.jpg" alt="" />
        </div>
      </div>
      {/* -------------------------------------------------------------------------------------------------------------------------------------------- */}
        <VideoDiv/>
        <motion.section
        style={stylesWithCssVar({
            opacity: opacitySection,
            "--scale": scale,
            "--opacity-border": opacityBorder,
          })}
          className="scroll mt-[50vh]  mb-[-50vh] flex h-[500vh] items-start justify-start"
        >
          <div className="sqr sticky top-1/2 left-1/2 min-h-[30rem] min-w-[30rem] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap before:absolute before:inset-0 before:scale-[var(--scale)] before:border-[2.5rem] before:border-[#0D9FD4] before:opacity-[var(--opacity-border)]">
            <motion.h10
              aria-hidden
              style={{ x: textX, y: "-50%" }}
              className="hd whitepspace-nowrap min-w-screen absolute top-1/2 left-[calc(-50vw+25rem)] text-[13rem] text-heading"
            >
              Streamlined Experience.
            </motion.h10>
            <motion.h10
              aria-hidden
              style={{ x: textX, y: "-50%" }}
              className="hd whitepspace-nowrap min-w-screen absolute top-1/2 left-[calc(-50vw+25rem)] z-[11] text-[13rem] text-transparent [-webkit-text-stroke:1px_var(--color-heading)]"
            >
              Streamlined Experience.
            </motion.h10>

            <motion.h10
              style={{
                opacity: finalTextOpacity,
                scale: finalTextScale,
                y: "-50%",
                x: "-50%",
              }}
              className="hd absolute left-1/2 top-1/2 text-[8.8rem] leading-tight text-white"
            >
              Streamlined
              <br />
              Experience.
            </motion.h10>
            <span className="sqr absolute left-[calc(50%*var(--scale)+50%)] top-0 z-10 h-full w-[50vw] origin-left scale-[var(--scale)] bg-background opacity-[var(--opacity-border)]" />
            <span className="sqr absolute left-[calc(50%*var(--scale)+50%-(2.5rem*var(--scale)))] top-0 z-[12] h-full w-[50vw] origin-left scale-[var(--scale)] border-l-[2.5rem] border-[#0D9FD4] opacity-[var(--opacity-border)]" />
          </div>
        </motion.section>
      {/* --------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
      <VideoDiv/>

      </div>



  )
}

export default Home