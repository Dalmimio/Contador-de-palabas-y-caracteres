let text=document.getElementById('text')
let words=document.getElementById('words')
let characters=document.getElementById('characters')


    text.addEventListener('input', () => {
        characters.textContent = text.value.length

        words.textContent = text.value.trim().split(' ').length
    })
    