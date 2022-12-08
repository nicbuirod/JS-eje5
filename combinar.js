function myFunction(objX, objY) {
   const result = Object.assign(objY,objX)

    return result
  }

  console.log(myFunction({a:1,b:2,c:3},{d:4,b:5,e:6}))
  console.log(myFunction({a:1,b:2,c:3},{a:4,d:5,e:6}))
  console.log(myFunction({a:1,b:2,c:3},{d:4,b:5,c:6}))