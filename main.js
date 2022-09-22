var iItem;
let prod;
var mood = 'create' ;

var noteName = document.getElementById("noteName");
var tNote = document.getElementById("tNote");
var tableRow = document.getElementById("tableRow");
var btnAddNote = document.getElementById("btnAddNote");
var btnEditNote = document.getElementById("btnEditNote");
var noteArr;



if (localStorage.getItem("Note") == null) {
    noteArr = [];
} else {
    var noteArr = JSON.parse(localStorage.getItem("Note"));
    display();
}
function AddNote() {
    var noteObjct = {
        nName: noteName.value,
        ntNote: tNote.value,
    };

    if (mood == 'create') {
    noteArr.push(noteObjct);
    display();
    clear();
    localStorage.setItem("Note", JSON.stringify(noteArr));
    }if (mood == 'updat') {
        noteArr[iItem] = noteObjct;
        localStorage.setItem("Note", JSON.stringify(noteArr));
        // btnAddNote.innerHTML = 'add a note';
        btnEditNote.style.display='none';
        btnAddNote.style.display = 'block';
        mood = 'create';
        display();
        clear();
    }
}
function clear() {
    noteName.value = "";
    tNote.value = "";
}
function display() {
    var box = ``;

    for (var i = 0; i < noteArr.length; i++) {
        let prod = noteArr.length;
        box += `
        <tr >
        <td  >${i + 1}</td>
        <td  >${noteArr[i].nName}</td>
        <td  >${noteArr[i].ntNote}</td>
        <td class="Options" >
        <button data-tran="Edit" class="btn btn-primary" onclick="UpdateProduct(${i});">Edit</button>
        <button data-tran="Delete" class="btn btn-danger" onclick="DeleteProduct(${i});">Delete</button>
        </td>
        </tr>`;

    }
    tableRow.innerHTML = box;
    numberNote.innerHTML =  noteArr.length;
}
function UpdateProduct(item) {
    noteName.value = noteArr[item].nName;
    tNote.value = noteArr[item].ntNote;
    btnEditNote.style.display='block';
    btnAddNote.style.display = 'none';
    iItem = item;

    mood = 'updat';
    // btnAddNote.innerHTML = 'updat';

    scroll({
        top:0,
        behavior:"smooth"
    })
}
function DeleteProduct(item) {
    noteArr.splice(item, 1);
    localStorage.setItem("Note", JSON.stringify(noteArr));
    display();
}
function deleteAll(){
    noteArr = [];
    localStorage.clear();
    display();
}