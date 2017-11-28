import React,{Component} from 'react'

class Comments extends Component {

  render() {
    const {comment} = this.props
    return(
      <section className="content readable-comment">
        <div className="columns is-mobile">

          <div className="column" style={{ maxWidth: '115px' }}>
            <div className="readable-voteScore-wrapper">
              <div className={'readable-voteScore-value notification '}>
                  {comment.voteScore}
              </div>
                  <a className="button is-success is-outlined"
                    onClick={() => {}}>
                    <i className="fa fa-thumbs-o-up" aria-hidden="true" />
                  </a>
                  <a className="button is-danger is-outlined"
                    onClick={() => {}}>
                    <i className="fa fa-thumbs-o-down" aria-hidden="true" />
                  </a>
              </div>
            </div>

          <div className="column">
          <div>
             <strong>{comment.author}</strong>
             &nbsp;
             <small>{comment.timestamp}</small>
             &nbsp; · &nbsp;
             <span>
              <div onClick={() => {}} className="button is-small is-danger is-outlined">
                delete
              </div>
              &nbsp;
              <div onClick={() => {}} className="button is-small is-info is-outlined">
              edit
              </div>
              </span>
             <br/>
             <div className="content">
              {comment.body.split('\n').map((item, key) => {
                return (
                  <span key={key}>
                  {item}
                  <br />
              </span>
            )
              })}
            </div>
           </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Comments
