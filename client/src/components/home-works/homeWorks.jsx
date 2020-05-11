import React from 'react';
import { formatDate } from '../../formatter';
import ConfirmModal from '../confirmmodal';
import './styles.scss';

class HomeWorks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteModal: {
        open: false,
        data: null
      }
    }
  }

  componentDidMount = () => {
    const { fetchHomeWorks } = this.props;
    fetchHomeWorks();
  }

  handleNewClick = () => {
    const { history, homeworks } = this.props;
    history.push(`/homeworks/${homeworks.length + 1}`, null)
  }

  handleClick = (homeWork) => {
    const { history } = this.props;
    history.push(`/homeworks/${homeWork._id}`, homeWork)
  }

  handleUpdateClick = (e, homeWork) => {
    const { history } = this.props;
    e.preventDefault();
    e.stopPropagation();
    history.push(`/homeworks/${homeWork._id}`, homeWork)
  }

  handleDeleteClick = (e, homeWork) => {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      deleteModal: {
        open: true,
        data: homeWork
      }
    })
  }


  confirmModalToggler = () => {
    this.setState({
      deleteModal: {
        open: false,
        data: null
      }
    });
  }


  render() {
    const { homeworks, deleteHomeWork } = this.props;
    const { deleteModal } = this.state;
    return (
      <div id="home-works-root">
        <button className="primary-btn" id="home-work-add-btn" onClick={this.handleNewClick}>
          <i class="fa fa-file-text" aria-hidden="true" style={{ marginRight: 5 }}></i>
          New
        </button>
        <div id="home-works">
          {deleteModal.open && (<ConfirmModal
            show={deleteModal.open}
            toggler={this.confirmModalToggler}
            handleConfirm={() => deleteHomeWork(deleteModal.data._id)}
            confirmMessage="Are you sure you want to delete this Work..?"
            headerLabel={`${deleteModal.data ? deleteModal.data.title : ''}`}
          />)}

          {homeworks.map((item) => (
            <div className="card-primary" onClick={() => this.handleClick(item)}>
              <div id="home-work-date">
                {formatDate(new Date(item.date))}
              </div>
              <div id="home-work-title">
                {item.title}
              </div>
              <div id="home-work-subtitle">
                {item.subject}
              </div>
              <div id="home-work-description">
                {item.description}
              </div>
              <div id="home-work-toolbar">
                <i
                  id="home-work-toolbar-buttons"
                  class="fa fa-eye"
                  aria-hidden="true"
                />
                <i
                  id="home-work-toolbar-buttons"
                  class="fa fa-pencil-square-o"
                  aria-hidden="true"
                  onClick={(e) => this.handleUpdateClick(e, item)}
                />
                <i
                  id="home-work-toolbar-buttons"
                  class="fa fa-trash-o"
                  aria-hidden="true"
                  style={{
                    color: 'red'
                  }}
                  onClick={(e) => this.handleDeleteClick(e, item)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default HomeWorks;