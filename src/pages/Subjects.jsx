import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Subjects() {

  const [ subjects, setSubjects ] = useState([])
  const [ greeting, setGreeting ] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/get-subjects')
      .then(response => response.json())
      .then(body => {
        setSubjects(body)
      })

      fetch('http://localhost:3001/greet-by-post',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: 'Sammy'})
      })
      .then(response => response.text())
      .then(body => {
        setGreeting(body)
      })
  },[])

  /**
   * If you pass an empty array ([]) as the second argument to useEffect, 
   * the effect will run only once after the initial render. 
   * This behavior is similar to componentDidMount in class components.
   *  It means the effect does not depend on any props or state, and thus it doesn’t need to re-run because 
   * those values will never update. This is typically used for effects that only need to occur once, 
   * like fetching data from an API when a component mounts.s
   */

  return (
    <>
      <ol>
        {
          subjects.map((subject, i) => <li key={i}><Link to={`/subjects/${subject.code}`}>{subject.code}</Link></li>)
        }
      </ol>
      <div>{ greeting }</div>
    </>
  )
}