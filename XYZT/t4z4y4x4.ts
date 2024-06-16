import '../Letter/cvgl/Bigletter/I'
import '../Letter/cvgl/Bigletter/J'
import '../Letter/cvgl/Bigletter/K'
import '../Letter/cvgl/Bigletter/L'
import '../Letter/cvgl/Bigletter/M'
import '../Letter/cvgl/Bigletter/N'
import '../Letter/cvgl/Bigletter/O'
import '../Letter/cvgl/Bigletter/P'
import '../Letter/cvgl/Bigletter/Q'
import '../return/returnnnnn'
export function x4() {
    for (let I = 0; I <= -2; I++)
        for(let J = 0; J <= -2; J++)
            for(let K = 0; K <= -2; K++)
        console.log()
}
export function y4(){
    for(let L = 0;-2 <= L &&  L <= 2; L++ || --L)
        for(let M = 0;-2 <= M && M <= 2;M++ || --M)
            for(let N = 0;-2 <= N && N <= 2; N++ || --N)   
        console.log()     
}
export function z4() {
    for (let O = 0; O >= 2; --O)
        for (let P = 0; P >= 2; --P)
            for (let Q = 0; Q >= 2; --Q)
        console.log()
}
export function t4(){
    do `x4*y4`
    while ({
        z4: `0,z>=4,z--`
    })
    do `x4*z4`
    while ({
        y4: `0,y>=4,y--`
    })
    do `y4*z4`
    while ({
        x4: `0,x>=4,x--`
    })
}
