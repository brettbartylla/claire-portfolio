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
    <Navbar />
    <div className="Projects m-b-30">
      <h4>3M</h4>
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
      <div className="fullWidthVideo">
        <iframe
          src="https://player.cloudinary.com/embed/?public_id=https%3A%2F%2Fres.cloudinary.com%2Fdfqto9ozl%2Fvideo%2Fupload%2Fv1663953292%2Fclaire-portfolio%2F3M%2Fmmm_project_01.mp4&cloud_name=dfqto9ozl&player%5Bfluid%5D=true&player%5Bcontrols%5D=true&player%5Bmuted%5D=true&player%5BshowJumpControls%5D=false&player%5BposterOptions%5D%5Btransformation%5D%5BstartOffset%5D=29&player%5Bautoplay%5D=true&source%5BsourceTypes%5D%5B0%5D=mp4"
          width="640"
          height="480"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          frameBorder="0"
          title="Encapsulated System Holder Informal video"
          ></iframe>
      </div>

      <div className="grid-2x2 m-t-10">
      <Img 
        fluid={data.MMM_1GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="3m Project"
      />
      <Img 
        fluid={data.MMM_2GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="3m Project"
      />
      <Img 
        fluid={data.MMM_3GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="3m Project"
      />
      <Img 
        fluid={data.MMM_4GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="3m Project"
      />
      </div>
      <div className="desc-container m-b-15 m-t-45 m-b-15">
        <article>
          <p>
            Impact Detection Gateway video
          </p>
        </article>
        <article>
          <p>Design, storyboarding, animation</p>
        </article>
      </div>
      <div className="fullWidthVideo">
        <iframe
          src="https://player.cloudinary.com/embed/?public_id=v1664246584%2Fclaire-portfolio%2F3M%2F3M_project_02.mp4&cloud_name=dfqto9ozl&player%5Bfluid%5D=true&player%5Bcontrols%5D=true&source%5BsourceTypes%5D%5B0%5D=mp4"
          width="640"
          height="480"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowfullscreen
          frameborder="0"
        ></iframe>
      </div>
      <div className="grid-2x2 m-t-10">
      <Img 
        fluid={data.MMM_5GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="3m Project"
      />
      <Img 
        fluid={data.MMM_6GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="3m Project"
      />
      <Img 
        fluid={data.MMM_7GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="3m Project"
      />
      <Img 
        fluid={data.MMM_8GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="3m Project"
      />
      </div>

      <div className="desc-container m-b-15 m-t-45 m-b-15">
        <article>
          <p>
            Molecular Detetion System video
          </p>
        </article>
        <article>
          <p>Design, storyboarding, animation</p>
        </article>
      </div>
      <div className="grid-2x2">
      <Img 
        fluid={data.MMM_9GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="3m Project"
      />
      <Img 
        fluid={data.MMM_10GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="3m Project"
      />
      <Img 
        fluid={data.MMM_11GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="3m Project"
      />
      <Img 
        fluid={data.MMM_12GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="3m Project"
      />
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

// image queries
export const query = graphql`
  query {
    MMM_1GatsbyImage: file(relativePath: {eq: "projects/3M/3M_01.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    MMM_2GatsbyImage: file(relativePath: {eq: "projects/3M/3M_02.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    MMM_3GatsbyImage: file(relativePath: {eq: "projects/3M/3M_03.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    MMM_4GatsbyImage: file(relativePath: {eq: "projects/3M/3M_04.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    MMM_5GatsbyImage: file(relativePath: {eq: "projects/3M/3M_05.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    MMM_6GatsbyImage: file(relativePath: {eq: "projects/3M/3M_06.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    MMM_7GatsbyImage: file(relativePath: {eq: "projects/3M/3M_07.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    MMM_8GatsbyImage: file(relativePath: {eq: "projects/3M/3M_08.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    MMM_9GatsbyImage: file(relativePath: {eq: "projects/3M/3M_09.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    MMM_10GatsbyImage: file(relativePath: {eq: "projects/3M/3M_10.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    MMM_11GatsbyImage: file(relativePath: {eq: "projects/3M/3M_11.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    MMM_12GatsbyImage: file(relativePath: {eq: "projects/3M/3M_12.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
  }
`