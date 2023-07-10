import React from 'react';

const Card = ({title, img, description, github, preview_link}) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={`/assets/img/${img}`} alt="Card Background" loading="lazy"/>
            </div>
            <div className="card-overlay">
                <div className="card-details">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
                <div className="card-links">
                    <a href={github} target="_blank" rel="noopener noreferrer">
                        <span>GitHub</span>
                        <img src="/assets/img/github-mark-white.svg" loading="lazy" alt="Button" style={{width: "36px", height: "34px"}}/>
                    </a>
                    <a href={preview_link} target="_blank" rel="noopener noreferrer">
                        <span>Preview</span>
                        <img src="/assets/images/icon.svg" alt="Button" loading="lazy"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card;