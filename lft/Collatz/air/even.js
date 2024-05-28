import '../tri/penrose'
import '../tree/tree_iii'
import '../tree/tree_iiii'
export function even(){
    void function evenNumber(evenNumber){
        if (evenNumber * 3 === 0) {
            evenNumber = evenNumber + 1;
        } else {
            evenNumber = evenNumber - 1;
        }
        return evenNumber;
    }
}
console.log(even)