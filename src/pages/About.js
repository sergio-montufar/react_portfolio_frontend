import { useState, useEffect } from "react";

const About = (props) => {
  // create state to hold about data
  // eslint-disable-next-line
  const [about, setAbout] = useState(null);

  // create a function to make api call
  const getAboutData = async () => {
    // make an api call and get the response
    const response = await fetch(props.URL + "about");
    // turn the response into a javascript object
    const data = await response.json();
    // set the about state to the data
    setAbout(data);
  }

  useEffect(() => {
    // eslint-disable-next-line
    getAboutData()
    // eslint-disable-next-line
  }, [])

  // define function loaded that will return JSX needed once the data is returned
  const loaded = () => (
    // {console.log(about.name)}
    <div className="about">
      <h2>{about.name}</h2>
      <h3>{about.email}</h3>
      <p>{about.bio}</p>
    </div>
  )

  return about ? loaded() : <h1>Loading...</h1>
}

export default About;