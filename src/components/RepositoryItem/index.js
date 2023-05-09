import './index.css'

const RepositoryItem = props => {
  const details = {props}
  const {name, issuesCount, forksCount, starsCount, avatarUrl} = details
  return (
    <li className="list-item">
      <img src={avatarUrl} className="avatar" alt={name} />
      <h1 className="head">{name}</h1>
      <div className="stars">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="img_star"
        />
        <p className="describe">{starsCount} stars</p>
      </div>
      <div className="stars">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="img_star"
        />
        <p className="describe">{forksCount} forks</p>
      </div>
      <div className="stars">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="img_star"
        />
        <p className="describe">{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
