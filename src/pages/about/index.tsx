import React, { useContext } from 'react'
import { animated, useSpring } from 'react-spring'
import "./about.css"

export const AboutPage: React.FC<any> = () => {


    //style is defined using useSpring library for animations
    const spr = useSpring(
        { to: { opacity: 1 },
         from: { opacity: 0 },
            delay : 300
        })
    const spr2 = useSpring(
        { to: { opacity: 1 },
         from: { opacity: 0 },
            delay : 600
        })
    const spr3 = useSpring(
        { to: { opacity: 1 },
         from: { opacity: 0 },
            delay : 900
        })

    return (
        <>
        <h1 className='about'>About Page</h1>
        <animated.p style={spr}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, iusto architecto? Nemo, assumenda. Velit nulla aspernatur praesentium itaque eligendi fugit, assumenda ullam possimus error maiores saepe consequatur nostrum, odit accusantium</animated.p>
        <animated.p style={spr2}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, iusto architecto? Nemo, assumenda. Velit nulla aspernatur praesentium itaque eligendi fugit, assumenda ullam possimus error maiores saepe consequatur nostrum, odit accusantium</animated.p>
        <animated.p style={spr3}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, iusto architecto? Nemo, assumenda. Velit nulla aspernatur praesentium itaque eligendi fugit, assumenda ullam possimus error maiores saepe consequatur nostrum, odit accusantium</animated.p>
        </>
    )
}