import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Helmet from 'react-helmet'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Card from "../../components/global-components/cards"

const InqoviPatient = () => (
  <Layout>
    <Helmet bodyAttributes={{ class: 'interior-page inqovi inqovi-patients' }} />
    <Seo title="INQOVI® Resources for Patients" />

    <div className="row collapse">
      <div className="columns collapse small-12 medium-12 large-4">
        <h1>INQOVI Resources</h1>
      </div>
      <div className="columns collapse large-text-right small-12 medium-12 large-8">
        <div className="site-link">
          <Link to="https://www.inqovi.com/hcp" target="_blank">
            <span className="show-for-large">Click here to see the full INQOVI site.</span>
            <span className="hide-for-large">Tap here to see the full INQOVI<sup>&reg;</sup> (decitabine and cedazuridine) tablets site.</span>
          </Link>
        </div>
      </div>
    </div>
    <h2>Resources for Patients</h2>
    <p className="click-tap-download-copy">Select a thumbnail to download</p>
    <div className="row small-up-1 medium-up-2 large-up-3 d-flex card-row">
      <div className="column column-block d-flex">
        <a href="/media/01-inqovi/03-resources-for-patients/patient-brochure-english.pdf" class="pdf-download" target="_blank">
          <Card 
            CardClass={''}
            CardImgSrc ={<StaticImage src="../../images/updates/v2/cards/01-inqovi/03-resources-for-patients/01-patient-brochure.png" alt="Patient Brochure" placeholder="blurred" layout="constrained" width={445} />}
            CardTitle={<>
              <h3>Patient Brochure</h3>
            </>}
            CardText={<>
              <p>A comprehensive brochure for patients containing information about MDS and treatment with INQOVI, such as dosing schedule, tips for managing side effects, and how to get financial support (for eligible patients).</p>
            </>}
            >
          </Card>
        </a>
      </div>
      <div className="column column-block d-flex align-center">
        <a href="/media/01-inqovi/03-resources-for-patients/patient-brochure-spanish.pdf" class="pdf-download" target="_blank">
          <Card 
            CardClass={'mx-auto'}
            CardImgSrc ={<StaticImage src="../../images/updates/v2/cards/01-inqovi/03-resources-for-patients/02-patient-brochure-spanish.png" alt="Patient Brochure (Spanish)" placeholder="blurred" layout="constrained" width={445} />}
            CardTitle={<>
              <h3>Patient Brochure <span style={{ fontWeight: 'normal'}}>(Spanish)</span></h3>
            </>}
            CardText={<>
              <p>A comprehensive brochure for Spanish-speaking patients containing information about MDS and treatment with INQOVI, such as dosing schedule, tips for managing side effects, and how to get financial support (for eligible patients).</p>
            </>}
            >
          </Card>
        </a>
      </div>
      <div className="column column-block d-flex align-right">
        <a href="/media/01-inqovi/03-resources-for-patients/caregiver-brochure.pdf" class="pdf-download" target="_blank">
          <Card 
            CardClass={'float-right'}
            CardImgSrc ={<StaticImage src="../../images/updates/v2/cards/01-inqovi/03-resources-for-patients/03-caregiver-brochure.png" alt="Caregiver Brochure" placeholder="blurred" layout="constrained" width={445} />}
            CardTitle={<>
              <h3>Caregiver Brochure</h3>
            </>}
            CardText={<>
              <p>A caregiver brochure, similar to the patient brochure, intended for anyone who might be helping patients manage treatment with INQOVI.</p>
            </>}
            >
          </Card>
        </a>
      </div>
      <div className="column column-block d-flex">
        <a href="/media/01-inqovi/03-resources-for-patients/caregiver-brochure-spanish.pdf" class="pdf-download" target="_blank">
          <Card 
            CardClass={''}
            CardImgSrc ={<StaticImage src="../../images/updates/v2/cards/01-inqovi/03-resources-for-patients/04-caregivier-brochure-spanish.png" alt="Caregiver Brochure (Spanish)" placeholder="blurred" layout="constrained" width={445} />}
            CardTitle={<>
              <h3>Caregiver Brochure <span style={{ fontWeight: 'normal'}}>(Spanish)</span></h3>
            </>}
            CardText={<>
              <p>A caregiver brochure in Spanish, similar to the patient brochure, intended for anyone who might be helping patients manage treatment with INQOVI.</p>
            </>}
            >
          </Card>
        </a>
      </div>
    </div>

  </Layout>
)

export default InqoviPatient
