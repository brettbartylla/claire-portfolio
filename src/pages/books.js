import * as React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from 'gatsby-image'

const NotFoundPage = ({data}) => (
  <Layout>
    <Seo title="Books" />
    <Header />
    <Navbar />
    <div className="Projects">
      <h4>Posters</h4>
      <div className="desc-container m-b-15">
        <article>
          <p>
            Graphic design, animation, 
            <br />
            video editing.
          </p>
        </article>
        <article>
          <p>Encapsulated System Holder Informal video</p>
        </article>
      </div>
      <Img 
        fluid={data.book_1GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="Fungi Book"
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
        fluid={data.book_2GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="3M Project 1"
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
        fluid={data.book_3GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="3M Project 1"
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
        fluid={data.book_4GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="3M Project 1"
        className="m-b-50"
      />
    </div>
  </Layout>
)

export default NotFoundPage

// image queries
export const query = graphql`
  query {
    book_1GatsbyImage: file(relativePath: {eq: "projects/books/book_01.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    book_2GatsbyImage: file(relativePath: {eq: "projects/books/book_02.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    book_3GatsbyImage: file(relativePath: {eq: "projects/books/book_03.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    book_4GatsbyImage: file(relativePath: {eq: "projects/books/book_04.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
  }
`