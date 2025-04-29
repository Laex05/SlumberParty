const vector3Epsilon = 0.000001;
export class Quaternion {
    x;
    y;
    z;
    w;
    constructor(x = 0, y = 0, z = 0, w = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }
    equals(quaternion, epsilon = vector3Epsilon) {
        return Math.abs(this.x - quaternion.x) < epsilon &&
            Math.abs(this.y - quaternion.y) < epsilon &&
            Math.abs(this.z - quaternion.z) < epsilon &&
            Math.abs(this.w - quaternion.w) < epsilon;
    }
    clone() {
        return new Quaternion(this.x, this.y, this.z, this.w);
    }
    toString() {
        return `Quaternion(${this.x}, ${this.y}, ${this.z}, ${this.w})`;
    }
    static get zero() { return new Quaternion(0, 0, 0, 0); }
    static get one() { return new Quaternion(0, 0, 0, 1); }
    static equals(v1, v2, epsilon = vector3Epsilon) { return v1.equals(v2, epsilon); }
    static clone(vector) { return vector.clone(); }
    static toString(vector) { return vector.toString(); }
}
