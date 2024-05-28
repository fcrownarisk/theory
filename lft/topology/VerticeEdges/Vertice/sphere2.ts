class Sphere2{
    public center: { x: number; y: number; z: number }
    public radius: number;
    constructor(center: { x: number,y: number, z: number }, radius: number) {
        this.center = center;
        this.radius = radius;
    }
    public sphereToCartesian(sphere: { r: number; theta: number; phi: number }){
        const sinTheta = Math.sin(sphere.theta)
        const cosTheta = Math.cos(sphere.theta)
        const sinPhi = Math.sin(sphere.phi)
        const cosPhi = Math.cos(sphere.phi)
        const x = sphere.r * sinTheta * cosPhi
        const y = sphere.r * sinTheta * sinPhi
        const z = sphere.r * cosTheta
        return {
            x: this.center.x + x,
            y: this.center.y + y,
            z: this.center.z + z,
        }
    }
    public containsPoint(point: { x: number; y: number; z: number }){
        const dx = point.x - this.center.x;
        const dy = point.y - this.center.y;
        const dz = point.z - this.center.z;
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)
        }
        distance: any
}
const sphere = new Sphere2({ x: 0, y: 0, z: 0 }, 1)
const point = { x: 0, y: 0, z: 0 }
console.log(Sphere2)