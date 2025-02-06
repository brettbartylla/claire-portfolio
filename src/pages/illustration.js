import * as React from "react"
import { graphql, Link } from "gatsby"
// import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from 'gatsby-image'

const NotFoundPage = ({data}) => (
  <Layout>
    <Seo title="Projects | Illistration" />
    {/* <Header /> */}
    <Navbar />
    <div className="Projects">
      <h3>Illustration</h3>
      <div className="grid-1x3">
        <Img 
          fluid={data.illustration_1GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="Posters"
          className="m-b-50"
        />
        <Img 
          fluid={data.illustration_2GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="Posters"
          className="m-b-50"
        />
        <Img 
          fluid={data.illustration_3GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="Posters"
          className="m-b-50"
        />
        <Img 
          fluid={data.illustration_4GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="Posters"
          className="m-b-50"
        />
        <Img 
          fluid={data.illustration_5GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="Posters"
          className="m-b-50"
        />
        <Img 
          fluid={data.illustration_6GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="Posters"
          className="m-b-50"
        />
        <Img 
          fluid={data.illustration_7GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="Posters"
          className="m-b-50"
        />
        <img src="https://res.cloudinary.com/dfqto9ozl/image/upload/v1738805709/plant-life_e2cpbd.gif" alt="illustration gif" />

        <Img 
          fluid={data.illustration_8GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="Posters"
          className="m-b-50"
        />
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

// image queries
export const query = graphql`
  query {
    illustration_1GatsbyImage: file(relativePath: {eq: "projects/illustration/1.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    illustration_2GatsbyImage: file(relativePath: {eq: "projects/illustration/2.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    illustration_3GatsbyImage: file(relativePath: {eq: "projects/illustration/3.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    illustration_4GatsbyImage: file(relativePath: {eq: "projects/illustration/4.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    illustration_5GatsbyImage: file(relativePath: {eq: "projects/illustration/5.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    illustration_6GatsbyImage: file(relativePath: {eq: "projects/illustration/6.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    illustration_7GatsbyImage: file(relativePath: {eq: "projects/illustration/7.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    illustration_8GatsbyImage: file(relativePath: {eq: "projects/illustration/8.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
  }
`