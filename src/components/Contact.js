export default function Contact() {
  return (
    <div className='page-wrapper'>
      <h1 className='title'>Contact me</h1>
      {/* <p>
        12-week full-time immersive course with applied learning and development
        in frontend and backend engineering. I built multiple projects, ranging
        from games development using JavaScript, HTML and CSS to full-stack
        applications.
      </p> */}
      <p>
        If you'd like to know more about my work and experience (or my chicken
        pho recipe), you can:{' '}
      </p>
      <p>
        <span className='bold-span'>Email me: </span>
        <a href='mailto: linh.vup@gmail.com' class='email'>
          linh.vup@gmail.com
        </a>
      </p>

      <p>
        <span className='bold-span'>Or connect with me through: </span>
        <a href='https://www.linkedin.com/in/linhvup/'>LinkedIn</a> |{' '}
        <a href='https://github.com/linh-vup'>Github</a>
      </p>
      <p>I'd love to hear from you!</p>
    </div>
  );
}
