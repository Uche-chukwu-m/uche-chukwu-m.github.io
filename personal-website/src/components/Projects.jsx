import React from "react";

const myProjects = [
    { id: 1, title: "News Sentiment Trader", description: "This tracks the stock markets and analyzes sentiments of the day before of some stocks", image: '/src/assets/news-sentiment-trader.png', link: 'https://github.com/Uche-chukwu-m/news-sentiment-trader' },
    { id: 2, title: "Chess with Pygame", description: "This chess game was one of my first exposures to coding. You may have observed that it looks like it was created by a blue-eyed teen. I was the teen then.", image: '/src/assets/chess-pygame.png', link: 'https://github.com/Uche-chukwu-m/chess_project' }
]

const Projects = () => {
    return (
        <section className="projects-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="projects-grid ">
                {myProjects.map(project => (
                    <div key={project.id} className="project-card border border-gray-600 rounded-lg p-4 hover:scale-105 transition-tranform  duration-300">
                        <h3>{project.title}</h3>
                        <img src={project.image} alt={project.title} className="projects-grid " />
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects