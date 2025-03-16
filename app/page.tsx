'use client'
import AcmeLogo from '@/recycle/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import ParticleBoard from './ui/particle-board';
import SideNav from './ui/sidenav';
import {useState} from 'react'
import IntroComponent from './ui/intro';
import AboutPreview from './ui/aboutpreview';
import TechStack from './ui/techstack';
export default function Page() {
    let [toggle, setToggle] = useState(true);

    return (
        <main className="flex min-h-screen flex-col p-6 text-primary-text">
			<SideNav />
            <input type="button" className="z-10" onClick={() => {
                console.log("Button Clicked")
                setToggle(!toggle)
            }} value={"Toggle Background "+toggle}/>
            {/* {toggle && <ParticleBoard toggle={toggle}/>} */}
			<IntroComponent />
			<AboutPreview />
			<TechStack />
        </main>
    );
}

