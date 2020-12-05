// 1# CREATE AN EXPRESS APP
/* 
express adalah framework dari nodejs yang digunakan untuk membuat aplikasi 
dengan lebih cepat dan mudah.
Berikut perbandingan menggunakan nodejs dengan nodejs+express
*/
// Menggunakan NODEJS Only
// let http = require('http');
// let fs = require('fs');

// let handleRequest = (request, response) => {
//     response.writeHead(200, {
//         "Content-Type": "text/html"
//     });
//     fs.readFile("./index.html", null, function(error, data) {
//         if (error) {
//             response.writeHead(404);
//             response.write("Whoops! File not found");
//         } else {
//             response.write(data);
//         }
//         response.end();
//     });
// };

// http.createServer(handleRequest).listen(8000);

// Menggunakan NODEJS + EXPRESS
// var express = require('express');
// var app = express();
// var path = require('path');
//viewed at http://localhost:8000
// app.get("/", function(req, res) {
//     res.sendFile(path.join(__dirname + "/index.html"));
// });
// Bisa juga menggunakan kode ini:
// app.get('/', (req,res)=>{
//     res.send(<p>Homepage</p>);
// })
// app.get('/add-item', (req,res)=>{
//     res.send(<p>Add Item</p>);
// });
// app.listen(8000)

/*
Kode tersebut di atas yang tidak menggunakan EXPRESS dapat langsung dijalankan
dengan mengetik di terminal node app.js, tetapi harus membuat file index.html 
terlebih dahulu, dan diisi dengan tulisan
di body, misalnya <h1>HELLO WORLD</h1>, kemudian jalankan di browser
localhost:8000, maka NODEJS akan dapat menjalankan script app.js
dan menampilkan content dalam index.html yaitu tulisan HELLO WORLD.

Tetapi jika menjalankan kode kedua yang menggunakan EXPRESS, kita harus 
install express dulu dengan perintah npm install express. Kemudian jalankan
app.js dengan perintah node app.js, dan buka browser ketik localhost:8000,
hasilnya sama dapat menampilkan HELLO WORLD di browser, tetapi dengan kode
yang lebih singkat.
*/

// 2# ROUTING