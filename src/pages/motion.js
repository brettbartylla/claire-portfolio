import * as React from "react"
// import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Layout from "../components/layout"
import Seo from "../components/seo"

const NotFoundPage = ({data}) => (
  <Layout>
    <Seo title="Projects | Motion" />
    {/* <Header /> */}
    <Navbar />
    <div className="Projects p-b-20">
      <div className="fullWidthVideo">
        <div className=" m-b-15">
          <article>
            <h3>
              Blox font
            </h3>
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
          allowFullScreen
          frameBorder="0"
          title="Blox font"
        ></iframe>

        <div className="m-t-25 m-b-15">
          <article>
            <h3>
              Mango drive
            </h3>
          </article>
          <article>
            <p>
              Motion exercise
            </p>
          </article>
        </div>
        <iframe
          src="https://player.cloudinary.com/embed/?public_id=v1664226225%2Fclaire-portfolio%2Fmotion%2Fvideos%2Fvideo_02.mp4&cloud_name=dfqto9ozl&player%5Bfluid%5D=true&player%5Bcontrols%5D=true&player%5Bmuted%5D=true&player%5Bautoplay%5D=true&player%5Bloop%5D=true&source%5BsourceTypes%5D%5B0%5D=mp4"
          width="640"
          height="480"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          frameBorder="0"
          title="Mango drive"
        ></iframe>

        <div className="m-t-25 m-b-15">
          <article>
            <h3>
              So Nice
            </h3>
          </article>
          <article>
            <p>
              Sound visualizer created in p5.js for Summer Samba by Astrud Gilberto
            </p>
          </article>
        </div>
      <iframe
        src="https://player.cloudinary.com/embed/?public_id=v1664228498%2Fclaire-portfolio%2Fmotion%2Fvideos%2Fvideo_03.mp4&cloud_name=dfqto9ozl&player%5Bfluid%5D=true&player%5Bcontrols%5D=true&player%5Bmuted%5D=true&player%5Bautoplay%5D=true&player%5Bloop%5D=true&source%5BsourceTypes%5D%5B0%5D=mp4"
        width="640"
        height="480"
        allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
        allowFullScreen
        frameBorder="0"
        tite="So nice"
      ></iframe>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage