import React, {useEffect} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Helmet from "react-helmet"
import Header from "./header"
import "./layout.scss"
import Isi from "./global-components/isi"
import Footer from "./footer"


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)


  useEffect(()=>{
    let aElements = document.getElementsByTagName('a');
    for(let i = 0, len = aElements.length; i < len; i++) {
      aElements[i].onclick = (e) => {
        if(e.target.classList.contains('pdf-download')){
          let t = e.target;
          let href = e.target.getAttribute('href');
          let gtmCat = 'PDF Download';
          let gtmAction = 'Download';
          let gtmLabel = href;
          if(typeof window !== "undefined" && window.gtag){
            window.gtag('event', gtmAction, {'event_category': gtmCat, 'event_label': gtmLabel, 'event_value': 0});
            console.log(`GTM REPORT: ~ Href: ${href}, Cat: ${gtmCat}, Action: ${gtmAction}, Label: ${gtmLabel}`);
          }
        }
      }
    }
  },[]);



  return (
    <>
      <Helmet>
        <script src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"  type="text/javascript" charset="UTF-8" data-domain-script="4168f06a-ec2d-44f6-8ec3-466a471fd7e6"></script>
        <script type="text/javascript">{'function OptanonWrapper() {}'}</script>
      </Helmet>

      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main className="mid-section">
          <div className="row">
            <div className="small-12 column">
              <main>{children}</main>
            </div>
          </div>
        </main>
        <Isi inView="inView" />
      <Footer/>

    </>
  )
}


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
