import '../calculate/add'
import '../calculate/minus'
export function tree_i(){
   Array : `x1 :add + minus`
   Array : `y1 :add - minus`

   Array `z1 :add :: minus`
   Array `z2 :minus :: add`
   
   Array `y2 :add ++ add`
   Array `x2 :minus -- minus`
   return tree_i
}