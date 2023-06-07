import React from 'react';
import BelleBio from './AboutBelle';
import AntoineBio from './AboutAntoine';
import JustinBio from './AboutJustin';
import AlejandraBio from './AboutAlejandra';
// import { Link } from 'react-router-dom';
import './About.css'
import MainLayout from '../main-layout/MainLayout';

const Belle = BelleBio;
const Antoine = AntoineBio;
const Justin = JustinBio;
const Alejandra = AlejandraBio;

export default function About() {
    return (
        <MainLayout>
            <div className='about'>
                <div className='header'>
                    <h1>About</h1>
                </div>
                <div className='ProjectDescription'>
                    <p><strong>Project Description</strong></p>
                    <p>We created a Youtube clone with use of React & Node.js <br /> This project was bootstrapped with Create React App. We used the Youtube API and React Youtube Package to provide functionality. </p>
                </div>
                <div className='team'>
                    <div className='member1'><Antoine /></div>
                    <div className='member2'><Belle /></div>
                    <div className='member3'><Justin /></div>
                    <div className='member4'><Alejandra /></div>
                </div>
            </div>
        </MainLayout>
    )
}