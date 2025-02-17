import * as React from "react"
import { graphql } from "gatsby"
// import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from 'gatsby-image'

const NotFoundPage = ({data}) => (
  <Layout>
    <Seo title="Projects | Books" />
    {/* <Header /> */}
    <Navbar />
    <div className="Projects">
      <div className="m-b-15">
        <article>
          <h3>
            The Lifestyles of Fungi
          </h3>
        </article>
        <article>
          <p>
            Reference book about the kingdom of fungi, with writing 2019 excerpted from the Encyclopedia of Mushrooms & Journey
            to the Center of the Heart by Daniel Pinchbeck.
          </p>
        </article>
      </div>
      <Img 
        fluid={data.book_1GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="The Lifestyles of Fungi"
        className="m-b-10"
      />
      <Img 
        fluid={data.book_2GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="3M Project 1"
        className="m-b-50"
      />
      <div className="m-b-15">
        <article>
          <h3>
            Ascii Alphabet 
          </h3>
        </article>
        <article>
          <p>
            Alphabet book made by hand with an analog typewriter.
          </p>
        </article>
      </div>
      <Img 
        fluid={data.book_3GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="Ascii Alphabet Book"
        className="m-b-10"
      />
      <Img 
        fluid={data.book_4GatsbyImage.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain' }}
        alt="Ascii Alphabet Book"
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