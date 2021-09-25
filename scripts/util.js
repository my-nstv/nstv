function loadJSON(name, callback)
{
    var xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function()
    {
        if(xhr.readyState == XMLHttpRequest.DONE)
        {
            var json = JSON.parse(xhr.responseText)
            callback(json)
        }
    }

    xhr.open('GET', `../json/${name}.json`, true);
    xhr.send()
}

function requestTitle(ytId, callback)
{
    var xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function()
    {
        if(xhr.readyState == XMLHttpRequest.DONE)
        {
            callback(JSON.parse(xhr.responseText)['title'])
        }
    }

    xhr.open('GET', `https://www.youtube.com/oembed?url=https://youtu.be/${ytId}&format=json`)
    xhr.send()
}