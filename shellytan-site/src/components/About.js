import { NavLink } from "react-router-dom";

function About() {
  return (
    <div className="wrapper about">
        <h2>About Me</h2>
        <p className="body">I‘m a visual storyteller specializing in coding, illustration and interactive journalism. I think playful but thoughtful design is one of the best ways to engage people, and that interesting stories can be found in even the seemingly mundane. No topic is too big or too small. My work has spanned everything from deep dives into tax bills to interactive quizzes spotting bad wigs in film.</p>
        <p className="body">I'm currently open to new opportunities. Get in touch if you'd like to chat! For a printable version of my résumé, click <a href="shellytan_resume.pdf" target="_blank">here</a>.</p>
        <p className="body">Previously:</p>
            <ul>
                <li>Graphics Reporter at <a href="https://www.washingtonpost.com/people/shelly-tan/">the Washington Post</a></li>
                <li>Intern at <a href="http://nprinterns.tumblr.com/post/70619193453/exit-through-the-npr-gift-shop-shelly-tan">NPR Viz</a></li>
                <li>Student fellow at <a href="http://knightlab.northwestern.edu/author/shellytan/">Knight Lab</a></li>
            </ul>
    </div>
  );
}

export default About;
