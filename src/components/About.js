import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const one = (
      <p>
        I am currently a <b>Software Development Engineer</b> at
        <a href="https://www.pssi.com/solution/marc/"> PSSI</a>, working in the DevOps
        sector under team MARC. At the same time, I am undertaking a
        part-time <b> Master's of Science</b> in <b>Software Engineering </b>at{" "}
        <a href="https://www.pittstate.edu/index.html">University of Pitt State</a>.
      </p>
    );
    const two = (
      <p>
        Outside of work, I'm interested in following the developments of
        science. I also play a lot of video games. And love movies.
      </p>
    );
    const three = (
      <p>
        <b>Want to chat?</b> Shoot me a message at{" "}
        <a href="mailto:reese.h.walker@gmail.com">
          reese.h.walker@gmail.com
        </a>{" "}
        and let's talk.
      </p>
    );
    const desc_items = [one, two];

    const tech_stack = [
      "Javascript ES6+",
      "C#",
      "React.js",
      "Java",
      "Node.js",
      "HTML & CSS"
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I have been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img src={"/assets/hunter.jpg"} />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;
