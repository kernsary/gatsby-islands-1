import React from 'react';

import Layout from '../components/Layout';
import RegionList from '../components/RegionList'
// import LeafletMap from '../components/LeafletMap'
import Map from '../components/Map'

export default function IndexPage() {

  return (
    <Layout>
        <div>
            <h2>Explore the islands of Scotland</h2>
            <div>
                <RegionList/>
            </div>
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

