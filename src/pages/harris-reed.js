import * as React from "react"
// import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Layout from "../components/layout"
import Seo from "../components/seo"


const NotFoundPage = ({data}) => (
  <Layout>
    <Seo title="Projects | HARRIS REED" />
    {/* <Header /> */}
    <Navbar />
    <div className="Projects">
      <h3>HARRIS REED</h3>
      {/* <Img 
        fluid={data.mbg_1GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="ROGÊ Project 1"
      /> */}
    </div>
  </Layout>
)

export default NotFoundPage