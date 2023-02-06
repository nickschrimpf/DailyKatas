// 7KYU
function largest(n, array) {
    return n > 0 ? array.sort((a,b)=>a-b).splice(-n,array.length):[]
}
// 8KYU
function boolToWord( bool ){
    return bool ? 'Yes': 'No';
}
function maskify(cc) {
    console.log(cc)
    if(cc.length <= 4){
      return cc
    }else{
      let result =[]
      result.push(cc.slice(-4))
      let i = 4;
      console.log(cc.length)
      do{
        result.push('#')
        i++
      }while(i < cc.length)
      return result.reverse().join('')
    }
  }