import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/Layout';
import IslandList from '../components/IslandList';

// import styles from './index.module.css';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
  {
    markdownRemark {
        frontmatter {
            title
            region
            area
            population
            information
            image
            lat
            long
        }
    }
  }
`);

  return (
    <Layout>
        {/*'Dummy layout text'*/}
      <IslandList data = {data}/>
    </Layout>
  );
}

