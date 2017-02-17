import React, {Proptypes} from 'react';

class Course extends React.Component{
  constructor(props, context){
    super(props, context);

    this.state = {
      course: {title: ''}
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }

  onTitleChange(event){
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({course: course});
  }

  onClickSave(event){
    alert("save button clicked.")
  }

  render(){
    return (
      <div>
        <input
          type="text"
          onChange={this.onTitleChange}
          value={this.state.course.title}
        />

        <input
          type="submit"
          onClick={this.onClickSave}
          value="Save"
        />
      </div>
    )
  }
}

export default Course;
