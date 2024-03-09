const express = require('express');

const mongodb = require('./data/database');

const app = express();

const bodyParser = require('body-parser');

const port =3000

app.listen(process.env.PORT || port);


app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type,Accept, Z-Key'
    );
    res.setHeader('Access-Control-Allow-Protocols', 'GET,POST, PUT, DELETE, OPTIONS');
next();

});

app.use('/', require('./routes')); 
mongodb.initDb((err) =>{

    if(err) {
        console.log(err);
    }

    else{

       
console.log('Databse is listening and Node is running on  port ' + (process.env.PORT || port));

    }



}
);

