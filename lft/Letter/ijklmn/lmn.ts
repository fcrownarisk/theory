declare module x{}
declare module y{}
declare module z{}
export default function lmn() {
  this.l = this.x - this.y - this.z
  this.m = this.y - this.z - this.x
  this.n = this.z - this.x - this.y
}
