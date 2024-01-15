//forEach 안에는 함수를 받음.
let arr = ["마이크","톰","제인"]

arr.forEach((name,index) => {
    console.log(name);
});

arr.forEach((name,index)=>{
    console.log(`${index +1}. ${name}`);
}); //객체 리터럴을 사용할 땐 `(백틱)을 사용해야한다.