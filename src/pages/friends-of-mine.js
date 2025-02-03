import * as React from "react"
import { graphql } from "gatsby"
// import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from 'gatsby-image'

const NotFoundPage = ({data}) => (
  <Layout>
    <Seo title="Projects | 3M" />
    {/* <Header /> */}
    <Navbar />
    <div className="Projects">
      <h4>3M</h4>
      <div className="desc-container-wide m-b-15">
        <article>
          <p>
            UX and motion design
          </p>
        </article>
        <article>
          <p>
            Website for paper product brand <a className="link" href="http://www.friendsofmine.shop">Friends of Mine</a> 
          </p>
        </article>
      </div>
      <a href="http://www.friendsofmine.shop" target="_blank" rel="noreferrer">
      <Img 
          fluid={data.fom_1GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="Friends of Mine"
          className="m-b-50"
        />
      </a>

    </div>
  </Layout>
)

export default NotFoundPage

// image queries
export const query = graphql`
  query {
    fom_1GatsbyImage: file(relativePath: {eq: "projects/friendsofmine/fom_01.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
  }
`