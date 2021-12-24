import React from 'react';

import Layout from '../components/Layout';
import RegionList from '../components/RegionList'
// import LeafletMap from '../components/LeafletMap'
import Map from '../components/Map'

import styles from './index.module.css';

export default function IndexPage() {

  return (
    <Layout id={styles.indexcontainer}>
        <div>
            <h2>Explore the islands of Scotland</h2>
            <RegionList/>
        </div>

        {/*{typeof window !== 'undefined' &&*/}
        {/*<LeafletMap*/}
        {/*    position={[52,-0.5]}*/}
        {/*    zoom={8}*/}
        {/*    markerText={"Hello, this is a marker"}*/}
        {/*/>*/}
        {/*}*/}

        <Map/>

    </Layout>
  );
}

