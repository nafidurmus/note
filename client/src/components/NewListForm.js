import React from 'react';

const NewListForm = ({onNewList = f => f}) => {
  let title, excerpt
  const submit = e => {
    e.preventDefault()
    onNewList(title.value, excerpt.value)
    title.value = ''
    excerpt.value = ''
    title.focus()
  }

  return(
    <div className="col-12 col-sm-8 offset-sm-2 p-1">
      <div className="card-header p-1 border border-default bg-dark text-light border-bottom-0">
        Add a new list!
      </div>
      <form onSubmit={submit} className="p-2 border border-default">
        <div className="form-group">
          <input ref={input => title = input}
                 type="text"
                 placeholder="Title.."
                 required
                 className="form-control mb-1"/>
          <input ref={input => excerpt = input}
                 type="text"
                 placeholder="Excerpt.."
                 required
                 className="form-control mb-1"/>
          <button className="d-block btn btn-sm btn-success ml-auto">Add List</button>
        </div>
      </form>
    </div>
  )
}

export default NewListForm;