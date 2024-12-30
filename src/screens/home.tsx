import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import Overlay from "./overlay"

export default function Home() {

    const overlay = useRef<HTMLDivElement>(null!)
    const caption = useRef<HTMLDivElement>(null!)
    const scroll = useRef<number>(0)

    return (
        <>
            <Canvas shadows eventPrefix="client">
                <ambientLight intensity={1} />
                <Suspense fallback={null}>
                    <Environment preset="city" />
                </Suspense>
            </Canvas>
            <Overlay ref={overlay} caption={caption} scroll={scroll} />
        </>
    )
}