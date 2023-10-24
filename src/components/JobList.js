import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    PSSI: {
      jobTitle: "Software Development Engineer @",
      duration: "JUN 2023 - PRESENT",
      desc: [
        "Collaborate with experienced cross-disciplinary PSSI employees to conceive, design, and bring innovative products and services to market.",
        "Design and build innovative technologies in a large distributed computing environment and help lead fundamental changes in the industry.",
        "Build distributed pipelines, automated tests, and query systems that are scalable, fault-tolerant, low cost, and easy to manage/use."
      ]
    },
    Watco: {
      jobTitle: "Software Development Engineer @",
      duration: "MAY 2022 - MAY 2023",
      desc: [
        "Engineered a responsive React web page, both on client and server side, for an app with massive scale (10 million daily requests).",
        "Designed and refined web interfaces for over 10,000 users, optimizing for high-traffic scenarios.",
        "Collaborated with senior engineers and product management following best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations."
      ]
    },
    "Watco Companies LLC": {
      jobTitle: "Software Engineer Intern @",
      duration: "JUN 2021 - MAY 2022",
      desc: [
        "Implemented end-to-end software solutions for automating machine imaging and initialization.",
        "Partnered with senior developers to design and launch consumer-focused apps and software.",
        "Assessed and integrated security measures from 70+ websites to enhance our company's website protection and data recognition."
      ]
    },
    // Centivizer: {
    //   jobTitle: "Research Developer @",
    //   duration: "SEPT 2019 - APR 2020",
    //   desc: [
    //     "Researched and developed interactive and neural-activation technologies to stimulate physical and cognitive functions in order to slow the progression of neurodegenerative disorders.",
    //     "Leveraged WebRTC to develop and maintain a Node.js online video-streaming platform in real-time competitive-mode games to research the effects of active stimulation for those suffering from dementia."
    //   ]
    // },
    // TDSB: {
    //   jobTitle: "Software Engineer @",
    //   duration: "SEPT 2019 - DEC 2020",
    //   desc: [
    //     "Co-developed homework management software integrable with Google Classroom by utilizing the Python’s Flask micro-framework for the back-end API and Vue.js for the front-end UI, in order to translate business requirements into a functional full-stack application."
    //   ]
    // },
    "Neosho College": {
      jobTitle: "IT Support Specialist @",
      duration: "APR 2019 - AUG 2020",
      desc: [
        "Collaborated with a 3-person team to process and repair over 800 PCs annually.",
        "Delivered prompt and professional customer service to meet client needs.",
        "Developed a custom image and used Autopilot to provision machines, leveraging Powershell."
      ]
    }
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
