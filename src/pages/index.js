import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Waypoint from 'react-waypoint'

import Layout from '../components/layout'
import Header from '../components/Header'
import Nav from '../components/Nav'
import hibbie from '../assets/images/hibbie.png'
import python from "../assets/images/python.svg"
import javascript from "../assets/images/javascript.svg"
import linux from "../assets/images/linux.svg"

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickyNav: false
    }
  }

  _handleWaypointEnter= () => {
    this.setState(() => ({ stickyNav: false }));
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }));
  }

  render() {

    return (
      <Layout>
        <Helmet title="Thomas Hibbard - hibbie.net" />

        <Header />

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        >
        </Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <div id="main">

          <section id="intro" className="main">
            <div className="spotlight">
              <div className="content">
                <header className="major">
                  <h2>About me</h2>
                </header>
                <p>Hi there.  This is my personal site for my development work.  I am a developer primarily focused on the web.  I've worked in the tech industry since 2005 and as a professional developer since 2007.  My work have primarily been in the web development field.</p>
                <p>I am experienced as a senior Python developer and Linux systems administrator.  Throughout the years, I've mentored and led development teams, worked directly with clients, and managed large development projects to completion.  </p>
                <ul className="actions">
                  <li><Link to="#cta" className="button">Connect</Link></li>
                </ul>
              </div>
              <span className="image"><img src={hibbie} alt="" /></span>
            </div>
          </section>

          <section id="first" className="main special">
            <header className="major">
              <h2>Development</h2>
            </header>
            <ul className="features">
              <li>
                <span className="image"><img style={{width: "8rem"}} src={python} alt="Python" /></span>
                <h3>Python</h3>
                <p>Experienced using Django, Flask and other frameworks to build web applications of all sizes.</p>
              </li>
              <li>
              <span className="image"><img style={{width: "8rem"}} src={javascript} alt="JavaScript" /></span>
                <h3>JavaScript</h3>
                <p>Years of experience with JavaScript pre-ajax through the current modern era of libraries like React and tools like GraphQL.</p>
              </li>
              <li>
              <span className="image"><img style={{width: "8rem"}} src={linux} alt="Linux" /></span>
                <h3>Linux</h3>
                <p>Linux server administration with a long history of deploying and maintaining large applications.  Perpetually on-call since 2005 or so.</p>
              </li>
            </ul>
          </section>

          <section id="cta" className="main special">
            <header className="major">
              <h2>Connect with me</h2>
              <p>E-mail me directly at: <a href="mailto:me@hibbie.net">me@hibbie.net</a></p>

            </header>
            <footer className="major">
              <ul className="icons">
                  <li><a href="https://www.linkedin.com/in/hibbie/" className="icon fa-linkedin alt"><span className="label">LinkedIn</span></a></li>
                  <li><a href="https://github.com/hibbie/" className="icon fa-github alt"><span className="label">GitHub</span></a></li>
                  <li><a href="https://gitlab.com/hibbie/" className="icon fa-gitlab alt"><span className="label">Gitlab</span></a></li>
                  <li><a href="https://dribbble.com/hibbie" className="icon fa-dribbble alt"><span className="label">Dribbble</span></a></li>
                  <li><a href="https://twitter.com/hibb" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li>
              </ul>
            </footer>
          </section>

        </div>

      </Layout>
    )
  }
}

export default Index
