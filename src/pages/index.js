import React from 'react';

// import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import IslandList from '../components/IslandList';

// import styles from './index.module.css';

export default function IndexPage() {

  return (
    <Layout>
      <IslandList region='Shetland'/>
      <IslandList region='Orkney'/>
      <IslandList region='Outer Hebrides'/>
      <IslandList region='Skye'/>
      <IslandList region='Mull'/>
      <IslandList region='Islay'/>
      <IslandList region='Firth of Clyde'/>
    </Layout>
  );
}

