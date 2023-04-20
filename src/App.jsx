import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);
  const [educations, setEducations] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [contacts, setContacts] = useState([]);



  useEffect(() => {
    fetch('/project.json')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => {
        console.log(error);
      });
  }, []);
  
  useEffect(() => {
    fetch('/skills.json')
      .then(response => response.json())
      .then(data => setSkills(data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    fetch('/education.json')
      .then(response => response.json())
      .then(data => setEducations(data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    fetch('/jobs.json')
      .then(response => response.json())
      .then(data => setJobs(data))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    fetch('/contact.json')
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="App">

    <header>
      <h1>Danyal Chatha Portfolio</h1>
      <nav>
        <li><a href='#projects'>Projects</a></li>
        <li><a href='#about'>About Me</a></li>
        <li><a href='#contact'>Contact</a></li>
      </nav>
      <ul class="social">
        {contacts.map(contact => (
          <li key={contact.id}>
            <a href={contact.url} target="_blank" rel="noopener noreferrer">{contact.title}</a>
          </li>
        ))}
      </ul>
    </header>

  <main class="welcome-section">
    <div class="welcome-text">
      <h2>My Name is <strong>Danyal Chatha</strong> and I am an aspiring <strong>Front-End Web Developer</strong>, Welcome to my site where I hope you will get to learn more of what I do!</h2>
    </div>
    <div class="image-container">
      <img src='/dc.jpg' alt='Picture of Danyal Chatha'></img>
    </div>
  </main>


    <h1 id="projects">Projects</h1>
{projects.map(project => (
  <div key={project.id} className="project-container">
    <h2>{project.title}</h2>
    <p>{project.content}</p>
    <a href={project.url} target="_blank" rel="noopener noreferrer">View Project</a>
  </div>
))}


<h1>Skills</h1>
<ul className="skills-list">
  {skills.map(skill => (
    <li key={skill.id}>
      <div className="skill-progress">
        <div className="skill-percent" style={{width: skill.percent + '%'}}>{skill.percent}%</div>
      </div>
      <a href={skill.url} target="_blank" rel="noopener noreferrer">{skill.title}</a>
    </li>
  ))}
</ul>


<section className="about-section">
  <div id='about'>
    <h1>Jobs Experience</h1>
    {jobs.map(job => (
      <div key={job.id}>
        <h2>{job.company_name}</h2>
        <h3>{job.job_position}</h3>
        <p>{job.content}</p>
        <p className="job-date">{job.date}</p>
        <img src='images/NOW.png'></img>
      </div>
    ))}
  </div>
  <div>
    <h1>Education</h1>
    {educations.map(education => (
      <div key={education.id}>
        <h2>{education.name}</h2>
        <p>{education.school}</p>
        <p className="education-date">{education.date}</p>
        <img src='images/humber.png'></img>
      </div>
    ))}
  </div>
</section>

<section id="contact">
  <h1>Contact Me</h1>
  <form>
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" name="name" required />

    <label htmlFor="email">Email:</label>
    <input type="email" id="email" name="email" required />

    <label htmlFor="message">Message:</label>
    <textarea id="message" name="message" required></textarea>

    <button type="submit">Send Message</button>
  </form>
</section>


  <footer>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <a href={contact.url} target="_blank" rel="noopener noreferrer">{contact.title}</a>
          </li>
        ))}
      </ul>
      <p>&copy; Copyright, Danyal Chatha Portfolio, 2023</p>
  </footer>       
    </div>
  );
}

export default App;
