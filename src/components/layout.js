import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import '../assets/sass/main.scss';
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Posithing' },
            { name: 'keywords', content: 'новини, медия, България, позитивизъм, постижения, успехи, гордост' },
            { property: 'og:url', content: "https://angry-nobel-f58237.netlify.com/" },
            { property: 'og:title', content: "Posithing" },
            { property: 'og:description', content: 'Информирайте се за хубавите/позитивните неща случващи се в България.' },
            { property: 'og:image', content: 'https://images.unsplash.com/photo-1533186758335-367d64aeb7ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1555&q=80' }
          ]}
          link={[
            {
              "rel": "icon",
              "type": "image/png",
              "href": "favicon.ico"
            }
          ]}
        >
          <html lang="bg" />
        </Helmet>
        <div>{children}</div>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
