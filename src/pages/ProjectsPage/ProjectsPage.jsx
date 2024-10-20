import React, { useState } from 'react';
import Projects from './Projects';
import { projects } from './Data';

function ProjectsPage() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        if (currentIndex < projects.length - 3) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const prevProject = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const displayedProjects = projects.slice(currentIndex, currentIndex + 3);

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-800 to-black flex items-center justify-center">
            <div className='container mx-auto py-8 w-full max-w-full bg-opacity-80 text-white p-5 rounded-lg'>
                <h2 className="text-5xl font-bold text-center mb-40">Çalışmalar</h2>
                <div className='flex justify-between items-center mt-40'>
                    <button className='p-2 bg-gray-800 text-white rounded-full mx-2' onClick={prevProject}>
                        ‹
                    </button>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {displayedProjects.map((project) => (
                            <Projects key={project.id} project={project} />
                        ))}
                    </div>
                    <button className='p-2 bg-gray-800 text-white rounded-full mx-2' onClick={nextProject}>
                        ›
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProjectsPage;