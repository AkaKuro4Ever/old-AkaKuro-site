import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import './App.css';

const IndexPage = () => (
    <Router >
      <div className="container">
        <div className="flex-column">
          <ul className="nav navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
          <li className="navbar-brand h1 justify-content-between">Deborah Seow</li>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <li className="nav-item">
                <p className="nav-link"><Link to="/">Home</Link></p>
              </li>
              <li className="nav-item">
                <p className="nav-link"><Link to="/contact">Contact</Link></p>
              </li>
              <li className="nav-item">
                <p className="nav-link"><Link to="/about">About</Link></p>
              </li>
              <li className="nav-item">
                <p className="nav-link"><Link to="/blog">Blog</Link></p>
              </li>
            </div>
          </ul>
        </div>
        <div className="body">
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
        </div>
      </div>
    </Router>
)

const Contact = () => (
  <div>
    <div className=".row">
      <a href="email: deborahseow9@gmail.com">Email Me</a>
    </div>
  </div>
);

const Home= () => (
  <div className="home">
    <div className="deborah">
      <img id="deborah" src="../d.jpg" alt="Pic of Deborah" width="180px"/>
    </div>
    <div className="text-center">
    <h2>Hello, I'm</h2><h1>Deborah Seow</h1>
    </div>
    <p className="lead text-center">Full-Stack Developer</p>
    <div className="icons flex-row">
      <a href="https://www.linkedin.com/in/deborah-seow" target="_blank">
        <i class="p-3 fab fa-linkedin"></i>
      </a>
      <a href="https://github.com/AkaKuro4Ever" target="_blank">
        <i class="p-3 fab fa-github"></i>
        <span class="tooltiptext">Check out my github</span>
      </a>
      <a href="mailto: deborahseow9@gmail.com">
        <i class="p-3 far fa-envelope"></i>
        <span class="tooltiptext">Check out my github</span>
      </a>
      <a href="../deborah_seow_resume.pdf" download>
        <i class="p-3 fas fa-file-download"></i>
        <span class="tooltiptext">Download my resume</span>
      </a>

    </div>
  </div>
);

const New = () => (
  <div className=".row">
    <p class="col-lg-12">
    Nescius aliqua ingeniis litteris et eu duis comprehenderit. Duis excepteur non
    consectetur, possumus ab enim pariatur, litteris non litteris an appellat nulla
    quid ullamco aute, elit singulis de excepteur, officia praetermissum ut doctrina
    hic constias amet velit ne quis, possumus ne multos.Commodo est arbitror. O quem
    nisi e constias ita excepteur ex sint laboris. Sint incididunt si aliquip.</p>
    <p class="col-lg-7">
    Aliqua cernantur id dolore elit, ab te velit dolor ipsum quo e culpa fugiat
    minim deserunt quo ne se minim commodo. Cillum eiusmod in quibusdam, noster et
    te eram expetendis, non e ipsum quis eram o se est praesentibus. Iudicem fore mentitum incurreret ut te aute
    sed duis.

    Dolor ab deserunt de enim, irure ne commodo, ex tamen anim sunt proident nam sed
    export incididunt appellat quo iis export praesentibus, arbitror noster iis
    ingeniis illustriora, elit sed voluptate id quis te qui te amet ullamco. Aut non
    tractavissent, sed amet ut quis. Quo quo summis expetendis.

    Ad ab coniunctione. Aliquip philosophari quo cernantur te senserit quorum
    incididunt. Nescius elit ipsum e irure.</p>
    <p class="col-sm-3">
    Fore cupidatat hic labore elit. Quo duis laborum est labore incididunt
    graviterque. Offendit tempor nam aliquip consectetur aut multos arbitror non
    litteris, consequat fore excepteur nam quae id proident.

    O tempor incurreret quamquam, senserit qui multos ingeniis. Illum e officia e
    minim ubi ea laborum qui laboris et ad velit litteris graviterque, legam
    occaecat concursionibus. Ubi export senserit, si ipsum dolor id deserunt.</p>
    <p class="col-lg-3">
    Fore cupidatat hic labore elit. Quo duis laborum est labore incididunt
    graviterque. Offendit tempor nam aliquip consectetur aut multos arbitror non
    litteris, consequat fore excepteur nam quae id proident.

    O tempor incurreret quamquam, senserit qui multos ingeniis. Illum e officia e
    minim ubi ea laborum qui laboris et ad velit litteris graviterque, legam
    occaecat concursionibus. Ubi export senserit, si ipsum dolor id deserunt.</p>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Blog = () => (
  <div className="content">
    <h2>Blog</h2>
      <div className="mb-2 col-md-7">
      <h2> Articles</h2>
      <p>Ea noster multos ut nostrud, culpa expetendis comprehenderit ex sed anim magna aliqua excepteur.</p>
      </div>
    <div className="row card-deck">
      <div className="card border-dark text-white bg-dark mb-3">
      <img class="card-img-top" src="../favicon.ico" alt="Card image cap"/>
        <div className="card-body">
          <h4 className="card-title">Article 1</h4>
          <h6 className="card-subtitle mb-2 text-muted">Subtitle for A1</h6>
          <p className="card-text">
          Multos ullamco ullamco.
          Veniam de iis quorum excepteur.
          Esse aut occaecat.
          Quorum cernantur a praesentibus.
          </p>
        </div>
      </div>
      <div className="card w-30 border-dark text-white bg-dark mb-3">
        <img class="card-img-top" src="../favicon.ico" alt="Card image cap"/>
        <div className="card-body">
          <h4 className="card-title">Article 2</h4>
          <h6 className="card-subtitle mb-2 text-muted">Subtitle for A2</h6>
          <p className="card-text">Id elit eiusmod cohaerescant.
          Do malis si ipsum.</p>
        </div>
      </div>
      <div className="card text-white bg-dark mb-3">
        <img class="card-img-top" src="../favicon.ico" alt="Card image cap"/>
        <div className="card-body">
          <h4 className="card-title">Article 3</h4>
          <h6 className="card-subtitle mb-2 text-muted">Subtitle for A3</h6>
          <p className="card-text">Ingeniis an vidisse.
          Amet ne et quem nostrud. Ea do multos pariatur.</p>
        </div>
      </div>
    </div>
  </div>
);


export default IndexPage
//
