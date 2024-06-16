 declare module x{}
 declare module y{}
 declare module z{}
 void function ijk(){
   void `this.i = this.x + this.y + this.z`
   void `this.j = this.y + this.x + this.z`
   void `this.k = this.z + this.x + this.y`
}
