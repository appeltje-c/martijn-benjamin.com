import { forwardRef } from "react"

const Overlay = forwardRef<HTMLDivElement, { caption: React.MutableRefObject<HTMLSpanElement>; scroll: React.MutableRefObject<number> }>(({ scroll }, ref) => (
    <div
        ref={ref}
        onScroll={(e) => {
            const target = e.target as HTMLDivElement;
            scroll.current = target.scrollTop / (target.scrollHeight - window.innerHeight)
        }}
        className="scroll">
        <div style={{ height: "400vh" }}>
            <div className="dot">
                <h1>Full Stack Engineer</h1>
                Something about me as a full stack engineer with a love for 3D creation.

                Three.js, Blender, AWS, Material UI
            </div>
        </div>
        <div style={{ height: "200vh" }}>
            <div className="dot">
                <h1>Javascript & Typescript</h1>

            </div>
        </div>
        <div style={{ height: "200vh" }}>
            <div className="dot">
                <h1>Three.js, Blender</h1>

            </div>
        </div>
        <div style={{ height: "200vh" }}>
            <div className="dot">
                <h1>React & NodeJS</h1>

            </div>
        </div>
        <div style={{ height: "200vh" }}>
            <div className="dot">
                <h1>RestFul, Websocket</h1>

            </div>
        </div>
        <div style={{ height: "200vh" }}>
            <div className="dot">
                <h1>Docker, Kubernetes, AWS</h1>
                DevOps engineer

            </div>
        </div>
        <div style={{ height: "200vh" }}>
            <div className="dot">
                <h1>MongoDB, Postgres</h1>

            </div>
        </div>
        <div style={{ height: "200vh" }}>
            <div className="dot">
                <h1>Github, VSCode</h1>

            </div>
        </div>
    </div>
))

export default Overlay
