// const express = require('express');
// const noddy = express();
// // const port = 3000

// // app.get('/', (req, res) => res.send('Hello World!'))
// // app.listen(port, () => console.log(`Example app listening on port ${port}!`))
// noddy.use(express.json());

// noddy.listen(3000, () => {
//     console.log("server is running on port 3000");
// })





const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
