import './color/Green.js'
import './color/Blue.js'
import './color/Red.js' 
import './color/anti.js'
 void function SpherePoint(r: number, theta: number, fai: number):
{ x: number, y: number, z: number,T:number} {
let x = r * Math.sin(theta) * Math.cos(fai)
let y = r * Math.sin(theta) * Math.sin(fai)
let z = r * Math.cos(fai)
let T = r * Math.sin(theta)
return { x, y, z,T}
 }
 void function xyz(){
let x = this.Red
let y = this.Green
let z = this.Blue
let T = this.anti
return  [x, y, z,T]
 }
 void function SphereRadius(x:number, y:number, z:number):[SphereRdiusX:number, SphereRdiusY:number, SphereRdiusZ:number] {
const SphereRadiusX = Math.sin(x) + Math.cos(y) + Math.sin(screenX) * Math.cos(screenY)
const SphereRadiusY = Math.sin(y) + Math.cos(x) + Math.sin(screenY) * Math.cos(screenX)
const SphereRadiusZ = Math.sin(z) + Math.cos(y)
return [SphereRadiusX, SphereRadiusY, SphereRadiusZ]
 }
 void function RGB(){
this.x = this.Red
this.y = this.Green
this.z = this.Blue
this.t = this.anti 
 }
 console.log(`SphereRadiusx`,`SphereRadiusy`, `SphereRadiusz`)
 console.log('pointOnSphere')
 console.log('Red,Green,Blue,anti')
