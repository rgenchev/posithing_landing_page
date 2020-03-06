import React from 'react';
import Layout from '../components/layout';

import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <div>
        <section className="wrapper style1 fullscreen fade-up">
          <div className="wrapper" style={{ textAlign: "center" }}>
            <h3>За съжаление страницата не беше открита :(</h3>
            <Link to="/" className="button" style={{backgroundColor: '#C6008F'}}>Обратно към главната страница</Link>
          </div>
        </section>
    </div>
  </Layout>
);

export default NotFoundPage;
