import React, {Component} from 'react';
import { FaPen } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import { FaSave } from 'react-icons/fa';


class Note extends Component {
  constructor(props){
    super(props)
    this.state = {
      editing: false
    }
      this.edit = this.edit.bind(this);
      this.remove = this.edit.bind(this);
      this.renderForm = this.renderForm.bind(this);
      this.renderDisplay = this.renderDisplay.bind(this);
      this.save = this.save.bind(this);

  }
  edit(){
  this.setState({
    editing:true
  })
  }

  renderForm() {
    return(
      <div className="note">
      <form onSubmit={this.save}>
      <textarea ref={input => this._newText = input} />
      <button onClick={this.save} id="save"><FaSave /></button>
      </form>
      </div>
    )
  }

  save(e){
  e.preventDefault();
  this.props.onChange(this._newText.value, this.props.index)
  this.setState({
    editing:false
  })
  }

  remove(){
    alert('Remove the note');
  }
  renderDisplay(){
    return (
      <div className="note">
       <p>{this.props.children} </p>
       <span>
        <button onClick = {this.edit} id="edit"><FaPen /></button>
        <button onClick = {this.remove} id="remove"><FaTrash /></button>
       </span>
      </div>
    );
  }

  render(){
      if(this.state.editing) return (this.renderForm());
      return this.renderDisplay()
  }
}

export default Note
