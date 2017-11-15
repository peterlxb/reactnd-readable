Object.keys(post).map((item) => (

  <div className="Post-area">
    {console.log(post[item])}
    <li className="Post-title">{post[item]}</li>
  </div>
))
