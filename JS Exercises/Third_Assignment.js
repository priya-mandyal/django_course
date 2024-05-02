var roster = []

function addNew(name) {
    roster.push(name);
}

function remove(name) {
    var loc = 0;
    for(var i = 0; i<roster.length;i++){
        if(roster[i] === name){
            loc = i;
            break;
        }
    }
    roster.splice(loc,1);
}

function display(){
    for( student of roster){
        console.log(student);
    }
}

while(true) {
    var input = prompt("Add (a) or Remove (r) or Display (d) or Quit (q)");
    if(input === "q") {
        break;
    }
    if(input === "a"){
        var student = prompt("Input student to be added: ");
        addNew(student);
    } else if(input === "r"){
        var student = prompt("Input student to be removed: ");
        remove(student);
    } else {
        display();
    }
}