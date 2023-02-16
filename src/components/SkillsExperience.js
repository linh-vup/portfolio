const skillsList = [
  'HTML',
  'CSS',
  'SCSS / SASS',
  'Flexbox',
  'Bulma',
  'MUI',
  'JavaScript',
  'React.js',
  'JSON',
  'Express.js',
  'Node.js',
  'Mongoose',
  'MongoDB',
  'Python',
  'PostgreSQL',
  'Github'
];

export default function SkillsExperience() {
  return (
    <div className='page-wrapper'>
      <h1 className='title'>Skills and Experience</h1>
      <h3>Tech Skills</h3>
      <div className='stack-container'>
        {skillsList.map((skill) => (
          <p className='stack' key={skill}>
            {skill}
          </p>
        ))}
      </div>
      <p>
        Currently learning: Typescript with CodeCademy and Algorithms with
        Grokking
      </p>
      <h3>Other Skills</h3>
      <p>
        Content creation, localisation (translation and QA), App Store
        Optimisation, teaching (German)
      </p>
      <h3>Experience</h3>
      <h4>
        Software Engineering Immersive Student at General Assembly (London)
        <span>10/2022 – 01/2023</span>
      </h4>
      <p>
        12-week full-time immersive course with applied learning and development
        in frontend and backend engineering. I built multiple projects, ranging
        from games development using JavaScript, HTML and CSS to full-stack
        applications. The course also covered fundamentals of working as a
        developer with daily stand-ups, pair-programming, group projects and
        using agile delivery methods.
      </p>
      <h4>
        Senior Content Creator at General Assembly (London)
        <span>10/2022 – 01/2023</span>
      </h4>
      <p>
        Creatied learning content for our mobile, desktop and social platforms.
        I worked in cross-functional teams to release new engaging learning
        features.
      </p>
    </div>
  );
}
