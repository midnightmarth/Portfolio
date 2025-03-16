import { clamp } from "./utils";

export default class Particle {
    public x: number;
    public y: number;
    public id: number;
    public opacity: number;
    public maxConnections: number;
    private radius: number;
    private movement: { x: number, y: number };
    private color: string;
    private speed: number;
    private canvas: HTMLCanvasElement;

    public constructor(id: number, radius: number, color: string, maxConnections: number, speed: number, canvas: HTMLCanvasElement) {
        this.id = id;
        this.radius = radius;
        this.color = color;
        this.maxConnections = maxConnections;
        this.speed = speed;
        this.canvas = canvas;
        this.opacity = 1;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.movement = { x: (Math.random() - 0.5) * speed, y: (Math.random() - 0.5) * speed };
    }

    public distance(particle: Particle): number {
        return Math.sqrt((this.x - particle.x) ** 2 + (this.y - particle.y) ** 2);
    }

    public update(mousePos: { x: number, y: number }) {
        this.x += this.movement.x;
        this.y += this.movement.y;

        // Check for collisions with canvas boundaries
        if (this.x - this.radius < 0 || this.x + this.radius > this.canvas.width) {
            this.movement.x = -this.movement.x;
        }
        if (this.y - this.radius < 0 || this.y + this.radius > this.canvas.height) {
            this.movement.y = -this.movement.y;
        }

        this.changeColor(mousePos);
        this.draw();
    }

    private changeColor(mousePos: { x: number, y: number }) {
        const distanceToMouse = Math.sqrt((this.x - mousePos.x) ** 2 + (this.y - mousePos.y) ** 2);
        const maxDistance = Math.sqrt(this.canvas.width ** 2 + this.canvas.height ** 2);
        this.opacity = 1 - (distanceToMouse / maxDistance);
        this.color = `rgba(255, 255, 255, ${this.opacity})`;
    }

    public findCloseNeighbors(particles: Particle[]): Particle[] {
        return particles.filter(particle => {
            return this.distance(particle) < 150 && this.id !== particle.id;
        }).slice(0, this.maxConnections);
    }

    public drawLineToNeighbors(neighbors: Particle[]) {
        const ctx = this.canvas.getContext('2d');
        if (!ctx) return;
        if (this.opacity < 0.15) return;
        ctx.beginPath();
        neighbors.forEach(particle => {
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(particle.x, particle.y);

            const gradient = ctx.createLinearGradient(this.x, this.y, particle.x, particle.y);
            gradient.addColorStop(0, this.color);
            gradient.addColorStop(1, particle.color);
            ctx.strokeStyle = gradient;
        });
        ctx.stroke();
    }

    public draw() {
        const ctx = this.canvas.getContext('2d');
        if (!ctx) return;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.opacity;
        ctx.fill();
    }
}