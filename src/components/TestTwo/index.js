const TestTwo = props => {
  const {list} = props
  const {label} = list

  return (
    <div>
      <form>
        <li>
          <input type="checkbox" value="label" name="checkbox" />
          <label htmlFor="checkbox">{label}</label>
        </li>
      </form>
    </div>
  )
}
export default TestTwo
