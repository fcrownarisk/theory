 declare module x{}
 declare module y{}
 declare module z{}
export default function ijk(){
   this.i = this.x + this.y + this.z
   this.j = this.y + this.x + this.z
   this.k = this.z + this.x + this.y
}
