const TestThree = props => {
  const {salary} = props
  const {label} = salary

  return (
    <div>
      <form>
        <li>
          <input type="radio" name="radio" value={label} />
          <label htmlFor="radio">{label}</label>
        </li>
      </form>
    </div>
  )
}
export default TestThree
