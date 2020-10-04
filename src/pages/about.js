import React from 'react'
import Layout from '../templates/layout'
import SocialBar from '../components/socialBar'
import styled from 'styled-components'
import AboutPic from '../assets/img/cover.jpg'

const AboutStyle = styled.div`
    font-family: 'Lora', 'serif';
    p {
        line-height: 1.5;
    }

    .links {
        width: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .bar {
            width: 18em;
        }
    }

    .pic {
        margin: 0;
        float: left;
        // padding: 0.25em;
        // border: 0.05em solid ${props => props.theme.textColor};
        width: 100%;
        margin-bottom: 2em;
        border-radius: 1em;
        box-shadow: 0px 0px 0.3em black;
    }

    @media (orientation: landscape) {
        font-size: calc(12px + (48 - 16) * ((60vw - 400px) / (4000 - 400)));
        width: 40vw;
    }

    @media (orientation: portrait) {
        font-size: calc(16px + (48 - 16) * ((100vw - 400px) / (4000 - 400)));
        width: 90vw;
    }

    a {
        font-weight: 600;
        text-decoration: none;
        color: ${props => props.theme.textAccent};
    }

    a:hover {
        color: ${props => props.theme.textColor};
    }
`

const About = () => {
    return (
        <Layout>
            <AboutStyle>
                <div id="aboutme">
                    <img className='pic' src={AboutPic} alt='ProfilePic' />
                    <h2 className="ttl">Welcome to my page</h2>
                    <h3 className="des">
                        I am a DeepLearning Scientist by profession, graphics and
                        system developer by soul and RL enthusiast by heart.
                    </h3>
                    <div className="cnt">
                        <p>
                            I’m a Scientist who started as a
                            Software Developer in Microsoft. I started
                            programming from very young age. My early programs
                            are in C++ for DOS and in VB6 for Windows 9x. My
                            early projects on DOS includes my own graphics
                            library for VESA SVGA, a ray-tracing engine, 'wav'
                            music player with visualizations, GUI library and
                            Checkers game with AI.
                        </p>
                        <p>
                            As I started doing mini-projects of my own from
                            2003, I’ve worked on many languages and
                            technologies. I’ve a professional experience in C++,
                            Python, C#, Java and Javascript. However, I’ve also
                            worked in C, Kotlin, Basic, Assembly(x86), Matlab
                            and ActionScript for some of my own projects.
                            Computer graphics and AI are my favorite fields.
                            Sometimes, I code on hackerrank and projecteuler.
                        </p>
                        <p>
                            Apart from computers and maths my hobbies are
                            drawing, cycling, reading, gaming and watching IMDB
                            top rated movies, TV shows and anime. I enjoy music
                            of almost all the genres. Apart from that, I’m
                            interested in painting, playing music and learning
                            new things.
                        </p>
                        <p>
                            This site is created using Gatsby in node-js and
                            deployed using github actions. Check my github
                            repositories for more details.
                        </p>
                    </div>
                </div>
                <div className='links'>
                    <div className='bar'>
                        <SocialBar size="2x" />
                    </div>
                </div>
            </AboutStyle>
        </Layout>
    )
}

export default About
