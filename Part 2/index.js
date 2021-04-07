import React from 'react';
import ReactDOM from 'react-dom';

import Sample from './Sample.js';
import SampleWASM from './Sample.wasm';

let coreModule;

const sample = Sample({
    locateFile: () => {
        return SampleWASM;
    },
});

sample.then((core) => {
    console.log(core.add(1, 2));
    coreModule = core;

    requestAnimationFrame(draw);
});

const draw = () => {
    coreModule.render('#glCanvas');

    requestAnimationFrame(draw);
}

ReactDOM.render(
    <div>
        <h1>Using WebAssembly with React From Scratch!</h1>
        <canvas id="glCanvas" width="100px" height="100px" />
    </div>,
    document.getElementById('root')
);
