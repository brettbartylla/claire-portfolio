import * as React from "react"
// import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from 'gatsby'


const NotFoundPage = ({data}) => (
  <Layout>
    <Seo title="Projects | Indeed" />
    {/* <Header /> */}
    <Navbar />
    <div className="Projects">
      <div className="m-b-15">
        <article>
        <a href="https://vimeo.com/manage/videos/752607527" target="_blank" rel="noreferrer">
          <h3>
            Campaign Marketing Video
          </h3>
        </a>
        </article>
        <article>
          <p>
            New hiring feature marketing video for Indeed.
          </p>
        </article>
        <article>
          <p>
          Graphic design, animation, video editing, copywriting.
          </p>
        </article>
      </div>

      <div className="grid-2x2">
        <img src="https://res.cloudinary.com/dfqto9ozl/image/upload/f_webp/v1663971454/claire-portfolio/indeed/gifs/indeed_gif_01.gif" alt="" />
        <img src="https://res.cloudinary.com/dfqto9ozl/image/upload/f_webp/v1663971454/claire-portfolio/indeed/gifs/indeed_gif_03.gif" alt="" />
        <img src="https://res.cloudinary.com/dfqto9ozl/image/upload/f_webp/v1663971454/claire-portfolio/indeed/gifs/indeed_gif_02.gif" alt="" />
        <img src="https://res.cloudinary.com/dfqto9ozl/image/upload/f_webp/v1663971454/claire-portfolio/indeed/gifs/indeed_gif_10.gif" alt="" />
      </div>
      <div className="m-t-45 m-b-15">
        <article>
        <a href="https://vimeo.com/754332071" target="_blank" rel="noreferrer">
          <h3>
            Help Center Billing video
          </h3>
        </a>
        </article>
        <article>
          <p>
          Design, storyboarding, animation, video editing, copywriting
          </p>
        </article>
      </div>

      <div className="grid-2x2">
        <img src="https://res.cloudinary.com/dfqto9ozl/image/upload/f_webp/v1663971454/claire-portfolio/indeed/gifs/indeed_gif_04.gif" alt="" />
        <img src="https://res.cloudinary.com/dfqto9ozl/image/upload/f_webp/v1663971454/claire-portfolio/indeed/gifs/indeed_gif_05.gif" alt="" />
        <img src="https://res.cloudinary.com/dfqto9ozl/image/upload/f_webp/v1663971454/claire-portfolio/indeed/gifs/indeed_gif_06.gif" alt="" />
        <img src="https://res.cloudinary.com/dfqto9ozl/image/upload/f_webp/v1663971454/claire-portfolio/indeed/gifs/indeed_gif_13.gif" alt="" />
      </div>

      <div className="m-t-45 m-b-15">
        <article>
        <a href="https://vimeo.com/754332367" target="_blank" rel="noreferrer">
          <h3>
            Help Center Campaigns video
          </h3> 
        </a>
        </article>
        <article>
          <p>
            Design, storyboarding, animation, video editing, copywriting.
          </p>
        </article>
      </div>
      <div className="grid-2x2 m-b-30">
        <img src="https://res.cloudinary.com/dfqto9ozl/image/upload/f_webp/v1663971454/claire-portfolio/indeed/gifs/indeed_gif_08.gif" alt="" />
        <img src="https://res.cloudinary.com/dfqto9ozl/image/upload/f_webp/v1663971454/claire-portfolio/indeed/gifs/indeed_gif_07.gif" alt="" />
        <img src="https://res.cloudinary.com/dfqto9ozl/image/upload/f_webp/v1663971454/claire-portfolio/indeed/gifs/indeed_gif_09.gif" alt="" />
        <img src="https://res.cloudinary.com/dfqto9ozl/image/upload/f_webp/v1663971454/claire-portfolio/indeed/gifs/indeed_gif_12.gif" alt="" />
      </div>
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
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    indeed_3GatsbyImage: file(relativePath: {eq: "projects/indeed/indeed_03.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    indeed_4GatsbyImage: file(relativePath: {eq: "projects/indeed/indeed_04.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    indeed_5GatsbyImage: file(relativePath: {eq: "projects/indeed/indeed_05.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    indeed_6GatsbyImage: file(relativePath: {eq: "projects/indeed/indeed_06.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    indeed_7GatsbyImage: file(relativePath: {eq: "projects/indeed/indeed_07.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    indeed_8GatsbyImage: file(relativePath: {eq: "projects/indeed/indeed_08.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    indeed_9GatsbyImage: file(relativePath: {eq: "projects/indeed/indeed_09.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
  }
`