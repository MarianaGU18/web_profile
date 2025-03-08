import React from "react";
import "./curriculum.css";
import CredlyBadge from "../CredlyBadge/CredlyBadge";

const Curriculum = () => {
  return (
    <div>
      <div className="curriculum-container">
        <h1>Mariana Gomez Urbano</h1>
        <h2>Contact</h2>
        <div className="education">
          <ul>
            <il>
              <p> Phone number: +52 55 39337438</p>
              <p> Email: margu2606@gmail.com</p>

              <p>
                Linkedin:{" "}
                <a
                  href="https://www.linkedin.com/in/mariana-gomez-201509222/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Mariana Gomez
                </a>
                <br />
                <br />
                Github:{" "}
                <a
                  href="https://github.com/MarianaGU18?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  MarianaGU18
                </a>
              </p>
            </il>
          </ul>
        </div>
        <div>
          <h2> Profile</h2>
          <p>
            Here's the translation: "I am a Computer Engineering student with
            over two years of experience in software development, database
            management, and project organization. I am passionate about
            artificial intelligence and its various applications as a lever for
            transformation. I have skills in teamwork, leadership, and
            problem-solving, with a strong commitment to achieving objectives
            and results."
          </p>
        </div>
        <h2> Education</h2>
        <div className="education">
          <h3>
            Faculty of Engineering, UNAM - Computer Engineering (Ninth semester)
          </h3>
          <p> 2020 - present</p>
          <h3>Junior Cybersecurity Analyst Certification - CISCO</h3>
          <p> (2024)</p>
          <h3>Soft Skills Course - Junior Achievement</h3>
          <p> 2024</p>
        </div>
        <h2>Experience</h2>
        <div className="experience">
          <ul>
            <li>
              <strong>Data Analyst and International Team Coordinator</strong>{" "}
              with Pontificia Universidad Católica del Ecuador, for developing a
              neural network in Python to analyze the cause of death in Ecuador,
              which would be used in a prevention program for diabetes – 2024
            </li>
            <li>
              <strong>Data Analyst of Learning Processes</strong> at the
              Facultad de Artes y Diseño of UNAM for improving the learning
              process by leveraging generative artificial intelligence tools
              (ChatGPT) – 2024
            </li>
            <li>
              <strong>Project Leader and 3D Model Designer</strong> in Blender
              for simulating quetzal habitat, focusing on raising public
              awareness about the impact of deforestation on their ecosystem –
              2024
            </li>
          </ul>
        </div>
        <h2>🛠 Skills</h2>
        <ul className="skills">
          <li>Python</li>
          <li>Java</li>
          <li>Oracle SQL</li>
          <li>Notion</li>
          <li>Visual Studio Code</li>
          <li>Blender</li>
        </ul>
        <h2>🛠 Languages</h2>
        <ul className="skills">
          <li>Spanish (Native)</li>
          <li>English (~B1)</li>
          <li>French (A1)</li>
        </ul>
        <h2>Certifications</h2>

        <div class="projects">
          <div class="project-card">
            <p>
              <CredlyBadge></CredlyBadge>
            </p>
          </div>

          <div class="project-card">
            <h2>Certificates</h2>
            <div className="gallery">
              <img
                src="https://media.licdn.com/dms/image/v2/D4E22AQHQ3MJwrsOtEg/feedshare-shrink_800/B4EZVxFVecHMAg-/0/1741358980271?e=1744243200&v=beta&t=ai8R3kDUi0dpGnzAqPVXugbdpaJgRZ8CPzxPUlMJBlM"
                alt="1"
              />
              <img
                src="https://media.licdn.com/dms/image/v2/D4E22AQF2Zt0ntYkTGg/feedshare-shrink_800/B4EZVxGGuEGwAg-/0/1741359181091?e=1744243200&v=beta&t=G6IwvA_zuZKbpukE9zKXgVUDfDkDZ_FH-3OlCw7JX5U"
                alt="2"
              />
              <img
                src="https://media.licdn.com/dms/image/v2/D4E22AQFpBlDCtgHHnA/feedshare-shrink_800/B4EZVxGXPbGgAg-/0/1741359248776?e=1744243200&v=beta&t=29XD35eUP0icPqOl7VDSSrg6qV0DJYT0hAMcToRxNXU"
                alt="3"
              />
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p>
          Faculty of Engineering - National Autonomous University of Mexico
          (UNAM) - Mariana Gómez Urbano
        </p>
        <p>© 2025 All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Curriculum;
