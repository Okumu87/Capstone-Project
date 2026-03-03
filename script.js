
fetch('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature')
.then(res => res.json())
.then(data => {
     console.log(data)
        document.body.style.backgroundImage = `url(${data.urls.full})`
        document.getElementById('author').textContent = `By: ${data.user.name}`
})
.catch(err => {
    console.log(err)
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEwfHx1bmNsZWFyfGVufDB8fHx8MTY4NjQ5ODk0NA&ixlib=rb-4.0.3&q=80&w=1080)`
    document.getElementById('author').textContent = `By: Dodie Clark`
})

