import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import Timeline from "../components/timeline"
import Overlay from "../components/timeline/overlay"

export default function Home() {

    const overlay = useRef<HTMLDivElement>(null!)
    const caption = useRef<HTMLDivElement>(null!)
    const scroll = useRef<number>(0)

    return (
        <>
            <Canvas shadows eventSource={document.getElementById("root") ?? undefined} eventPrefix="client">
                <ambientLight intensity={1} />
                <Suspense fallback={null}>
                    <Timeline scroll={scroll} />
                    <Environment preset="city" />
                </Suspense>
            </Canvas>
            <Overlay ref={overlay} caption={caption} scroll={scroll} />
        </>
    )
}