function App() {

    return (
      <div>
        {/* about_me */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <img src="assets/images/favicon.jpg" width={30} height={30} className="d-inline-block align-top" alt="" />
              Sal Suriel
          </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
              <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="portfolio.html">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about-me.html">About Me</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <main className="about-me-container">
          <section className="row">
            <div className="col-md-8">
              <article className="ab-block">
                <h1 className="block-header">About Me</h1>
                <hr />
                {/* change the img src */}
                <img src="assets/images/Profile-Pic.jpg" alt="" id="about-image" />
                {/* NEED TO WRITE NEW PARAGRAPH HERE! */}
                <p>I am a new coder with a lot of eagerness. I love to code and I spend as much time coding. I also love
                  comedy, fashion, and pop culture. My biggest dream is to blend both worlds. Being able to appeal to the
                  fashion and pop culture via a technological influence beyond just being a social media influencer, but a
                creator in many fields especially front-end development. </p>
  
                <p>The more I learn about coding the more excited I am about the things I can create and the ways I can help
                people have an easier life or enjoy their lives more.</p>
              </article>
            </div>
          </section>
          <hr />
          <div className="icons">
            <a href="https://github.com/surielsa"><img className="icon" src="assets/images/github-128.png" width={60} height={60} alt="GitHub Profile" target="_blank" /></a>
            <a href="https://www.linkedin.com/in/sal-suriel/"><img className="icon" src="assets/images/square-linkedin-128.png" width={60} height={60} alt="LinkedIn Profile" target="_blank" /></a>
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