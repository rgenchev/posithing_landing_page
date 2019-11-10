import React from 'react';
import Layout from '../components/layout';

import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <h3>За съжаление страницата, която търсиш, не беше открита :(</h3>

    <Link to="/" className="button" style={{backgroundColor: '#C6008F'}}>Върни се обратно на главната страница!</Link>
  </Layout>
);

export default NotFoundPage;
