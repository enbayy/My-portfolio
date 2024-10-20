import React, { useState } from 'react';

function Projects({ project }) {
    const { title, description, image } = project;
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative w-100 h-80">
                <img className={`w-full h-full object-cover ${isHovered ? 'blur-sm' : ''}`} src={image} alt={title} />
                {isHovered && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white p-4">
                        {description}
                    </div>
                )}
            </div>
            <h4 className="text-lg font-semibold mt-2 text-center">{title}</h4>
        </div>
    );
}

export default Projects;