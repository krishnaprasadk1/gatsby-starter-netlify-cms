import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import avllogo from '../img/avlview-logo.jpg'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item" title="Logo">
              <img src={avllogo} alt="Kaldi" style={{ width: '207px'}} />
            </Link>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            id="navMenu"
            className={`navbar-menu ${this.state.navBarActiveClass}`}
          >
            <div className="navbar-start has-text-centered">
              <Link className="navbar-item" to="/about">
                About
              </Link>
              <Link className="navbar-item" to="/products">
                Products
              </Link>
              <Link className="navbar-item" to="/blog">
                Blog
              </Link>
              <Link className="navbar-item" to="/contact">
                Contact
              </Link>
              <Link className="navbar-item" to="/contact/examples">
                Form Examples
              </Link>
              <Link className="navbar-item" to="/lists">
                Lists
              </Link>
            </div>
            <div className="navbar-end has-text-centered">
              <a
                className="navbar-item"
                href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="icon">
                  <img src={github} alt="Github" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      
    
      <header>
         <nav id="nav" class="#ffffff white" role="navigation">
            <div class="nav-wrapper container">
               <a id="logo-container" href="https://avlview.com" class="brand-logo">Logo</a>
               <div class="top_nav_raw01 hide-on-med-and-down">
                  <ul>
                     <li><a id="cntsg" href="https://avlview.com/contact-us" style="display: none;"> Contact Us |</a><a id="cntin" class="" href="https://avlview.com/contact-us/india"> Contact Us |</a></li>
                     <li> <a href="http://support.avlview.com/support/home" target="_blank"> Support |</a></li>
                     <li> <a href="https://app.avlview.com/" target="_blank"> Sign In |</a></li>
                     <li> <a href="https://avlview.com/gps-tracking-blog"> Blog |</a></li>
                     <li> <a href="https://avlview.com/ar"> <strong>عربي</strong> </a></li>
                  </ul>
               </div>
               <div class="clear"></div>
               <ul class="right hide-on-med-and-down" style="height: 30px;">
                  <li><a href="https://avlview.com/gps-tracking-benefits/">Benefits </a></li>
                  <li>
                     <a href="javascript:void()" style="padding: 0px;">Features<span class="menu-dp-arrow"><i class="material-icons">
                     arrow_drop_down
                     </i></span></a>
                     <ul>
                        <li><a href="https://avlview.com/vehicle-tracking/">Vehicle Tracking</a></li>
                        <li><a href="https://avlview.com/school-bus-tracking/">School Bus Tracking</a></li>
                     </ul>
                  </li>
                  <li><a href="https://avlview.com/vehicle-tracking-system-pricing/">Pricing</a></li>
                  <li> <a href="https://avlview.com/fleet-automation-resources/"> Resources</a></li>
                  <li><a href="https://avlview.com/become-a-partner/">Become a Partner</a></li>
               </ul>
               <ul id="nav-mobile" class="side-nav" style="left: -250px;">
                  <li><a href="https://avlview.com/gps-tracking-benefits/">Benefits</a></li>
                  <li>
                     <a href="javascript:void()">Features<span class="menu-dp-arrow"><i class="material-icons">
                     arrow_drop_down
                     </i></span></a>
                     <ul>
                        <li><a href="https://avlview.com/vehicle-tracking/">Vehicle Tracking</a></li>
                        <li><a href="https://avlview.com/school-bus-tracking/">School Bus Tracking</a></li>
                     </ul>
                  </li>
                  <li><a href="https://avlview.com/vehicle-tracking-system-pricing/">Pricing</a></li>
                  <li> <a href="https://avlview.com/fleet-automation-resources"> Resources</a></li>
                  <li><a href="https://avlview.com/become-a-partner">Become a Partner</a></li>
                  <li> <a href="https://avlview.com/contact-us" id="cntsg"> Contact Us</a><a id="cntin" class="dn" href="https://avlview.com/contact-us/india"> Contact Us</a></li>
                  <li> <a href="http://support.avlview.com/support/home" target="_blank"> Support </a></li>
                  <li> <a href="https://app.avlview.com/" target="_blank"> Sign In </a></li>
                  <li> <a href="https://avlview.com/gps-tracking-blog"> Blog </a></li>
                  <li> <a href="https://avlview.com/ar"> <strong>عربي</strong> </a></li>
               </ul>
               <a href="#" data-activates="nav-mobile" class="button-collapse"><i class="material-icons">menu</i></a>
            </div>
         </nav>
      </header>  

    )
  }
}

export default Navbar
