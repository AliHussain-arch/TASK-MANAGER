import '../About/about.css'
export default function About() {
  return (
    <section id="about-us">
      <h2>About Us</h2>
      <p>Welcome to our website. We are dedicated to providing the best service possible. Our team is passionate about what we do and we are always here to help you with any questions or concerns you may have.</p>
      <h3>Our Team</h3>
  <div className="team-container">
    <div className="team-member">
      <img src="https://avatars.githubusercontent.com/u/148485362?s=64&v=4" alt="Team Member 1" />
      <h4>Fadel Mohamead</h4>
      <p>Member</p>
    </div>
    <div className="team-member">
      <img src="https://avatars.githubusercontent.com/u/172982681?s=48&v=4" alt="Team Member 2" />
      <h4>Ali Hussain</h4>
      <p>Member</p>
    </div>
    <div className="team-member">
      <img src="https://avatars.githubusercontent.com/u/172836087?s=48&v=4" alt="Team Member 3" />
      <h4>Fadhel SH</h4>
      <p>Member</p>
    </div>
  </div>
    </section>

  );
};