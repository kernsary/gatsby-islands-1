import React from 'react';

// import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import IslandList from '../components/IslandList';

// import styles from './index.module.css';

export default function IndexPage() {

  return (
    <Layout>
      <IslandList region='Clyde'/>
    </Layout>
  );
}

