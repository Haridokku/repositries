import './index.css'

const LanguageFilterItem = props => {
  const {itemDetails, updateActiveId, isActive} = props
  const {id, language} = itemDetails
  const buttonClassName = isActive ? 'normal-button active' : 'normal-button'
  const onChangeActiveId = () => {
    updateActiveId(id)
  }
  return (
    <li className="item-container">
      <button
        type="button"
        className={buttonClassName}
        onClick={onChangeActiveId}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
