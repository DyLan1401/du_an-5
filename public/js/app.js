let content = document.querySelector(".content");
let input = document.querySelector(".content input");
let btnRemoveall = document.querySelector('.remove-all')
let tags = ["Nodejs", "jeactJs"];

function render() {
    content.innerHTML = "";
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i];
        content.innerHTML +=
            `<li>
        ${tag}
        <i class="fas fa-times close" onclick="removeTag(${i})"></i>
    </li>`
    }
    content.appendChild(input);
    input.focus();
}


function removeTag(i) {
    tags.splice(i, 1)
    render()
}

render();

input.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        tags.push(input.value.trim())
        input.value = ""
        render()
    }
});

btnRemoveall.addEventListener('click', function () {
    if (tags.length == 0) {
        alert("tag đã được xóa hết")
    }
    else {
        tags = []
        render()
    }
})


