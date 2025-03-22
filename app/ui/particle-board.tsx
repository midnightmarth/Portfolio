'use client'
import { useEffect, useRef } from "react";
import Particle from "../lib/particle";
import styles from '@/app/ui/home.module.css';

export default function ParticleBoard({ toggle }: {toggle: boolean}) {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const particlesInitialized = useRef(false);
    const mousePosRef = useRef({ x: 0, y: 0 });
    const particles: Particle[] = [];

    useEffect(() => {
        if (particlesInitialized.current) return;
        particlesInitialized.current = true;

        if (!toggle) return;

        const canvas = canvasRef.current;
        if (!canvas) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', (event) => {
            mousePosRef.current = { x: event.clientX, y: event.clientY };
        });

        for (let i = 0; i < 150; i++) {
            const particle = new Particle(i, 8, 'white', 3, 0.75, canvas);
            particles.push(particle);
        }

        const animate = () => {
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(particle => {
                particle.update(mousePosRef.current);
                const neighbors = particle.findCloseNeighbors(particles);
                particle.drawLineToNeighbors(neighbors);
            });
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', (event) => {
                mousePosRef.current = { x: event.clientX, y: event.clientY };
            });
        };
    }, [toggle]);

    if (!toggle) {
        return null;
    }

    return (
        <div className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none">
            <canvas  ref={canvasRef}></canvas>
        </div>
    );
}