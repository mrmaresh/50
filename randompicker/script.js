const textArea = document.querySelector('.textbox');
const tagsArea = document.querySelector('.tags');


textArea.focus();

textArea.addEventListener('keyup', (e) => {
    const tags = e.target.value.split(',').filter(tag => tag.trim());

    createTags(tags);

    if (e.key == "Enter"){
        e.target.value = "";
        const interval = setInterval( () => {
            console.log("ENTER");
            const randomTag = selectRandom();
            if (randomTag !== undefined){
                randomTag.classList.add('selected');
                setTimeout( () => {
                    randomTag.classList.remove('selected');
                },100)
            }
        }, 100)
        setTimeout( () => {
            clearInterval(interval);
            const randomTag = selectRandom();
            randomTag.classList.add('selected');
        },100*30)
    }
})


function selectRandom() {
    const tagz = document.querySelectorAll('.tag');
    return tagz[Math.floor(Math.random()*tagz.length)]

}




function createTags(tags){
    tagsArea.innerHTML = "";

    tags.forEach(tag => {
        const tagEl = document.createElement("span");
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsArea.appendChild(tagEl);
    })
}