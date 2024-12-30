import { Canvas } from "@react-three/fiber";
import Imperial from "../components/resume/Imperial";

export default function Curriculum() {

    return (
        <Canvas shadows className='r3f'>
            <Imperial />
        </Canvas>
    )
}