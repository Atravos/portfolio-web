import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
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
      "Desert Drifters": {
        title: "Desert Drifters",
        desc:
          "In the vast expanse of the sun-drenched desert, chaos reigns supreme",
        techStack: "C# (Unity), Javascript (Three.JS)",
        link: "https://github.com/Atravos/DesertDrifters",
        open: "https://github.com/Atravos/DesertDrifters",
        image: "/assets/DesertDrifters.jpg"
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
        techStack: "Node.Js (Socket.io), React.Js, MongoDB",
        link: "https://github.com/Atravos/donutCalculator",
        open: "https://github.com/Atravos/donutCalculator",
        image: "/assets/darkreader.png"
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
      "Jarvis A.I.": {
        desc:
          "Meet Jarvis, your personalized AI assistant.",
        techStack: "Javascript, HTML / CSS",
        link: "https://github.com/Atravos/Jarvis",
        open: "https://github.com/Atravos/Jarvis"
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
      "To-Do Notetaking App": {
        desc:
          "Master the art of task making with a comprehensive to-do notepad designed for those who believe the pen is mightier than the sword.",
        techStack: "Python, Node.js, MONGODB",
        link: "https://github.com/Atravos/Notepad",
        open: ""
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ software-creations</span>
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
