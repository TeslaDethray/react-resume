import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './css/App.css'

import headshot from './img/headshot.png';
import data from './img/skill-data.png';
import frontend from './img/skill-frontend.png';
import photoshop from './img/skill-photoshop.png';
import translation from './img/skill-translation.png';
import ccsf from './img/exp-ccsf.png';
import opswat from './img/exp-opswat.png';
import pantheon from './img/exp-pantheon.png';
import radicaldesigns from './img/exp-radicaldesigns.png';

class App extends Component {
  render() {
    return (
      <div>
        {/* Resume Starts */}
        <div className="container">
          <div className="resume br-white">
            {/* Header Starts */}
            <header className="block">
              <div className="row">
                <div className="col-md-4 col-sm-4">
                  <div className="head-left text-center">
                    <img src={headshot} className="img-responsive img-circle img-thumbnail" alt=""/>
                    <h4>SARA MCCUTCHEON</h4>
                    <h5>Software Engineer</h5>
                    <a className="br-red hclick"><i className="fa fa-user"></i></a>
                    <div className="head-social">
                      <a href="https://linkedin.com/in/tesladethray/"><i className="fa fa-linkedin br-purple"></i></a>
                      <a href="https://github.com/tesladethray"><i className="fa fa-github br-grey"></i></a>
                      <a href="files/Resume_of_Sara_McCutcheon.pdf"><i className="fa fa-download br-green"></i></a>
                      <a href="https://facebook.com/tesladethray"><i className="fa fa-facebook br-blue"></i></a>
                      <a href="https://twitter.com/tesladethray"><i className="fa fa-twitter br-lblue"></i></a>
                    </div>
                  </div>
                </div>
                <div className="col-md-8 col-sm-8">
                  <div className="head-right">
                    <h4>Summary</h4>
                    <div className="head-obj">
                      <div className="obj-icon">
                        <span>&#8220;</span>
                      </div>
                      <div className="obj-content">
                        <p>I'm a developer in the San Francisco Bay Area. Most of my work experience has been with Radical Designs, a small cooperative which creates websites and other software solutions for non-profit businesses and political groups whom profess values which resonate with ours. I have developed new products from the ground up and from popular web frameworks. I run the gamut from setting up new VPSs, selecting the language and software to work with, doing all the coding and testing, setting up the design, launching, and providing support for the software time and time again.</p>
                        <p>I am looking for a new opportunity to expand my abilities. I needn't find the exact same sort of work, but I have a need to make things - to see the fruits of my labor set out into the world to help people get informed and connect with one another.</p>
                        <p>The short version: code monkey looking for code to wrench.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
            {/* Header Ends */}

            {/* Education Block */}
            <div className="education block">
              <div className="row">
                <div className="col-md-4 col-sm-4">
                  <div className="block-head">
                    <h2 className="br-red">Education</h2>
                    <h5>Why I'm in debt</h5>
                    <p>Someday I'll pay off that debt and feel old. That's when I'll need a postgrad degree.</p>
                  </div>
                </div>
                <div className="col-md-8 col-sm-8">
                  {/* Nav tabs */}
                  <div className="navigation">
                    <ul className="list-unstyled">
                      <li><a href="#home" data-toggle="tab" className="br-red">Upper</a></li>
                      <li><a href="#profile" data-toggle="tab" className="br-red">Lower</a></li>
                      <li><a href="#messages" data-toggle="tab" className="br-red">HS</a></li>
                    </ul>
                  </div>

                  {/* Tab panes */}
                  <div className="tab-content">{/* Links with Contents */}
                    <div className="tab-pane active" id="home">
                      <h3>San Francisco State University, San Francisco, CA</h3>
                      <h5>2009-2012 -- Computer Science and Mathematics</h5>
                      <p>I completed upper division work for my undergraduate degree at SFSU. Classes included cooperative software development, analysis of operating systems and programming languages, discrete math, linear algebra, and Victorian-era history.</p>
                    </div>
                    <div className="tab-pane" id="profile">
                      <h3>City College of San Francisco, San Francisco, CA</h3>
                      <h5>2006-2009 -- Computer Science</h5>
                      <p>I completed my lower-division undergraduate work at CCSF. Clawing my way all the way up through Calculus 3 from beginning algebra, I also tutored in math and English.</p>
                    </div>
                    <div className="tab-pane" id="messages">
                      {/* Item Title */}
                      <h3>Green Valley High School, Henderson, Nevada</h3>
                      <h5>1998-2002</h5>
                      <p>I had a pretty normal high school experience. I placed second in Nevada in extemporaneous speaking (Speech & Debate) and took Spanish and computer science classes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Education Ends */}

            {/* Skills Starts */}
            <div className="skills block">
              <div className="row">
                <div className="col-md-4 col-sm-4">
                  <div className="block-head">
                    {/* Heading */}
                    <h2 className="br-red">Technical Skill</h2>
                    {/* Sub Heading */}
                    <h5>My skills include but are not limited to</h5>
                    {/* Para */}
                    <p>
                      PHP, Coffeescript, Python, Ruby, Java, C++, Lisp, and <em>more!</em><br />
                      JavaScript, CSS, HTML<br />
                      MVC Frameworks (Rails, Sinatra, CakePHP, Django, Backbone)<br />
                      Linux/Mac, Windows<br />
                      Photoshop, MS Office<br />
                      SQL (MySQL, SQLite, PostgreSQL)<br />
                      English, Japanese<br />
                      Cello
                    </p>
                  </div>
                </div>
                <div className="col-md-8 col-sm-8">
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <div className="skill-item text-center">
                        <div className="skill-img">
                          <img src={frontend} className="img-responsive" alt=""/>
                        </div>
                        <h4>Web Developement</h4>
                        <p>I've constructed, upgraded, and maintained dozens of websites based on Rails, Django, CakePHP, and WordPress as well as having created custom systems for clients, often on shoestring budgets.</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="skill-item text-center">
                        <div className="skill-img">
                          <img src={data} className="img-responsive" alt=""/>
                        </div>
                        <h4>Data Analysis</h4>
                        <p>Organizing and making accessible data is a vital component of my experience. I've created internal tools for the tracking of caretaker certifications used by two California organizations (Bay Area Academy and Central Valley Training Academy) as well as public data tools such as <a href="http://compare50.org">Compare50</a>.</p>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <div className="skill-item text-center">
                        <div className="skill-img">
                          <img src={translation} className="img-responsive" alt=""/>
                        </div>
                        <h4>Japanese Translation</h4>
                        <p>While I enjoy translating comic books the most, I also translate pop songs and supply translations for fansubbers. What Youtube hasn't removed for copyright infringement remains <a href="https://www.youtube.com/user/cupcakeordeath/videos">here</a>.</p>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="skill-item text-center">
                        <div className="skill-img">
                          <img src={photoshop} className="img-responsive" alt=""/>
                        </div>
                        <h4>Photoshop</h4>
                        <p>It may not appear to fit in here, but if you want something digitally altered or repaired I can help you! I've been using Photoshop since 1999 for photo editing, cleaning and refining comic book pages for translation, and also as an aid to properly implement website designs.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Skills Ends */}

            {/* Experience */}
            <div className="experience block">
              <div className="row">
                <div className="col-md-4 col-sm-4">
                  <div className="block-head">
                    <h2 className="br-red">Experience</h2>
                    <h5>I've got some of that.</h5>
                    <a href="files/Resume_of_Sara_McCutcheon.pdf" className="br-green button"><i className="fa fa-download"></i> Download full resume</a>
                  </div>
                </div>
                <div className="col-md-8 col-sm-8">
                  <div className="row">
                    <div className="col-md-6 col-sm-6">
                      <div className="exp-item text-center">
                        <div className="item-img">
                          <a href="https://www.pantheon.io"><img src={pantheon} className="img-responsive" alt="" /></a>
                        </div>
                        <div className="item-content">
                          <h4>Pantheon Systems, Inc</h4>
                          <h5>8<sup>th</sup> June 2015 To Present</h5>
                          <p>Software Engineer</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="exp-item text-center">
                        <div className="item-img">
                          <a href="http://radicaldesigns.org"><img src={radicaldesigns} className="img-responsive" alt="" /></a>
                        </div>
                        <div className="item-content">
                          <h4>Radical Designs</h4>
                          <h5>11<sup>th</sup> July 2011 5<sup>th</sup> June 2015</h5>
                          <p>Senior Developer</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="exp-item text-center">
                        <div className="item-img">
                          <a href="http://opswat.com"><img src={opswat} className="img-responsive" alt="" /></a>
                        </div>
                        <div className="item-content">
                          <h4>OPSWAT</h4>
                          <h5>30<sup>th</sup> May 2010 To 26<sup>th</sup> October 2010</h5>
                          <p>Support Analyst Intern</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                      <div className="exp-item text-center">
                        <div className="item-img">
                          <a href="http://www.ccsf.edu/"><img src={ccsf} className="img-responsive" alt="" /></a>
                        </div>
                        <div className="item-content">
                          <h4>City College of San Francisco</h4>
                          <h5>1<sup>st</sup> September 2008 To 22<sup>nd</sup> May 2009</h5>
                          <p>Tutor, Math and English</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Experience Ends */}

