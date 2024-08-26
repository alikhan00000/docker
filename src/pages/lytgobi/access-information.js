import React, {useEffect, useState} from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Helmet from 'react-helmet'
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Card from "../../components/global-components/cards"

const LytgobiPharma = () => {

  const [scroll, setScroll] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 100);
      });
    }, []); 

  return (
    <>

      <Layout>
        <Helmet bodyAttributes={{ class: 'interior-page lytgobi lytgobi-pharma' + (scroll ? '' : ' isi-short-on') }} />
        <Seo title="LYTGOBI® Access Information" />

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

        <h2>Access Information</h2>
    <p className="click-tap-download-copy">Select a thumbnail to download</p>

    <div className="row small-up-1 medium-up-2 large-up-3 d-flex card-row">

      <div className="column column-block d-flex">
        <a href="/media/03-lytgobi/02-access-information/patient-access-guide.pdf" class="pdf-download" target="_blank">
          <Card CardClass={''} CardImgSrc={<StaticImage src="../../images/updates/v2/cards/03-lytgobi/02-access-information/01-lytgobi-patient-access-guide.png" alt="" placeholder="blurred" layout="constrained" width={445} />}
            CardTitle={<>
              <h3>LYTGOBI PATIENT ACCESS GUIDE</h3>
            </>}
            CardText={<>
              <p>A resource on dosing, patient support information, and how to order LYTGOBI.</p>
            </>}
            >
          </Card>
        </a>
      </div>
      <div className="column column-block d-flex align-center">
        <a href="/media/03-lytgobi/02-access-information/patient-access-brochure.pdf" class="pdf-download" target="_blank">
          <Card CardClass={''} CardImgSrc={<StaticImage src="../../images/updates/v2/cards/03-lytgobi/02-access-information/02-patient-access-brochure.png" alt="" placeholder="blurred" layout="constrained" width={445} />}
            CardTitle={<>
              <h3>pATIENT ACCESS brochure</h3>
            </>}
            CardText={<>
              <p>A guide for healthcare providers to explain how&nbsp;Taiho Oncology Patient Support™ can help patients access their treatment.</p>
            </>}
            >
          </Card>
        </a>
      </div>
      <div className="column column-block d-flex align-center">
        <a href="/media/03-lytgobi/02-access-information/updates-to-medicare.pdf" class="pdf-download" target="_blank">
          <Card CardClass={''} CardImgSrc={<StaticImage src="../../images/updates/v2/cards/03-lytgobi/02-access-information/03-updates-to-medicare.png" alt="" placeholder="blurred" layout="constrained" width={445} />}
            CardTitle={<>
              <h3>Updates to Medicare Part D in 2024 and 2025</h3>
            </>}
            CardText={<>
              <p>A guide for healthcare providers on 2024-2025 Medicare Part D updates to assist qualified Medicare patients in obtaining additional prescription-cost support.</p>
            </>}
            >
          </Card>
        </a>
      </div>

      <div className="column column-block d-flex">
        <a href="/media/03-lytgobi/02-access-information/hcp-portal-road-map.pdf" class="pdf-download" target="_blank">
          <Card CardClass={''} CardImgSrc={<StaticImage src="../../images/updates/v2/cards/03-lytgobi/02-access-information/04-hcp-portal-road-map.png" alt="" placeholder="blurred" layout="constrained" width={445} />}
            CardTitle={<>
              <h3>HCP Portal Road Map</h3>
            </>}
            CardText={<>
              <p>A tool for oncologists to help manage patients, connect with Taiho Oncology case managers, access resources, track prescribers, upload documents, view cases, and receive real-time updates.</p>
            </>}
            >
          </Card>
        </a>
      </div>
      <div className="column column-block d-flex align-center">
        <a href="/media/03-lytgobi/02-access-information/patient-enrollment-form-english.pdf" class="pdf-download" target="_blank">
          <Card CardClass={''} CardImgSrc={<StaticImage src="../../images/updates/v2/cards/03-lytgobi/02-access-information/05-patient-enrollment-form-english.png" alt="" placeholder="blurred" layout="constrained" width={445} />}
            CardTitle={<>
              <h3>PATIENT ENROLLMENT FORM <span style={{ fontWeight: 'normal'}}>(ENGLISH)</span></h3>
            </>}
            CardText={<>
              <p>A form to enroll patients into the Taiho Oncology Patient Support&trade; program.</p>
            </>}
            >
          </Card>
        </a>
      </div>
      <div className="column column-block d-flex align-center">
        <a href="/media/03-lytgobi/02-access-information/patient-enrollment-form-spanish.pdf" class="pdf-download" target="_blank">
          <Card CardClass={''} CardImgSrc={<StaticImage src="../../images/updates/v2/cards/03-lytgobi/02-access-information/06-patient-enrollment-form-spanish.png" alt="" placeholder="blurred" layout="constrained" width={445} />}
            CardTitle={<>
              <h3>PATIENT ENROLLMENT FORM <span style={{ fontWeight: 'normal'}}>(Spanish)</span></h3>
            </>}
            CardText={<>
              <p>A form to enroll patients into the Taiho Oncology Patient Support&trade; program.</p>
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

export default LytgobiPharma