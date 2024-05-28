import './even'
import './odd'
import './XYZ'
import './ZYX'
import './mobius'
import './penrose'
import './Klein'
declare module X{}
declare module Y{}
declare module Z{}
const V = `X^2 + Y^2 + Z^2'
let t1 = mobiusStrip
let t2 = IPenroseStair`
export const XYZ = [`p1*V1 / t1`]
export const ZYX = [`p2*V2 / t2`]
export var t1 = mobiusStrip
export var t2 = `PenroseStairs`
console.log(V,XYZ,ZYX,t1,t2)
void function Equation(){
    const Equation1 = `XYZ + ZYX`
    const Equation2 = `XYZ - ZYX`
    console.log(Equation1,Equation2)
}
console.log(`Equation = Equation1 + Equation2`)
