import * as React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from 'gatsby-image'

const NotFoundPage = ({data}) => (
  <Layout>
    <Seo title="Projects | Posters" />
    <Header />
    <Navbar />
    <div className="Projects">
      <h4>POSTERS</h4>
      <Img 
        fluid={data.poster_1GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="Posters"
        className="m-b-50"
      />
      <Img 
        fluid={data.poster_2GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="Posters"
        className="m-b-50"
      />
      <Img 
        fluid={data.poster_3GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="Posters"
        className="m-b-50"
      />
    </div>
  </Layout>
)

export default NotFoundPage

// image queries
export const query = graphql`
  query {
    poster_1GatsbyImage: file(relativePath: {eq: "projects/posters/poster_01.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    poster_2GatsbyImage: file(relativePath: {eq: "projects/posters/poster_02.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    poster_3GatsbyImage: file(relativePath: {eq: "projects/posters/poster_03.webp"}) {
        childImageSharp {
          fluid(maxWidth: 2000, quality: 90) {
          ...GatsbyImageSharpFluid
          }
        }
      },
  }
`