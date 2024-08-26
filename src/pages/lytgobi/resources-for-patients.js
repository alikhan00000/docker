import React, {useEffect, useState} from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Helmet from 'react-helmet'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Card from "../../components/global-components/cards"

const LytgobiPatient = () =>  {

  const [scroll, setScroll] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 100);
      });
    }, []); 

  return (
    <>
  <Layout>
    <Helmet bodyAttributes={{ class: 'interior-page lytgobi lytgobi-patients' + (scroll ? '' : ' isi-short-on') }} />
    <Seo title="LYTGOBI® Resources for Patients" />

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

    <h2>Resources for Patients</h2>
    <p className="click-tap-download-copy">Select a thumbnail to download</p>
    
    <div className="row small-up-1 medium-up-2 large-up-3 d-flex card-row">

      <div className="column column-block d-flex">
        <a href="/media/03-lytgobi/03-resources-for-patients/patient-and-caregiver-brochure-english.pdf" class="pdf-download" target="_blank">
          <Card CardClass={''} CardImgSrc={<StaticImage src="../../images/updates/v2/cards/03-lytgobi/03-resources-for-patients/01-patient-and-caregiver-brochure-english.png" alt="" placeholder="blurred" layout="constrained" width={445} />}
            CardTitle={<>
              <h3>PATIENT AND CAREGIVER BROCHURE <span style={{ fontWeight: 'normal'}}>(ENGLISH)</span></h3>
            </>}
            CardText={<>
              <p>Includes patient-friendly information on how LYTGOBI can help, dosing, side effects, and financial support services.</p>
            </>}
            >
          </Card>
        </a>
      </div>
    </div>

    <div className="callout-container callout-inqovi text-center">
      <p>A blister pack opener is available upon request.<br/>Contact your local Oncology Account Manager for more information.</p>
    </div>

    </Layout>
  </>
  )
}

export default LytgobiPatient