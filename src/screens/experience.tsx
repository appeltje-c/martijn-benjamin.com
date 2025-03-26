import { Canvas } from '@react-three/fiber'
import Models from '../components/experience'
import { GizmoHelper, GizmoViewport, Scroll, ScrollControls } from '@react-three/drei'

export default function Experience() {


    return (
        <Canvas shadows>
            <GizmoHelper>
                <GizmoViewport />
            </GizmoHelper>
            <ScrollControls pages={8}>
                <Models />
                <Scroll html>
                    <div>
                        div 1
                    </div>
                    <div>
                        div 2
                    </div>
                </Scroll>
            </ScrollControls>
        </Canvas>
    )
}