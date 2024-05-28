import '../Letter/cvgl/smallletter/i'
import '../Letter/cvgl/smallletter/j'
import '../Letter/cvgl/smallletter/k'
import '../Letter/cvgl/smallletter/l'
import '../Letter/cvgl/smallletter/m'
import '../Letter/cvgl/smallletter/n'
import '../Letter/cvgl/smallletter/o'
import '../Letter/cvgl/smallletter/p'
import '../Letter/cvgl/smallletter/q'
import '../RETURN/returnnnn'
export function x3() {
    for (let i = 0; i <= 9; i++)
        for (let j = 0; j <= 9; j++)
            for (let k = 0; k <= 9; k++)
                console.log()
}
export function y3(){
    for (let l = 0;l <= -9 && l <= 9; l++ || l--)
        for(let m = 0;m <= -9 && m <= 9;m++ || m--)
            for(let n = 0;n <= -9 && n <= 9;n++ || n--)
                console.log()
}
export function z3() {
    for (let o = 0; o >= -9; o--)
        for (let p = 0; p >= -9; ++p)
            for (let q = 0; q >= -9; ++q)
                console.log()
}
export function t3() {
    do `x3*y3`
    while ({
        z3: `0,z<=3,z++`
    })
    do `x3*z3`
    while ({
        y3: `0,y<=3,y++`
    })
    do `y3*z3`
    while ({
        x3: `0,x<=3,x++`
    })
}
