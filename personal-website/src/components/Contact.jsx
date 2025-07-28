import React from "react";

const Contact = () => {
    return (
        <section className="container mx-auto px-4 py-20 text-center flex flex-col items-center">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="max-w-2xl text-lg text-slate-400 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <a 
                    href="mailto:alihuchechukwumichael@gmail.com"
                    className="bg-red-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-700 transition-colors"
                >
                    Email Me
                </a>
                <a 
                    href="https://www.linkedin.com/in/uchechukwu-alih/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-transparent border-2 border-slate-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-slate-800 hover:border-slate-800 transition-colors"
                >
                    LinkedIn
                </a>
            </div>
        </section>
    );
};

export default Contact;