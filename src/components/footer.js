import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"

const Footer = ({ siteTitle }) => (

        <footer>
          <div className="row container-row">
            <div className="small-12 column">
              
              <span class="inqoviReg">
                Developed by &copy; Astex Pharmaceuticals, Inc.<br className="show-for-small-only" /> Marketed by &copy; Taiho Oncology, Inc.<br/> 
                INQOVI is a registered trademark of&nbsp;<br className="show-for-small-only" />Otsuka Pharmaceutical Co., Ltd.
                </span>
              <span class="lonReg">LONSURF is a registered trademark of TAIHO PHARMACEUTICAL CO., LTD., and used under license by Taiho Oncology, Inc.</span>
              <span class="lytgobiReg">LYTGOBI<sup>&reg;</sup> is a registered trademark of Taiho Pharmaceutical Co., Ltd.</span>
            </div>
            <div className="small-12 xlarge-4 column footer-logo">
              <a href="https://www.taihooncology.com" target="_blank" rel="noreferrer">
                <StaticImage
                  id="logo"
                  class=""
                  src="../images/taiho-oncology-logo-small.png"
                  alt="Taiho Oncology logo"
                  placeholder="blurred"
                  layout="constrained"
                  width={200}
                />   
              </a>
            </div>
            <div class="small-12 column">
              <nav className="footer-nav d-flex">
                <ul className="no-bullets">
                  <li><a href="https://www.taihooncology.com/us/privacy/" rel="noreferrer" target="_blank">Privacy Policy</a></li>
                  <li><a href="https://www.taihooncology.com/us/terms/" rel="noreferrer" target="_blank">Terms of Use</a></li>
                  <li><a href="https://www.taihooncology.com/us/contact/" rel="noreferrer" target="_blank">Contact Us</a></li>
                </ul>
              </nav>
               
            </div>
            <div class="small-12 column copy-column">
              <ul className="no-bullets">
                <li className="text-uppercase tc-black"> &copy; &nbsp; Taiho Oncology, Inc.</li>
                <li className="tc-black">05/2024</li>
              </ul>
              <ul className="no-bullets rights-list">
                <li className="tc-black">All rights reserved.</li>
                <li className="tc-black">TOI-PM-US-0625 v4</li>
              </ul>
            </div>
          </div>
        </footer>
              
    )

Footer.propTypes = {
  children: PropTypes.node,
}

export default Footer
