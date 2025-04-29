const vector2Epsilon = 0.000001;
export class Vector2 {
    x;
    y;
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    add(vector) {
        return new Vector2(this.x + vector.x, this.y + vector.y);
    }
    subtract(vector) {
        return new Vector2(this.x - vector.x, this.y - vector.y);
    }
    multiply(scalar) {
        return new Vector2(this.x * scalar, this.y * scalar);
    }
    divide(scalar) {
        if (scalar === 0)
            throw new Error("Division by zero");
        return new Vector2(this.x / scalar, this.y / scalar);
    }
    equals(vector, epsilon = vector2Epsilon) {
        return Math.abs(this.x - vector.x) < epsilon && Math.abs(this.y - vector.y) < epsilon;
    }
    clone() {
        return new Vector2(this.x, this.y);
    }
    negate() {
        return new Vector2(-this.x, -this.y);
    }
    lerp(v2, t) {
        if (t < 0)
            t = 0;
        if (t > 1)
            t = 1;
        return new Vector2(this.x + (v2.x - this.x) * t, this.y + (v2.y - this.y) * t);
    }
    toArray() {
        return [this.x, this.y];
    }
    toString() {
        return `Vector2(${this.x}, ${this.y})`;
    }
    static get zero() { return new Vector2(0, 0); }
    static get one() { return new Vector2(1, 1); }
    static add(v1, v2) { return v1.add(v2); }
    static subtract(v1, v2) { return v1.subtract(v2); }
    static multiply(v1, scalar) { return v1.multiply(scalar); }
    static divide(v1, scalar) { return v1.divide(scalar); }
    static equals(v1, v2, epsilon = vector2Epsilon) { return v1.equals(v2, epsilon); }
    static clone(vector) { return vector.clone(); }
    static negate(vector) { return vector.negate(); }
    static lerp(v1, v2, t) { return v1.lerp(v2, t); }
    static toArray(vector) { return vector.toArray(); }
    static toString(vector) { return vector.toString(); }
    addInPlace(vector) {
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }
    subtractInPlace(vector) {
        this.x -= vector.x;
        this.y -= vector.y;
        return this;
    }
    multiplyInPlace(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }
    divideInPlace(scalar) {
        if (scalar === 0)
            throw new Error("Division by zero");
        this.x /= scalar;
        this.y /= scalar;
        return this;
    }
    negateInPlace() {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    }
}
