import React, { Component} from 'react';

class EditListForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id:       this.props.list.id,
      title:    this.props.list.title,
      excerpt:  this.props.list.excerpt
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    const { id, title, excerpt } = this.state;
    this.props.editList(id, title, excerpt);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} className=" col-12 col-sm-8 offset-sm-2">
        <div className="border">
          <div className="card-header">
            Editing #{this.state.id}
            <div className="input-group py-1">
              <div className="input-group-prepend">
              <span className="input-group-text">Title</span>
              </div>
              <input  name="title"
                      type="text"
                      placeholder="Title.."
                      value={this.state.title} // value should already be present when editing
                      onChange={this.handleChange}
                      className="form-control"
                      autoFocus='true' />
            </div>
          </div>
          <div className="card-body">
            <div className="input-group py-1">
              <div className="input-group-prepend">
                <span className="input-group-text">Excerpt</span>
              </div>
              <input  name="excerpt"
                      type="text"
                      placeholder="Excerpt.."
                      value={this.state.excerpt} // value should already be present when editing
                      onChange={this.handleChange}
                      className="form-control" />
            </div>
          </div>
          <button className="btn btn-outline-success">Update List</button>
        </div>
      </form>
    )
  }
}

export default EditListForm;