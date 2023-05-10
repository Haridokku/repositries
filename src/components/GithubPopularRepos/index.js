import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {
    activeId: languageFiltersData[0].id,
    isLoading: false,
    repositList: [],
  }

  componentDidMount() {
    this.renderLanguagesView()
  }

  updateActiveId = active => {
    this.setState({activeId: active})
  }

  renderFailureView = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure"
      />
      <h1 className="fail">Something Went Wrong</h1>
    </div>
  )

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  renderGetRepositries = () => {
    const {repositList} = this.state
    return (
      <>
        <ul className="list-container">
          {repositList.map(each => (
            <RepositoryItem details={each} key={each.id} />
          ))}
        </ul>
      </>
    )
  }

  renderLanguagesView = async () => {
    const {activeId} = this.state
    this.setState({isLoading: true})
    const url = `https://apis.ccbp.in/popular-repos?language=${activeId}`

    const response = await fetch(url)
    console.log(response)
    if (response.ok) {
      const data = response.json()
      const modifiedData = data.popular_repos.map(each => ({
        name: each.name,
        id: each.id,
        issuesCount: each.issues_count,
        forksCount: each.forks_count,
        starsCount: each.stars_count,
        avatarUrl: each.avatar_url,
      }))
      console.log(modifiedData)
      this.setState({repositList: modifiedData, isLoading: false})
    } else {
      this.setState({isLoading: false})
      this.renderFailureView()
    }
  }

  render() {
    const {isLoading, activeId} = this.state
    return (
      <div className="git-container">
        <h1 className="heading">Popular</h1>
        <ul className="language-container">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              itemDetails={each}
              key={each.id}
              updateActiveId={this.updateActiveId}
              isActive={each.id === activeId}
            />
          ))}
        </ul>
        {isLoading ? this.renderLoadingView() : this.renderGetRepositries()}
      </div>
    )
  }
}

export default GithubPopularRepos
