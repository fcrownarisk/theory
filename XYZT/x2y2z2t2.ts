import '../Letter/cvgl/smallletter/i'
import '../Letter/cvgl/smallletter/j'
import '../Letter/cvgl/smallletter/k'
import '../Letter/cvgl/smallletter/l'
import '../Letter/cvgl/smallletter/m'
import '../Letter/cvgl/smallletter/n'
import '../Letter/cvgl/smallletter/o'
import '../Letter/cvgl/smallletter/p'
import '../Letter/cvgl/smallletter/q'
import '../return/returnnn'
export function x2(){
    for (let i = 0; i <= 6; ++i)
        for (let j = 0; j <= 6; ++j)
            for (let k = 0; k <= 6; ++k)
                console.log()
}
export function y2(){
    for (let l = 0; l >= -6 && l <= 6; ++l || l--)
        for (let m = 0; m >= -6 && m <= 6; ++m || m--)
            for (let n = 0; n >= -6 && n <= 6; ++n || n--)
                console.log()
}
export function z2(){
    for (let o = 0; o >= -6; o--)
        for (let p = 0; p >= -6; p--)
            for (let q = 0; q >= -6; q--)
                console.log()
}
export function t2(){
    do `y2*z2`
    while ({
        x2: `0,x<=2,x++`
    })
    do `x2*z2`
    while ({
        y2: `0,y<=2,y++`
    })
    do `x2*y2`
    while ({
        z2: `0,z<=2,z++`
    })
}



