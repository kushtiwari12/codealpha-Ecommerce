const express = require("express");
const path = require("path");
const app = express();

app.use(express.json());
app.use(express.static(__dirname));

let products = [
  {id:1, name:"Wireless Headphone", price:29.99, img:"https://picsum.photos/300/200?1", desc:"Best quality headphone"},
  {id:2, name:"Smart Watch", price:49.99, img:"https://picsum.photos/300/200?2", desc:"Smart watch"},
  {id:3, name:"Running Shoes", price:19.99, img:"https://picsum.photos/300/200?3", desc:"Comfortable shoes"},
  {id:4, name:"Backpack", price:19.99, img:"https://picsum.photos/300/200?4", desc:"Waterproof backpack"},
  {id:5, name:"Sunglasses", price:24.99, img:"https://picsum.photos/300/200?5", desc:"UV protection"},
  {id:6, name:"Speaker", price:29.99, img:"https://picsum.photos/300/200?6", desc:"Bluetooth speaker"}
];

let users = [];
let orders = [];

app.get('/', (req,res)=> {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/products', (req,res)=> res.json(products));
app.post('/api/register', (req,res)=> { users.push(req.body); res.json({msg:"User Registered", user:req.body}) });
app.post('/api/login', (req,res)=> { let u=users.find(a=>a.email==req.body.email); if(u) res.json({msg:"Login Success"}); else res.json({msg:"User not found"}) });
app.post('/api/order', (req,res)=> { orders.push(req.body); res.json({msg:"Order Placed", total:orders.length}) });

app.listen(3000, ()=> console.log("Server running on http://localhost:3000"));