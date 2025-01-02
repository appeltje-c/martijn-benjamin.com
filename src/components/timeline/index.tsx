import { MutableRefObject, useEffect, useRef, useState } from "react"
import { useGLTF, useAnimations, PerspectiveCamera } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { Color, Group, Material, MathUtils, Mesh, MeshStandardMaterial } from "three";
import { GLTF } from "three-stdlib";
import { useTinker } from "tinker-tools";

const color = new Color()

interface ResumeProps {
    scroll: MutableRefObject<number>;
    [key: string]: any;
}

type GLTFResult = GLTF & {
    nodes: {
        Headphones: Mesh,
        Notebook: Mesh,
        Rocket: Mesh,
        Roundcube001: Mesh,
        Table: Mesh,
        Github: Mesh,
        Zeppelin: Mesh
    },
    materials: {
        M_Headphone: Material,
        M_Notebook: Material,
        M_Rocket: Material,
        M_Roundcube: Material,
        M_Table: Material,
        M_Github: Material,
        M_Zeppelin: Material
    }
}

type AnimatedObject = Mesh & {
    material: MeshStandardMaterial
}

export default function Timeline({ scroll, ...props }: ResumeProps) {

    const group = useRef<Group>(null!)
    const { nodes, materials, animations } = useGLTF("/models/home.glb") as GLTFResult

    const { actions } = useAnimations(animations, group)

    const [hovered, set] = useState<string | null>(null)
    const extras = { receiveShadow: true, castShadow: true, "material-envMapIntensity": 0.2 }


    useTinker({

    })

    useEffect(() => {

        const action = actions["CameraAction"]
        if (action) {
            action.play()
            action.paused = true
        }

    }, [])

    useEffect(() => {

        if (hovered) {
            const object = group.current.getObjectByName(hovered) as AnimatedObject
            if (object) {
                object.material.color.set("white");
            }
        }

        document.body.style.cursor = hovered ? "pointer" : "auto"

    }, [hovered])

    useFrame((state) => {

        // get the camera animation from the animations
        const action = actions["CameraAction"]

        if (action) {
            action.time = MathUtils.lerp(action.time, action.getClip().duration * scroll.current, 1)
        }

        group.current.children[0].children.forEach((child, index: number) => {

            const animatedChild = child as AnimatedObject;
            animatedChild.material.color.lerp(color.set(hovered === animatedChild.name ? "#00ff11" : "#202020"), hovered ? 1 : 0.05)

            const et = state.clock.elapsedTime
            animatedChild.position.y = Math.sin((et + index * 2000) / 2) * 1
            animatedChild.rotation.x = Math.sin((et + index * 2000) / 3) / 10
            animatedChild.rotation.y = Math.cos((et + index * 2000) / 2) / 10
            animatedChild.rotation.z = Math.sin((et + index * 2000) / 3) / 10

            child.rotation.z = Math.sin((et + index * 2000) / 3) / 10
        })
    })

    return (
        <group ref={group} {...props} dispose={null}>

            <group
                onPointerOver={(e) => (e.stopPropagation(), set(e.object.name))}
                onPointerOut={(e) => (e.stopPropagation(), set(null))}
                position={[0.06, 4.04, 0.35]}
                scale={[0.25, 0.25, 0.25]}>
                <mesh name="Headphones" geometry={nodes.Headphones.geometry} material={materials.M_Headphone} {...extras} />
                <mesh name="Notebook" geometry={nodes.Notebook.geometry} material={materials.M_Notebook} {...extras} />
                <mesh name="Rocket003" geometry={nodes.Rocket.geometry} material={materials.M_Rocket} {...extras} />
                <mesh name="Roundcube001" geometry={nodes.Roundcube001.geometry} material={materials.M_Roundcube} {...extras} />
                <mesh name="Table" geometry={nodes.Table.geometry} material={materials.M_Table} {...extras} />
                <mesh name="Github" geometry={nodes.Github.geometry} material={materials.M_Github} {...extras} />
                <mesh name="Zeppelin" geometry={nodes.Zeppelin.geometry} material={materials.M_Zeppelin} />
            </group>

            <group name="Camera" position={[-1.78, 2.04, 23.58]} rotation={[1.62, 0.01, 0.11]}>
                <PerspectiveCamera makeDefault far={100} near={0.1} fov={28} rotation={[-Math.PI / 2, 0, 0]}>
                    <directionalLight
                        castShadow
                        position={[10, 20, 15]}
                        shadow-camera-right={8}
                        shadow-camera-top={8}
                        shadow-camera-left={-8}
                        shadow-camera-bottom={-8}
                        shadow-mapSize-width={1024}
                        shadow-mapSize-height={1024}
                        intensity={2}
                        shadow-bias={-0.0001}
                    />
                </PerspectiveCamera>
            </group>

        </group>
    )
}

useGLTF.preload("/models/home.glb")
