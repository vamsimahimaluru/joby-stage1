import {Component} from 'react'
import TestTwo from '../TestTwo'
import TestThree from '../TestThree'
import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

class Test extends Component {
  state = {employeList: employmentTypesList, salaryList: salaryRangesList}

  render() {
    const {employeList, salaryList} = this.state
    console.log(employeList)
    return (
      <div>
        <h1 className="heading">Type of Employment</h1>
        <ul>
          {employeList.map(eachEmp => (
            <TestTwo list={eachEmp} key={eachEmp.employmentTypeId} />
          ))}
        </ul>
        <hr />
        <h1 className="heading">Salary Range</h1>
        <ul>
          {salaryList.map(eachSalary => (
            <TestThree salary={eachSalary} key={eachSalary.salaryRangeId} />
          ))}
        </ul>
      </div>
    )
  }
}
export default Test
