import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './css/App.css'

import headshot from './img/headshot.png'
import data from './img/skill-data.png'
import frontend from './img/skill-frontend.png'
import photoshop from './img/skill-photoshop.png'
import translation from './img/skill-translation.png'
import ccsf from './img/exp-ccsf.png'
import opswat from './img/exp-opswat.png'
import pantheon from './img/exp-pantheon.png'
import radicaldesigns from './img/exp-radicaldesigns.png'
import resumePDF from './files/Resume_of_Sara_McCutcheon.pdf'

function Block(props) {
  return (
    <div className='block'>
      {props.children}
    </div>
  )
}

function BlockHead(props) {
  return (
    <div className='block-head'>
      <h2 className='br-red'>{props.title}</h2>
      <h5>{props.headline}</h5>
      {props.children}
    </div>
  )
}

function BubbleItem(props) {
  return (
    <div className='bubble-item text-center'>
      <div className='bubble-img'>
        <a href={props.url}><img src={props.img} className='img-responsive' alt='' /></a>
      </div>
      <div className='item-content'>
        {props.children}
      </div>
    </div>
  )
}

function Column(props) {
  return (
    <div className={'col-md-' + props.span + ' col-sm-' + props.span}>
      {props.children}
    </div>
  )
}

function IconItem(props) {
  return (
    <div className='icon-item'>
      <div className='icon-img'>
        <label><i className={'fa fa-' + props.icon + ' ' + props.color}></i></label>
      </div>
      <div className='icon-content'>
        {props.children}
      </div>
      <div className='clearfix'></div>
    </div>
  )
}

function PicturedItem(props) {
  return(
    <div className='pictured-item text-center'>
      <div className='pictured-img'>
        <img src={props.img} className='img-responsive' alt=''/>
      </div>
      <h4>{props.title}</h4>
      {props.children}
    </div>
  )
}

function Row(props) {
  return (
    <div className='row'>
      {props.children}
    </div>
  )
}

function Scroll() {
  return (
    <span className='gotop'>
      <a onClick={() => window.scrollTo(0, 0)}>
        <i className='fa fa-chevron-up'></i>
      </a>
    </span>
  )
}

function SocialLink(props) {
  return (
    <a href={props.url ? props.url : 'https://' + props.name + '.com/tesladethray'}>
      <i className={'fa fa-' + props.name + ' br-' + props.color}></i>
    </a>
  )
}

class SocialWidget extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
    }
    this.toggleVisibility = this.toggleVisibility.bind(this)
  }

  toggleVisibility(i) {
    this.setState({
      visible: !this.state.visible,
    })
  }

  render() {
    return (
      <div id='socialWidget'>
        <a className='br-red hclick' onClick={(i) => this.toggleVisibility(i)}><i className='fa fa-user'></i></a>
        {this.state.visible ?
          <div className='head-social'>
            {this.props.children}
          </div>
          : null}
      </div>
    )
  }
}

function Summary(props) {
  return (
    <div className='head-right'>
      <h4>Summary</h4>
      <div className='head-obj'>
        <div className='obj-icon'>
          <span>&#8220;</span>
        </div>
        <div className='obj-content'>
          {props.children}
        </div>
      </div>
    </div>
  )
}

function TabButton(props) {
  return (
    <li className={props.active ? 'active' : null}><button className='br-red' onClick={(i) => props.onClick(i)}>{props.label}</button></li>
  )
}

function TabPane(props) {
  return (
    <div className='tab-pane active'>
      <h3>{props.institution}, {props.location}</h3>
      <h5>{props.duration} {props.fieldOfStudy ? '//' : null} {props.fieldOfStudy}</h5>
      <p>{props.comments}</p>
    </div>
  )
}

class TabWidget extends Component {
  constructor() {
    super()
    this.state = {
      activeTab: null,
    }
    this.renderChildren =  this.renderChildren.bind(this)
  }

  renderChildren() {
    var children = []
    React.Children.forEach(this.props.children, (child, i) => {
      if (this.isActive(child.props.id, i))
        children.push(child)
    })
    return children
  }

  renderTabButton(id, count) {
    return (
      <TabButton
        active={this.isActive(id, count)}
        label={id.charAt(0).toUpperCase() + id.slice(1)}
        onClick={() => this.handleClick(id)}/>
    )
  }

  handleClick(id) {
    this.setState({
      activeTab: id,
    })
  }

  isActive(id, count) {
    return ((id === this.state.activeTab) || ((count === 0) && this.state.activeTab === null))
  }

