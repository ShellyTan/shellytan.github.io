function About() {
  return (
    <div className="wrapper about">
        <h2>About Me</h2>
        <p className="body">I‘m a visual storyteller specializing in coding, illustration and interactive journalism. I think playful but thoughtful design is one of the best ways to engage people, and that interesting stories can be found in even the seemingly mundane. No topic is too big or too small. My work has spanned everything from deep dives into tax bills to quizzes spotting bad movie wigs.</p>
        <p className="body">I’m also a firm believer that great work can only come from supportive, healthy work environments. Kindness, transparency and communication are must-haves.</p>
        <p className="body">Currently open to new opportunities. For a printable version of my résumé, click <a href={`${process.env.PUBLIC_URL}/shellytan_resume.pdf`} target="_blank" rel="noopener noreferrer">here</a>.</p>
        <p className="body">Previously:</p>
            <ul>
                <li>Graphics Reporter at&ensp;
                    <a href="https://www.washingtonpost.com/people/shelly-tan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Washington Post">
                        the Washington Post
                    </a>
                </li>
                <li>Intern at&ensp;
                    <a href="http://nprinterns.tumblr.com/post/70619193453/exit-through-the-npr-gift-shop-shelly-tan"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="NPR Viz">
                        NPR Viz
                    </a>
                </li>
                <li>Student fellow at&ensp;
                    <a href="http://knightlab.northwestern.edu/author/shellytan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Knight Lab">
                        Knight Lab
                    </a>
                </li>
            </ul>
    </div>
  );
}

export default About;
