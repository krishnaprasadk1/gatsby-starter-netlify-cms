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
      <nav id="nav" className="#ffffff white" role="navigation">
      <div className="nav-wrapper container">
         <a id="logo-container" href="https://avlview.com" className="brand-logo">Logo</a>
         <div className="top_nav_raw01 hide-on-med-and-down">
            <ul>
               <li><a id="cntsg" href="https://avlview.com/contact-us" style={{display: 'none'}}> Contact Us |</a><a id="cntin" className="" href="https://avlview.com/contact-us/india"> Contact Us |</a></li>
               <li> <a href="http://support.avlview.com/support/home" target="_blank"> Support |</a></li>
               <li> <a href="https://app.avlview.com/" target="_blank"> Sign In |</a></li>
               <li> <a href="https://avlview.com/gps-tracking-blog"> Blog |</a></li>
               <li> <a href="https://avlview.com/ar"> <strong>عربي</strong> </a></li>
            </ul>
         </div>
         <div className="clear"></div>
         <ul className="right hide-on-med-and-down" style={{height: '30px'}}>
            <li><a href="https://avlview.com/gps-tracking-benefits/">Benefits </a></li>
            <li>
               <a href="javascript:void()" style={{padding: '0px'}}>Features<span className="menu-dp-arrow"><i className="material-icons">
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
         <ul id="nav-mobile" className="side-nav" style={{left: '-250px'}}>
            <li><a href="https://avlview.com/gps-tracking-benefits/">Benefits</a></li>
            <li>
               <a href="javascript:void()">Features<span className="menu-dp-arrow"><i className="material-icons">
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
            <li> <a href="https://avlview.com/contact-us" id="cntsg"> Contact Us</a><a id="cntin" className="dn" href="https://avlview.com/contact-us/india"> Contact Us</a></li>
            <li> <a href="http://support.avlview.com/support/home" target="_blank"> Support </a></li>
            <li> <a href="https://app.avlview.com/" target="_blank"> Sign In </a></li>
            <li> <a href="https://avlview.com/gps-tracking-blog"> Blog </a></li>
            <li> <a href="https://avlview.com/ar"> <strong>عربي</strong> </a></li>
         </ul>
         <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
      </div>
   </nav>
      
    )
  }
}

export default Navbar
