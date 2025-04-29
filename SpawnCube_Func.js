import { Color } from "./SlumberAPI/Color.js";
import { Entity } from "./SlumberAPI/Entity.js";
import { Vector2 } from "./SlumberAPI/Vector2.js";
import { Vector3 } from "./SlumberAPI/Vector3.js";
export function spawnCube(pos, scale, rot) {
    const entity = new Entity(true, pos, rot, scale);
    const verts = [
        new Vector3(0.5, 0.5, -0.5), //Top Forward Left
        new Vector3(0.5, 0.5, 0.5), //Top Forward Right
        new Vector3(-0.5, 0.5, -0.5), //Top Back Left
        new Vector3(-0.5, 0.5, 0.5), //Top Back Right
        new Vector3(0.5, -0.5, -0.5), //Bottom Forward Left
        new Vector3(0.5, -0.5, 0.5), //Bottom Forward Right
        new Vector3(-0.5, -0.5, -0.5), //Bottom Back Left
        new Vector3(-0.5, -0.5, 0.5), //Bottom Back Right
    ];
    const uvs = [
        new Vector2(0, 0), //Top Left
        new Vector2(0, 1), //Top Right
        new Vector2(1, 0), //Bottom Left
        new Vector2(1, 1), //Bottom Right
        new Vector2(0, 0),
        new Vector2(0, 1),
        new Vector2(1, 0),
        new Vector2(1, 1),
    ];
    const triangles = [
        ...getQuadTriangles(0, 1, 3, 2), //Top
        ...getQuadTriangles(2, 3, 7, 6), //Back
        ...getQuadTriangles(6, 7, 5, 4), //Bottom
        ...getQuadTriangles(4, 5, 1, 0), //Front
        ...getQuadTriangles(0, 2, 6, 4), //Left
        ...getQuadTriangles(3, 1, 5, 7), //Right
    ];
    function getQuadTriangles(nw, ne, se, sw) {
        return [ne, nw, sw, sw, se, ne];
    }
    entity.updateMesh(verts, uvs, triangles);
    entity.updateColor(new Color(Math.random(), Math.random(), Math.random()));
}
