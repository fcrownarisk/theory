 declare module x{}
 declare module y{}
 declare module z{} 
 export default function opq() {
      this.o = this.x * this.y + this.z
      this.p = this.x + this.y * this.z
      this.q = this.y * this.z + this.x
}
