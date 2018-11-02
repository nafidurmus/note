import React from 'react';

const List = ({list, onRemoveList = f => f, editingList = f => f }) =>
  <div className="single-list col-12 col-sm-8 offset-sm-2 p-1" key={list.id}>
    <div className='card'>
      <div className="card-header">#{list.id} - {list.title}</div>
      <div className="card-body">{list.excerpt}</div>
      <div className="p-2 d-flex align-items-center">
        <div className="mr-auto text-muted small">
        updated: {list.updated_at}
        </div>
        <div className="btn-group">
          <button className="btn btn-sm btn-outline-danger d-flex align-items-center" onClick={() => onRemoveList(list.id)}><ion-icon name="trash"></ion-icon><span className="pl-2">Delete</span></button>
          <button className="btn btn-sm btn-outline-warning d-flex align-items-center" onClick={() => editingList(list.id)}><ion-icon name="create"></ion-icon><span className="pl-2">Edit</span></button>
        </div>
      </div>

    </div>
  </div>

export default List;