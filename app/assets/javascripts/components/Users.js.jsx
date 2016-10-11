var Users = React.createClass({
  render: function() {
    return(
      <div className="content">
        <h1 className="title is-1 user"> Friends: </h1>
        <div>
          {this.props.users.map(function(user) {
            return (
              <div key={user.id} className="obj-with-del">
                <div className="thumb">
                  <img src={user.avatar_url_thumb} alt={user.username} title={user.username}/>
                </div>
                <h4 className="obj-name">
                  <a href={"/users/" + user.id}>{user.username}</a>
                </h4>
                <Delete obj={user}
                        url={"users"}/>
              </div>
              )
            })
          }
        </div>
        <a href="/users/new" className='button is-primary'>Add Friend</a>
      </div>
    )
  }
});
