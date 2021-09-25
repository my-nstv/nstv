loadJSON('content', (json) =>
{
    var items = json['items']

    items.forEach(data => {
        addItem(data['yt-id'])
    })
})

function addItem(ytId)
{
    var container = document.getElementById('content')
    var card = document.createElement('div')
    var thumbnail = document.createElement('img')
    var labelBox = document.createElement('div')

    thumbnail.src = `https://img.youtube.com/vi/${ytId}/mqdefault.jpg`
    labelBox.className = 'label'
    requestTitle(ytId, (title) =>
    {
        labelBox.innerHTML = title
    })
    
    card.setAttribute('data-id', ytId)
    card.className = 'item'
    card.onclick = () =>
    {
        window.open(`https://youtu.be/${ytId}`)
    }

    card.appendChild(thumbnail)
    card.appendChild(labelBox)

    container.appendChild(card)
}