            {/* Contact Details */}
            <div className="contact block">
              <div className="row">
                <div className="col-md-6">
                  <h3>Contact Me</h3>
                  <form action="#" method="post" className="form">
                    <div className="form-group">
                      <label htmlFor="InputName">Name</label>
                      <input name="name" type="text" className="form-control" id="InputName" placeholder=""/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="InputEmail">Email</label>
                      <input name="email" type="text" className="form-control" id="InputEmail" placeholder=""/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="InputTextarea">Message</label>
                      <textarea name="body" className="form-control" rows="4" id="InputTextarea" placeholder=""></textarea>
                    </div>
                    <div className="form-group">
                      <button type="submit" className="btn btn-danger btn-sm">Send</button>&nbsp;
                      <button type="submit" className="btn btn-default btn-sm">Cancel</button>
                    </div>
                  </form>
                </div>
                <div className="col-md-6">
                  <div className="con-detail">
                    <div className="row">
                      <div className="col-md-6 col-xs-6">
                        <div className="con-item">
                          <div className="con-img">
                            <label><i className="fa fa-envelope green"></i></label>
                          </div>
                          <div className="con-content">
                            <h4>Email Me</h4>
                            <p>By using the form to the left</p>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 col-xs-6">
                        <div className="con-item">
                          <div className="con-img">
                            <label><i className="fa fa-briefcase lblue"></i></label>
                          </div>
                          <div className="con-content">
                            <h4>RD Matters</h4>
                            <h5><a href="mailto:&#104;&#101;&#108;&#112;&#64;&#114;&#97;&#100;&#105;&#99;&#97;&#108;&#100;&#101;&#115;&#105;&#103;&#110;&#115;&#46;&#111;&#114;&#103;">&#104;&#101;&#108;&#112;&#64;&#114;&#97;&#100;&#105;&#99;&#97;&#108;&#100;&#101;&#115;&#105;&#103;&#110;&#115;&#46;&#111;&#114;&#103;</a></h5>
                            <p>For Radical Designs support, write to the help desk.</p>
                          </div>
                          <div className="clearfix"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Ends */}
          </div>
        </div>
        {/* Scroll to top */}

        {/* Icon with Link */}
        <span className="gotop"><a><i className="fa fa-chevron-up"></i></a></span>


      </div>
    );
  }
}

export default App;