  render() {
    const navigationButtons = React.Children.map(this.props.children, (child, i) => {
      return this.renderTabButton(child.props.id, i)
    })
    return (
      <div className='tab-widget'>
        <div className='navigation'>
          <ul className='list-unstyled'>
            {navigationButtons}
          </ul>
        </div>
        <div className='tab-content'>
          {this.renderChildren()}
        </div>
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='resume br-white'>
          {/* Header Starts */}
          <header className='block'>
            <Row>
              <Column span='4'>
                <div className='head-left text-center'>
                  <img src={headshot} className='img-responsive img-circle img-thumbnail' alt='An old pic of me'/>
                  <h4>SARA MCCUTCHEON</h4>
                  <h5>Software Engineer</h5>
                  <SocialWidget>
                    <SocialLink name='linkedin' color='purple' url='https://linkedin.com/in/tesladethray'/>
                    <SocialLink name='github' color='grey'/>
                    <SocialLink name='download' color='green' url={resumePDF}/>
                    <SocialLink name='facebook' color='blue'/>
                    <SocialLink name='twitter' color='lblue'/>
                  </SocialWidget>
                </div>
              </Column>
              <Column span='8'>
                <Summary>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla efficitur scelerisque purus nec vehicula. Vivamus rutrum aliquam risus. Nam quis turpis pulvinar leo egestas facilisis ac vitae massa. Donec convallis orci vitae ullamcorper condimentum. Phasellus ac euismod odio. Ut viverra augue at est porttitor, at scelerisque lectus imperdiet. Nulla vel eleifend quam. Nullam et iaculis diam. Phasellus nec facilisis ligula.</p>
                  <p>Nullam pretium ultricies blandit. Suspendisse elementum elementum lorem eu semper. Vivamus sit amet justo justo. Integer faucibus velit diam, sed iaculis dolor consequat sit amet. Duis et augue luctus odio ultricies scelerisque. Phasellus consequat a sem vitae commodo.</p>
                  <p>Suspendisse varius euismod ligula eget eleifend. Morbi laoreet mauris ut neque consequat, quis feugiat mauris cursus. Aliquam ultrices purus sed suscipit suscipit.</p>
                </Summary>
              </Column>
            </Row>
          </header>
          {/* Header Ends */}

          {/* Education Block */}
          <Block>
            <Row>
              <Column span='4'>
                <BlockHead title='Education' headline="Why I'm in debt">
                  <p>Someday I'll pay off that debt and feel old. That's when I'll need a postgrad degree.</p>
                </BlockHead>
              </Column>
              <Column span='8'>
                <TabWidget>
                  <TabPane
                    id='upper'
                    institution='San Francisco State University'
                    location='San Francisco, CA, USA'
                    duration='2009-2012'
                    fieldOfStudy='Computer Science and Mathematics'
                    comments='I completed upper division work for my undergraduate degree at SFSU. Classes included cooperative software development, analysis of operating systems and programming languages, discrete math, linear algebra, and Victorian-era history.'
                  />
                  <TabPane
                    id='lower'
                    institution='City College of San Francisco'
                    location='San Francisco, CA, USA'
                    duration='2006-2009'
                    fieldOfStudy='Computer Science'
                    comments='I completed my lower-division undergraduate work at CCSF. Clawing my way all the way up through Calculus 3 from beginning algebra, I also tutored in math and English.'
                  />
                  <TabPane
                    id='secondary'
                    institution='Green Valley High School'
                    location='Henderson, NV, USA'
                    duration='1998-2002'
                    comments='I had a pretty normal high school experience. I placed second in Nevada in extemporaneous speaking (Speech & Debate) and took Spanish and computer science classes.'
                  />
                </TabWidget>
              </Column>
            </Row>
          </Block>
          {/* Education Ends */}

          {/* Skills Starts */}
          <Block>
            <Row>
              <Column span='4'>
                <BlockHead title='Technical Skill' headline='My skills include but are not limited to'>
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
                </BlockHead>
              </Column>
              <Column span='8'>
                <Row>
                  <Column span='6'>
                    <PicturedItem img={frontend} title='Web Development'>
                      <p>I've constructed, upgraded, and maintained dozens of websites based on Rails, Django, CakePHP, and WordPress as well as having created custom systems for clients, often on shoestring budgets.</p>
                    </PicturedItem>
                  </Column>
                  <Column span='6'>
                    <PicturedItem img={data} title='Data Analysis'>
                      <p>Organizing and making accessible data is a vital component of my experience. I've created internal tools for the tracking of caretaker certifications used by two California organizations (Bay Area Academy and Central Valley Training Academy) as well as public data tools such as <a href='http://compare50.org'>Compare50</a>.</p>
                    </PicturedItem>
                  </Column>
                </Row>
                <Row>
                  <Column span='6'>
                    <PicturedItem img={translation} title='Japanese Translation'>
                      <p>While I enjoy translating comic books the most, I also translate pop songs and supply translations for fansubbers. What Youtube hasn't removed for copyright infringement remains <a href='https://www.youtube.com/user/cupcakeordeath/videos'>here</a>.</p>
                    </PicturedItem>
                  </Column>
                  <Column span='6'>
                    <PicturedItem img={photoshop} title='Photoshop'>
                      <p>It may not appear to fit in here, but if you want something digitally altered or repaired I can help you! I've been using Photoshop since 1999 for photo editing, cleaning and refining comic book pages for translation, and also as an aid to properly implement website designs.</p>
                    </PicturedItem>
                  </Column>
                </Row>
              </Column>
            </Row>
          </Block>
          {/* Skills Ends */}

          {/* Experience */}
          <Block>
            <Row>
              <Column span='4'>
                <BlockHead title='Experience' headline="I've got some of that.">
                  <a href={resumePDF} className='br-green button'><i className='fa fa-download'></i> Download full resume</a>
                </BlockHead>
              </Column>
              <Column span='8'>
                <Row>
                  <Column span='6'>
                    <BubbleItem url='https://www.pantheon.io' img={pantheon}>
                      <h4>Pantheon Systems, Inc</h4>
                      <h5>8<sup>th</sup> June 2015 To Present</h5>
                      <p>Software Engineer</p>
                    </BubbleItem>
                  </Column>
                  <Column span='6'>
                    <BubbleItem url='https://www.radicaldesigns.org' img={radicaldesigns}>
                      <h4>Radical Designs</h4>
                      <h5>11<sup>th</sup> July 2011 5<sup>th</sup> June 2015</h5>
                      <p>Senior Developer</p>
                    </BubbleItem>
                  </Column>
                  <Column span='6'>
                    <BubbleItem url='https://opswat.com' img={opswat}>
                      <h4>OPSWAT</h4>
                      <h5>30<sup>th</sup> May 2010 To 26<sup>th</sup> October 2010</h5>
                      <p>Support Analyst Intern</p>
                    </BubbleItem>
                  </Column>
                  <Column span='6'>
                    <BubbleItem url='http://www.ccsf.edu' img={ccsf}>
                      <h4>City College of San Francisco</h4>
                      <h5>1<sup>st</sup> September 2008 To 22<sup>nd</sup> May 2009</h5>
                      <p>Tutor, Math and English</p>
                    </BubbleItem>
                  </Column>
                </Row>
              </Column>
            </Row>
          </Block>
          {/* Experience Ends */}

          {/* Contact Details */}
          <Block>
            <Row>
              <Column span='6'>
                <form action='#' method='post' className='form'>
                  <h3>Contact Me</h3>
                  <div className='form-group'>
                    <label htmlFor='InputName'>Name</label>
                    <input name='name' type='text' className='form-control' id='InputName' placeholder=''/>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='InputEmail'>Email</label>
                    <input name='email' type='text' className='form-control' id='InputEmail' placeholder=''/>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='InputTextarea'>Message</label>
                    <textarea name='body' className='form-control' rows='4' id='InputTextarea' placeholder=''></textarea>
                  </div>
                  <div className='form-group'>
                    <button type='submit' className='btn btn-danger btn-sm'>Send</button>&nbsp;
                    <button type='submit' className='btn btn-default btn-sm'>Cancel</button>
                  </div>
                </form>
              </Column>
              <Column span='6'>
                <Row>
                  <Column span='6'>
                    <IconItem icon='envelope' color='green'>
                      <h4>Email Me</h4>
                      <p>By using the form to the left</p>
                    </IconItem>
                  </Column>
                </Row>
                <Row>
                  <Column span='6'>
                    <IconItem icon='briefcase' color='lblue'>
                      <h4>RD Matters</h4>
                      <h5><a href='mailto:&#104;&#101;&#108;&#112;&#64;&#114;&#97;&#100;&#105;&#99;&#97;&#108;&#100;&#101;&#115;&#105;&#103;&#110;&#115;&#46;&#111;&#114;&#103;'>&#104;&#101;&#108;&#112;&#64;&#114;&#97;&#100;&#105;&#99;&#97;&#108;&#100;&#101;&#115;&#105;&#103;&#110;&#115;&#46;&#111;&#114;&#103;</a></h5>
                      <p>For Radical Designs support, write to the help desk.</p>
                    </IconItem>
                  </Column>
                </Row>
              </Column>
            </Row>
          </Block>
          {/* Contact Ends */}
        </div>
        <Scroll/>
      </div>
    )
  }
}

export default App;
