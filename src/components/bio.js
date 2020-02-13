/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  const { author } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(1.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        作者：<strong>{author}</strong>，推码科技 CEO，著有
        {` `}
        <a href={`https://item.jd.com/12059091.html`}>
          《Angular 从零到一》
        </a>{" "}
        和{" "}
        <a href={`https://item.jd.com/12709686.html`}>
          {" "}
          《全栈技能修炼：使用Angular和Spring Boot 打造全栈应用》
        </a>
        。在慕课网主讲的课程有{" "}
        <a href={`https://coding.imooc.com/class/123.html`}>
          Angular打造企业级协作平台
        </a>{" "}
        和{" "}
        <a href={`https://coding.imooc.com/class/336.html`}>
          Angular8开发拼多多webapp 从基础到项目实战
        </a>
      </p>
    </div>
  )
}

export default Bio
