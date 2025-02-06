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
      <div className="m-b-15">
        <article>
          <a href="https://www.youtube.com/watch?v=mMG3wdMapDU" target="_blank" rel="noreferrer">
            <h3>Language Island Pitch Deck</h3>
          </a>
        </article>
        <article>
          <p>
            Advertising pitch for Cousins and Duolingo.
          </p>
        </article>
        <article>
          <p>
            Creative direction, presentation design.
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
      </div>
      <div className="m-t-45 m-b-15">
        <article>
          <h3>
            Ford Models Pitch Deck
          </h3>
        </article>
        <article>
          <p>
            Advertising pitch for Cousins and Ford Models.
          </p>
        </article>
        <article>
          <p>
            Creative direction, presentation design.
          </p>
        </article>
      </div>
      <div className="bgColorBlack">
        <div className="grid-1x3 p-x-15">
          <div className="">
            <Img 
              fluid={data.fm_01GatsbyImage.childImageSharp.fluid}
              imgStyle={{ objectFit: 'contain' }}
              alt="language island Project"
            />
          </div>
          <div className="">
            <Img 
              fluid={data.fm_02GatsbyImage.childImageSharp.fluid}
              imgStyle={{ objectFit: 'contain' }}
              alt="language island Project"
            />
          </div>
          <div className="">
            <Img 
              fluid={data.fm_03GatsbyImage.childImageSharp.fluid}
              imgStyle={{ objectFit: 'contain' }}
              alt="language island Project"
            />          
          </div>
          <div className="">
            <Img 
              fluid={data.fm_04GatsbyImage.childImageSharp.fluid}
              imgStyle={{ objectFit: 'contain' }}
              alt="language island Project"
            />          
          </div>
          <div className="">
            <Img 
              fluid={data.fm_05GatsbyImage.childImageSharp.fluid}
              imgStyle={{ objectFit: 'contain' }}
              alt="language island Project"
            />          
          </div>
          <div className="">
            <Img 
              fluid={data.fm_06GatsbyImage.childImageSharp.fluid}
              imgStyle={{ objectFit: 'contain' }}
              alt="language island Project"
            />
          </div>
        </div>
    </div>

      <div className="m-t-45 m-b-15">
        <article>
          <h3>
          The Right Stuff Pitch Deck
          </h3> 
        </article>
        <article>
          <p>
            Pitch deck for a documentary film.
          </p>
        </article>
        <article>
          <p>
            Creative direction, presentation design.
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
          fluid={data.rs_5GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="right stuff Project"
        />
        <Img 
          fluid={data.rs_4GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="right stuff Project"
        />
        <Img 
          fluid={data.rs_3GatsbyImage.childImageSharp.fluid}
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