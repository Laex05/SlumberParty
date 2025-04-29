const vector3Epsilon = 0.000001;
export class Vector3 {
    x;
    y;
    z;
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    add(vector) {
        return new Vector3(this.x + vector.x, this.y + vector.y, this.z + vector.z);
    }
    subtract(vector) {
        return new Vector3(this.x - vector.x, this.y - vector.y, this.z - vector.z);
    }
    multiply(scalar) {
        return new Vector3(this.x * scalar, this.y * scalar, this.z * scalar);
    }
    divide(scalar) {
        if (scalar === 0)
            throw new Error("Division by zero");
        return new Vector3(this.x / scalar, this.y / scalar, this.z / scalar);
    }
    normalize() {
        const mag = this.magnitude();
        if (mag === 0)
            throw new Error("Cannot normalize zero vector");
        return this.divide(mag);
    }
    magnitude() {
        return Math.sqrt(this.dot(this));
    }
    distanceTo(vector) {
        return this.subtract(vector).magnitude();
    }
    equals(vector, epsilon = vector3Epsilon) {
        return Math.abs(this.x - vector.x) < epsilon &&
            Math.abs(this.y - vector.y) < epsilon &&
            Math.abs(this.z - vector.z) < epsilon;
    }
    clone() {
        return new Vector3(this.x, this.y, this.z);
    }
    negate() {
        return new Vector3(-this.x, -this.y, -this.z);
    }
    dot(vector) {
        return this.x * vector.x +
            this.y * vector.y +
            this.z * vector.z;
    }
    cross(vector) {
        return new Vector3(this.y * vector.z - this.z * vector.y, this.z * vector.x - this.x * vector.z, this.x * vector.y - this.y * vector.x);
    }
    lerp(v2, t) {
        if (t < 0)
            t = 0;
        if (t > 1)
            t = 1;
        return new Vector3(this.x + (v2.x - this.x) * t, this.y + (v2.y - this.y) * t, this.z + (v2.z - this.z) * t);
    }
    toArray() {
        return [this.x, this.y, this.z];
    }
    toString() {
        return `Vector3(${this.x}, ${this.y}, ${this.z})`;
    }
    static get zero() { return new Vector3(0, 0, 0); }
    static get one() { return new Vector3(1, 1, 1); }
    static get up() { return new Vector3(0, 1, 0); }
    static get down() { return new Vector3(0, -1, 0); }
    static get forward() { return new Vector3(0, 0, 1); }
    static get back() { return new Vector3(0, 0, -1); }
    static get left() { return new Vector3(-1, 0, 0); }
    static get right() { return new Vector3(1, 0, 0); }
    static add(v1, v2) { return v1.add(v2); }
    static subtract(v1, v2) { return v1.subtract(v2); }
    static multiply(v1, scalar) { return v1.multiply(scalar); }
    static divide(v1, scalar) { return v1.divide(scalar); }
    static normalize(vector) { return vector.normalize(); }
    static magnitude(vector) { return vector.magnitude(); }
    static distance(v1, v2) { return v1.distanceTo(v2); }
    static equals(v1, v2, epsilon = vector3Epsilon) { return v1.equals(v2, epsilon); }
    static clone(vector) { return vector.clone(); }
    static negate(vector) { return vector.negate(); }
    static dot(v1, v2) { return v1.dot(v2); }
    static cross(v1, v2) { return v1.cross(v2); }
    static lerp(v1, v2, t) { return v1.lerp(v2, t); }
    static toArray(vector) { return vector.toArray(); }
    static toString(vector) { return vector.toString(); }
    addInPlace(vector) {
        this.x += vector.x;
        this.y += vector.y;
        this.z += vector.z;
        return this;
    }
    subtractInPlace(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        this.z -= vector.z;
        return this;
    }
    multiplyInPlace(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        this.z *= scalar;
        return this;
    }
    divideInPlace(scalar) {
        if (scalar === 0)
            throw new Error("Division by zero");
        this.x /= scalar;
        this.y /= scalar;
        this.z /= scalar;
        return this;
    }
    normalizeInPlace() {
        const mag = this.magnitude();
        if (mag === 0)
            throw new Error("Cannot normalize zero vector");
        return this.divideInPlace(mag);
    }
    negateInPlace() {
        this.x = -this.x;
        this.y = -this.y;
        this.z = -this.z;
        return this;
    }
}
