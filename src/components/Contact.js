export default function Contact() {
  return (
    <div className='page-wrapper'>
      <h1 className='title'>Contact me</h1>
      <p>
        If you'd like to know more about my work and experience (or my chicken
        pho recipe), you can:{' '}
      </p>
      <ul>
        <li>
          <span>📨 Email me: </span>
          <a href='mailto:linh.vup@gmail.com' class='email'>
            linh.vup@gmail.com
          </a>
        </li>
        <li>
          <span>👋 Or connect with me through: </span>
          <a href='https://www.linkedin.com/in/linhvup/'>LinkedIn</a> |{' '}
          <a href='https://github.com/linh-vup'>GitHub</a>
        </li>
      </ul>

      <p>I'd love to hear from you!</p>
    </div>
  );
}
