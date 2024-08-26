import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Header = ({ siteTitle }) => (

  <header>
    <div className="row row-logo-bar">
      <div className="small-10 large-3 column bg-secondary column-logo">
      <Link to="/">
          <StaticImage
            id="logo"
            src="../images/Taiho-Oncology-Logo.png"
            alt="Taiho Oncology logo"
            placeholder="blurred"
            layout="constrained"
            width={409}
          />
        </Link>
      </div>
      <div className="small-2 column hide-for-large bg-secondary mobile-nav">
        <input className="side-menu" type="checkbox" id="side-menu"/>
        <label className="hamb" htmlFor="side-menu"><span className="hamb-line"></span></label>
          <nav className="nav">
            <input className="d-none inqovi-input" id="inqoviInput" type="checkbox" name="inqovi-menu" />
            <label htmlFor="inqoviInput" class="inqovi-label">INQOVI</label>
            <ul className="menu inqovi-menu">
              <li><Link to="/inqovi/product-information/" activeClassName="active"><span>Product Information</span></Link></li>
              <li><Link to="/inqovi/access-information/" activeClassName="active"><span>Access Information</span></Link></li>
              <li><Link to="/inqovi/resources-for-patients/" activeClassName="active"><span>Resources for Patients</span></Link></li>
            </ul>
            <input className="d-none lonsurf-input" id="lonsurfInput" type="checkbox" name="lonsurf-menu" />
            <label htmlFor="lonsurfInput" class="lonsurf-label">LONSURF</label>
            <ul className="menu lonsurf-menu">
              <li><Link to="/lonsurf/product-information/" activeClassName="active"><span>Product Information</span></Link></li>
              <li><Link to="/lonsurf/access-information/" activeClassName="active"><span>Access Information</span></Link></li>
              <li><Link to="/lonsurf/resources-for-patients/" activeClassName="active"><span>Resources for Patients</span></Link></li>
            </ul>
            <input className="d-none lytgobi-input" id="lytgobiInput" type="checkbox" name="lytgobi-menu" />
            <label htmlFor="lytgobiInput" class="lytgobi-label">LYTGOBI</label>
            <ul className="menu lytgobi-menu">
              <li><Link to="/lytgobi/product-information/" activeClassName="active"><span>Product Information</span></Link></li>
              <li><Link to="/lytgobi/access-information/" activeClassName="active"><span>Access Information</span></Link></li>
              <li><Link to="/lytgobi/resources-for-patients/" activeClassName="active"><span>Resource for Patients</span></Link></li>
            </ul>
          </nav>
      </div>
      <div className="small-12 large-3 column bg-secondary text-center column-resources">
        <strong>Downloadable Resources</strong>
      </div>
      <div className="small-12 large-2 column show-for-large logo-one">
        <Link to="/inqovi/product-information/">
          <StaticImage
            id="inqovi-logo"
            src="../images/inqovi-logo.svg"
            alt="INQOVI logo"
            placeholder="blurred"
            layout="constrained"
            width={169}
          />
        </Link>
      </div>
      <div className="small-12 large-2 column show-for-large logo-two">
        <Link to="/lonsurf/product-information/">
          <StaticImage
            id="lonsurf-logo"
            src="../images/lonsurf-logo.svg"
            alt="LONSURF logo"
            placeholder="blurred"
            layout="constrained"
            width={130}
          />
        </Link>
      </div>
      <div className="small-12 large-2 column show-for-large logo-three">
        <Link to="/lytgobi/product-information/">
          <StaticImage
            id="lytgobi-logo"
            src="../images/lytgobi-logo.svg"
            alt="LYTGOBI logo"
            placeholder="blurred"
            layout="constrained"
            height={85}
          />
        </Link>
      </div>
    </div>
    <div className="row large-collapse show-for-large" id="nav-container-desktop">
      <div className="small-12 column">
        <nav className="main-navigation inqovi-nav">
          <ul className="no-bullet">
            <li><Link to="/inqovi/product-information/" activeClassName="active"><span>Product Information</span></Link></li>
            <li><Link to="/inqovi/access-information/" activeClassName="active"><span>Access Information</span></Link></li>
            <li><Link to="/inqovi/resources-for-patients/" activeClassName="active"><span>Resources for Patients</span></Link></li>
          </ul>
        </nav>
        <nav className="main-navigation lonsurf-nav">
          <ul className="no-bullet">
            <li><Link to="/lonsurf/product-information/" activeClassName="active"><span>Product Information</span></Link></li>
            <li><Link to="/lonsurf/access-information/" activeClassName="active"><span>Access Information</span></Link></li>
            <li><Link to="/lonsurf/resources-for-patients/" activeClassName="active"><span>Resources for Patients</span></Link></li>
          </ul>
        </nav>
        <nav className="main-navigation lytgobi-nav">
          <ul className="no-bullet">
            <li><Link to="/lytgobi/product-information/" activeClassName="active"><span>Product Information</span></Link></li>
            <li><Link to="/lytgobi/access-information/" activeClassName="active"><span>Access Information</span></Link></li>
            <li><Link to="/lytgobi/resources-for-patients/" activeClassName="active"><span>Resources for Patients</span></Link></li>
          </ul>
        </nav>
      </div>
    </div>
    <div className="row hcp-only">
      <div className="small-12 column text-right">
        <span>For US Healthcare Professionals Only</span>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header