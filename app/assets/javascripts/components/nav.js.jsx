var Nav = React.createClass({
  render: function() {
    return (
      <div className="content">
        <a className="title is-3" href="/users">Friends</a>
        <a className="title is-3" href="/games">Games</a>
        <a className="title is-3" href="/categories">Categories</a>
        <Signout/>

      </div>
    )
  }
})
