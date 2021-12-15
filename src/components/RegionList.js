import React from 'react';

import IslandList from "./IslandList";

export default function RegionList() {

    return (
        <div>
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