import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Helmet from 'react-helmet'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Card from "../../components/global-components/cards"

const LonsurfHcp = () => (
  <Layout>
    <Helmet bodyAttributes={{ class: 'interior-page lonsurf lonsurf-hcp' }} />
    <Seo title="LONSURF® Product Information" />

    <div className="row collapse">
      <div className="columns collapse small-12 medium-12 large-4">
        <h1>LONSURF Resources</h1>
      </div>
      <div className="columns collapse large-text-right small-12 medium-12 large-8">
        <div className="site-link">
          <Link to="https://www.lonsurfhcp.com/" target="_blank">
            <span className="show-for-large">Click here to see the full LONSURF site.</span>
            <span className="hide-for-large">Tap here to see the full LONSURF<sup>&reg;</sup> (trifluridine and tipiracil) tablets site.</span>
          </Link>
        </div>
      </div>
    </div>

    <h2>Product Information</h2>
    <p className="click-tap-download-copy">Select a thumbnail to download</p>

    <div className="row small-up-1 medium-up-2 large-up-3 d-flex card-row">
      <div className="column column-block d-flex">
        <a href="/media/02-lonsurf/01-product-information/lonsurf-overview.pdf" class="pdf-download" target="_blank">
          <Card 
            CardClass={''}
            CardImgSrc ={<StaticImage src="../../images/updates/v2/cards/02-lonsurf/01-product-information/01-lonsurf-overview.png" alt="" placeholder="blurred" layout="constrained" width={445} />}
            CardTitle={<>
              <h3>LONSURF Overview</h3>
            </>}
            CardText={<>
              <p>An overview of the efficacy, safety, and dosing for LONSURF +/- bevacizumab.</p>
            </>}
            >
          </Card>
        </a>
      </div>
      <div className="column column-block d-flex align-center">
        <a href="/media/02-lonsurf/01-product-information/dosing-quick-reference-guide.pdf" class="pdf-download" target="_blank">
          <Card 
            CardClass={'float-right'}
            CardImgSrc ={<StaticImage src="../../images/updates/v2/cards/02-lonsurf/01-product-information/03-dosing-quick-reference-guide.png" alt="" placeholder="blurred" layout="constrained" width={445} />}
            CardTitle={<>
              <h3>DOSING QUICK REFERENCE GUIDE</h3>
            </>}
            CardText={<>
              <p>High-level LONSURF +/- bevacizumab dosing information.</p>
            </>}
            >
          </Card>
        </a>
      </div>
      <div className="column column-block d-flex align-right">
        <a href="/media/02-lonsurf/01-product-information/colon-cancer-nccn-guidelines-pamphlet.pdf" class="pdf-download" target="_blank">
          <Card 
            CardClass={''}
            CardImgSrc ={<StaticImage src="../../images/updates/v2/cards/02-lonsurf/01-product-information/04-colon-cancer-nccn-guidelines-pamphlet.png" alt="" placeholder="blurred" layout="constrained" width={445} />}
            CardTitle={<>
              <h3>Colon Cancer NCCN Guidelines<sup>&reg;</sup> Pamphlet</h3>
            </>}
            CardText={<>
              <p>An overview of recommended second-line and subsequent therapy options for colon cancer from the NCCN Guidelines<sup>&reg;</sup>.</p>
            </>}
            >
          </Card>
        </a>
      </div>
      {/*
      <div className="column column-block d-flex align-center">
        <a href="/media/02-lonsurf/01-product-information/" class="pdf-download" target="_blank">
          <Card 
            CardClass={'mx-auto'}
            CardImgSrc ={<StaticImage src="../../images/updates/v2/cards/02-lonsurf/01-product-information/02-cover-of-approved-dosing.png" alt="" placeholder="blurred" layout="constrained" width={445} />}
            CardTitle={<>
              <h3>TBD</h3>
            </>}
            CardText={<>
              <p>TBD</p>
            </>}
            >
          </Card>
        </a>
      </div>
      <div className="column column-block d-flex align-center">
        <a href="/media/02-lonsurf/01-product-information/" class="pdf-download" target="_blank">
          <Card 
            CardClass={'mx-auto'}
            CardImgSrc ={<StaticImage src="../../images/updates/v2/cards/02-lonsurf/01-product-information/05-cover-of-approved-sunlight-pro-overview.png" alt="" placeholder="blurred" layout="constrained" width={445} />}
            CardTitle={<>
              <h3>TBD</h3>
            </>}
            CardText={<>
              <p>TBD</p>
            </>}
            >
          </Card>
        </a>
      </div>
      <div className="column column-block d-flex align-right">
        <a href="/media/02-lonsurf/01-product-information/" class="pdf-download" target="_blank">
          <Card 
            CardClass={'float-right'}
            CardImgSrc ={<StaticImage src="../../images/updates/v2/cards/02-lonsurf/01-product-information/06-cover-of-approved-lonsurf-gastric-cancer.png" alt="" placeholder="blurred" layout="constrained" width={445} />}
            CardTitle={<>
              <h3>TBD</h3>
            </>}
            CardText={<>
              <p>TBD</p>
            </>}
            >
          </Card>
        </a>
      </div>
      */}
      <div className="column column-block d-flex">
        <a href="https://www.lonsurfhcp.com/dosing/dosage-calculator" class="pdf-download" target="_blank">
          <Card 
            CardClass={''}
            CardImgSrc ={<StaticImage src="../../images/updates/v2/cards/02-lonsurf/01-product-information/07-dosing-calculator-personalized-treatment.png" alt="" placeholder="blurred" layout="constrained" width={445} />}
            CardTitle={<>
              <h3 style={{ background: 'none' }}>Dosing Calculator & Personalized Treatment calendar</h3>
            </>}
            CardText={<>
              <p>Calculate your patients’ recommended LONSURF dosage and create personalized treatment calendars to help patients keep track of their therapy <a href="/" style={{ color: '#0000FF' }}><u>here</u></a>.</p>
            </>}
            >
          </Card>
        </a>
      </div>
    </div>

    <div className="callout-container callout-lonsurf text-center">
      <p>Note: HCPs have the option to create a personalized treatment calendar for their patients via the Dosing Calculator & Personalized  Treatment Calendar shown above and available on the LONSURF HCP <a href="https://www.lonsurfhcp.com/dosing/dosage-calculator" target="_blank" style={{ color: '#0000FF' }}><u>website</u></a>. HCPs can also opt for their patients to create a personalized treatment calendar themselves, which can be found in the patient section of this website or via the LONSURF Patient <a href="https://www.lonsurf.com/taking-lonsurf/how-to-take-lonsurf#dosage-calendar" target="_blank" style={{ color: '#0000FF' }}><u>website</u></a>.</p>
    </div>

  </Layout>
)

export default LonsurfHcp
