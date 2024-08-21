import '../Hompage/Homepage.css'
export default function About() {
  return (
    <section  >
        <div className="header">
      <h1>Welcome to CodeTrio Task Manager</h1>
      <p>Your efficient project management solution.</p>
      <button onClick={() => window.location.href = '/#'}>Get Started</button>
</div>


    <section  className='service-overview'>
        <div className="service-container">
        <h2>Our Services</h2>
        <div className='service-cards'>
            <div className='service-card'>
            <h3>Project Management</h3>
            <p>Manage your projects efficiently with our project management tools.</p>
            </div>
            <div className='service-card'>
            <h3>Task Management</h3>
            <p>Keep track of your tasks and stay organized with our task management tools.</p>
            </div>
            <div className='service-card'>
            <h3>Team Collaboration</h3>
            <p>Work together with your team members and collaborate on projects with ease.</p>
            </div>
        </div>
        </div>
    <section className='features'>
        <h2>Our Features</h2>
        <div className='feature-cards'>
            <div className='feature-card'>
            <h2>Task Creation</h2>
            <ul>
        <li>📝 Create and manage tasks</li>
        <li>📊 Track progress with dashboards</li>
        <li>🔒 Secure authentication</li>
        <li>📱 Responsive design</li>
      </ul>
      </div>
        <div className='feature-card'>
            <h2>Project Management</h2>
            <ul>
            <li>📂 Create and manage projects</li>
            <li>📈 Track project progress</li>
            <li>📅 Set deadlines and milestones</li>
            <li>🔔 Receive notifications</li>
            </ul>
        </div>
        </div>
    <section className='testimonials'>
    <h2>What Our Users Say</h2>
      <div className="testimonial-card">
        <p>"CodeTrio Task Manager has streamlined our project workflow. It's intuitive and easy to use!"</p>
        <span>- Alex, Project Manager</span>
      </div>
      <div className="testimonial-card">
        <p>"The best task management tool I've used. It keeps our team organized and on track."</p>
        <span>- Maria, Developer</span>
      </div>
        <div className="testimonial-card">
            <p>"CodeTrio Task Manager has helped us stay on top of our tasks and deadlines. Highly recommended!"</p>
            <span>- John, Designer</span>
        </div>
    </section>
    </section>
    </section >
    </section >
  );
};