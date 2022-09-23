import * as React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"
import Navbar from "../components/Navbar"

import Layout from "../components/layout"
import Seo from "../components/seo"

//images
// import cardGif from '../images/cards.gif'

//data pulls in query "data" from below
const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <Header />
    <Navbar />
    <div className="Grid--landing">
      <div></div>
    </div>
  </Layout>
)

export default IndexPage


//image queries
// export const query = graphql`
//   query {
//     cardGatsbyImage: file(relativePath: {eq: "cards.png"}) {
//       childImageSharp {
//         fluid(maxWidth: 2000) {
//         ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   },
// `