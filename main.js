const express = require('express');
const app = express();

let users = [
    {        
    "orderno":"11111",
    "name":"홍길동",
    "mobile":"01000000000",
    "city":"서울",
    "age":"20"
    },
    {
    "orderno":"11112",
    "name":"이길동",
    "mobile":"01000000000",
    "city":"부산",
    "age":"10"
    },
    {
    "orderno":"11113",
    "name":"이지동",
    "mobile":"01000000000",
    "city":"대구",
    "age":"34"
    },
    {
    "orderno":"11114",
    "name":"이지은", 
    "mobile":"01000000000",
    "city":"김해",
    "age":"23"
    }
]

// 전체 주문정보 조회
app.get('/orderno',(req, res)=> {
    return res.json(users);
});

// 주문번호에 따른 고객 정보 조회
app.get('/orderno/:orderno',(req, res)=> {
    var id = req.params.orderno;
    if(!id){
        return res.status(400).json("해당 주문번호가 존재하지 않습니다.");
    }
 
    let user = users.filter(user => user.orderno === id)[0]
    if(!user){
        return res.status(404).json(null);
    }
    
    return res.json(user);
});

//3000 port
app.listen(3000,()=>{
    console.log('listening 3000');
});
