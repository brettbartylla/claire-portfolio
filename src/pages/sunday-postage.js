import * as React from "react"
import { graphql } from "gatsby"
// import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from 'gatsby-image'

const NotFoundPage = ({data}) => (
  <Layout>
    <Seo title="Projects | Sunday Postage" />
    {/* <Header /> */}
    <Navbar />
    <div className="Projects p-b-40">
      <div className="m-b-15">
        <article>
          <h3>
          Branding, print & apparel design
          </h3>
        </article>
        <article>
          <p>
            Designs using this system include apparel, patches, home products, tags, & assets for print and web use.
          </p>
        </article>
      </div>
      <Img 
        fluid={data.spv_2GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="Sunday Postage"
      />
      <Img 
        fluid={data.spv_1GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="Sunday Postage"
        className="negMarg"
      />
    </div>
  </Layout>
)

export default NotFoundPage

// image queries
export const query = graphql`
  query {
    spv_1GatsbyImage: file(relativePath: {eq: "projects/sundaypostage/spv_01.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    spv_2GatsbyImage: file(relativePath: {eq: "projects/sundaypostage/spv_02.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
  }
`