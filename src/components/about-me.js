import React, { Component } from 'react'

export default class About extends Component {
  render() {

    return (
      <div>
        {/* about_me */}
        <main className="about-me-container">
          <section className="row">
            <div className="col-md-8">
              <article className="ab-block">
                <hr />
                {/* edit image possibly change it */}
                <img src="assets/images/Profile-Pic.jpg" width={200} height={200} alt="" id="about-image" />

                <h3 className="block-header">About Me</h3>
                <hr />
                <p>I am an enthusiastic and energetic Full-Stack Web Developer with knowledge in JavaScript, Node, React, Express, MySQL, Sequelize, MongoDB, Mongoose, Bootstrap, HTML5, CSS3, JQuery, and various frameworks, libraries, and packages. I love debugging. I am currently learning Python and Angular.  I love to learn new things that help me become a more efficient coder.</p>
              </article>
            </div>
          </section>
          <hr />
          <div class="icons">

            <a href="https://github.com/surielsa"><img className="icon" src="assets/images/github-128.png" width={40} height={40} alt="GitHub Profile" target="_blank" /></a>

            <a href="https://www.linkedin.com/in/sal-suriel/"><img className="icon" src="assets/images/linkedinBW.png" width={40} height={40} alt="LinkedIn Profile" target="_blank" /></a>

            <a href="https://twitter.com/rainbow_coder3"><img className="icon" src="assets/images/twitterBW.png" width={40} height={40} alt="Twitter Profile" target="_blank" /></a>

            <a href="https://rainbowcoder.blogspot.com/"><img className="icon" src="assets/images/bloggerBW.png" width={40} height={40} alt="Blogger Profile" target="_blank" /></a>

            <a href="https://www.instagram.com/rainbow_coder3/"><img className="icon" src="assets/images/instagramBW.png" width={40} height={40} alt="Instagram Profile" target="_blank" /></a>

          </div>
        </main>
        <footer className="footer">
          <div className="two-toned-footer-color" />
          <p className="text-muted text-muted-footer text-center">
            © Copyright Sal Suriel
        </p>
        </footer>
      </div>
    );
  }
}