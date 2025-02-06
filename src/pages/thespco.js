import * as React from "react"
import { graphql } from "gatsby"
// import Header from "../components/Header"
import Navbar from "../components/Navbar"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Img from 'gatsby-image'

const NotFoundPage = ({data}) => (
  <Layout>
    <Seo title="Projects | The SPCO" />
    <Navbar />
    <div className="Projects m-b-30">
      {/* <h4>The SPCO</h4> */}

      <div className="m-b-15 m-b-15">
      <article>
          <h3>
            Saint Paul Chamber Orchestra Wrapped 2023
          </h3>
        </article>
        <article>
          <p>
            Social reel reflecting on the artistic accomplishments of the SPCO in 2023.
          </p>
        </article>
        <article>
          <p>
            Creative direction, narrative development, motion design, video editing.
          </p>
        </article>
      </div>

      <div className="grid-2x2 m-t-10">
        <div className="fullWidthVideo">
          <iframe
            src="https://res.cloudinary.com/dfqto9ozl/video/upload/v1738804255/wrapped_01_2_ojbpjo.mp4"
            width="640"
            height="480"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            title="Encapsulated System Holder Informal video"
            ></iframe>
          </div>
        <div className="fullWidthVideo">
          <iframe
            src="https://res.cloudinary.com/dfqto9ozl/video/upload/v1738636080/wrapped_02_ahjm9n.mp4"
            width="640"
            height="480"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            title="Encapsulated System Holder Informal video"
            ></iframe>
        </div>
      </div>

      <div className="m-t-45 m-b-15">
        <article>
          <h3>
            Saint Paul Chamber Orchestra Membership Brochure
          </h3>  
          <p>
            Print design for The Saint Paul Chamber Orchestra's 2024.25 season.
          </p>      
        </article>
        <article>
          <p>
            Creative direction, branding, print design and production.
          </p>
        </article>
      </div>
      <div>
        <Img 
          fluid={data.spco_1GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="spco Project"
        />
      </div>

      <div className=" m-t-45 m-b-15">
        <article>
          <a href="https://www.youtube.com/watch?v=Jpg831hknXs " target="_blank" rel="noreferrer">
          <h3>65th Season Sizzle Video</h3>
        </a>
        </article>
        <article>
          <p>
          Marketing video for the SPCO's 65th season.
          </p>
        </article>
        <article>
          <p>
            Creative direction, narrative development, motion design, video editing.
          </p>
        </article>
      </div>
      <div className="fullWidthVideo">
        <iframe
          src="https://player.cloudinary.com/embed/?public_id=spco_sizzle_hr7uuh&cloud_name=dfqto9ozl&player[posterOptions][transformation][start_offset]=2"
          width="640"
          height="480"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          frameBorder="0"
          title="Encapsulated System Holder Informal video"
          ></iframe>
      </div>

      <div className="m-b-15 m-t-45 m-b-15">
      <article>
          <h3>
            SPCO Renewal Brochure
          </h3>
        </article>
        <article>
          <p>
            Print design for The Saint Paul Chamber Orchestra's 2024.25 season.
          </p>
        </article>
        <article>
          <p>
            Creative direction, branding, print design and production.
          </p>
        </article>
      </div>
      <div>
        <Img 
          fluid={data.spco_2GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="spco Project"
        />
      </div>

      <div className="m-b-15 m-t-45 m-b-15">
      <article>
          <h3>
            Email Banners
          </h3>
        </article>
        <article>
          <p>
            Various banners for email communications to audience members.
          </p>
        </article>
        <article>
          <p>
            Creative direction, motion design.
          </p>
        </article>
      </div>
      <div className="grid-2x2">
        <img src="https://res.cloudinary.com/dfqto9ozl/image/upload/v1738805214/black-friday_green_sq19pq.gif" alt="email header gif" />
        <img src="https://res.cloudinary.com/dfqto9ozl/image/upload/v1738643536/email_03_uyouxz.gif" alt="email header gif" />
        <img src="https://res.cloudinary.com/dfqto9ozl/image/upload/v1738681308/24.25_Banner_Concert-Reminder_Pink_rl7ubl.gif" alt="email header gif" />
        <img src="https://res.cloudinary.com/dfqto9ozl/image/upload/v1738803865/black-friday_red_kvqoao.gif" alt="email header gif" />
        
      </div>

      <div className="m-b-15 m-t-45 m-b-15">
      <article>
          <h3>
            Winter Postcards
          </h3>
        </article>
        <article>
          <p>
            Marketing postcards for 24.25 Holiday and winter concerts.
          </p>
        </article>
        <article>
          <p>
            Creative direction, branding, print design.
          </p>
        </article>
      </div>
      <div className="grid-2x2">
        <Img 
          fluid={data.spco_3GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="spco Project"
        />
        <Img 
          fluid={data.spco_4GatsbyImage.childImageSharp.fluid}
          imgStyle={{ objectFit: 'contain' }}
          alt="spco Project"
        />
      </div>
    </div>
  </Layout>
)

export default NotFoundPage

// image queries
export const query = graphql`
  query {
    spco_1GatsbyImage: file(relativePath: {eq: "projects/spco/membership.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    spco_2GatsbyImage: file(relativePath: {eq: "projects/spco/renewal.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    spco_3GatsbyImage: file(relativePath: {eq: "projects/spco/postcard_01.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
    spco_4GatsbyImage: file(relativePath: {eq: "projects/spco/postcard_02.webp"}) {
      childImageSharp {
        fluid(maxWidth: 2000, quality: 90) {
        ...GatsbyImageSharpFluid
        }
      }
    },
  }
`