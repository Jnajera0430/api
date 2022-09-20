const express = require ('express')


const app = express()




app.set('port', process.env.PORT || 3000);

console.log(app.get('port'));




app.listen(app.get('port'), ()=>{
    console.log('server is connected', app.get('port'));
})