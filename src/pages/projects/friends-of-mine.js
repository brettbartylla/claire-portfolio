import * as React from "react"
import { graphql, Link } from "gatsby"
import Header from "../../components/Header"
import Navbar from "../../components/Navbar"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import Img from 'gatsby-image'


const NotFoundPage = ({data}) => (
  <Layout>
    <Seo title="Projects | FRIENDS OF MINE" />
    <Header />
    <Navbar />
    <div className="Projects">
      <h4>FRIENDS OF MINE</h4>
      {/* <Img 
        fluid={data.mbg_1GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="ROGÊ Project 1"
      /> */}
    </div>
  </Layout>
)

export default NotFoundPage