 declare module X{}
 declare module Y{}
 declare module Z{}
 import './tensor/BigXtensor'
 import './tensor/BigYtensor' 
 import './tensor/BigZtensor' 
 import './tensor/smallxtensor' 
 import './tensor/smallytensor'
 import './tensor/smallztensor'
 import './tensor/midxtensor' 
 import './tensor/midytensor'
 import './tensor/midztensor'
function fermat() {
    const X = `BigXtensor + BigYtensor + BigZtensor`
    const Y = `midxtensor + midytensor + midztensor`
    const Z = `smallxtensor + smallytensor + smallztensor`
     console.log(X,Y,Z)
}

