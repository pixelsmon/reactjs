
function ListGroups() {
  let students = [
    "akarsh", "harsh", "gnani", "chandu"
  ]
  // const Click = (student, index) => {
  // console.log(student, index)
  //}
  const Click = (event) => console.log(event.target
  )
  const mapFunctionForList = students.map((student, index) =>
    <ul className="list-group">
      <li className="list-group-item" key={student} onClick={Click}>{student}
      </li></ul>
  )
  //let good = students.length !== 1 && <p>Good</p>

  return <>
    <h1><b>List  Of </b><i>Students</i></h1>
    {mapFunctionForList}


  </>

}

export default ListGroups

/*return
<>
  <h1>
    <i>ListGroups</i>
  </h1>
  <div class="row">
    <div class="col-4">
      <div id="list-example" class="list-group">
        <a class="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
        <a class="list-group-item list-group-item-action" href="#list-item-2">Item 2</a>
        <a class="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>  <a class="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
      </div>
    </div>
    <div class="col-8">
      <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" class="scrollspy-example" tabindex="0">
        <h4 id="list-item-1">Item 1</h4>
        <p>...</p>
        <h4 id="list-item-2">Item 2</h4><p>...</p>
        <h4 id="list-item-3">Item 3</h4><p>...</p>
        <h4 id="list-item-4">Item 4</h4> <p>...</p>     </div>
    </div></div>

</>
}

  
export default ListGroups; */

