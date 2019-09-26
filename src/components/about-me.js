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
                {/* edit image possibly change it to the SIDEBAR.js file */}
                <img src="assets/images/Profile-Pic.jpg" width={200} height={200} alt="" id="about-image" />

                <h2 className="block-header">About Me</h2>
                <hr />
                <p>I am an enthusiastic and energetic Full-Stack Web Developer with knowledge in JavaScript, Node, React, Express, MySQL, Sequelize, MongoDB, Mongoose, Bootstrap, HTML5, CSS3, JQuery, and various frameworks, libraries, and packages. I love debugging. I am currently learning Python and Angular.  I love to learn new things that help me become a more efficient coder.</p>
              </article>
            </div>
          </section>
          <hr />
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