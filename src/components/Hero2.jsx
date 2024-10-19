import React, { useState } from "react";

import ToggleSwitch from "../hoc/switch"
import Button from "../hoc/button";
import Card from '../hoc/card';

import { html, reactjs, nodejs } from "../assets/index";
import { styles } from "../styles";
import styled from "styled-components";
import { redCircle, yellowCircle, greenCircle } from "../assets";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";

const Hero2 = () => {
    const [isToggled, setIsToggled] = useState(false);
    const handleToggleChange = (value) => {
        setIsToggled(value);
    }

    return (
        <StyledWrapper>
            <div className="
                    w-full h-screen
                    mx-auto flex 
                    flex-col justify-start 
                    md:justify-center items-center
                    bg-black-000 container2
                   "
            >
                <div className="
                    w-full md:w-full xs:w-full
                    lg:w-auto xl:w-auto
                    xs:h-auto sm:h-auto md:h-auto 
                    lg:rounded-[24px]
                   "
                    style={{ backgroundColor: isToggled ? '#e8e8e8' : '#1e1e1e' }}
                >
                    <nav className="py-7 pb-7 flex flex-row justify-between">
                        <motion.div
                            variants={textVariant()}
                            initial="hidden" // Animasyon başlangıç durumu
                            animate="show"   // Animasyon bitiş durumu
                            className="flex flex-row gap-2 px-7">
                            <img src={redCircle} className="w-5 h-5" />
                            <img src={yellowCircle} className="w-5 h-5" />
                            <img src={greenCircle} className="w-5 h-5" />
                        </motion.div>
                        <motion.div
                            variants={textVariant()}
                            initial="hidden"
                            animate="show"
                            className="flex flex-row gap-2 px-7">
                            <ToggleSwitch onToggle={handleToggleChange} />
                        </motion.div>
                    </nav>
                    <div className="flex md:flex-row justify-between sm:flex-column xs:flex-column">
                        <div className="flex-1 p-7">
                            <motion.div
                                variants={textVariant()}
                                initial="hidden"
                                animate="show"
                                className=""
                            >
                                <p className={styles.sectionSubText}
                                    style={{ color: isToggled ? '#1e1e1e' : '#e8e8e8' }}
                                >
                                    Hoşgeldiniz,
                                </p>
                                <h2 className={styles.sectionHeadText}
                                    style={{ color: isToggled ? '#1e1e1e' : '#e8e8e8' }}
                                >
                                    Hakkımda.
                                </h2>
                            </motion.div>
                            <motion.p
                                variants={fadeIn("", "", 0.5, 1)}
                                initial="hidden" // Animasyon başlangıç durumu
                                animate="show"   // Animasyon bitiş durumu
                                className='text-secondary text-[17px] max-w-xl leading-[30px]'
                                style={{ color: isToggled ? '#1e1e1e' : '#e8e8e8' }}
                            >
                                Ben Yiğit, 20 yaşındayım Turkiye'de Sakarya ilçesinde doğdum.
                                6 yıldır yazılımla uğraşıyorum yazılıma c++ diliyle başladım
                                şu an bir çok yazılım diline hakim olmaya çalışmaktayım ve
                                fazla hobi edinmeye çalışan birisiyim...
                            </motion.p>
                        </div>
                        <div className="flex flex-col flex-1 p-7 justify-between items-center sm:gap-7 xs:gap-7">
                            <div className="flex lg:flex-row gap-7 w-full justify-between xs:flex-col">
                                <div className="flex flex-row gap-7">
                                    <Button Title={'Projelerim'}
                                            isToggle={isToggled} 
                                            Delay={.1}
                                    />
                                    <Button Title={'Yeteneklerim'} 
                                            isToggle={isToggled}
                                            Delay={.2}
                                     />
                                </div>
                                    <Button Title={'Referanslarım'} 
                                            isToggle={isToggled} 
                                            Delay={.3}
                                    />
                            </div>
                            <div className="flex flex-row gap-7 w-full flex-1 justify-between">
                                    <Button Title={'İletişme Geç'} 
                                            isToggle={isToggled} 
                                            Delay={.4}
                                    />
                                    <Button Title={'Tecrübelerim'} 
                                            isToggle={isToggled} 
                                            Delay={.5}
                                    />
                            </div>
                        </div>
                    </div>

                    <div className="p-7 gap-5 flex md:flex-row sm:flex-col justify-between xs:flex-col">
                        <Card Title={'Frontend'}
                            Text={'Html,Css,Javascript,Tailwind,Bootstrap'}
                            Icon={html} isToggle={isToggled}
                            Delay={.2}
                        />
                        <Card Title={'Backend'}
                            Text={'Node.js,Firebase,Supabase,Clerk'}
                            Icon={nodejs} isToggle={isToggled}
                            Delay={.4}
                        />
                        <Card Title={'React'}
                            Text={'Native,Expo'}
                            Icon={reactjs}
                            isToggle={isToggled}
                            Delay={.6}
                        />
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
};

const StyledWrapper = styled.div`
  .container2 {
    background-color: #0e0e0e;
    background-image: radial-gradient(rgba(255, 255, 255, 0.171) 2px, transparent 0);
    background-size: 30px 30px;
    background-position: -5px -5px
}
`;
export default Hero2;
