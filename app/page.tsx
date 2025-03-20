import styles from '@/app/ui/home.module.css';
import ParticleBoard from './ui/particle-board';
import SideNav from './ui/navbar';
import IntroComponent from './ui/intro';
import AboutPreview from './ui/aboutpreview';
import TechStack from './ui/techstack';
export default function Page() {
    return (
        <main className="flex min-h-screen flex-col p-6 text-primary-text">
			<IntroComponent />
			<AboutPreview />
			<TechStack />
        </main>
    );
}

