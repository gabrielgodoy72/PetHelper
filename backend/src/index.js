import app from './app'

app.listen(
    app.get('port'), () => { 
        console.log(`\n*****\t*****\t*****\tSERVER RUNNING ON PORT ${app.get('port')}\t*****\t*****\t*****\n`) 
    }
)