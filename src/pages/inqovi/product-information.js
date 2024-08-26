import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Helmet from "react-helmet"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Card from "../../components/global-components/cards"

const InqoviHCP = () => (
  <Layout>
    <Helmet bodyAttributes={{ class: "interior-page inqovi inqovi-hcp" }} />
    <Seo title="INQOVI® Product Information" />

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
    <h2>Product Information</h2>
    <p className="click-tap-download-copy">Select a thumbnail to download</p>
    <div class="row small-up-1 medium-up-2 large-up-3 d-flex card-row">
      <div class="column column-block d-flex">
        <a
          href="/media/01-inqovi/01-product-information/inqovi-overview.pdf"
          class="pdf-download"
          target="_blank"
        >
          <Card
            CardClass={""}
            CardImgSrc={
              <StaticImage
                src="../../images/updates/v2/cards/01-inqovi/01-product-information/01-inqovi-overview.png"
                alt=""
                placeholder="blurred"
                layout="constrained"
                width={445}
              />
            }
            CardTitle={
              <>
                <h3>INQOVI OVERVIEW</h3>
              </>
            }
            CardText={
              <>
                <p>
                  A brochure with full efficacy, safety, and dosing information for INQOVI.
                </p>
              </>
            }
          ></Card>
        </a>
      </div>
      <div class="column column-block d-flex align-center">
        <a
          href="/media/01-inqovi/01-product-information/dosing-and-efficacy-pamphlet.pdf"
          class="pdf-download"
          target="_blank"
        >
          <Card
            CardClass={"mx-auto"}
            CardImgSrc={
              <StaticImage
                src="../../images/updates/v2/cards/01-inqovi/01-product-information/02-efficacy-and-dosing.png"
                alt=""
                placeholder="blurred"
                layout="constrained"
              />
            }
            CardTitle={
              <>
                <h3>EFFICACY & DOSING LEAVE-BEHIND</h3>
              </>
            }
            CardText={
              <>
                <p>
                  An overview of the oral dosing schedule and efficacy of INQOVI.
                </p>
              </>
            }
          ></Card>
        </a>
      </div>
      <div class="column column-block d-flex align-right">
        <a
          href="/media/01-inqovi/01-product-information/patient-profile-diane.pdf"
          class="pdf-download"
          target="_blank"
        >
          <Card
            CardClass={"float-right"}
            CardImgSrc={
              <StaticImage
                src="../../images/updates/v2/cards/01-inqovi/01-product-information/03-patient-profile-diane.png"
                alt=""
                placeholder="blurred"
                layout="constrained"
                width={445}
              />
            }
            CardTitle={
              <>
                <h3>Patient Profile &ndash; DIANE</h3>
              </>
            }
            CardText={
              <>
                <p>
                  An example case study of an INQOVI-switch patient with intermediate-risk MDS.
                </p>
              </>
            }
          ></Card>
        </a>
      </div>
      <div class="column column-block d-flex">
        <a
          href="/media/01-inqovi/01-product-information/patient-profile-gregory.pdf"
          class="pdf-download"
          target="_blank"
        >
          <Card
            CardClass={""}
            CardImgSrc={
              <StaticImage
                src="../../images/updates/v2/cards/01-inqovi/01-product-information/04-patient-profile-gregory.png"
                alt=""
                placeholder="blurred"
                layout="constrained"
                width={890}
              />
            }
            CardTitle={
              <>
                <h3>Patient Profile &ndash; Gregory</h3>
              </>
            }
            CardText={
              <>
                <p>
                  An example case study of a treatment-naive INQOVI patient with high-risk MDS.
                </p>
              </>
            }
          ></Card>
        </a>
      </div>
      <div class="column column-block d-flex align-center">
        <a
          href="/media/01-inqovi/01-product-information/unmet-needs-leave-behind.pdf"
          class="pdf-download"
          target="_blank"
        >
          <Card
            CardClass={"mx-auto"}
            CardImgSrc={
              <StaticImage
                src="../../images/updates/v2/cards/01-inqovi/01-product-information/05-unmet-needs-leave-behind.png"
                alt=""
                placeholder="blurred"
                layout="constrained"
                width={445}
              />
            }
            CardTitle={
              <>
                <h3>UNMET NEEDs LEAVE-BEHIND</h3>
              </>
            }
            CardText={
              <>
                <p>
                  A resource detailing patients’ preference for oral medication like INQOVI in patients with MDS.
                </p>
              </>
            }
          ></Card>
        </a>
      </div>
      <div class="column column-block d-flex align-right">
        <a
          href="/media/01-inqovi/01-product-information/what-to-expect-leave-behind.pdf"
          class="pdf-download"
          target="_blank"
        >
          <Card
            CardClass={"float-right"}
            CardImgSrc={
              <StaticImage
                src="../../images/updates/v2/cards/01-inqovi/01-product-information/06-what-to-expect-leave-behind.png"
                alt=""
                placeholder="blurred"
                layout="constrained"
                width={445}
              />
            }
            CardTitle={
              <>
                <h3>what to expect leave-behind</h3>
              </>
            }
            CardText={
              <>
                <p>
                  A resource designed to help patients and caregivers understand what to expect when treated for MDS with INQOVI.
                </p>
              </>
            }
          ></Card>
        </a>
      </div>


      <div class="column column-block d-flex">
        <a
          href="/media/01-inqovi/01-product-information/nurse-conversation-guide.pdf"
          class="pdf-download"
          target="_blank"
        >
          <Card
            CardClass={""}
            CardImgSrc={
              <StaticImage
                src="../../images/updates/v2/cards/01-inqovi/01-product-information/07-nurse-conversation-guide.png"
                alt=""
                placeholder="blurred"
                layout="constrained"
                width={890}
              />
            }
            CardTitle={
              <>
                <h3>NURSE CONVERSATION GUIDE</h3>
              </>
            }
            CardText={
              <>
                <p>
                  A tool for nurses to guide their conversations with patients who have MDS. 
                </p>
              </>
            }
          ></Card>
        </a>
      </div>
      <div class="column column-block d-flex align-center">
        <a
          href="/media/01-inqovi/01-product-information/pharmacy-guide.pdf"
          class="pdf-download"
          target="_blank"
        >
          <Card
            CardClass={"mx-auto"}
            CardImgSrc={
              <StaticImage
                src="../../images/updates/v2/cards/01-inqovi/01-product-information/08-pharmacist-guide.png"
                alt=""
                placeholder="blurred"
                layout="constrained"
                width={445}
              />
            }
            CardTitle={
              <>
                <h3>PHARMACIST GUIDE</h3>
              </>
            }
            CardText={
              <>
                <p>
                  A guide to help pharmacists understand INQOVI dosing guidelines and monitoring/modifications in the case of adverse events.
                </p>
              </>
            }
          ></Card>
        </a>
      </div>
      <div class="column column-block d-flex align-right">
        <a
          href="/media/01-inqovi/01-product-information/nurse-guide.pdf"
          class="pdf-download"
          target="_blank"
        >
          <Card
            CardClass={"float-right"}
            CardImgSrc={
              <StaticImage
                src="../../images/updates/v2/cards/01-inqovi/01-product-information/09-nurse-guide.png"
                alt=""
                placeholder="blurred"
                layout="constrained"
                width={445}
              />
            }
            CardTitle={
              <>
                <h3>Nurse guide</h3>
              </>
            }
            CardText={
              <>
                <p>
                  A guide to help nurses understand INQOVI efficacy, safety, dosing guidelines, and how to manage common adverse events.
                </p>
              </>
            }
          ></Card>
        </a>
      </div>


    </div>
  </Layout>
)

export default InqoviHCP
