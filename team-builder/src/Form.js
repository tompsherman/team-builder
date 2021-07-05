import React, {useState} from "react"
import cuid from "cuid"

const teamList = [
    {name: "tom", email: "tom@tom.com", role: "frontend engineer"}
  ]
  
  const initialFormValues = {
    name: "",
    email: "",
    role: "",
  }
  
  function Form(){
    const [team, setTeam] = useState(teamList)
    const [formValues, setFormValues] = useState(initialFormValues)
     
    const onChange = event => {
      const {name, value} = event.target
      setFormValues({...formValues, [name]: value})
    }
  
    const onSubmit = event => {
      const newTeamMember = {
        name: formValues.name.trim(), email: formValues.email.trim(), role: formValues.role
      }
      setTeam(team.concat(newTeamMember))
      setFormValues(initialFormValues)
      event.preventDefault()
    }
  
    return  <div className="container">
      <h1>Simple Form</h1>
      {
        team.map((team)=>{
          return (
            <div key={cuid()}>
              {team.name} is a {team.role}. Contact info: {team.email}
            </div>
          )
        })
      }
      <form onSubmit={onSubmit}>
        <input name="name" type="text" value={formValues.name} onChange={onChange} placeholder="name"/>
        <input name="email" type="email" value={formValues.email} onChange={onChange}placeholder="email"/>
        <select name="role" value={formValues.role} onChange={onChange}>
          <option>---select option---</option>
          <option>UI designer</option>
          <option>frontend engineer</option>
          <option>backend engineer</option>
        </select>
        <button>submit</button>
      </form>
      </div>
  }
  
  export default Form