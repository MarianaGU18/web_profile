import React from "react";
import "./Aboutme.css"; // Archivo CSS para estilos

const Aboutme = () => {
  return (
    <div>
      <div className="about-container">
        <h1>About Me</h1>
        <img
          src="https://media.licdn.com/dms/image/v2/D4E03AQHUi9haPUQuKw/profile-displayphoto-shrink_400_400/B4EZR7yabnHgAg-/0/1737243600900?e=1746662400&v=beta&t=8Jz4Sy6WSTDbh3UYpTNt20B6D9HLaz-hoYNbjrh7lMM"
          alt="Foto de perfil"
          className="profile-pic"
        />
        <section>
          <h2>👩‍💻 Who am I?</h2>
          <p>Hello! I'm Mariana</p>
          <p>
            I'm currently in my ninth semester of the Computer Engineering
            program at the Faculty of Engineering, Autonomous University of
            Mexico (UNAM).
          </p>
          <p>
            I'm passionate about data analysis and artificial intelligence, with
            a keen interest in exploring their applications to solve real-world
            problems.
          </p>
        </section>

        <section>
          <h2> What do I like?</h2>
          <p>
            I am deeply passionate about my career and new technologies,
            especially in the areas of data analysis and understanding how we
            can leverage data for practical applications. Currently, I primarily
            use Python due to its simplicity, but I am transitioning to R to
            explore its advanced capabilities in specific fields.
          </p>
          <p>
            While I currently use Windows as my operating system, I am in the
            process of switching to Linux, as it offers significant advantages
            in areas such as system management and development environments.
          </p>
        </section>

        <section>
          <h2>🎮 What are my hobbies?</h2>

          <ul>
            <li>
              <strong>Learning:</strong>
              <p>
                My greatest hobby is learning. I am constantly exploring new
                technologies, such as Docker, and expanding my knowledge in
                different areas, including languages like French and the
                development of soft skills.
              </p>
            </li>
            <li>
              <strong>Series:</strong>
              <p>
                I enjoy watching series, especially animes with deep and
                meaningful narratives. I’m particularly drawn to series and
                mangas that explore concepts like databases, statistics, and
                cryptography.
              </p>
            </li>
            <li>
              <strong>Video Games:</strong>
              <p>
                I have a passion for story-driven or open-world video games.
                Some of my favorites include The Sims, Roblox, and VRChat, as
                they allow me to explore immersive worlds and unique
                experiences.
              </p>
            </li>
            <li>
              <strong>Music:</strong>
              <p>
                Music is another passion of mine, particularly genres that tell
                a story or feature string instruments. I find that music with
                such depth adds an emotional layer to the listening experience.
              </p>
            </li>
          </ul>
        </section>

        <div>
          <p>
            Github:{" "}
            <a
              href="https://github.com/MarianaGU18?tab=repositories"
              target="_blank"
            >
              MarianaGU18
            </a>
          </p>
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

export default Aboutme;
