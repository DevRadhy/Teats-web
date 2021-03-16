import Link from 'next/link';

import styles from '../styles/components/Footer.module.css';

export function Footer() {
  return (
    <div className={styles.container}>
      <section>
        <a href="https://github.com/DevRadhy">
          <img src="/icons/github.svg" alt="Github"/>
          Github
        </a>

        <a href="https://www.linkedin.com/in/lucas-jantsch-guedes-53262515a/">
          <img src="/icons/linkedin.svg" alt="Linkedin"/>
          Linkedin
        </a>

        <a href="#">
          <img src="/icons/discord.svg" alt="Discord"/>
          Radhy#6716
        </a>

        <a href="https://twitter.com/Dev_Radhy">
          <img src="/icons/twitter.svg" alt="Twitter"/>
          Twitter
        </a>

        <a href="https://www.instagram.com/dev.radhy/">
          <img src="/icons/instagram.svg" alt="Instagram"/>
          Instagram
        </a>

        <a href="mailto:llucas.jguedes@gmail.com?subject=Feedback&body=Send Feedback">
          <img src="/icons/mail.svg" alt="Email"/>
          Feedback
        </a>

        <a href="#">
          <img src="/icons/key.svg" alt="Github"/>
          Terms
        </a>

        <a href="#">
          <img src="/icons/lock-closed-outline.svg" alt="Cadeado"/>
          Privacy
        </a>

        <a href="https://api.whatsapp.com/send?phone=+5549999372247&text=Oi Lucas, Tudo bem? eu tenho uma dúvida em relação ao TeatsApp.">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.2004 3.79301C15.3914 2.98366 14.4304 2.34231 13.3726 1.90588C12.3147 1.46945 11.181 1.24656 10.0367 1.25004C5.23438 1.25004 1.325 5.13988 1.32305 9.92192C1.32092 11.4446 1.7223 12.9407 2.48633 14.2579L1.25 18.75L5.86914 17.5442C7.14774 18.2369 8.57903 18.5994 10.0332 18.5989H10.0367C14.8387 18.5989 18.7477 14.7086 18.75 9.92699C18.7529 8.78659 18.529 7.65699 18.0913 6.60392C17.6536 5.55086 17.0108 4.59535 16.2004 3.79301ZM10.0367 17.1352H10.0336C8.73726 17.1356 7.46449 16.7887 6.34766 16.1305L6.0832 15.9743L3.34219 16.6899L4.07383 14.0301L3.90156 13.7567C3.17671 12.6091 2.79267 11.2793 2.79414 9.92192C2.79414 5.94809 6.04453 2.71488 10.0395 2.71488C11.9559 2.71146 13.7951 3.46939 15.1528 4.82196C16.5104 6.17454 17.2752 8.01098 17.2789 9.92738C17.2773 13.9016 14.0285 17.1352 10.0367 17.1352ZM14.009 11.7372C13.7914 11.6286 12.7199 11.1043 12.5215 11.0321C12.323 10.9598 12.1766 10.9235 12.0316 11.1407C11.8867 11.3579 11.4691 11.8438 11.3422 11.9903C11.2152 12.1368 11.0883 12.1528 10.8707 12.0442C10.6531 11.9356 9.95117 11.7071 9.11953 10.9688C8.47227 10.3942 8.03555 9.68481 7.90859 9.46801C7.78164 9.25121 7.89492 9.13363 8.00391 9.02582C8.10195 8.92856 8.22148 8.7727 8.33047 8.64613C8.43945 8.51957 8.47578 8.42895 8.54805 8.28442C8.62031 8.13988 8.58437 8.01332 8.53008 7.90512C8.47578 7.79691 8.04023 6.73012 7.85898 6.29613C7.68203 5.87348 7.50273 5.9309 7.36914 5.92426C7.24219 5.91801 7.0957 5.91645 6.95156 5.91645C6.84137 5.91931 6.73295 5.94487 6.63308 5.99151C6.53321 6.03816 6.44402 6.10489 6.37109 6.18754C6.17148 6.40473 5.60898 6.92973 5.60898 7.99535C5.60898 9.06098 6.39023 10.0922 6.49805 10.2368C6.60586 10.3813 8.0332 12.57 10.2172 13.5086C10.6227 13.6823 11.0371 13.8346 11.4586 13.9649C11.9801 14.1297 12.4547 14.1067 12.8297 14.0508C13.248 13.9887 14.1188 13.5266 14.2996 13.0204C14.4805 12.5141 14.4809 12.0805 14.4266 11.9903C14.3723 11.9 14.227 11.8454 14.009 11.7372Z" fill="white"/>
          </svg>
          Contact us
        </a>

        <Link href="https://teats-web-devlucas.vercel.app/posts/about">
          <a>
            <img src="/icons/information-circle-outline.svg" alt="Info"/>
            About us
          </a>
        </Link>

        <a href="#">
          <img src="/icons/map-pin.svg" alt="Pin"/>
          World Wide
        </a>
      </section>

      <section>
        <img src="/favicon.png" alt="Teats"/>

        <a href="https://github.com/DevRadhy/Teats-web">
          <img src="/icons/edit-3.svg" alt="Editar"/>
          Edit this page
        </a>
      </section>
    </div>
  );
}