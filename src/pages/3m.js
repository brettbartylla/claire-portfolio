import * as React from "react"
import { graphql, Link } from "gatsby"
import Navbar from "../components/Navbar"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from 'gatsby-image'

const NotFoundPage = ({data}) => (
  <Layout>
    <Seo title="Indeed" />
    <Navbar />
    <div className="Projects">
      <h4 className="u-underline">3M</h4>
      <ul className="projectDetails">
        <li>
          Graphic design, animation, video editing.
        </li>
        <li>
          Informal video on the setup of the 3M Encapsulated System Holder <a href="3m.com">Link to Video</a>
        </li>
      </ul>
      <Img 
        fluid={data.MMM_1GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="3M Project 1"
      />
      <ul className="projectDetails">
        <li>
          Campaign Marketing Video
        </li>
        <li>
          Graphic design, animation, video editing, copywriting
        </li>
        <li>
          New hiring feature marketing video for Indeed
        </li>
      </ul>
      <Img 
        fluid={data.MMM_2GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="3m Project 2"
      />


    </div>
  </Layout>
)

export default NotFoundPage



// image queries
export const query = graphql`
  query {
    MMM_1GatsbyImage: file(relativePath: {eq: "projects/3M/3M_01.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    MMM_2GatsbyImage: file(relativePath: {eq: "projects/3M/3M_02.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
        }
      }
    },
  }
`