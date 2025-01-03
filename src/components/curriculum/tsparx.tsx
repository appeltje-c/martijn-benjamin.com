import { useGLTF, useTexture, useAnimations, PresentationControls, Text } from "@react-three/drei"
import { useTinker } from "tinker-tools"
import { useEffect, useRef, useState } from "react"
import { AnimationAction, Group } from "three"
import { useThree } from "@react-three/fiber"
import { TSparxModel } from "../../types"
import { LoopOnce } from "three"

export default function TSparx() {

    const group = useRef<Group>(null)
    const { nodes, animations } = useGLTF('./models/tsparx.glb') as TSparxModel
    const texture = useTexture('./texture/tsparx.jpg')
    texture.flipY = false

    const { camera } = useThree()
    const { actions } = useAnimations(animations, group)

    const [antennaActive, setAntennaActive] = useState(true)

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
            value: [-0.7, 1.0],
            step: 0.1
        }
    })

    const playAction = (action: AnimationAction) => {
        if (action) {
            setAntennaActive(true)
            action.reset()
            action.setLoop(LoopOnce, 1)
            action.clampWhenFinished = true
            action.play()

            setTimeout(() => {
                setAntennaActive(false)
            }, 1500)
        }
    }

    useEffect(() => {

        camera.position.set(0.8, 0.2, 4)
        actions['BubblesAction']?.play()
        actions['FinAction']?.play()

        const action = actions['AntennasAction']
        if (action) {
            playAction(action)
            window.interval = setInterval(() => {
                playAction(action)
            }, 5000)
        }

        return () => clearInterval(window.interval);

    }, [])

    return (
        <PresentationControls
            global
            rotation={rotation}
            polar={polar}
            azimuth={azimuth}
            snap={{ mass: 4, tension: 400 }}
            config={{ mass: 1, tension: 400 }}>

            <group ref={group} dispose={null}>

                {
                    antennaActive &&
                    <Text scale={0.06} position={[0.2, 0.8, -1.0]} rotation={[0, 0, -0.1]} color="black">
                        NET 1D
                    </Text>
                }

                {
                    !antennaActive &&
                    <Text scale={0.08} position={[0.2, 0.8, -1.0]} rotation={[0, 0, -0.1]} color="black">
                        Yay!
                    </Text>
                }

                <mesh
                    name="Antennas"
                    geometry={nodes.Antennas.geometry}
                    position={[-1.247, 0.544, -0.343]}
                    rotation={[0.171, 0.41, 0]}>
                    <meshBasicMaterial map={texture} />
                </mesh>

                <mesh
                    geometry={nodes.Phone.geometry}
                    position={[0.098, 0.662, -1.029]}
                    rotation={[1.02, 0.314, -1.306]}>
                    <meshBasicMaterial map={texture} />
                </mesh>

                <mesh
                    geometry={nodes.Buttons.geometry}
                    position={[0.154, 0.57, -0.966]}
                    rotation={[1.02, 0.314, -1.306]}>
                    <meshBasicMaterial map={texture} />
                </mesh>

                <mesh
                    geometry={nodes.Body.geometry}
                    position={[0.099, 0.663, -1.029]}
                    rotation={[1.02, 0.314, -1.306]}>
                    <meshBasicMaterial map={texture} />

                </mesh>

                <mesh
                    geometry={nodes.Screen_Cover.geometry}
                    position={[0.097, 0.723, -1.06]}
                    rotation={[1.02, 0.314, -1.306]}>
                    <meshBasicMaterial map={texture} />
                </mesh>

                <mesh
                    geometry={nodes.Screen.geometry}
                    position={[0.095, 0.749, -1.073]}
                    rotation={[1.02, 0.314, -1.306]}
                    scale={1.1}>
                    <meshBasicMaterial map={texture} />
                </mesh>

                <mesh
                    name="Bubbles"
                    geometry={nodes.Bubbles.geometry}
                    position={[0.846, 0.187, 1.106]}
                    rotation={[-Math.PI, 1.119, -Math.PI]}>
                    <meshBasicMaterial map={texture} />
                </mesh>

                <mesh
                    name="Fin"
                    geometry={nodes.Fin.geometry}
                    position={[0.994, 0.155, 1.205]}
                    rotation={[0, 0.452, 0]}>
                    <meshBasicMaterial map={texture} />
                </mesh>

                <mesh
                    geometry={nodes.Merged.geometry}>
                    <meshBasicMaterial map={texture} />
                </mesh>
            </group>

        </PresentationControls>
    )
}

useGLTF.preload('/models/tsparx.glb')
