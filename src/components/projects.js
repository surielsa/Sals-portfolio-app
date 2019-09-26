import React, { Component } from 'react';

export default class Project extends Component {
    render() {
        return (
            <div>
                <h1>Projects</h1>
                <p> These are complete projects I am proud to have worked on. I also have more in progress in my G</p>

                <div className="col-sm-6 col-md-12 col-lg-6">
                    <a href="https://surielsa.github.io/word-guess-game/"><img className="icon" src="assets/images/RuPaulThumbnail.jpeg" width={70} height={70} alt="RuPaul's-Drag-Race-Word-Guess-Game" />
                        <p>RuPaul's Drag Race Word Guess Game</p>
                    </a>
                    <a href="https://surielsa.github.io/word-guess-game/">
                    </a>
                </div>
                <div className="col-sm-6 col-md-12 col-lg-6">
                    <a href="https://surielsa.github.io/unit-4-game/"><img className="icon" src="assets/images/crystalGuessgamethumbnail.jpg" width={70} height={70} alt="Crystals-Collector-Game" />
                        <p>Crystals Collector Game</p>
                    </a><a href="https://surielsa.github.io/unit-4-game/">
                    </a></div>
                <div className="col-sm-6 col-md-12 col-lg-6">
                    <a href="https://surielsa.github.io/liri-node-app/"><img className="icon" src="assets/images/liri-node-app-thumbnail.png" width={70} height={70} alt="liri-node-app" />
                        <p>Sal's Node App</p>
                    </a><a href="https://surielsa.github.io/liri-node-app/">
                    </a></div>
                <div className="col-sm-6 col-md-12 col-lg-6">
                    <a href="https://surielsa.github.io/Team5/"><img className="icon" src="assets/images/team-project-thumbnail.png" width={70} height={70} alt="group-project" />
                        <p>Marvel Comic Search</p>
                    </a><a href="https://surielsa.github.io/Team5/">
                    </a></div>

            </div>

        )
    }
}