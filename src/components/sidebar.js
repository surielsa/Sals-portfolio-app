import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                <div>
                    <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
                    <aside id="colorlib-aside" className="border js-fullheight">
                        <div className="text-center">
                            <div className="author-img" style={{ backgroundImage: 'url(images/about.jpg)' }} />
                            <h1 id="colorlib-logo"><a href="index.html">Sal Suriel</a></h1>
                            <span className="email"><i className="icon-mail"></i> surielsa@gmail.com</span>
                        </div>
                        <nav id="colorlib-main-menu" role="navigation" className="navbar">
                            <div id="navbar" className="collapse">
                                <ul>
                                    <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                                    <li><a href="#about" data-nav-section="about">About</a></li>
                                    {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                                    <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                                </ul>
                            </div>
                        </nav>
                        <nav id="colorlib-main-menu">
                            <ul>
                                <li><a href="https://github.com/surielsa"><img className="icon" src="assets/images/github-128.png" width={40} height={40} alt="GitHub Profile" target="_blank" /></a></li>
                                <li><a href="https://www.linkedin.com/in/sal-suriel/"><img className="icon" src="assets/images/linkedinBW.png" width={40} height={40} alt="LinkedIn Profile" target="_blank" /></a></li>
                                <li><a href="https://rainbowcoder.blogspot.com/"><img className="icon" src="assets/images/bloggerBW.png" width={40} height={40} alt="Blogger Profile" target="_blank" /></a></li>
                                <li><a href="https://twitter.com/rainbow_coder3"><img className="icon" src="assets/images/twitterBW.png" width={40} height={40} alt="Twitter Profile" target="_blank" /></a></li>
                                <li><a href="https://www.instagram.com/rainbow_coder3/"><img className="icon" src="assets/images/instagramBW.png" width={40} height={40} alt="Instagram Profile" target="_blank" /></a></li>

                            </ul>
                        </nav>
                    </aside>
                </div>
            </div>
        )
    }
}
