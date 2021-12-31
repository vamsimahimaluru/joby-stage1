const TestTwo = props => {
  const {list} = props
  const {label} = list

  return (
    <div>
      <form>
        <li>
          <input type="checkbox" name="checkbox" id="label" value="label" />
          <label htmlFor="checkbox">{label}</label>
        </li>
      </form>
    </div>
  )
}
export default TestTwo
