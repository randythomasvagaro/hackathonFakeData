const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const db = require('./database/index');

const app = express();

app.use(express.static(`${__dirname}/../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/donate', (req, res) => {
//   db.Service.find({}).exec((err, data) => {
//     if (err) throw err;
//     console.log(data, 'DATA')
//     res.send({
//       donate: data
//     })
//   })
// })

// app.get('/payItForward', (req, res) => {
//   db.Transaction.find({}).exec((err, data) => {
//     if (err) throw err;
//     console.log(data, 'DATA')
//     res.send({
//      payItForward: data
//     })
//   })
// })

let fakeData = () => {
    let phoneNumber = Math.floor(1000000000 + Math.random() * 9000000000) 
    let service = ['Donate', 'Pay It Forward']
    let random = service[Math.floor(Math.random() * service.length)]
    let amount = Math.floor(1 + Math.random() * 9)

    db.transactionSave({
        phoneNumber: phoneNumber,
        service: 'Pay It Forward',
        amount: amount,
    })
}

app.get('/', (req, res) => {
    
    setInterval(() => {
        fakeData();
    }, 2000)


    res.send("Hello World");
})
const port = 3005;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
