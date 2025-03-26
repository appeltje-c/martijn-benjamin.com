import { useGLTF, useTexture, useAnimations, Text } from "@react-three/drei"
import { useEffect, useRef, useState } from "react"
import { AnimationAction, Group } from "three"
import { TSparxModel } from "../../types"
import { LoopOnce } from "three"

export default function TSparx() {

    const group = useRef<Group>(null)
    const { nodes, animations } = useGLTF('./models/tsparx.glb') as TSparxModel
    const texture = useTexture('./texture/tsparx.jpg')
    texture.flipY = false
    const { actions } = useAnimations(animations, group)
    const [antennaActive, setAntennaActive] = useState(true)

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
        <group position={[0, -3, 0]} rotation={[0, -1, 0]} ref={group} dispose={null}>

            <mesh
                name="Antennas"
                geometry={nodes.Antennas.geometry}
                position={[-1.247, 0.544, -0.343]}
                rotation={[0.171, 0.41, 0]}>
                <meshBasicMaterial map={texture} />
            </mesh>

            <group name="Phone">

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

                    {
                        antennaActive &&
                        <Text scale={0.04} rotation={[-1, 0, 0]} position={[0, 0.02, 0]} color="black">
                            NET 1D
                        </Text>
                    }

                    {
                        !antennaActive &&
                        <Text scale={0.06} rotation={[-1, 0, 0]} position={[0, 0.02, 0]} color="black">
                            Yay!
                        </Text>
                    }
                    <meshBasicMaterial map={texture} />
                </mesh>

            </group>

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
    )
}

useGLTF.preload('/models/tsparx.glb')
