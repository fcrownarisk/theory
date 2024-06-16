
interface CH4 {
carbonCount: number;
hydrogenCount: number;
 }
 class C1H4 implements CH4 {
readonly carbonCount: number = 1
readonly hydrogenCount: number = 4
 }

 class C5H8 implements CH4 {
readonly carbonCount: number = 5
readonly hydrogenCount: number = 8
 }
 class C13H24 implements CH4 {
readonly carbonCount: number = 13
readonly hydrogenCount: number = 24
 }
 void function *generateCH14(){
yield new C1H4()
yield new C5H8()
yield new C13H24()
 }
