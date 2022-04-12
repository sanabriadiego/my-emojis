const emojiArray = ["🤔","🦾","👻","🦁","🍔","🎸"]
const emojiArrayEl = document.getElementById("emoji-container")
const emojiInputEl = document.getElementById("emoji-input")
const addEndBtn = document.getElementById("add-end")
const addBeginningBtn = document.getElementById("add-beginning")
const removeEndBtn = document.getElementById("remove-end")
const removeBeginningBtn = document.getElementById("remove-beginning")


function renderArray(){
    emojiArrayEl.textContent = emojiArray.join(" ")
}

function addEnd(){
    emojiArray.push(emojiInputEl.value)
    renderArray()
}

function addBeginning(){
    emojiArray.unshift(emojiInputEl.value)
    renderArray()
}

function removeEnd(){
    emojiArray.pop()
    renderArray()
}

function removeBeginning(){
    emojiArray.shift()
    renderArray()
}

renderArray()

addEndBtn.addEventListener("click", addEnd)
addBeginningBtn.addEventListener("click", addBeginning)
removeBeginningBtn.addEventListener("click", removeBeginning)
removeEndBtn.addEventListener("click", removeEnd)

