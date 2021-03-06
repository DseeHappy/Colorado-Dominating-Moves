import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"

import style from "./style.module.scss"

const Promo = () => {
  const data = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "images/img/1.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Facebook: file(relativePath: { eq: "images/img/facebook.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Google: file(relativePath: { eq: "images/img/Google.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      BBB: file(relativePath: { eq: "images/img/bbb-review.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <BackgroundImage
        id="coloradopromocenter"
        Tag="section"
        fluid={data.background.childImageSharp.fluid}
        backgroundColor={`#fdb41a`}
        className={style.heading}
      >
        <div className={style.promo}>
          <div className="container">
            <div className={style.promo__inner}>
              <div className="row">
                <div className="col-md-7">
                  <h1 data-aos="fade-up">
                    Colorado's Most Professional Movers
                  </h1>
                  <p className="text" data-aos="fade-down" data-aos-delay="100">
                    Let Our Professional Home &amp; Office Movers Worry About
                    Your Move
                  </p>
                  <ul
                    className={style.promo__list}
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <li>
                      <span>Home Moves</span>
                    </li>
                    <li>
                      <span>Office Moves</span>
                    </li>
                    <li>
                      <span>Specialty Furniture</span>
                    </li>
                    <div
                      className={style.promo__buttons}
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <a
                        href="tel:7208297961"
                        className="op__btn op__btn--blue mr-3"
                      >
                        Call Now
                      </a>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className={style.promo__notification}
              data-aos="fade-down"
              data-aos-delay="0"
            >
              <p> 👉 Review Us On</p>
              <a
                href="https://g.page/colorado-dominating-moves/review?rc"
                className={style.promo__notification__img}
              >
                <Img fluid={data.Google.childImageSharp.fluid} />
              </a>
              <a
                href="https://www.facebook.com/colodomo303/reviews"
                className={style.promo__notification__img}
              >
                <Img fluid={data.Facebook.childImageSharp.fluid} />
              </a>
              <a
                href="https://www.bbb.org/us/co/aurora/profile/moving-companies/colorado-dominating-moves-0885-90277041/customer-reviews"
                className={style.promo__notification__bbb}
              >
                <Img fluid={data.BBB.childImageSharp.fluid} />
              </a>
            </div>
          </div>
        </div>
      </BackgroundImage>
    </>
  )
}
export default Promo
