import * as React from "react"
// import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"


const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <Navbar />
    <div className="Projects info">
        <p className="intro">
          Hi! I’m Claire Loes, a designer and illustrator living in Minneapolis. 
          I earned my BFA from Minneapolis College of Art and Design (MCAD) in 2020. 
          My work is quite diverse, ranging from commercial projects to more expressive, 
          artistic pieces.
        </p>
        <p>
          I work with a broad variety of clients; throughout my projects, playful typography, 
          an enthusiasm for color and motion that brings the design to life represent my creative 
          interests as a designer. I’m inspired by the time I spend outside and thoughtful details.
        </p>

        <h4 className="txt-underline p-t-40">CONTACT</h4>
        <p>
          loes.claire@gmail.com
        </p>

        <h4 className="txt-underline p-t-40">RESUME</h4>
        <p>
          loes.claire@gmail.com
        </p>
    </div>
  </Layout>
)

export default IndexPage