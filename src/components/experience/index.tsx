import { CatmullRomCurve3, Vector3 } from "three"
import Imperial from "./imperial"
import TSparx from "./tsparx"
import { Outlines, useScroll } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { ColorDepth, EffectComposer, ToneMapping, GodRays, WaterEffect, Noise, DepthOfField } from '@react-three/postprocessing'
import { ToneMappingMode } from 'postprocessing'

// https://codesandbox.io/p/sandbox/exciting-haslett-vfbojd?file=%2Fsrc%2Findex.js

// https://codesandbox.io/p/sandbox/scrollcontrols-gltf-scroll-range-camera-paths-04h1c?file=%2Fsrc%2FApp.js

export default function Models() {

    const cameraPositionCurve = new CatmullRomCurve3(
        [
            new Vector3(5.8718, -24.7997, -7.1399),
            new Vector3(7.1698, 1.3333, 0.2807),
            new Vector3(10.722, 6.7915, 6.2673),
            new Vector3(3.354, 0.0004, 7.3083),
            new Vector3(-1.0199, 49.0131, 5.4304),
            new Vector3(-5.13, 0, 0.5382),
            new Vector3(0.884, 7.5913, -2.4783),
            new Vector3(3.4379, 1.5798, -10.3699),
        ]
    )

    const cameraLookAt = new Vector3(0, 0, 0)


    const scroll = useScroll()

    useFrame((state) => {

        // scrolling veritcally from top to bottom:
        // 0 is top of the 'pages'
        // 1 is bottom of the pages

        //const offset = 1 - scroll.offset

        //cameraPositionCurve.getPoint(scroll.offset, state.camera.position)
        //cameraLookAtCurve.getPoint(scroll.offset, cameraLookAt)
        //state.camera.lookAt(cameraLookAt)
    })

    return (
        <>
            {/* <TSparx /> */}
            <group position={[0, -1, 1]} rotation={[0, -1, 0]}>
                <Imperial />
            </group>
            <EffectComposer multisampling={24}>
                
                <ToneMapping mode={ToneMappingMode.ACES_FILMIC} />
                
                {/* <GodRays sun={}/> */}
                {/* <ColorDepth /> */}
                {/* <WaterEffect/> */}
                {/* <Noise /> */}
                <DepthOfField />
            </EffectComposer>
        </>
    )
}