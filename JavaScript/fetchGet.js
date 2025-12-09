async function getData() {
    try{
        let respose = await fetch("http://localhost:5000/contact/", {
    method: "GET",
    headers: {
      "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJOYW1lIjoiTWFyayBBbnRvbnkiLCJlbWFpbCI6ImZpZGVsam9zZUBnbWFpbC5jb20iLCJpZCI6IjY5MzY0YzkxNjkyYTQ0YzZkYjdlMThiZCJ9LCJpYXQiOjE3NjUxNjYzODEsImV4cCI6MTc2NTE2NzI4MX0.3D0ckmmNaHZo1l05sOVJWEJS8T2l4DErvI0BRGemv-E"
    }
  })
    let responsejson = await respose.json()
    console.log(responsejson)
    }
    catch(err){
        console.log(err)
    }
    
}

getData()