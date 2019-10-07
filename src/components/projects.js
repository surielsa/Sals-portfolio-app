import React, { Component } from 'react';

export default class Project extends Component {
    render() {
        return (
            <nav id="colorlib-main-menu">
                <div class="icons">
                    <h1>Projects</h1>
                    <p> These are complete projects I am proud to have worked on. I also have more in progress in my <span><a href="https://github.com/surielsa"> </a></span>GitHub Page.</p>

                    <a href="https://surielsa.github.io/Rupauls-Drag-Race-word-game/"><img className="icon" src="assets/images/RuPaulThumbnail.jpeg" width={50} height={50} alt="RuPaul's-Drag-Race-Word-Guess-Game" />
                        <p>RuPaul's Drag Race Word Guess Game</p>
                        <a href="https://surielsa.github.io/Rupauls-Drag-Race-word-game/">
                        </a>
                    </a>
                    <a href="https://surielsa.github.io/Sals-Crystal-Game/"><img className="icon" src="assets/images/crystalGuessgamethumbnail.jpg" width={50} height={50} alt="Crystals-Collector-Game" />
                        <p>Crystals Collector Game</p>
                        <a href="https://surielsa.github.io/Sals-Crystal-Game/">
                        </a>
                    </a>
                    <a href="https://surielsa.github.io/Sals-node-app/"><img className="icon" src="assets/images/liri-node-app-thumbnail.png" width={50} height={50} alt="liri-node-app" />
                        <p>Sal's Node App</p>
                        <a href="https://surielsa.github.io/Sals-node-app/">
                        </a>
                    </a>
                    <a href="https://surielsa.github.io/Marvel-All-In-One/"><img className="icon" src="assets/images/team-project-thumbnail.png" width={50} height={50} alt="group-project" />
                        <p>Marvel Comic Search</p>
                        <a href="https://surielsa.github.io/Marvel-All-In-One/">
                        </a>
                    </a>
                    <a href="https://surielsa.github.io/NYC-Transit-Trivia-Game/"><img className="icon" src="assets/images/NYCtransit.jpg" width={50} height={50} alt="NYCtransit-app" />
                        <p>NYC Transit Trivia Game</p>
                        <a href="https://surielsa.github.io/NYC-Transit-Trivia-Game/">
                        </a>
                    </a>
                    <a href="https://surielsa.github.io/Sals-eShop/"><img className="icon" src="assets/images/NYCtransit.jpg" width={50} height={50} alt="NYCtransit-app" />
                        <p>Sal's E-Shop (Backend Project)</p>
                        <a href="https://surielsa.github.io/Sals-eShop/">
                        </a>
                    </a>
                </div>
            </nav>
        )
    }
}