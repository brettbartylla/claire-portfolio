import * as React from "react"
// import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from 'gatsby-image'
import { graphql } from 'gatsby'


const NotFoundPage = ({data}) => (
  <Layout>
    <Seo title="Projects | Cousins" />
    {/* <Header /> */}
    <Navbar />
    <div className="Projects m-b-30">
      <h4>Cousins</h4>
      <div className="desc-container-3x3 m-b-15">
        <article>
          <a href="https://vimeo.com/manage/videos/752607527" target="_blank" rel="noreferrer">
            <p>
              Language Island
            </p>
          </a>
        </article>
        <article>
          <p>
            Graphic design, animation, video editing, copywriting
          </p>
        </article>
      </div>

      <div className="grid-1x3">
        <Img 
          fluid={data.lI_1GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="language island Project"
        />
        <Img 
          fluid={data.lI_2GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="language island Project"
        />
        <Img 
          fluid={data.lI_3GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="language island Project"
        />
        <Img 
          fluid={data.lI_4GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="language island Project"
        />
        <Img 
          fluid={data.lI_5GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="language island Project"
        />
        <Img 
          fluid={data.lI_6GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="language island Project"
        />
        <Img 
          fluid={data.lI_7GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="language island Project"
        />
        <Img 
          fluid={data.lI_8GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="language island Project"
        />
      </div>
      <div className="desc-container-3x3 m-t-45 m-b-15">
        <article>
        <a href="https://vimeo.com/754332071" target="_blank" rel="noreferrer">
          <p>
            Ford Models
          </p>
        </a>
        </article>
        <article>
          <p>
          Design, storyboarding, animation, video editing, copywriting
          </p>
        </article>
      </div>

      <div className="grid-1x3">
        <Img 
          fluid={data.fm_01GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="language island Project"
        />
        <Img 
          fluid={data.fm_02GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="language island Project"
        />
        <Img 
          fluid={data.fm_03GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="language island Project"
        />
        <Img 
          fluid={data.fm_04GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="language island Project"
        />
        <Img 
          fluid={data.fm_05GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="language island Project"
        />
        <Img 
          fluid={data.fm_06GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="language island Project"
        />
      </div>

      <div className="desc-container-3x3 m-t-45 m-b-15">
        <article>
        <a href="https://vimeo.com/754332367" target="_blank" rel="noreferrer">
          <p>
            Right Stuff
          </p> 
        </a>
        </article>
        <article>
          <p>
            Design, storyboarding, animation, video editing, copywriting.
          </p>
        </article>
      </div>
      <div className="grid-1x3">
        <Img 
          fluid={data.rs_1GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="right stuff Project"
        />
        <Img 
          fluid={data.rs_2GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="right stuff Project"
        />
        <Img 
          fluid={data.rs_3GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="right stuff Project"
        />
        <Img 
          fluid={data.rs_4GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="right stuff Project"
        />
        <Img 
          fluid={data.rs_5GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="right stuff Project"
        />
        <Img 
          fluid={data.rs_6GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="right stuff Project"
        />
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

// image queries
export const query = graphql`
  query {
    lI_1GatsbyImage: file(relativePath: {eq: "projects/cousins/language-island/1.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    lI_2GatsbyImage: file(relativePath: {eq: "projects/cousins/language-island/2.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    lI_3GatsbyImage: file(relativePath: {eq: "projects/cousins/language-island/3.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    lI_4GatsbyImage: file(relativePath: {eq: "projects/cousins/language-island/4.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    lI_5GatsbyImage: file(relativePath: {eq: "projects/cousins/language-island/5.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    lI_6GatsbyImage: file(relativePath: {eq: "projects/cousins/language-island/6.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    lI_7GatsbyImage: file(relativePath: {eq: "projects/cousins/language-island/7.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    lI_8GatsbyImage: file(relativePath: {eq: "projects/cousins/language-island/8.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    fm_01GatsbyImage: file(relativePath: {eq: "projects/cousins/ford/ford_01.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    fm_02GatsbyImage: file(relativePath: {eq: "projects/cousins/ford/ford_02.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    fm_03GatsbyImage: file(relativePath: {eq: "projects/cousins/ford/ford_03.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    fm_04GatsbyImage: file(relativePath: {eq: "projects/cousins/ford/ford_04.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    fm_05GatsbyImage: file(relativePath: {eq: "projects/cousins/ford/ford_05.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    fm_06GatsbyImage: file(relativePath: {eq: "projects/cousins/ford/ford_06.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    rs_1GatsbyImage: file(relativePath: {eq: "projects/cousins/right-stuff/1.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    rs_2GatsbyImage: file(relativePath: {eq: "projects/cousins/right-stuff/2.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    rs_3GatsbyImage: file(relativePath: {eq: "projects/cousins/right-stuff/3.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    rs_4GatsbyImage: file(relativePath: {eq: "projects/cousins/right-stuff/4.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    rs_5GatsbyImage: file(relativePath: {eq: "projects/cousins/right-stuff/5.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    rs_6GatsbyImage: file(relativePath: {eq: "projects/cousins/right-stuff/6.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
  }
`