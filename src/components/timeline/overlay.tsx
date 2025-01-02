import { forwardRef, MutableRefObject } from "react"

type OverlayProps = {
    caption: MutableRefObject<HTMLSpanElement>
    scroll: MutableRefObject<number>
}

const Overlay = forwardRef<HTMLDivElement, OverlayProps>(({ scroll }, ref) => (
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
                Eons ago I started learning as a back-end engineer on the J2EE, Redhat & Oracle enterprise stack. Today I am home in DevOps, Back-end and Front-end development. Full-stack.
                <br /><br />
                More recently I added Three.js and Blender to my skillset.
                <br /><br />
                Swipe or scroll up for more!
            </div>
        </div>

        <div style={{ height: "200vh" }}>
            <div className="dot">
                <h1>React, Typescript & PWA</h1>
                My Front-end 'go to' stack is React, Typescript and Material UI for rapid develpment of Progressive Web Applications with a native look and feel.
            </div>
        </div>

        <div style={{ height: "200vh" }}>
            <div className="dot">
                <h1>NodeJS, RestFul API's & MongoDB</h1>
            </div>
        </div>

        <div style={{ height: "200vh" }}>
            <div className="dot">
                <h1>Docker Kubernetes & AWS</h1>
            </div>
        </div>

        <div style={{ height: "200vh" }}>
            <div className="dot">
                <h1>table</h1>
            </div>
        </div>

        <div style={{ height: "200vh" }}>
            <div className="dot">
                <h1>laptop</h1>A laptop, laptop computer, or notebook computer is a small, portable personal computer (PC) with a screen and alphanumeric keyboard.
            </div>
        </div>

        <div style={{ height: "200vh" }}>
            <div className="dot">
                <h1>zeppelin</h1>A Zeppelin is a type of rigid airship named after the German inventor Count Ferdinand von Zeppelin (German pronunciation: [ˈt͡sɛpəliːn]) who pioneered rigid
                airship development at the beginning of the 20th century.
            </div>
        </div>
    </div>
))

export default Overlay
