 declare module x{}
 declare module y{}
 declare module z{} 
export default function rst(){
   this.r = (this.x / this.y) / this.z
   this.s = this.y / (this.x / this.z)
   this.t = (this.z / this.x) / this.y
 } 
