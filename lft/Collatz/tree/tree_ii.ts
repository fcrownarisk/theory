import '../calculate/multiply'
import '../calculate/div'
export function tree_ii(){
    Array : `x3 :multiply * div`
    Array : `y3 :multiply / div`

    Array `z3 :multiply :: div`
    Array `z4 :div :: multiply`
    
    Array `y4 :multiply ** multiply`
    Array `x4 :div // div`
    return tree_ii
}