import * as React from "react"
import { graphql, Link } from "gatsby"
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
      <h4>3M</h4>
      <ul className="projectDetails m-b-15">
        <li>
          Graphic design, animation, video editing.
        </li>
        <li>
          Informal video on the setup of the 3M Encapsulated System Holder <a href="3m.com">Link to Video</a>
        </li>
      </ul>
      <iframe
        src="https://player.cloudinary.com/embed/?public_id=https%3A%2F%2Fres.cloudinary.com%2Fdfqto9ozl%2Fvideo%2Fupload%2Fv1663953292%2Fclaire-portfolio%2F3M%2Fmmm_project_01.mp4&cloud_name=dfqto9ozl&player%5Bfluid%5D=true&player%5Bcontrols%5D=true&player%5Bmuted%5D=true&player%5BshowJumpControls%5D=false&player%5BposterOptions%5D%5Btransformation%5D%5BstartOffset%5D=29&player%5Bautoplay%5D=true&source%5BsourceTypes%5D%5B0%5D=mp4"
        width="640"
        height="480"
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowfullscreen
        frameborder="0"
      ></iframe>


      <Img 
        fluid={data.MMM_1GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="3M Project 1"
        className="m-b-50"
      />
      <ul className="projectDetails p-t-20 m-b-15">
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