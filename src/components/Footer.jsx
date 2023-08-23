import {
  RiFacebookCircleLine,
  RiTwitterLine,
  RiLinkedinBoxLine,
  RiGithubFill,
} from "react-icons/ri";

function Footer() {
  return (
    <section className="footer">
      <div className="icons">
        <a className="social-icon" href="#">
          <RiFacebookCircleLine />
        </a>
        <a className="social-icon" href="#">
          <RiTwitterLine />
        </a>
        <a className="social-icon" href="#">
          <RiLinkedinBoxLine />
        </a>
        <a className="social-icon" href="#">
          <RiGithubFill />
        </a>
      </div>
      <p>All rights reserved @ChefDroid</p>
    </section>
  );
}

export default Footer