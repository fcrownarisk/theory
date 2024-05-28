import '../topolgy/Vertices/cylinder2'
class Sphere {
    private center: Number;
    private radius: number;
    constructor(center: Number, radius: number) {
        this.center = center;
        this.radius = radius;
    }
    SurfaceArea(){
        return 4 * Math.PI * Math.pow(this.radius, 2);
    }
    Volume(){
        return 4.0 / 3.0 * Math.PI * Math.pow(this.radius, 3);
    }
}
let sphere = new Sphere['Vector3D'];
