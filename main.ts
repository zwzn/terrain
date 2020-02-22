
import { doMap, defaultParams } from './terrain'
import * as d3 from 'd3'
import { setSeed } from './random'


function generate() {
    setSeed(location.hash.slice(1))

    doMap(d3.selectAll('svg'), {
        ...defaultParams,
    })
}

generate()

window.onhashchange = generate