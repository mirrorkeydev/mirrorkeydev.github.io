import './Contact.css'
import FadeIn from 'react-fade-in';

export default function Contact() {
  return (
    <div class="contact">
      <div class="contact-container">
        <FadeIn>
          <div><a href="mailto:mirrorkeydev@gmail.com"><span></span>mirrorkeydev<span>@gmail.com</span></a></div>
          <div><a href="https://github.com/mirrorkeydev"><span>github.com/</span>mirrorkeydev<span></span></a></div>
          <div><a href="https://discord.com/users/384231172575592458/"><span></span>mirrorkeydev<span>#0120</span></a></div>
          <div><a href="https://www.linkedin.com/in/mirrorkeydev/"><span>linkedin.com/in/</span>mirrorkeydev<span></span></a></div>
        </FadeIn>
      </div>
    </div>
  )
}
