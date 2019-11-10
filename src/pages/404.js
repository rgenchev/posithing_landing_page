import React from 'react';
import Layout from '../components/layout';

import { Link } from "gatsby"

import { navigate } from 'gatsby'

const NotFoundPage = () => {
  navigate('/');

  return null;
}

export default NotFoundPage;
