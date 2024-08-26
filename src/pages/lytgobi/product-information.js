import React, {useEffect, useState} from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Helmet from 'react-helmet'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Card from "../../components/global-components/cards"

const LytgobiHCP = () =>  {

  const [scroll, setScroll] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 100);
      });
    }, []); 

    return (
      <>

  <Layout>

    <Helmet bodyAttributes={{ class: 'interior-page lytgobi lytgobi-hcp' + (scroll ? '' : ' isi-short-on') }} />
    <Seo title="LYTGOBI® Product Information" />

    <div className="row collapse">
      <div className="columns collapse small-12 medium-12 large-4">
        <h1>LYTGOBI Resources</h1>
      </div>
      <div className="columns collapse large-text-right small-12 medium-12 large-8">
        <div className="site-link">
          <Link to="https://www.lytgobi.com/hcp" target="_blank">
            <span className="show-for-large">Click here to see the full LYTGOBI site.</span>
            <span className="hide-for-large">Tap here to see the full LYTGOBI<sup>&reg;</sup> (futibatinib) tablets site.</span>
          </Link>
        </div>
      </div>
    </div>
    
    <h2>Product Information</h2>
    <p className="click-tap-download-copy">Select a thumbnail to download</p>

    <div className="row small-up-1 medium-up-2 large-up-3 d-flex card-row">
      <div className="column column-block d-flex">
        <a href="/media/03-lytgobi/01-product-information/lytgobi-overview.pdf" class="pdf-download" target="_blank">
          <Card CardClass={''} CardImgSrc={<StaticImage src="../../images/updates/v2/cards/03-lytgobi/01-product-information/01-lytgobi-overview.png" alt="" placeholder="blurred" layout="constrained" width={445} />}
            CardTitle={<>
              <h3>LYTGOBI OVERVIEW</h3>
            </>}
            CardText={<>
              <p>An overview of the efficacy, safety, and dosing for LYTGOBI.</p>
            </>}
            >
          </Card>
        </a>
      </div>
      <div className="column column-block d-flex align-center">
        <a href="/media/03-lytgobi/01-product-information/nurse-guide.pdf" class="pdf-download" target="_blank">
          <Card CardClass={''} CardImgSrc={<StaticImage src="../../images/updates/v2/cards/03-lytgobi/01-product-information/02-nurse-guide.png" alt="" placeholder="blurred" layout="constrained" width={445} />}
            CardTitle={<>
              <h3>Nurse guide</h3>
            </>}
            CardText={<>
              <p>A guide to help nurses understand advanced cholangiocarcinoma (CCA), LYTGOBI efficacy, safety, and dosing guidelines, and how to manage common adverse events.</p>
            </>}
            >
          </Card>
        </a>
      </div>
    </div>
    </Layout>
  </>
  )
}
export default LytgobiHCP
