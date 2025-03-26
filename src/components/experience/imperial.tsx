import { useGLTF, useTexture, useAnimations, Outlines } from "@react-three/drei"
import { useEffect, useRef } from "react"
import { Group } from "three"
import { ImperialModel } from "../../types"

export default function Imperial() {

    const group = useRef<Group>(null)
    const { nodes, animations } = useGLTF('./models/imperial.glb') as ImperialModel
    const texture = useTexture('./texture/imperial.jpg')
    texture.flipY = false
    const { actions } = useAnimations(animations, group)

    useEffect(() => {

        actions['Printing']?.play()
        actions['Jump']?.play()
        actions['Ringing']?.play()
    }, [])

    const thinkness = 0.5

    return (
        <group ref={group} dispose={null}>

            <mesh
                name="Screen001"
                castShadow
                geometry={nodes.Screen001.geometry}
                position={[0.514, 1.27, -1.156]}
                rotation={[0, -0.783, 0]}>
                <meshBasicMaterial color="#3f3f3f" />
                <Outlines angle={0} thickness={thinkness} color="black" />

            </mesh>

            <mesh
                name="Screen002"
                castShadow
                geometry={nodes.Screen002.geometry}
                position={[-0.531, 1.27, -1.404]}
                rotation={[Math.PI, -0.573, Math.PI]}>
                <meshBasicMaterial color="#3f3f3f" />
                <Outlines angle={0} thickness={thinkness} color="black" />

            </mesh>

            <mesh
                name="Lightfront"
                castShadow
                geometry={nodes.Lightfront.geometry}
                position={[0.909, 0.336, 0.077]}
                rotation={[0, -Math.PI / 2, 0]}>
                <meshBasicMaterial color="#ffffff" />
                <Outlines angle={0} thickness={thinkness} color="black" />

            </mesh>

            <mesh
                name="Lightleft"
                castShadow
                geometry={nodes.Lightleft.geometry}
                position={[-0.835, 0.336, -1.819]}>
                <meshBasicMaterial color="#ffffff" />
                <Outlines angle={0} thickness={thinkness} color="black" />

            </mesh>

            <mesh
                name="Lightright"
                castShadow
                geometry={nodes.Lightright.geometry}
                position={[0.725, 0.336, -1.819]}>
                <meshBasicMaterial color="#ffffff" />
                <Outlines angle={0} thickness={thinkness} color="black" />

            </mesh>

            <mesh
                name="Baked"
                geometry={nodes.Baked.geometry}
                position={[0.405, 0.384, -1.825]}>
                <meshBasicMaterial map={texture} />

                <Outlines angle={0} thickness={thinkness} color="black" />

            </mesh>

            <mesh
                name="Paper"
                castShadow
                receiveShadow
                geometry={nodes.Paper.geometry}
                position={[-0.353, 1.185, 0.423]}
                rotation={[0.449, 0, 0]}>
                <meshBasicMaterial map={texture} />
                <Outlines angle={0} thickness={thinkness} color="black" />

            </mesh>

            <mesh
                name="Paperball"
                castShadow
                geometry={nodes.Paperball.geometry}
                position={[1.618, 0.039, 0.938]}>
                <meshBasicMaterial map={texture} />
                <Outlines angle={0} thickness={thinkness} color="black" />

            </mesh>

            <group rotation={[-Math.PI, 2.7, -Math.PI]}>
                <mesh
                    name="Phone"
                    geometry={nodes.Phone.geometry}
                    position={[0.299, 0.947, -0.224]}
                    rotation={[-Math.PI, 1.541, -Math.PI]}>
                    <meshBasicMaterial map={texture} />
                    <Outlines angle={0} thickness={thinkness} color="black" />

                </mesh>
                <mesh
                    name="Receiver"
                    castShadow
                    receiveShadow
                    geometry={nodes.Receiver.geometry}
                    material={nodes.Receiver.material}
                    position={[0.323, 0.954, -0.122]}
                    rotation={[-Math.PI, 1.541, -Math.PI]}>
                    <meshBasicMaterial map={texture} />
                    <Outlines angle={0} thickness={thinkness} color="black" />

                </mesh>
            </group>

        </group>
    )
}

useGLTF.preload('/models/imperial.glb')