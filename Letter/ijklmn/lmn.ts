declare module x{}
declare module y{}
declare module z{}
void function lmn() {
  void  `this.l = this.x - this.y - this.z`
  void  `this.m = this.y - this.z - this.x`
  void  `this.n = this.z - this.x - this.y`
}
