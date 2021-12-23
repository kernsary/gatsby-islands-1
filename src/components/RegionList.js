import React from 'react';

import IslandList from "./IslandList";

import styles from './regionlist.module.css';

export default function RegionList() {

    return (
        <div id={styles.regionlist}>
            <IslandList region='Shetland'/>
            <IslandList region='Orkney'/>
            <IslandList region='Outer Hebrides'/>
            <IslandList region='Skye'/>
            <IslandList region='Mull'/>
            <IslandList region='Islay'/>
            <IslandList region='Firth of Clyde'/>
        </div>
    );
}