// If user adds a note, save it to local storage.
showNotes();
let addBtn = document.getElementById('addBtn');

addBtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    showNotes();
    //console.log(notesObj);

});
// function to show elements from Local Storage
function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
 
    notesObj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card text-white bg-info mb-3" style="max-width: 20rem;">
        <div id ="headerTitle" class="card-header">${Date()}</div>
        <div class="card-body">
            <h4 class="card-titlestyle=">Sticky Note ${index +1}</h4>
            <p class="card-text">${element}</p>
                <button onClick="deleteNote(this.id)" id="${index}" type="button" class="btn btn-danger">Delete Note</button>
        </div>
    </div> `;
    });
    let notesElm = document.getElementById('notes');
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    }
    else {
        notesElm.innerHTML = `Nothing to Show You! Use "Add a Note" Button.`;
    }

}

// function to delete a Notes

function deleteNote(index) {
    console.log('Iam Deleted', index);

    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    //Updating the local storage with the amount of notes inside in it
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();
}

// Adding Search Functionality to the app

let search = document.getElementById('searchTxt');
    search.addEventListener("input",function(){
    
        let inputVal = search.value.toLowerCase();
        //console.log('input even is triggered', inputVal);

        let noteCards = document.getElementsByClassName('noteCard');
        Array.from(noteCards).forEach(function(element){
            let cardTxt = element.getElementsByTagName("p")[0].innerText;
            if(cardTxt.includes(inputVal)){
                element.style.display = "block";
            }
            else {
                element.style.display = "none";
            }
            //console.log(cardTxt);
            
        })
        
    
})