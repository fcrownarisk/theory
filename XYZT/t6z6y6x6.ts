
import '../Letter/cvgl/Bigletter/I'
import '../Letter/cvgl/Bigletter/J'
import '../Letter/cvgl/Bigletter/K'
import '../Letter/cvgl/Bigletter/L'
import '../Letter/cvgl/Bigletter/M'
import '../Letter/cvgl/Bigletter/N'
import '../Letter/cvgl/Bigletter/O'
import '../Letter/cvgl/Bigletter/P'
import '../Letter/cvgl/Bigletter/Q'
import "../return/returnnnnnnn"
export function x6(){
    for (let I = 0; I <= 8; I++)
        for(let J = 0; J <= 8; J++)
            for(let K = 0; K <= 8; K++)
                console.log()
}
export function y6(){ 
    for(let L = 0;-8 <= L && L <= 8; L++ || L--)
        for(let M = 0;-8 <= M && M <= 8;M++ || M--)
            for(let N = 0;-8 <= N && N <= 8; N++ || N--)
                console.log()
}
export function z6(){
    for(let O = 0; O >= -8; O--)
        for(let P = 0; P >= -8; P--)
            for(let Q  = 0; Q >= -8; Q--)
                console.log()
}
export function t6(){
    do `x6*y6`
    while ({
        z6: `0,z>=6,z--`
    })
    do `x6*z6`
    while ({
        y6: `0,z>=6,y--`
    })
    do `y6*z6`
    while ({
        x6: `0,x>=6,x--`
    })
}
