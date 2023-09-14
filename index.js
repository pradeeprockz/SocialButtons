const Button = props => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className= {`button ${className}`}>{buttonText}</button>
}

const element = (
  //  Write your code here.
  <div className="social-buttons-container">
    <div className="bg-container">
      <h1 className="heading">Social BUttons</h1>
      <div className="buttons-container">
        <Button buttonText= "like" className="like-button">Like</Button>
        <Button buttonText="comment" className="comment-button">Comment</Button>
        <Button buttonText= "share" className="share-button">Share</Button>
      </div>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
