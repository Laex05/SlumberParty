const colorEpsilon = 0.000001;
export class Color {
    r;
    g;
    b;
    constructor(r = 0, g = 0, b = 0) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
    equals(vector, epsilon = colorEpsilon) {
        return Math.abs(this.r - vector.r) < epsilon &&
            Math.abs(this.g - vector.g) < epsilon &&
            Math.abs(this.b - vector.b) < epsilon;
    }
    clone() {
        return new Color(this.r, this.g, this.b);
    }
    toString() {
        return `Color(${this.r}, ${this.g}, ${this.b})`;
    }
    static get black() { return new Color(0, 0, 0); }
    static get white() { return new Color(1, 1, 1); }
    static get red() { return new Color(1, 0, 0); }
    static get green() { return new Color(0, 1, 0); }
    static get blue() { return new Color(0, 0, 1); }
    static get cyan() { return new Color(0, 1, 1); }
    static get magenta() { return new Color(1, 0, 1); }
    static get yellow() { return new Color(1, 1, 0); }
    static equals(v1, v2, epsilon = colorEpsilon) { return v1.equals(v2, epsilon); }
    static clone(vector) { return vector.clone(); }
    static toString(vector) { return vector.toString(); }
}
