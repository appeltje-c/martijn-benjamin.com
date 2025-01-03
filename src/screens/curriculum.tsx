import { Canvas } from '@react-three/fiber'
// import Imperial from "../components/curriculum/imperial"
import TSparx from '../components/curriculum/tsparx'

export default function Curriculum() {

    return (
        <Canvas shadows className='r3f'>

            {/* <Imperial /> */}

            <TSparx />

        </Canvas>
    )
}