
import React, { Component } from 'react'

export default class Index extends Component {
  render() {

return (
    <div>
      {/* index */}
      <div className="homepage-container">
        <span className="text1">Salatiel</span>
        <span className="text2">Suriel</span>
      </div>
      <div className="homepage-buttons">
        <a href="index.html" className="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Home</a>
        <a href="portfolio.html" className="btn btn-secondary btn-lg active" role="button" aria-pressed="true" target="_blank">Projects</a>
        <a href="about-me.html" className="btn btn-secondary btn-lg active" role="button" aria-pressed="true" target="_blank">About Me</a>
        <a href="contact.html" className="btn btn-secondary btn-lg active" role="button" aria-pressed="true" target="_blank">Contact</a>
      </div>
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