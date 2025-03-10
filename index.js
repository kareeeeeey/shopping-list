
const addItemBtn = document.getElementById("add-item-btn")
const itemInput = document.getElementById("item-input")
const list = document.getElementById("list")

const shoppingList = []

addItemBtn.addEventListener("click", addItem);
itemInput.addEventListener("keyup", function (event){
    if(event.key === "Enter") addItem()
});

function addItem() {
    const item = itemInput.value.trim();
    if(item) {
        shoppingList.push(item);
        render()
        itemInput.value = ""
    }
}

function render() {
    list.innerHTML = shoppingList
    .map(item => `<li class="list-item">${item}</li>`)
    .join("")
}


