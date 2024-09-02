import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Helmet from 'react-helmet'
import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from "../components/global-components/cards"

const IndexPage = () => (
  <Layout>
    <Helmet bodyAttributes={{ class: 'home' }} />
    <Seo title="Home" />

    <h1 className="show-for-large">kaam sy kaaam tsting 123</h1>
    <h1 className="hide-for-large">Tap the brand icon below to view resources related to product, access, and patient resource information.</h1>

    <div className="row d-flex">
      <div className="small-12 medium-6 large-4 xlarge-4 column pb-2 md_pb-0">
        <Link to="/inqovi/product-information/">
          <Card
            CardClass={'inqovi-card'}
            CardImgSrc ={<StaticImage src="../images/inqovi-logo.png" alt="INQOVI logo" placeholder="blurred" layout="constrained" height={490} />}
            CardText={<>
            <p>Download useful resources</p>
            <p>about <b>INQOVI tablets</b> for your</p>
            <p>practice and your patients.</p>
            </>}
            >
          </Card>
        </Link>
        <div className="site-link">
          <Link to="https://www.inqovi.com/hcp" target="_blank">View the full INQOVI site.</Link>
        </div>
      </div>
      <div className="small-12 medium-6 large-4 xlarge-4 column">
        <Link to="/lonsurf/product-information/">
          <Card
            CardClass={'lonsurf-card'}
            CardImgSrc ={<StaticImage src="../images/lonsurf-logo.png" alt="LONSURF logo" placeholder="blurred" layout="constrained" height={490} />}
            CardText={<>
              <p>Download useful resources</p>
              <p>about <b>LONSURF tablets</b> for your</p>
              <p>practice and your patients.</p>
            </>}
            >
          </Card>
        </Link>
        <div className="site-link">
          <Link to="https://www.lonsurfhcp.com/" target="_blank">View the full LONSURF site.</Link>
        </div>
      </div>
      <div className="small-12 medium-6 large-4 xlarge-4 column pb-2 md_pb-0">
        <Link to="/lytgobi/product-information/">
          <Card
            CardClass={'lytgobi-card'}
            CardImgSrc ={<StaticImage src="../images/lytgobi-logo.png" alt="LYTGOBI logo" placeholder="blurred" layout="constrained" height={490} />}
            CardText={<>
              <p>Download useful resources</p>
              <p>about <b>LYTGOBI tablets</b> for your</p>
              <p>practice and your patients.</p>
            </>}
            >
          </Card>
        </Link>
        <div className="site-link">
          <Link to="https://www.lytgobi.com/hcp" target="_blank">View the full LYTGOBI site.</Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
