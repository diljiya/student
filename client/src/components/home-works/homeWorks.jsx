import React from 'react';
import { formatDate } from '../../formatter';
import './styles.scss';

class HomeWorks extends React.Component {

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

  render() {
    const { homeworks } = this.props;
    return (
      <div id="home-works-root">
        <button className="primary-btn" id="home-work-add-btn" onClick={this.handleNewClick}>
          <i class="fa fa-file-text" aria-hidden="true" style={{ marginRight: 5 }}></i>
          New
        </button>
        <div id="home-works">
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
                />
                <i
                  id="home-work-toolbar-buttons"
                  class="fa fa-trash-o"
                  aria-hidden="true"
                  style={{
                    color: 'red'
                  }}
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