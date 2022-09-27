import * as React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from 'gatsby-image'


const NotFoundPage = ({data}) => (
  <Layout>
    <Seo title="Projects | Rogê" />
    <Header />
    <Navbar />
    <div className="Projects">
      <h4>ROGÊ</h4>
      <div className="desc-container m-b-15">
        <article>
          <p>
            Pra Vida Lyric Video
          </p>
        </article>
        <article>
          <p>
            Typography and motion design
          </p>
        </article>
      </div>

      <div className="grid-2x2">
        <img src="https://res.cloudinary.com/dfqto9ozl/image/upload/f_webp/v1664222355/claire-portfolio/rog%C3%AA/pravida_gif_01.gif" alt="Music video gif" />
        <img src="https://res.cloudinary.com/dfqto9ozl/image/upload/f_webp/v1664222745/claire-portfolio/rog%C3%AA/pravida_gif_02.gif" alt="Music video gif" />
        <img src="https://res.cloudinary.com/dfqto9ozl/image/upload/f_webp/v1664222355/claire-portfolio/rog%C3%AA/pravida_gif_04.gif" alt="Music video gif" />
        <img src="https://res.cloudinary.com/dfqto9ozl/image/upload/f_webp/v1664222352/claire-portfolio/rog%C3%AA/pravida_gif_03.gif" alt="Music video gif" />
        <img src="https://res.cloudinary.com/dfqto9ozl/image/upload/f_webp/v1664222351/claire-portfolio/rog%C3%AA/pravida_gif_05.gif" alt="Music video gif" />
        <img src="https://res.cloudinary.com/dfqto9ozl/image/upload/f_webp/v1664222746/claire-portfolio/rog%C3%AA/pravida_gif_06.gif" alt="Music video gif" />
      </div>
    </div>
  </Layout>
)

export default NotFoundPage