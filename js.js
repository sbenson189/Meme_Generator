document.querySelector("#topTextInput").addEventListener("keyup", function() {
    const queryText = document.querySelector("H3")
    if(this.value != "") {
        queryText.innerHTML = this.value
    }
    else {
        queryText.innerHTML = "MEME TOP TEXT"
    }
})

document.querySelector("#bottomTextInput").addEventListener("keyup", function() {
    const queryTextTwo = document.querySelector("H4")
    if(this.value != "") {
        queryTextTwo.innerHTML = this.value
    }
    else {
        queryTextTwo.innerHTML = "MEME BOTTOM TEXT"
    }
})

memeForm.addEventListener("submit", function (event) {
    event.preventDefault()
    imageSearch = document.querySelector("#imageSearchInput")
    imageInput = imageSearch.value
    memeContainer = document.querySelector("#memeContainer")
    memeContainer.style.backgroundImage = `url(${imageInput})`
})