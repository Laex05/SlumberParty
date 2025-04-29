import { Quaternion } from "./Quaternion.js";
import { Vector3 } from "./Vector3.js";
export class Entity {
    gameObject;
    _pos;
    _rot;
    _scale;
    get pos() { return this._pos; }
    get rot() { return this._rot; }
    get scale() { return this._scale; }
    set pos(pos) {
        this._pos = pos;
        EntityAPI.updatePosition(this.gameObject, JSON.stringify({ vec3: pos }));
    }
    set rot(rot) {
        this._rot = rot;
        EntityAPI.updateRotation(this.gameObject, JSON.stringify({ rot: rot }));
    }
    set scale(scale) {
        this._scale = scale;
        EntityAPI.updateScale(this.gameObject, JSON.stringify({ vec3: scale }));
    }
    constructor(isDisposable, pos = Vector3.zero, rot = Quaternion.one, scale = Vector3.one) {
        this.gameObject = EntityAPI.create(isDisposable);
        this.pos = pos;
        this.rot = rot;
        this.scale = scale;
    }
    updateMesh(verts, uvs, triangles) {
        const json = {
            verts: verts,
            uvs: uvs,
            triangles: triangles,
        };
        UpdateMesh.model(this.gameObject, JSON.stringify(json));
    }
    updateColor(color) {
        UpdateMesh.color(this.gameObject, color.r, color.g, color.b);
    }
}
