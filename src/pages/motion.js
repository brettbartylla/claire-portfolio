import * as React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from 'gatsby-image'

const NotFoundPage = ({data}) => (
  <Layout>
    <Seo title="Projects | MOTION" />
    <Header />
    <Navbar />
    <div className="Projects">
      <h4>MOTION</h4>
      <div className="fullWidthVideo">
        <div className="desc-container-wide m-b-15">
          <article>
            <p>
              Blox font
            </p>
          </article>
          <article>
            <p>
              Moving typeface in-use video
            </p>
          </article>
        </div>
        <iframe
          src="https://player.cloudinary.com/embed/?public_id=v1664226203%2Fclaire-portfolio%2Fmotion%2Fvideos%2Fvideo_01.mp4&cloud_name=dfqto9ozl&player%5Bfluid%5D=true&player%5Bcontrols%5D=true&player%5Bmuted%5D=true&player%5Bautoplay%5D=true&player%5Bloop%5D=true&source%5BsourceTypes%5D%5B0%5D=mp4"
          width="640"
          height="480"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowfullscreen
          frameborder="0"
        ></iframe>

        <div className="desc-container-wide m-t-25 m-b-15">
          <article>
            <p>
              So Nice
            </p>
          </article>
          <article>
            <p>
              Sound visualizer created in p5.js for Summer Samba by Astrrud Gilberto
            </p>
          </article>
        </div>
        <iframe
          src="https://player.cloudinary.com/embed/?public_id=v1664226225%2Fclaire-portfolio%2Fmotion%2Fvideos%2Fvideo_02.mp4&cloud_name=dfqto9ozl&player%5Bfluid%5D=true&player%5Bcontrols%5D=true&player%5Bmuted%5D=true&player%5Bautoplay%5D=true&player%5Bloop%5D=true&source%5BsourceTypes%5D%5B0%5D=mp4"
          width="640"
          height="480"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowfullscreen
          frameborder="0"
        ></iframe>

      </div>
    </div>
  </Layout>
)

export default NotFoundPage