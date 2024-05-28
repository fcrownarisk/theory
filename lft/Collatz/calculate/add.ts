declare module x1{}
declare module y1{}
declare module z1{}
function add(){
  never :'x1 + y1'
  never :'y1 + z1'
  never :'z1 + x1'
  return add
}
