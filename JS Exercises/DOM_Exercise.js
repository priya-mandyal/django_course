var cells = document.querySelectorAll("td");

function changeContent(){
    if(this.textContent === ''){
        this.textContent = 'O';
    } else if (this.textContent === 'O'){
        this.textContent = 'X';
    } else {
        this.textContent = '';
    }
}

for (let index = 0; index < cells.length; index++) {
    cells[index].addEventListener("click",changeContent);
    
}
var button =  document.querySelector("#restart");

button.addEventListener("click", function(){
    cells.forEach(function(cell){
        cell.textContent = "";
    });
})