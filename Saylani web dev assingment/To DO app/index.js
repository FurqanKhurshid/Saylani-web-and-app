console.log('Firebase---->', firebase)
console.log('Firestore--->', firebase.firestore)

gettodo()

function gettodo() {
    let IDNO = 1;
    const table = document.getElementsByTagName('tbody')[0]
    table.innerHTML = ''

    firebase.firestore().collection('ADD_todo')
        .orderBy('date', 'desc')
        .get()
        .then(function (snaps) {
            snaps.forEach(function (doc) {
                console.log(doc.data())
                data = doc.data()

                const row = document.createElement('TR')
                const ID = document.createElement('TH')
                const Tasks = document.createElement('TD')
                const Date = document.createElement('TD')

                const Actions = document.createElement('TD')

                ID.innerHTML = IDNO++;
                Tasks.innerHTML = data.input
                Date.innerHTML = moment(data.date && data.date.toDate()).format('dddd, MMMM Do YYYY');
                Actions.innerHTML = `<button type="button" class="btn btn-info" data-toggle="modal" data-target="#exampleModal2" data-whatever="@getbootstrap" ><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-pencil" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"/>
              <path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"/>
            </svg > Edit</button>
            <button type="button" class="btn btn-danger" Onclick='Deleteitem(this)'><svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                  </svg>Delete</button>`

                row.appendChild(ID)
                row.appendChild(Tasks)
                row.appendChild(Date)
                row.appendChild(Actions)
                table.appendChild(row)

            })
        })












}



function ADD_item() {
    let input = document.getElementById('Add-todo').value
    let date = document.getElementById('date').valueAsDate
    if (!input || !date) {
        swal({
            title: "Error !",
            text: "Please Fill Out the Field",
            icon: "error",
            button: "OK !",
        });
    }

    else {
        gettodo()
        firebase.firestore().collection('ADD_todo').add({
            input, date
        }).then(function () {
            swal({
                title: "Good job!",
                text: "Task Added Successfully!",
                icon: "success",
                button: "Ok!",

            }).then(function () {

                document.getElementById('Add-todo').value = '';
                let date = document.getElementById('date').value = '';

            })


        })
    }

}
function Deleteitem(e){

    e.parentNode.remove()

}


function Deleteall(){
    document.getElementById('table').value = ''
}