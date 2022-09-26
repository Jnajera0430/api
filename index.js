const express = require ('express')


const app = express()




app.set('port', process.env.PORT || 5500);

console.log(app.get('port'));

app.use(require('index.js'))


app.get('/',(res,req)=>{
    res.send('recived')
})


app.listen(app.get('port'), ()=>{
    console.log('server is connected', app.get('port'));
})