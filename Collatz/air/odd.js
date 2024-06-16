
import '../det/mobius'
import '../tree/tree_i'
import '../tree/tree_ii'
export function odd(){
    void function OddNumber(oddNumber){
        if (oddNumber % 2 === 0) {
            oddNumber = oddNumber + 1;
        } else {
            oddNumber = oddNumber - 1;
        }
        return oddNumber;
    }
}
console.log(odd)