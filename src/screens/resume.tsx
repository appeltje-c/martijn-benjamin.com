import { Canvas } from "@react-three/fiber";
import Imperial from "../components/resume/Imperial";

export default function Resume() {

    return (
        <Canvas shadows className='r3f'>
            <Imperial />
        </Canvas>
    )
}