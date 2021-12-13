const TestThree = props => {
  const {salary} = props
  const {label} = salary

  return (
    <div>
      <form>
        <li>
          <input type="radio" value="label" name="radio" />
          <label htmlFor="radio">{label}</label>
        </li>
      </form>
    </div>
  )
}
export default TestThree
