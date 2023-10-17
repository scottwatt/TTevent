import React from 'react';
import './Resources.css'; // You can create a CSS file for styling

const ResourcesPage = () => {
    const resources = [
        {
            title: "Resource Title 1",
            description: "Resource description goes here. You can add more details about the resource.",
            link: "link-to-resource-1",
        },
        {
            title: "Resource Title 2",
            description: "Resource description goes here. You can add more details about the resource.",
            link: "link-to-resource-2",
        },
        // Add more resources as needed
    ];

    return (
        <div className="resources-page">
            <header>
                <h1>Resources</h1>
            </header>
            <main>
                {resources.map((resource, index) => (
                    <section className="resource" key={index}>
                        <h2>{resource.title}</h2>
                        <p>{resource.description}</p>
                        <a href={resource.link} target="_blank" rel="noopener noreferrer">Learn More</a>
                    </section>
                ))}
            </main>
            <footer>
                <p>&copy; {new Date().getFullYear()} Your Website</p>
            </footer>
        </div>
    );
};

export default ResourcesPage;
