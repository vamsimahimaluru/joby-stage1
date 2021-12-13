const TestTwo = props => {
  const {list} = props
  const {label} = list

  return (
    <div>
      <form>
        <li>
          <input type="checkbox" name="checkbox" />
          <label htmlFor="checkbox" value="label">
            {label}
          </label>
        </li>
      </form>
    </div>
  )
}
export default TestTwo
