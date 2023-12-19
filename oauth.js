// without passport

require('dotenv').config()
const express = require('express')
const axios = require('axios')
const app = express()

const CLIENT_ID = process.env.CLIENT_IDENV
const CLIENT_SECRET = process.env.CLIENT_SECRETENV
const REDIRECT_URI = `http://localhost:${process.env.PORTENV}/auth/callback`;

app.get('/', (req, res) => {
    res.send(`<a href="/auth">click to authneticate and LOGIN</a>`)
})
app.use(express.json())
app.get('/auth', (req, res) => {
    const authUrl = `https://accounts.google.com/o/oauth2/auth?` +
    `client_id=${CLIENT_ID}&` +
    `redirect_uri=${REDIRECT_URI}&` +
    `scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email&`+
    `response_type=code`;
    
    
    //console.log("/auth", authUrl);      

    res.redirect(authUrl)
})

app.get('/auth/callback', async (req, res) => {
    console.log(req.query   )
    const code = req.query.code 
    console.log("THe authorization code given after making req to oauth url and this is sent to the token url for access token----->>",code)

    const tokenUrl = 'https://oauth2.googleapis.com/token'
    const params = {
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
        code,
        grant_type: 'authorization_code',
    }

    try{
        const response = await axios.post(tokenUrl, null, {params})

        //console.log("the access token object given from the google",response)

        const accessToken = response.data.access_token

        console.log("the access token is to allow user to access data is---->>",accessToken)

        const userData = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        })

         console.log("the user data from the server",userData.data)

res.send(`Name: ${userData.data.email} <br> Email: ${userData.data.name} <br> Profile Pic: <img src="${userData.data.picture}">`)
    }catch(err){
        console.error(err)
        res.status(500).send(`Error: ${err.message}`)
    }
})

app.listen(process.env.PORTENV, () => {
    console.log(`Server listening on ${process.env.PORTENV}`)
})