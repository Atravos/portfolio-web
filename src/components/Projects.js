import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
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
    const spotlightProjects = {
      "West Punk": {
        title: "West Punk",
        desc:
          "Journey to a rugged frontier town nestled amidst the arid canyons, where danger lurks in every shadow and trust is a scarce commodity.",
        techStack: "C# (Unity)",
        link: "https://github.com/Atravos/WestPunk",
        open: "https://github.com/Atravos/WestPunk",
        image: "/assets/WildWest.jpg"
      },
      "Story Weave": {
        title: "Story Weave",
        desc:
          "A multi-player collaborative storytelling platform for 2-8 players. Its implementation of real-time communication allows turn-based narrative creation, connecting writers across the internet.",
        techStack: "Node.Js (Socket.io), React.Js, MongoDB",
        link: "https://github.com/Atravos/StoryWeave",
        open: "https://github.com/Atravos/StoryWeave",
        image: "/assets/StoryWeaveImage.png"
      },
      "The Man with No Name": {
        title: "The Man with No Name",
        desc:
          "The Man with No Name plunges players into a rich text-based narrative full of intrigue, danger, and unexpected twists.",
        techStack: "Java (Netbeans), MongodDB",
        link: "https://github.com/Atravos/TheManwithNoName",
        open: "https://github.com/Atravos/TheManwithNoName",
        image: "/assets/TheManwithNoName.jpg"
      },
      "Calorie Caclculator": {
        title: "Calorie Calculator",
        desc:
          "Indulge in sweet treats without the guilt! Calorie Calculator is not your ordinary health fitness app.",
        techStack: "Java",
        link: "https://github.com/Atravos/donutCalculator",
        open: "https://github.com/Atravos/donutCalculator",
        image: "/assets/CalorieCounter.png"
      }
    };
    const projects = {
      "Advanced Mathematical Calculator": {
        desc:
          "Unlock the secrets of numbers with an intuitive yet sophisticated calculator.",
        techStack: "PYTHON (FLASK), VUE.JS, BOOTSTRAP, SQL",
        link: "https://github.com/Atravos/AdvancedCalculator",
        open: "https://github.com/Atravos/AdvancedCalculator"
      },
      "Neat Note": {
        desc:
          "Electron-based note-taking software featuring nested folders and files, Markdown support, drag-and-drop functionality, and customizable themes.",
        techStack: "Javascript, HTML / CSS, Electron",
        link: "https://github.com/Atravos/neatnote",
        open: "https://theneatnote.com"
      },
      "Memory Allocation Logger and Tester": {
        desc:
          "Ensure your applications run smoothly with a state-of-the-art memory management tool. ",
        techStack: "Node.js (Express.js), React.js, PostgreSQL",
        link:
          "https://github.com/Atravos/MemoryLoggerTester"
      },
      "Apollo Discord Bot": {
        desc:
          "Elevate your Discord experience with Odin, a versatile bot, entertainment commands, and integration capabilities.",
        techStack: "Javascript, Node.js, Natural NLP, Discord API",
        link: "https://github.com/Atravos/DiscordBot",
        open: ""
      },
      "Game Center": {
        desc:
          "Relax with an assortment of curated games ranging from brain-teasing puzzles to adrenaline-packed action adventures.",
        techStack: "Java, Android Studio",
        link: "https://github.com/Atravos/GameCenter",
        open: ""
      },
      "Alpha Logic": {
        desc:
          "Multi-algorithm strategic game environment with comparative artificial intelligence performance visualization.",
        techStack: "Python, Pygame, Matplotlib, NumPy",
        link: "https://github.com/Atravos/AlphaLogic",
        open: ""
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ pet projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
