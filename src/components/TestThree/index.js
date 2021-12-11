const TestThree = props => {
  const {salary} = props
  const {label} = salary

  return (
    <div>
      <form>
        <li>
          <input type="radio" value="label" name="checkbox" />
          <label htmlFor="radio">{label}</label>
        </li>
      </form>
    </div>
  )
}
export default TestThree
