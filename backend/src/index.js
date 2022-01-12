import app from './app'

app.listen(
    app.get('port'), () => { 
        console.log(`\nready - started server on 0.0.0.0:3001, url: http://localhost:3001\n`) 
    }
)