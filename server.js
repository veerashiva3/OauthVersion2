// //oauth.js is working

// const express=require('express')
// const app=express()
// const fetchUrl=require('fetch').fetchUrl;

// const cred={
//     client_id:'448017564555-fjrkcf53kqhp9obvomrvqvtv4n9tujnv.apps.googleusercontent.com',
//     client_secret:'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',
//     project_id:'concise-epsilon-401106',
//     redirect_uri:'http://localhost:4000/auth/callbacks',
//     scopes:'/auth/profile.agerange.read'
// }

// const headers = {  
//     'Content-Type': 'application/json',
//     // Add any other headers here (e.g., authorization headers)
// };
// const url=`https://accounts.google.com/o/oauth2/auth?client_id=${cred.client_id}&redirect_uri=${encodeURIComponent(cred.redirect_uri)}&scope=${encodeURIComponent(cred.scopes)}&response_type=json`
// function submit(){
//     // app.get('/')
//     fetchUrl(url
//     ,{
//         method:'GET',
//         headers:headers,
//         // body:JSON.stringify(cred)
//     })
    
// }
// app.get('/auth', (req, res) => {
//     // const url = `https://accounts.google.com/o/oauth2/auth?client_id=${cred.client_id}&redirect_uri=${cred.redirect_uri}&scope=${cred.scopes}&response_type=code`;
//     res.redirect(url); // Redirect the user to Google's sign-in and consent page
//   });

// app.get('/auth/callbacks', (req, res) => {
//     const authorizationCode = req.query.code;
//     console.log("authcode",authorizationCode);
//     res.send("auth received")


//     // app.get accesds token



// })

// app.listen(4000,()=>{
//     console.log("server listening"),
//     submit()
// })

const mail="veehave a meeting at place so the shiva@gmail.com"
const req=/[\w.-]+@[\w.-]+\.[a-zA-Z]{2,4}/g

const emextract=mail.match(req)
console.log(emextract)