import * as React from "react"
import { graphql } from "gatsby"
// import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from 'gatsby-image'

const NotFoundPage = ({data}) => (
  <Layout>
    <Seo title="Projects | The SPCO" />
    <Navbar />
    <div className="Projects m-b-30">
      <h4>The SPCO</h4>

      <div className="desc-container m-b-15 m-t-45 m-b-15">
      <article>
        <a href="https://vimeo.com/manage/videos/752607527" target="_blank" rel="noreferrer">
          <p>
            SPCO Membership Brochure
          </p>
        </a>
        </article>
        <article>
          <p>
          Print design for The Saint Paul Chamber Orchestra's 2024.25 season.
          </p>
        </article>
        <article>
          <p>
            Creative direction, branding, print design and production.
          </p>
        </article>
      </div>

      <div>
        <Img 
          fluid={data.spco_1GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="spco Project"
        />
      </div>
      <div className="desc-container m-b-15 m-t-45 m-b-15">
      <article>
        <a href="https://vimeo.com/manage/videos/752607527" target="_blank" rel="noreferrer">
          <p>
            SPCO Renewal Brochure
          </p>
        </a>
        </article>
        <article>
          <p>
            Print design for The Saint Paul Chamber Orchestra's 2024.25 season.
          </p>
        </article>
        <article>
          <p>
            Creative direction, branding, print design and production.
          </p>
        </article>
      </div>
      <div>
        <Img 
          fluid={data.spco_2GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="spco Project"
        />
      </div>


      <div className="desc-container m-b-15 m-t-45 m-b-15">
      <article>
        <a href="https://vimeo.com/manage/videos/752607527" target="_blank" rel="noreferrer">
          <p>
            tbd
          </p>
        </a>
        </article>
        <article>
          <p>
          Print design for The Saint Paul Chamber Orchestra's 2024.25 season.
          </p>
        </article>
        <article>
          <p>
            Creative direction, branding, print design and production.
          </p>
        </article>
      </div>


      <div className="grid-2x2">
        <Img 
          fluid={data.spco_3GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="spco Project"
        />
        <Img 
          fluid={data.spco_4GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="spco Project"
        />
      </div>
      <div className="grid-2x2">
        <Img 
          fluid={data.spco_3GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="spco Project"
        />
        <Img 
          fluid={data.spco_4GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="spco Project"
        />
      </div>

      <div className="desc-container m-b-15 m-t-45 m-b-15">
      <article>
        <a href="https://vimeo.com/manage/videos/752607527" target="_blank" rel="noreferrer">
          <p>
            SPCO Wrapped 2023
          </p>
        </a>
        </article>
        <article>
          <p>
            Social reel reflecting on the artistic accomplishments of the SPCO in 2023.
          </p>
        </article>
        <article>
          <p>
            Creative direction, narrative development, motion design, video editing.
          </p>
        </article>
      </div>

      <div className="grid-2x2 m-t-10">
        <div className="fullWidthVideo">
          <iframe
            src="https://res.cloudinary.com/dfqto9ozl/video/upload/v1738636080/wrapped_02_ahjm9n.mp4"
            width="640"
            height="480"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            title="Encapsulated System Holder Informal video"
            ></iframe>
        </div>
        <div className="fullWidthVideo">
          <iframe
            src="https://res.cloudinary.com/dfqto9ozl/video/upload/v1738636076/wrapped_01_brsw49.mp4"
            width="640"
            height="480"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            title="Encapsulated System Holder Informal video"
            ></iframe>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

// image queries
export const query = graphql`
  query {
    spco_1GatsbyImage: file(relativePath: {eq: "projects/spco/membership.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    spco_2GatsbyImage: file(relativePath: {eq: "projects/spco/renewal.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    spco_3GatsbyImage: file(relativePath: {eq: "projects/spco/postcard_01.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    spco_4GatsbyImage: file(relativePath: {eq: "projects/spco/postcard_02.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
  }
`