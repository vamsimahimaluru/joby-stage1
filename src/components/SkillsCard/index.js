import './index.css'

const SkillsCard = props => {
  const {datas} = props
  const {name, imageUrl} = datas

  return (
    <li>
      <div className="skill-container">
        <div className="docker">
          <img src={imageUrl} alt="name" />
          <p>{name}</p>
        </div>
      </div>
    </li>
  )
}
export default SkillsCard
