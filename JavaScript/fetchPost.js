async function createData(){
    try{
        var res = await fetch("http://localhost:5000/contact/",{
        method:"POST",
        headers:{
            "Content-Type" : "application/json",
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJOYW1lIjoiTWFyayBBbnRvbnkiLCJlbWFpbCI6ImZpZGVsam9zZUBnbWFpbC5jb20iLCJpZCI6IjY5MzY0YzkxNjkyYTQ0YzZkYjdlMThiZCJ9LCJpYXQiOjE3NjUxNjYzODEsImV4cCI6MTc2NTE2NzI4MX0.3D0ckmmNaHZo1l05sOVJWEJS8T2l4DErvI0BRGemv-E"
        },
        body:JSON.stringify({
            name : "Moganavasudev",
            contactNo : "8248473936",
            email : "fideljose@gmail.com",
        })
        }
        )
        var responsejson = await res.json()
        console.log(responsejson)
    }
    catch(err){
        console.log(err)
    }
}

createData()