import '../Letter/cvgl/smallletter/i'
import '../Letter/cvgl/smallletter/j'
import '../Letter/cvgl/smallletter/k'
import '../Letter/cvgl/smallletter/l'
import '../Letter/cvgl/smallletter/m'
import '../Letter/cvgl/smallletter/n'
import '../Letter/cvgl/smallletter/o'
import '../Letter/cvgl/smallletter/p'
import '../Letter/cvgl/smallletter/q'
import "../return/returnn"
export function x1() {
    for (let i = 0; i <= 3; ++i)
        for(let j = 0; j <= 3; ++j)
            for(let k = 0; k <= 3; ++k)
             console.log()
}
export function y1(){
    for(let l = 0;-3 <= l && l <= 3; ++l || l--)
       for(let m = 0;-3 <= m && m <= 3 ;++m || m--)
          for(let n = 0 ;-3 <= n && n <= 3;++n || n--)
            console.log()
}
export function z1(){
    for(let o = 0;o >= -3;o--)
        for(let p = 0; p >= -3;p--)
            for(let q = 0; q >= -3; q--)
             console.log()
}
export function t1(){
        do `x1*y1`
        while ({
            z1: `0,z<=1,z++`
        })
        do `x1*z1`
        while ({
            y1: `0,z<=1,y++`
        })
        do `y1*z1`
        while ({
            x1: `0,x<=1,x++`
        })
}
