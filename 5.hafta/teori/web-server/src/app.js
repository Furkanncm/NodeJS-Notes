const express =require("express")
const app=require("path")



app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
    })

app.get('/weather', (req, res) => {
    res.send({
    forecast: 'It is snowing',
    location: 'Bursa'
    })
})


app.get('/help', (req, res) => {
    res.send([{
    name: 'Andrew',
    }, {
    name: 'Sara'
    }])
    })


app.get('/help', (req, res) => {
    res.send({
    name: 'Andrew',
    age: 27
    })
    })


app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
    })

app.get('/weather', (req, res) => {
    res.send('Your weather')
    })

app.get('/about', (req, res) => {
    res.send('About')
    })

    

app.get('', (req, res) => {
    res.send('Hello express!')
    })
   
    app.listen(3000, () => {
    console.log('Server is uo on port 3000.')
    })

    app.get('/help', (req, res) => {
        res.send('Help page')
        })
        

