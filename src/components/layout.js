import React, { useState, useEffect, useRef } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import { rhythm } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  const [selectedMenuIdx, setSelectedMenuIdx] = useState(0)
  const [fixNav, setFixNav] = useState(false)
  const mainRef = useRef(null)
  useEffect(_ => {
    const handleScroll = _ => {
      if (window.pageYOffset > mainRef.current.offsetTop) {
        setFixNav(true)
      } else {
        setFixNav(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return _ => {
      window.removeEventListener("scroll", handleScroll)
    }
  })
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <div>
        <header id="header">
          <ul>
            <li style={{ marginRight: rhythm(1), display: `inline-block` }}>
              <Link to="/" style={{ backgroundImage: `none` }}>
                首页
              </Link>
            </li>
            <li style={{ marginRight: rhythm(1), display: `inline-block` }}>
              <Link to="/blog-list" style={{ backgroundImage: `none` }}>
                博客
              </Link>
            </li>
          </ul>
          <h1>{title}</h1>
          <p>推码科技 -- 专业的物联网云服务商</p>
        </header>
        <nav id="nav" className={fixNav ? `alt` : null}>
          <ul>
            <li>
              <a
                href="#first"
                className={selectedMenuIdx === 0 ? `active` : null}
                onClick={() => setSelectedMenuIdx(0)}
              >
                万物互联
              </a>
            </li>
            <li>
              <a
                href="#second"
                className={selectedMenuIdx === 1 ? `active` : null}
                onClick={() => setSelectedMenuIdx(1)}
              >
                产品介绍
              </a>
            </li>
            <li>
              <a
                href="#third"
                className={selectedMenuIdx === 2 ? `active` : null}
                onClick={() => setSelectedMenuIdx(2)}
              >
                产品功能
              </a>
            </li>
            <li>
              <a
                href="#fourth"
                className={selectedMenuIdx === 3 ? `active` : null}
                onClick={() => setSelectedMenuIdx(3)}
              >
                近期博客
              </a>
            </li>
          </ul>
        </nav>
      </div>
    )
  } else {
    header = (
      <div
        style={{
          display: `flex`,
          justifyContent: `space-between`,
          alignItems: `center`,
        }}
      >
        <span className="logo">
          <img src={data.file.childImageSharp.fluid.src} alt="" />
        </span>
        <div
          style={{
            display: `flex`,
            flexDirection: `column`,
            justifyContent: `center`,
            alignItems: `center`,
          }}
        >
          <h3>{title}</h3>
          <h6 style={{ letterSpacing: `1rem`, marginRight: `-1rem` }}>
            推码科技
          </h6>
        </div>
        <ul>
          <li style={{ marginRight: rhythm(1), display: `inline-block` }}>
            <Link to="/" style={{ backgroundImage: `none` }}>
              首页
            </Link>
          </li>
          <li style={{ marginRight: rhythm(1), display: `inline-block` }}>
            <Link to="/blog-list" style={{ backgroundImage: `none` }}>
              博客
            </Link>
          </li>
        </ul>
      </div>
    )
  }
  return (
    <div id="wrapper">
      {header}
      <main id="main" ref={mainRef}>
        {children}
      </main>
      <footer id="footer" className="copyright">
        <section>
          <h2>关于我们</h2>
          <p>
            推码科技是一家专注于物联网/移动互联网服务的公司，公司研发的物联网产品已应用于房地产、互联网、电商等多个行业。公司和京东、首创等行业巨头形成了密切的合作服务关系。
          </p>
        </section>
        <section>
          <h2>联系我们</h2>
          <dl className="alt">
            <dt>地址</dt>
            <dd>北站路 115 号金利大厦 1906 &bull; 沈阳 &bull; 辽宁 </dd>
            <dt>Email</dt>
            <dd>
              <a href="mailto:contact@twigcodes.com">contact@twigcodes.com</a>
            </dd>
          </dl>
        </section>
        <div
          className="copyright"
          style={{ display: `flex`, justifyContent: `space-around` }}
        >
          <span>&copy; {new Date().getFullYear()} 推码科技版权所有</span>
          <span>辽ICP备18008975号-1</span>
        </div>
      </footer>
    </div>
  )
}

export default Layout
