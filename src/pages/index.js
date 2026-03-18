import * as React from "react"
// import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"
import resume from '../pdfs/Claire-Loes_Resume.pdf' 


const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <Navbar />
    <div className="Projects info">
        <p className="intro about">
          Hi, I’m Claire Loes— a Minneapolis-based designer and illustrator working across motion, identity, and image-making for music and culture. 
        </p>
        <p className="about">
          I create visual systems that translate sound into image, using typography, color, and movement to build atmosphere and carry emotion. My work spans campaigns, visual identities, and video, often developed in close collaboration with musicians and arts organizations. 
        </p>
        <p>
          Balancing structure with experimentation, I’m interested in work that feels textural, rhythmic, and immersive. Alongside client work, I maintain an evolving <a href="https://claireloes.tumblr.com/" target="_blank" rel="noopener noreferrer">portfolio</a> of select commissions and exploratory projects. 
        </p>

        {/* <h4 className="txt-underline p-t-40">CONTACT</h4> */}
        <p className="p-t-30">
          loes.claire@gmail.com
        </p>

        <a 
          href={resume}
          target="_blank"
        >
          <p>
            Resume
          </p>
        </a>

        {/* <h4 className="txt-underline p-t-40">VIEW RESUME</h4>
        <p>
          loes.claire@gmail.com
        </p> */}
    </div>
  </Layout>
)

export default IndexPage