import { Mesh } from "three"
import { GLTF } from "three-stdlib"

declare global {
    interface Window {
        interval: NodeJS.Timeout;
    }
}

export type ImperialModel = GLTF & {
    nodes: {
        Baked: Mesh,
        Lightfront: Mesh,
        Lightleft: Mesh,
        Lightright: Mesh,
        Screen001: Mesh,
        Screen002: Mesh,
        Paper: Mesh,
        Paperball: Mesh,
        Phone: Mesh,
        Receiver: Mesh
    }
    materials: {}
}

export type TSparxModel = GLTF & {
    nodes: {
        Antennas: Mesh,
        Top: Mesh,
        Buttons: Mesh,
        Phone: Mesh,
        Body: Mesh,
        Screen_Cover: Mesh,
        Screen: Mesh,
        Bubbles: Mesh,
        Fin: Mesh,
        Merged: Mesh
    }
    materials: {}
}