import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { EarthCanvas } from "./canvas";

const ServiceCard = ({ index, title, icon }) => (
  <div className='w-full sm:w-[48%] md:w-[30%] lg:w-[24%]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full rounded-[20px] service-card' // Add a custom class for hover effect
    >
      <div className='bg-tertiary
                      rounded-[20px] 
                      py-5 px-12 
                      min-h-[240px] lg:min-h-[230px]
                      flex justify-evenly items-center flex-col'>
        <img src={icon} alt={title} className='w-16 h-16 object-contain' />
        <h3 className='service-title text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </div>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="flex xs:flex-col md:flex-row justify-between">
          <div>
            <p className={styles.sectionSubText}>Hoşgeldiniz</p>
            <h2 className={styles.sectionHeadText}>Hakkımda.</h2>
          </div>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='text-secondary text-[17px] max-w-xl leading-[30px]'
      >
        Ben Yiğit, 20 yaşındayım Turkiye'de Sakarya ilçesinde doğdum.
        6 yıldır yazılımla uğraşıyorum yazılıma c++ diliyle başladım
        şu an bir çok yazılım diline hakim olmaya çalışmaktayım ve
        fazla hobi edinmeye çalışan birisiyim.
      </motion.p>
      <div className='mt-10 flex flex-wrap justify-between gap-5 lg:gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
