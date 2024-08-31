function getjoke(){

    let p = fetch("https://official-joke-api.appspot.com/jokes/random")
    p.then((data)=>{
        return data.json()
    }).then((data)=>{
        console.log (data)
        document.write(data.setup)
        document.write("<br>")
        document.write(data.punchline)
    })
}