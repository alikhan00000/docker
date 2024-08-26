import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Helmet from 'react-helmet'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Card from "../../components/global-components/cards"

const LonsurfPatient = () => (
  <Layout>
    <Helmet bodyAttributes={{ class: 'interior-page lonsurf lonsurf-patients' }} />
    <Seo title="LONSURF® Resources for Patients" />

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

    <h2>Resources for Patients</h2>
    <p className="click-tap-download-copy">Select a thumbnail to download</p>

    <div className="row small-up-1 medium-up-2 large-up-3 d-flex card-row">
      <div className="column column-block d-flex">
        <a href="/media/02-lonsurf/03-resources-for-patients/sunlight-trial-overview-video.mp4" class="pdf-download" target="_blank">
          <Card 
            CardClass={''}
            CardImgSrc ={<StaticImage src="../../images/updates/v2/cards/02-lonsurf/03-resources-for-patients/01-sunlight-trial-overview-video.png" alt="" placeholder="blurred" layout="constrained" width={445} />}
            CardTitle={<>
              <h3>SUNLIGHT Trial Overview Video</h3>
            </>}
            CardText={<>
              <p>A patient-friendly 5-minute overview of the SUNLIGHT trial.</p>
            </>}
            >
          </Card>
        </a>
      </div>
      <div className="column column-block d-flex align-center">
        <a href="/media/02-lonsurf/03-resources-for-patients/patient-and-caregiver-brochure-english.pdf" class="pdf-download" target="_blank">
          <Card 
            CardClass={'mx-auto'}
            CardImgSrc ={<StaticImage src="../../images/updates/v2/cards/02-lonsurf/03-resources-for-patients/02-patient-and-caregiver-brochure-english.png" alt="" placeholder="blurred" layout="constrained" width={445} />}
            CardTitle={<>
              <h3>PATIENT AND CAREGIVER BROCHURE <span style={{ fontWeight: 'normal' }}>(ENGLISH)</span></h3>
            </>}
            CardText={<>
              <p>Includes patient-friendly information on how LONSURF can help, dosing, side effects, and financial support services.</p>
            </>}
            >
          </Card>
        </a>
      </div>
      <div className="column column-block d-flex align-center">
        <a href="https://www.lonsurf.com/taking-lonsurf/how-to-take-lonsurf#dosage-calendar" class="pdf-download" target="_blank">
          <Card 
            CardClass={'mx-auto'}
            CardImgSrc ={<StaticImage src="../../images/updates/v2/cards/02-lonsurf/03-resources-for-patients/05-treatment-calendar.png" alt="" placeholder="blurred" layout="constrained" width={445} />}
            CardTitle={<>
              <h3 style={{ background: 'none' }}>TREATMENT CALENDAR</h3>
            </>}
            CardText={<>
              <p>Helps patients organize their treatment schedule and keep track of treatment. A digital version is available <a href="/" style={{ color: '#0000FF' }}><u>here</u></a>.</p>
            </>}
            >
          </Card>
        </a>
      </div>
       <div className="column column-block d-flex">
         {/* <a href="/" class="pdf-download" target="_blank"> */}
            <Card 
              CardClass={'float-right'}
              CardImgSrc ={<StaticImage src="../../images/updates/v2/cards/02-lonsurf/03-resources-for-patients/06-lonsurf-treatment-kit.png" alt="" placeholder="blurred" layout="constrained" width={445} />}
              CardTitle={<>
                <h3 style={{ background: 'none' }}>LONSURF Treatment Kit</h3>
              </>}
              CardText={<>
                <p>A treatment kit is available to help patients get the most out of their treatment. </p>
              </>}
              >
            </Card>
          {/*</a>*/}
        </div>
    </div>

    <div className="callout-container callout-lonsurf text-center">
      <p>The LONSURF&nbsp;Treatment Kit and a hard copy of the Treatment Calendar are available upon request.<br/>Contact your local Oncology Account Manager for more information.</p>
    </div>

  </Layout>
)

export default LonsurfPatient
