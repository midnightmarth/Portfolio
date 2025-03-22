'use client'
import { useState, ChangeEvent, FormEvent } from "react";
import { Github, SendHorizonal, Mail, Linkedin } from 'lucide-react';
interface FormData {
    name: string;
    email: string;
    message: string;
}

export default function ContactPage() {
    const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });
        if (res.ok) {
            alert("Message sent successfully!");
            setForm({ name: "", email: "", message: "" });
        } else {
            alert("Failed to send message. Please try again.");
        }
    };
    return (
        <div className="flex items-center justify-center min-h-screen flex-col p-6 mt-40 text-primary-text">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold">Let's Get in Touch</h1>
                <p className="text-[#B0B0B0] mt-3">
                    Have a question, opportunity, project, or just want to connect? Feel free to reach out!
                </p>

                <div className="flex space-x-6 justify-center mt-6 text-2xl">
                    <a href="mailto:stephenmyers.dev@gmail.com" className="hover:text-[#E67E22] transition">
                        <Mail />
                    </a>
                    <a href="https://github.com/midnightmarth" className="hover:text-[#E67E22] transition">
                        <Github />
                    </a>
                    <a href="https://www.linkedin.com/in/midnightmarth" className="hover:text-[#E67E22] transition">
                        <Linkedin />
                    </a>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-[#1E1E1E] p-6 rounded-lg w-full max-w-lg shadow-lg">
                <label className="block text-lg font-medium">Name</label>
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full p-3 mt-1 bg-[#121212] text-[#E0E0E0] border border-[#292929] rounded-md focus:border-[#E67E22] outline-none transition"
                />

                <label className="block text-lg font-medium mt-4">Email</label>
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full p-3 mt-1 bg-[#121212] text-[#E0E0E0] border border-[#292929] rounded-md focus:border-[#E67E22] outline-none transition"
                />

                <label className="block text-lg font-medium mt-4">Message</label>
                <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full p-3 mt-1 bg-[#121212] text-[#E0E0E0] border border-[#292929] rounded-md focus:border-[#E67E22] outline-none transition resize-none"
                ></textarea>

                <button
                    type="submit"
                    className="w-full h-10 flex items-center justify-center mt-6 py-3 bg-[#E67E22] text-[#121212] rounded-lg text-lg font-medium hover:bg-[#F39C12] transition"
                >
                    Send Message <SendHorizonal height={"1.50rem"} className="ml-2" />
                </button>
            </form>
        </div>
    );
}