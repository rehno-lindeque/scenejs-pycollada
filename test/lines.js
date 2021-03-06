SceneJS.createScene({
    type: 'scene',
    id: 'Scene',
    canvasId: 'scenejsCanvas',
    loggingElementId: 'scenejsLog',
    flags:
        {
            backfaces: false, 
        },
    nodes: [
        {
            type: 'library',
            nodes: [
                {
                    type: 'material',
                    coreId: 'Material',
                    baseColor:
                        {
                            r: 0.64,
                            b: 0.64,
                            g: 0.64,
                        },
                    emit: 0.0,
                },
                {
                    type: 'geometry',
                    coreId: 'Cube-mesh',
                    positions: [1.0,1.0,-1.0,1.0,-1.0,-1.0,-1.0,-0.999999821186,-1.0,-0.999999701977,1.0,-1.0,1.0,0.999999523163,1.0,0.999999403954,-1.00000095367,1.0,-1.0,-0.999999701977,1.0,-1.0,1.0,1.0,0.977304816246,2.10886001587,1.0,0.977304279804,2.10886001587,-0.999999523163,-0.028740759939,1.6484940052,2.47447395325,-0.815371215343,-0.5016310215,2.17498397827,-0.794783592224,-2.70871400833,0.346526801586,-1.16639399529,-1.50765895844,2.00356197357,-0.267441302538,-1.71102797985,0.187304794788,1.53667402267,-0.0513397417963,-1.78009104729,0.148037597537,-2.01348900795,-0.821267485619,2.06411910057,0.8370642066,-1.34161901474,1.97824299335,0.730930805206,-0.867338001728,1.82024002075,0.421330094337,-1.12671601772,],
                    primitive: 'lines',
                    indices: [0,1,1,2,2,3,3,4,4,5,],
                },
            ],
        },
        {
            type: 'lookAt',
            eye:
                {
                    y: -6.50763988495,
                    x: 7.48113203049,
                    z: 5.34366512299,
                },
            look:
                {
                    y: -5.89697408676,
                    x: 6.82627010345,
                    z: 4.89841985703,
                },
            up:
                {
                    y: 0.312468677759,
                    x: -0.317370116711,
                    z: 0.895343244076,
                },
            nodes: [
                {
                    type: 'camera',
                    optics:
                        {
                            type: 'perspective',
                            far: 100.0,
                            near: 0.1,
                            aspect: 1.0,
                            fovy: 27.6380627952,
                        },
                    nodes: [
                        {
                            type: 'renderer',
                            clear:
                                {
                                    color: true, 
                                    depth: true, 
                                    stencil: false, 
                                },
                            clearColor:
                                {
                                    r: 0.4,
                                    b: 0.4,
                                    g: 0.4,
                                },
                            nodes: [
                                {
                                    type: 'matrix',
                                    elements: [-0.290864378214,0.955171227455,-0.055189050734,0.0,-0.771100878716,-0.199883162975,0.604524791241,0.0,0.566393375397,0.218391060829,0.794672250748,0.0,4.07624483109,1.00545394421,5.90386199951,1.0,],
                                    nodes: [
                                        {
                                            type: 'light',
                                            color:
                                                {
                                                    r: 1.0,
                                                    b: 1.0,
                                                    g: 1.0,
                                                },
                                            pos:
                                                {
                                                    y: 0.0,
                                                    x: 0.0,
                                                    z: 0.0,
                                                },
                                            quadraticAttenuation: 0.000555556,
                                            linearAttenuation: 0.0,
                                            mode: 'point',
                                            constantAttenuation: 1.0,
                                        },
                                    ],
                                },
                                {
                                    type: 'matrix',
                                    elements: [1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,],
                                    nodes: [
                                        {
                                            type: 'material',
                                            coreId: 'Material',
                                            nodes: [
                                                {
                                                    type: 'geometry',
                                                    coreId: 'Cube-mesh',
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
        },
    ],
});
