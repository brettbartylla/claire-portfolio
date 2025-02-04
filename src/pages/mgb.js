import * as React from "react"
import { graphql, Link } from "gatsby"
// import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from 'gatsby-image'

const NotFoundPage = ({data}) => (
  <Layout>
    <Seo title="Projects | MBG" />
    {/* <Header /> */}
    <Navbar />
    <div className="Projects darkBg p-t-30 p-l-30 p-r-30 p-b-15 m-b-30">
      <div className="m-b-15 txt-white">
        <article>
          <h3>
          Logo design and business cards
          </h3>
        </article>
        <article>
          <p>
            Custom table menu with design options for clients.
          </p>
        </article>
      </div>
      <Img 
        fluid={data.mbg_1GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="MBG Project 1"
      />
    </div>
  </Layout>
)

export default NotFoundPage

// image queries
export const query = graphql`
  query {
    mbg_1GatsbyImage: file(relativePath: {eq: "projects/mbg/mbg_01.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
  }
`