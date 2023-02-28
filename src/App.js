
import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [array, setArray] = useState([
    { id: 1, name: "Tania", email: "mailto:tania@abc.com", contact: 989898757 },
    { id: 2, name: "Craig", email: "mailto:craig@abc.com", contact: 999898757 },
    { id: 3, name: "Ben", email: "mailto:ben@abc.com", contact: 979898757 }
  ])
  const [addingNew,setAddingNew] = useState([{
    id: "",
    name: "",
    email: "",
    contact: ""
  }
  ])
  const [user, setUser] = useState([])
  const [index1,setIndex1]=useState([""])


    function editButton(student,index){
      setAddingNew({id:student.id,name:student.name,email:student.email,contact:student.contact})
      setIndex1(index)
      console.log(addingNew)
      }


  const handleSave = () => {
    var temp1=[...array]
    
    temp1[index1]=addingNew
   
    setArray(temp1)
    console.log(temp1)
  };

  function deleteButton(index) {
    var dummy = [...array]
    dummy.splice(index, 1)
    setArray(dummy)
    console.log(index)
  }

  function asd(){
    setArray([...array,addingNew])
   }

  

  function ids(e) {
    addingNew.id = e.target.value
  }


  function names(e) {
    addingNew.name = e.target.value
  }


  function emails(e) {
    addingNew.email = e.target.value
  }


  function contacts(e) {
    addingNew.contact = e.target.value
  }

  function handlechangeId(e){
    addingNew.id=e.target.value
    setAddingNew({...addingNew})
   }
   function handlechangeName(e){
    addingNew.name=e.target.value
    setAddingNew({...addingNew})
   }
   function handlechangeEmail(e){
    addingNew.email=e.target.value
    setAddingNew({...addingNew})
   }
   function handlechangeContact(e){
    addingNew.contact=e.target.value
    setAddingNew({...addingNew})
   }

  return (
    <div className="wholediv p-5">
    <div className="App container ">

      <table class="table table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact</th>
            <th></th>
            <th></th>


          </tr>  </thead>
        <tbody>
          {array.map((student, index) => (
            <tr data-index={index}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.contact}</td>
              <td><button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal" onClick={()=>{editButton(student,index)}} >Edit</button></td>
              <td><button type="button" class="btn btn-primary" onClick={() => { deleteButton(student,index) }}>Delete</button></td>

            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Add New Employee
      </button>
      <div>

        <div class="modal " id="myModal" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content wholediv2">

              <div class="modal-header">
                <h4 class="modal-title">Edit</h4>
                <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
              </div>

              <div class="modal-body">
                <div>
                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">id</label>
                    <input type="number" class="form-control" id="recipient-name"
                      value={addingNew.id}  required onChange={handlechangeId} />
                  </div>

                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Name</label>
                    <input type="text" class="form-control" id="recipient-name"
                      value={addingNew.name}  required onChange={handlechangeName} />
                  </div>

                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Email</label>
                    <input type="mail" class="form-control" id="recipient-name"
                      value={addingNew.email} required onChange={handlechangeEmail} />
                  </div>

                  <div class="mb-3">
                    <label for="recipient-name" class="col-form-label">Contact</label>
                    <input type="number" class="form-control" id="recipient-name"
                      value={addingNew.contact} required onChange={handlechangeContact} />
                  </div>


                </div>
              </div>

              <div class="modal-footer">

                <button type="submit" class="btn btn-primary"  data-bs-dismiss="modal" onClick={handleSave}>Update</button>

              </div>
            </div></div>
        </div>

      </div>

      <div class="modal fade " id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content wholediv2">
            <div class="modal-header ">
              <h5 class="modal-title" id="exampleModalLabel">Add New Employee</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">id:</label>
                  <input type="numbers" class="form-control" id="recipient-name" required onKeyUp={(e)=>{ids(e)}}/>
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Name:</label>
                  <input type="text" class="form-control" id="recipient-name" required onKeyUp={(e)=>{names(e)}}/>
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Email:</label>
                  <input type="mail" class="form-control" id="recipient-name" required onKeyUp={(e)=>{emails(e)}}/>
                </div>
                <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">Conact:</label>
                  <input type="number" class="form-control" id="recipient-name" required onKeyUp={(e)=>{contacts(e)}}/>
                </div>
              </form>      </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary" data-bs-dismiss="modal"onClick={asd}>add</button>
            </div>
          </div>
        </div>
      </div>

    </div>
    </div>


  );
}

export default App;
