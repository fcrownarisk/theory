interface CH24{
carbonCount: number;
hydrogenCount: number;
 }
 class C2H4 implements CH24{
readonly carbonCount: number = 2;
readonly hydrogenCount: number = 4;
 }

 class C6H8 implements CH24 {
readonly carbonCount: number = 6;
readonly hydrogenCount: number = 8;
 }

 class C14H16 implements CH24{
readonly carbonCount: number = 14;
readonly hydrogenCount: number = 16;
 }
function *generateCH24(){
yield new C2H4()
yield new C6H8()
yield new C14H16()
 }
