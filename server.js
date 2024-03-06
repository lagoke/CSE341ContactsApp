const express = require('express');

const mongodb = require('./data/database');

const app = express();


app.use('/', require('./routes')); 

const port =3000


mongodb.initDb((err) =>{

    if(err) {
        console.log(err);
    }

    else{

        app.listen(process.env.PORT || port);
console.log('Databse is listening and Node is running on  port ' + (process.env.PORT || port));

    }



}
);

