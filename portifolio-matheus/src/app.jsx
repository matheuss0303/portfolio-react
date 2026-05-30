import perfil from "./assets/perfil.png";
import "./App.css";
import {
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaFilePdf,
} from "react-icons/fa";

function App() {
  return (
    <>
      <header>
        <h3>Matheus.dev</h3>

        <nav>
          <a href="#sobre">Sobre</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#servicos">Serviços</a>
          <a href="#experiencia">Experiência</a>
          <a href="#contato">Contato</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <img src={perfil} alt="Foto de Matheus Soares" className="perfil" />

          <p className="tag">Olá, eu sou</p>

          <h1>Matheus Soares da Silva</h1>

          <h2 className="typing">Desenvolvedor Full Stack em formação</h2>

          <p className="status">
            🚀 Disponível para estágio e oportunidades na área de tecnologia
          </p>

          <p className="description">
            Estudante de Sistemas para Internet, com experiência em suporte
            técnico, atendimento ao usuário e desenvolvimento web.
          </p>

          <div className="buttons">
            <a
              href="https://github.com/matheuss0303"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.instagram.com/matheussoares.dev/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
              Instagram
            </a>

            <a href="/curriculo.pdf" download>
              <FaFilePdf />
              Currículo
            </a>

            <a
              href="https://wa.me/5583996306814?text=Olá%20Matheus,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar."
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
              WhatsApp
            </a>
          </div>
        </section>

        <section id="sobre" className="card">
          <h2>Sobre Mim</h2>

          <p>
            Sou estudante de Sistemas para Internet na UNIESP e apaixonado por
            tecnologia. Estou constantemente aprendendo e desenvolvendo novas
            habilidades para construir soluções modernas e eficientes.
          </p>
        </section>

        <section id="tecnologias" className="card">
          <h2>Tecnologias e Conhecimentos</h2>

          <div className="skills">
            <span>⚛️ React</span>
            <span>☕ Java</span>
            <span>🍃 Spring Boot</span>
            <span>🗄️ MySQL</span>
            <span>⚡ JavaScript</span>
            <span>🔧 Git</span>
            <span>🐙 GitHub</span>
            <span>🖥️ Service Desk</span>
          </div>
        </section>

        <section id="servicos" className="card">
          <h2>Serviços</h2>

          <div className="projects">
            <div className="project">
              <h3>🌐 Desenvolvimento Web</h3>
              <p>
                Criação de páginas web modernas, responsivas e otimizadas.
              </p>
            </div>

            <div className="project">
              <h3>⚛️ Aplicações React</h3>
              <p>
                Desenvolvimento de interfaces modernas utilizando React.
              </p>
            </div>

            <div className="project">
              <h3>☕ APIs Java</h3>
              <p>
                Criação de APIs REST utilizando Java e Spring Boot.
              </p>
            </div>

            <div className="project">
              <h3>🖥️ Suporte Técnico</h3>
              <p>
                Atendimento ao usuário, resolução de problemas e Service Desk.
              </p>
            </div>
          </div>
        </section>

        <section id="experiencia" className="card">
          <h2>Experiência</h2>

          <div className="projects">
            <div className="project">
              <h3>Softcom Tecnologia</h3>
              <p>
                Atuação com Service Desk, suporte ao usuário e acompanhamento
                de chamados.
              </p>
            </div>
          </div>
        </section>

        <section id="contato" className="card">
          <h2>Contato</h2>

          <div className="contact-list">
            <p>📍 João Pessoa - PB</p>
            <p>📧 matheusoaress2020@gmail.com</p>
            <p>📱 @matheussoares.dev</p>
          </div>

          <div className="buttons">
            <a
              href="https://github.com/matheuss0303"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              GitHub
            </a>

            <a
              href="https://www.instagram.com/matheussoares.dev/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
              Instagram
            </a>

            <a
              href="https://wa.me/5583996306814?text=Olá%20Matheus,%20vi%20seu%20portfólio%20e%20gostaria%20de%20conversar."
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
              Falar no WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Matheus Soares da Silva • Desenvolvedor Full Stack</p>
      </footer>
    </>
  );
}

export default App;