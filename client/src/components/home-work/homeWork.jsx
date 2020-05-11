import React, { Component } from 'react';
import { EditorState, ContentState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import SpinLoader from '../spinloader';
import './styles.scss';

const subjects = [
  'English',
  'Geography',
  'History',
  'Algebra',
  'Geometry',
  'Calculus',
  'Physics',
  'Economics',
  'Consumer math',
  'Chemistry',
  'Biology',
  'Art',
  'Foreign Languages',
  'Other electives'
]

class HomeWork extends Component {
  constructor(props) {
    super(props);
    const homeWork = props.location.state;
    this.state = {
      title: homeWork ? homeWork.title : `Title - ${props.match.params.id}`,
      subject: homeWork ? homeWork.subject : subjects[0],
      description: homeWork ? homeWork.description : 'Sample Description',
      editorState: this.setEditorState(homeWork),
      action: homeWork ? 'Update' : 'Add'
    }
  }

  setEditorState = (homeWork) => {
    if (!homeWork) return EditorState.createEmpty();
    return EditorState.createWithContent(convertFromRaw(JSON.parse(homeWork.data)));
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState
    });
  };

  onContentStateChange = (contentState) => {
    this.setState({
      contentState,
    });
  };

  handleHomeWorkSave = () => {
    const { createHomeWork, user, history, updateHomeWork } = this.props;
    const { editorState, title, subject, description, action } = this.state;
    const contentState = editorState.getCurrentContent();
    const data = {
      data: JSON.stringify(convertToRaw(contentState)),
      title,
      subject,
      description,
      userId: user.id,
      userName: user.name
    };

    if (action === 'Update') {
      data.id = this.props.match.params.id
      return updateHomeWork(data, history)
    }
    createHomeWork(data, history);
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value })
  }

  handleSubjectChange = (e) => {
    this.setState({ subject: e.target.value })
  }

  handleDescriptionChange = (e) => {
    this.setState({ description: e.target.value })
  }

  render() {
    const { editorState, title, subject, description } = this.state;
    const { createHomeWork, loading } = this.props;
    return (
      <div id="home-work-root">
        {loading && (<div className="loaderDiv">
          <SpinLoader isLoading={loading} />
        </div>)}
        <FormGroup>
          <Input
            type="text"
            name="title"
            id="title"
            onChange={this.handleTitleChange}
            value={title}
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="select"
            name="select"
            id="exampleSelect"
            value={subject}
            onChange={this.handleSubjectChange}
          >
            {subjects.map(subject => (
              <option>{subject}</option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="textarea"
            name="text"
            id="exampleText"
            value={description}
            onChange={this.handleDescriptionChange}
          />
        </FormGroup>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        {/* <textarea
          id="editorText"
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        /> */}
        <button
          className="primary-btn"
          onClick={this.handleHomeWorkSave}
          style={{ float: 'right', marginRight: 10, marginBottom: 50 }}
        >
          {this.state.action === 'Update' ? 'Update' : 'Save'}
        </button>
      </div>
    );
  }
}

export default HomeWork;