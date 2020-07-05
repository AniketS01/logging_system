const express = require('express');
const path = require('path');
const app = express();
const members = require('./members');


//body parser middleware

app.use(express.json());
app.use(express.urlencoded({extended: false}));



// members api routes
app.use('/api/members', require('./public/api/members'));


const PORT = process.env.PORT || 5000;
app.listen(PORT , () => console.log(`server started at 5000 .....`));
