var roster = []

function addNew() {
    var student = prompt("Input student to be added: ");
    roster.push(student);
}

function remove() {
    var student = prompt("Input student to be removed: ");
    var loc = roster.indexOf(student);
    roster.splice(loc,1);
}

function display(){
    for( student of roster){
        console.log(student);
    }
}

var input = "a";
while(input !== "q") {
    input = prompt("Add (a) or Remove (r) or Display (d) or Quit (q)");
    if(input === "a"){
        addNew();
    } else if(input === "r"){
        remove();
    } else if(input === "d") {
        display();
    }
}