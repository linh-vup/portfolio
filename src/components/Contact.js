import githubIcon from '../assets/github_icon.png';
import linkedinIcon from '../assets/linkedin_icon.png';

export default function Contact() {
  return (
    <div className='page-wrapper'>
      <h1 className='title'>Contact me</h1>
      <p>
        If you'd like to know more about my work and experience (or my chicken
        pho recipe), you can:{' '}
      </p>
      <p>Email me at:</p>
      <a href='mailto: linh.vup@gmail.com' class='email'>
        linh.vup@gmail.com
      </a>
      <p>Or connect with me through:</p>
      <a href='https://www.linkedin.com/in/linhvup/'>
        <img src={linkedinIcon} alt='linkedin icon' />
      </a>
      <a href='https://github.com/linh-vup'>
        <img src={githubIcon} alt='github icon' />
      </a>
      <p>I'd love to hear from you!</p>
    </div>
  );
}
