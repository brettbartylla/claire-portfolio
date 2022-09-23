import * as React from "react"
import { graphql } from "gatsby"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from 'gatsby-image'

const NotFoundPage = ({data}) => (
  <Layout>
    <Seo title="Indeed" />
    <Header />
    <Navbar />
    <div className="Projects">
      <h4>INDEED</h4>
      <div className="desc-container  m-b-15">
        <article>
          <p>
          Campaign Marketing Video
          </p>
        </article>
        <article>
          <p>
          Graphic design, animation, video editing, copywriting
          </p>
        </article>
        <article>
          <p>
            New hiring feature marketing video for Indeed
          </p>
        </article>
      </div>
      <Img 
        fluid={data.indeed_1GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="Indeed Project 1"
        className="m-b-50"
      />
      <div className="desc-container m-b-15">
        <article>
          <p>
            Campaign Marketing Video 
          </p>
        </article>
        <article>
          <p>
            Graphic design, animation, video editing, copywriting
          </p>
        </article>
        <article>
          <p>
            New hiring feature marketing video for Indeed
          </p>
        </article>
      </div>
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
        fluid(maxWidth: 2000, quality: 90) {
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