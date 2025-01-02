import { Canvas } from "@react-three/fiber";
import Imperial from "../components/resume/Imperial";
import TSparx from "../components/resume/tsparx";

export default function Curriculum() {

    return (
        <Canvas shadows className='r3f'>

            {/* <Imperial /> */}

            <TSparx />

        </Canvas>
    )
}