import React, { Component } from 'react';


export default class Sidebar extends Component {
    render() {
        return (
            <div className= "sidebar">
                <div>
                    <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
                    <aside id="colorlib-aside" className="border js-fullheight">
                        <div className="text-center">
                            <div className="author-img" style={{ backgroundImage: 'url(images/about.jpg)' }} />
                            <h1 id="colorlib-logo"><a href="index.html">Sal Suriel</a></h1>
                            <span className="email"><i className="icon-mail"></i> <a href = "mailto: surielsa@gmail.com">Contact Me</a></span>

<br></br>
                            <span className="resume"><a href = "assets/Sal-Suriel-Resume.pdf">Resume</a></span>
    
                            
                        </div>

                        {/* this is now at the bottom of the about me page */}

                        {/* <nav id="colorlib-main-menu">
                            <ul>
                                <li><a href="https://github.com/surielsa"><img className="icon" src="assets/images/github-128.png" width={40} height={40} alt="GitHub Profile" target="_blank" /></a></li>
                                <li><a href="https://www.linkedin.com/in/sal-suriel/"><img className="icon" src="assets/images/linkedinBW.png" width={40} height={40} alt="LinkedIn Profile" target="_blank" /></a></li>
                                <li><a href="https://twitter.com/rainbow_coder3"><img className="icon" src="assets/images/twitterBW.png" width={40} height={40} alt="Twitter Profile" target="_blank" /></a>
                                </li>
                                <li><a href="https://rainbowcoder.blogspot.com/"><img className="icon" src="assets/images/bloggerBW.png" width={40} height={40} alt="Blogger Profile" target="_blank" /></a>
                                </li>
                                <li><a href="https://www.instagram.com/rainbow_coder3/"><img className="icon" src="assets/images/instagramBW.png" width={40} height={40} alt="Instagram Profile" target="_blank" /></a></li>

                            </ul>
                        </nav> */}

                    </aside>
                </div>
            </div>
        )
    }
}
