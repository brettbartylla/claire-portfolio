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
      <h4 className="u-underline">INDEED</h4>
      <ul>
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
        fluid={data.indeed_1GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="Indeed Project 1"
      />
      <ul>
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
        fluid={data.indeed_2GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="Indeed Project 1"
      />


    </div>
  </Layout>
)

export default NotFoundPage



// image queries
export const query = graphql`
  query {
    indeed_1GatsbyImage: file(relativePath: {eq: "projects/indeed/indeed_01.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    indeed_2GatsbyImage: file(relativePath: {eq: "projects/indeed/indeed_02.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000) {
        ...GatsbyImageSharpFluid
        }
      }
    },
  }
`