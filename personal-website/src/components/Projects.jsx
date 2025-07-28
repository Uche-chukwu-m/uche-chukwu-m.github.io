import React from "react";
import newsSentimentTrader from '../assets/news-sentiment-trader.png'
import chessPygame from '../assets/chess-pygame.png'

const myProjects = [
    { id: 1, title: "News Sentiment Trader", description: "This tracks the stock markets and analyzes sentiments of the day before of some stocks", image: newsSentimentTrader, link: 'https://github.com/Uche-chukwu-m/news-sentiment-trader' },
    { id: 2, title: "Chess with Pygame", description: "This chess game was one of my first exposures to coding. You may have observed that it looks like it was created by a blue-eyed teen. I was the teen then.", image: chessPygame, link: 'https://github.com/Uche-chukwu-m/chess_project' }
]

const Projects = () => {
    return (
        <section className="container mx-auto px-4 py-20">
            <h2 className="text-4xl font-bold text-center mb-12 text-white">My Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {myProjects.map(project => (
                    <div key={project.id} className="bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 hover:scale-105">
                        <img src={project.image} alt={project.title} className="w-full h-56 object-cover" />
                        
                        <div className="p-6">
                            <h3 className="text-2xl font-bold mb-2 text-white">{project.title}</h3>
                            <p className="text-slate-400 mb-4">{project.description}</p>
                            
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="inline-block bg-red-800 text-white font-bold py-2 px-4 rounded hover:bg-red-700 transition-colors"
                            >
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects