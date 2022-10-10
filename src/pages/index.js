import * as React from "react"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Helmet from "react-helmet"
import { withPrefix } from "gatsby"


const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <Header />
    <Navbar />
    <div className="Projects info">
        <p>
            Claire Loes is a freelance graphic designer and artist currently based 
            in Minneapolis, Minnesota. In December 2020 they earned their BFA in Graphic 
            Design from the Minneapolis College of Art and Design.
        </p>
        <p>
            Loes' work embraces an intersection of handmade and digital image-making. They are currently inspired by the music of Lena Platonos and the collaborative work of Nam June Paik and Charlotte Moorman. 
        </p>

        <p>
            This fall, Claire is knitting and making videos in their spare time.
        </p>
        <h4 className="txt-underline p-t-40">CONTACT</h4>
        <p>
          loes.claire@gmail.com
        </p>
    </div>
  </Layout>
)

export default IndexPage