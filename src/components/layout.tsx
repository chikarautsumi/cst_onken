import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { layoutStyle } from "./styles/layout";

type LayoutProps = {
  pageTitle?: string;
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ pageTitle, children }) => {
  const style = layoutStyle();
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={style.container}>
      <header className={style.siteTitle}>
        {data.site.siteMetadata.title}
      </header>
      <nav>
        <ul className={style.navLinks}>
          <li className={style.navLinkItem}>
            <Link to="/" className={style.navLinkText}>
              Home
            </Link>
          </li>
          <li className={style.navLinkItem}>
            <Link to="/about" className={style.navLinkText}>
              About
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={style.heading}>{pageTitle || "propsがない状態"}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
