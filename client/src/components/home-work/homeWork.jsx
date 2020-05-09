import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


class HomeWork extends Component {
  state = {
    editorState: EditorState.createEmpty()
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  handleHomeWorkSave = () => {
    const { createHomeWork, user } = this.props;
    const { editorState } = this.state;
    const data = {
      data: editorState,
      title: 'title',
      userId: user.id,
      userName: user.name
    };
    createHomeWork(data);
  }

  render() {
    const { editorState } = this.state;
    const { createHomeWork } = this.props;
    return (
      <div>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
        />
        <textarea
          id="editorText"
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
        <button
          onClick={this.handleHomeWorkSave}
        >
          Save
           </button>
      </div>
    );
  }
}

export default HomeWork;