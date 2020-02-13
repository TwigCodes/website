import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="twigcodes" />
      <section id="first" className="main">
        <div className="spotlight">
          <div className="content">
            <header className="major">
              <h2>万物互联</h2>
            </header>
            <p>
              5G时代，万物互联，极低时延，将为个人生活和经济社会发展带来极大改变。专家预计，到2025年，全球5G用户数将达到14亿,占全球连接总数的15%。其中，中国将成为全球5G用户数最多的国家。5G将至，机遇挑战并存，让我们共同触摸新技术脉动，畅想无限未来。
            </p>
          </div>
          <span className="image" style={{ width: `40%`, marginTop: `1rem` }}>
            <Img fluid={data.file.childImageSharp.fluid} alt="" />
          </span>
        </div>
      </section>

      <section id="second" className="main special">
        <header className="major">
          <h2>产品介绍</h2>
        </header>
        <ul className="features">
          <li>
            <span className="icon solid major style1 fa-code"></span>
            <h3>多协议支持</h3>
            <p>支持2G、4G、NB-IoT、BlueTooth、WiFi、LoRa等通信模组接入。</p>
          </li>
          <li>
            <span className="icon major style3 fa-copy"></span>
            <h3>高效消息处理</h3>
            <p>
              提供高可靠、海量实时消息处理能力，满足各种设备管理、监控场景低延迟需求。
            </p>
          </li>
          <li>
            <span className="icon major style5 fa-gem"></span>
            <h3>可扩展的场景服务</h3>
            <p>
              提供开放的、可伸缩的系统架构，集成不同的场景化服务，满足您的设备在不同场景下的业务。
            </p>
          </li>
        </ul>
      </section>

      <section id="third" className="main special">
        <header className="major">
          <h2>产品功能</h2>
          <p>
            提供物联网的设备整合、定制化和数据可视化能力
            <br />
            提升开发效率，降低开发维护费用，带来更好的用户体验
          </p>
        </header>
        <ul className="statistics">
          <li className="style1">
            <span className="icon solid fa-code-branch"></span>
            <strong>远程管理</strong>
            提供设备管控，故障报警，远程维护，设备绑定/解绑，设备远程控制。
          </li>
          <li className="style3">
            <span className="icon solid fa-signal"></span>
            <strong>提升效率</strong>{" "}
            提升企业开发，对接物联网效率，降低运营成本，利用大数据分析助力企业产品销售。
          </li>
          <li className="style4">
            <span className="icon solid fa-laptop"></span>
            <strong>多终端</strong> 支持多屏展示，包括
            App，H5，大屏，带屏智能设备等，提供定制化界面设计服务。
          </li>
          <li className="style5">
            <span className="icon fa-gem"></span>
            <strong>大数据</strong>
            物联网提供前所未有的海量数据，进行用户画像和场景的建模，挖掘关键运营信息和指标。
          </li>
        </ul>
        <p className="content">
          针对物联网场景提供的生产力工具，可覆盖各个物联网行业核心应用场景，帮助您高效经济地完成设备、服务及应用开发。因为物联网产品链路漫长，用户很难同时兼备设备端、服务端、应用端开发能力，通过我们的产品，开发者只需关注核心业务，无需关注传统开发中的种种繁琐细节，大大降低物联网开发的难度。设备相关的属性状态、事件、报警等数据均可无缝集成，大大降低了物联网开发的体验。
        </p>
      </section>

      <section id="fourth" className="main special">
        <header className="major">
          <h2>近期博客</h2>
          <p>
            了解我们产品的最新信息
            <br />
            分享最新物联网技术文章
          </p>
        </header>
        <footer className="major">
          <ul className="actions special">
            <li>
              <Link to="/blog-list" className="button">
                阅读博客
              </Link>
            </li>
          </ul>
        </footer>
      </section>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "louis-reed-unsplash.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid(maxWidth: 500, maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
