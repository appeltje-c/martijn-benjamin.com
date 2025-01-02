import { useGLTF, useTexture, useAnimations, PresentationControls } from "@react-three/drei"
import { useTinker } from "tinker-tools"
import { useEffect, useRef } from "react"
import { Group, Mesh } from "three"
import { GLTF } from "three-stdlib"
import { useThree } from "@react-three/fiber"

type GLTFResult = GLTF & {
    nodes: {
        Top: Mesh,
        Buttons: Mesh,
        Phone: Mesh,
        Body: Mesh,
        Screen_Cover: Mesh,
        Screen: Mesh,
        bubbles: Mesh,
        Fin: Mesh,
        Merged: Mesh
    }
    materials: {}
}

export default function TSparx() {

    const group = useRef<Group>(null)
    const { nodes } = useGLTF('./models/tsparx.glb') as GLTFResult
    const texture = useTexture('./texture/tsparx.jpg')
    texture.flipY = false

    const { camera } = useThree()
    const { rotation, polar, azimuth } = useTinker({
        rotation: {
            value: [0.4, -1, 0],
            step: 0.1
        },
        polar: {
            value: [-0.4, 0.2],
            step: 0.1
        },
        azimuth: {
            value: [-1.0, 1.0],
            step: 0.1
        }
    })

    useEffect(() => {

        camera.position.set(0.8, 0.2, 4)

    }, [])

    return (
        <>
            <PresentationControls
                global
                rotation={rotation}
                polar={polar}
                azimuth={azimuth}
                snap={{ mass: 4, tension: 400 }}
                config={{ mass: 1, tension: 400 }}>

                <group ref={group} dispose={null}>

                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Top.geometry}
                        position={[-1.247, 0.544, -0.343]}
                        rotation={[0.171, 0.41, 0]}>
                        <meshBasicMaterial map={texture} />
                    </mesh>

                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Phone.geometry}
                        position={[0.097, 0.662, -1.031]}
                        rotation={[1.208, 0.322, -1.326]}>
                        <meshBasicMaterial map={texture} />
                    </mesh>

                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Buttons.geometry}
                        position={[0.155, 0.56, -0.987]}
                        rotation={[1.208, 0.322, -1.326]}>
                        <meshBasicMaterial map={texture} />
                    </mesh>

                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Body.geometry}
                        position={[0.099, 0.663, -1.03]}
                        rotation={[1.208, 0.322, -1.326]}>
                        <meshBasicMaterial map={texture} />
                    </mesh>

                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Screen_Cover.geometry}
                        position={[0.096, 0.728, -1.05]}
                        rotation={[1.208, 0.322, -1.326]}>
                        <meshBasicMaterial map={texture} />
                    </mesh>

                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Screen.geometry}
                        position={[0.092, 0.751, -1.059]}
                        rotation={[1.208, 0.322, -1.326]}>
                        <meshBasicMaterial map={texture} />
                    </mesh>

                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.bubbles.geometry}
                        position={[0.846, 0.187, 1.106]}
                        rotation={[-Math.PI, 1.119, -Math.PI]}>
                        <meshBasicMaterial map={texture} />
                    </mesh>

                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Fin.geometry}
                        position={[0.994, 0.155, 1.205]}
                        rotation={[0, 0.452, 0]}>
                        <meshBasicMaterial map={texture} />
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Merged.geometry}
                        position={[0, 0.241, 0]}>
                        <meshBasicMaterial map={texture} />
                    </mesh>

                </group>
            </PresentationControls>
        </>
    )
}

useGLTF.preload('/models/tsparx.glb')
