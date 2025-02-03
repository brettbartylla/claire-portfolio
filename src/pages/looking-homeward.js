import * as React from "react"
import { graphql } from "gatsby"
// import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from 'gatsby-image'

const NotFoundPage = ({data}) => (
  <Layout>
    <Seo title="Projects | Looking Homeward" />

    <Navbar />
    <div className="Projects m-b-30">
      <h4>Looking Homeward</h4>
      <div className="desc-container m-b-15">
        <article>
          <p>Encapsulated System Holder Informational video</p>
        </article>
        <article>
          <p>
            Graphic design, animation, 
            <br />
            video editing
          </p>
        </article>
      </div>

      <div className="grid-2x2 m-t-10">
      <Img 
        fluid={data.lh_1GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="book project"
      />
      <Img 
        fluid={data.lh_2GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="book project"
      />
      <Img 
        fluid={data.lh_3GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="book project"
      />
      <Img 
        fluid={data.lh_4GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="book project"
      />
      </div>
      <div className="grid-2x2 m-t-10">
      <Img 
        fluid={data.lh_5GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="book project"
      />
      <Img 
        fluid={data.lh_6GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="book project"
      />
      <Img 
        fluid={data.lh_7GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="book project"
      />
      <Img 
        fluid={data.lh_8GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="book project"
      />
      </div>
      <div className="grid-2x2 m-t-20">
      <Img 
        fluid={data.lh_9GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="book project"
      />
      <Img 
        fluid={data.lh_10GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="book project"
      />
      <Img 
        fluid={data.lh_11GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="book project"
      />
      <Img 
        fluid={data.lh_12GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="book project"
      />
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

// image queries
export const query = graphql`
  query {
    lh_1GatsbyImage: file(relativePath: {eq: "projects/lookingHomeward/lh_1.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    lh_2GatsbyImage: file(relativePath: {eq: "projects/lookingHomeward/lh_2.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    lh_3GatsbyImage: file(relativePath: {eq: "projects/lookingHomeward/lh_3.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    lh_4GatsbyImage: file(relativePath: {eq: "projects/lookingHomeward/lh_4.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    lh_5GatsbyImage: file(relativePath: {eq: "projects/lookingHomeward/lh_5.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    lh_6GatsbyImage: file(relativePath: {eq: "projects/lookingHomeward/lh_6.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    lh_7GatsbyImage: file(relativePath: {eq: "projects/lookingHomeward/lh_7.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    lh_8GatsbyImage: file(relativePath: {eq: "projects/lookingHomeward/lh_8.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    lh_9GatsbyImage: file(relativePath: {eq: "projects/lookingHomeward/lh_9.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    lh_10GatsbyImage: file(relativePath: {eq: "projects/lookingHomeward/lh_10.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    lh_11GatsbyImage: file(relativePath: {eq: "projects/lookingHomeward/lh_11.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    lh_12GatsbyImage: file(relativePath: {eq: "projects/lookingHomeward/lh_12.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    lh_13GatsbyImage: file(relativePath: {eq: "projects/lookingHomeward/lh_13.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    lh_14GatsbyImage: file(relativePath: {eq: "projects/lookingHomeward/lh_14.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
  }
`