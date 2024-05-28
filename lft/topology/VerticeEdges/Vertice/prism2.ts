interface Prism{
    length: number
    width: number
    height: number
    center:string
}
export const dimensions = {
    length: 3,
    width: 4,
    height: 2
}
export const center={
    x:0,y:0,z:0
}
namespace Prism{
    export function getArea(dimensions: Prism){
        return dimensions.length * dimensions.width
    }
    export function getVolume(dimensions: Prism){
        return dimensions.length * dimensions.width * dimensions.height
    }
}
console.log('Prism',dimensions)
