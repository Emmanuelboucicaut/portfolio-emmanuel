import "./styles.css";
import image from "./assets/profile.png";

export default function Home() {
  return (
    <div class="d-flex flex-column h-100">
      <main class="flex-shrink-0">
        <Nav />
        <Header />
        <Section />
      </main>
      <Footer />
    </div>
  );
}

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
      <div class="container px-5">
        <a class="navbar-brand" href="index.html">
          <span class="fw-bolder text-primary">Emmanuel Boucicaut</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
            <li class="nav-item">
              <a class="nav-link" href="index.html">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="resume.html">
                Resume
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="projects.html">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Header() {
  const styleProps = "enable-background: new 0 0 191.6 1215.4";
  return (
    <header class="py-5">
      <div class="container px-5 pb-5">
        <div class="row gx-5 align-items-center">
          <div class="col-xxl-5">
            <div class="text-center text-xxl-start">
              <div class="badge bg-gradient-primary-to-secondary text-white mb-4">
                <div class="text-uppercase">
                  Design &middot; Development &middot; Support
                </div>
              </div>
              <div class="fs-3 fw-light text-muted">
                I can help your business to
              </div>
              <h1 class="display-3 fw-bolder mb-5">
                <span class="text-gradient d-inline">
                  Get online and grow fast
                </span>
              </h1>
              <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xxl-start mb-3">
                <a
                  class="btn btn-primary btn-lg px-5 py-3 me-sm-3 fs-6 fw-bolder"
                  href="resume.html"
                >
                  Resume
                </a>
                <a
                  class="btn btn-outline-dark btn-lg px-5 py-3 fs-6 fw-bolder"
                  href="projects.html"
                >
                  Projects
                </a>
              </div>
            </div>
          </div>
          <div class="col-xxl-7">
            <div class="d-flex justify-content-center mt-5 mt-xxl-0">
              <div class="profile bg-gradient-primary-to-secondary">
                <Image />
                <div class="dots-1">
                  <SVG styleProps={{ styleProps }} />
                </div>
                <div class="dots-2">
                  <SVG styleProps={{ styleProps }} />
                </div>
                <div class="dots-3">
                  <SVG styleProps={{ styleProps }} />
                </div>
                <div class="dots-4">
                  <SVG styleProps={{ styleProps }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Section() {
  return (
    <section class="bg-light py-5">
      <div class="container px-5">
        <div class="row gx-5 justify-content-center">
          <div class="col-xxl-8">
            <div class="text-center my-5">
              <h2 class="display-5 fw-bolder">
                <span class="text-gradient d-inline">About Me</span>
              </h2>
              <p class="lead fw-light mb-4">
                Emmanuel Boucicaut / .Net Developer / Full Stack Developer/
              </p>
              <p class="text-muted">
                Senior analyst-programmer, with more than 10 years of
                experience, with several languages and Frameworks like Java, C,
                C#, Python, React, Angular, SQL, PowerShell, PowerShell, .NET,
                Web Assembly. Very good knowledge in object-oriented
                programming. Ability to work in an agile environment, experience
                with the SCRUM method. Strong background in customer relations.
                Bilingual (French, English)
              </p>
              <div class="d-flex justify-content-center fs-2 gap-4">
                <a class="text-gradient" href="https://twitter.com/AEYEZOM">
                  <i class="bi bi-twitter"></i>
                </a>
                <a
                  class="text-gradient"
                  href="https://www.linkedin.com/in/emmanuel-boucicaut-42322281/overlay/contact-info/"
                >
                  <i class="bi bi-linkedin"></i>
                </a>
                <a class="text-gradient" href="#!">
                  <i class="bi bi-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer class="bg-white py-4 mt-auto">
      <div class="container px-5">
        <div class="row align-items-center justify-content-between flex-column flex-sm-row">
          <div class="col-auto">
            <div class="small m-0">Copyright &copy; eboucicaut.com 2023</div>
          </div>
          <div class="col-auto">
            <a class="small" href="#!">
              Privacy
            </a>
            <span class="mx-1">&middot;</span>
            <a class="small" href="#!">
              Terms
            </a>
            <span class="mx-1">&middot;</span>
            <a class="small" href="#!">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SVG({ styleProps }) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 191.6 1215.4"
      style={styleProps}
      xml="preserve"
    >
      <g transform="translate(0.000000,1280.000000) scale(0.100000,-0.100000)">
        <path d="M227.7,12788.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,12801.6,289.7,12808.6,227.7,12788.6z"></path>
        <path d="M1507.7,12788.6c-151-50-253-216-222-362c25-119,136-230,254-255c194-41,395,142,375,339c-11,105-90,213-190,262        C1663.7,12801.6,1569.7,12808.6,1507.7,12788.6z"></path>
        <path d="M227.7,11508.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,11521.6,289.7,11528.6,227.7,11508.6z"></path>
        <path d="M1507.7,11508.6c-151-50-253-216-222-362c25-119,136-230,254-255c194-41,395,142,375,339c-11,105-90,213-190,262        C1663.7,11521.6,1569.7,11528.6,1507.7,11508.6z"></path>
        <path d="M227.7,10228.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,10241.6,289.7,10248.6,227.7,10228.6z"></path>
        <path d="M1507.7,10228.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,10241.6,1569.7,10248.6,1507.7,10228.6z"></path>
        <path d="M227.7,8948.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,8961.6,289.7,8968.6,227.7,8948.6z"></path>
        <path d="M1507.7,8948.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,8961.6,1569.7,8968.6,1507.7,8948.6z"></path>
        <path d="M227.7,7668.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,7681.6,289.7,7688.6,227.7,7668.6z"></path>
        <path d="M1507.7,7668.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,7681.6,1569.7,7688.6,1507.7,7668.6z"></path>
        <path d="M227.7,6388.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,6401.6,289.7,6408.6,227.7,6388.6z"></path>
        <path d="M1507.7,6388.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,6401.6,1569.7,6408.6,1507.7,6388.6z"></path>
        <path d="M227.7,5108.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,5121.6,289.7,5128.6,227.7,5108.6z"></path>
        <path d="M1507.7,5108.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,5121.6,1569.7,5128.6,1507.7,5108.6z"></path>
        <path d="M227.7,3828.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,3841.6,289.7,3848.6,227.7,3828.6z"></path>
        <path d="M1507.7,3828.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,3841.6,1569.7,3848.6,1507.7,3828.6z"></path>
        <path d="M227.7,2548.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,2561.6,289.7,2568.6,227.7,2548.6z"></path>
        <path d="M1507.7,2548.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,2561.6,1569.7,2568.6,1507.7,2548.6z"></path>
        <path d="M227.7,1268.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C383.7,1281.6,289.7,1288.6,227.7,1268.6z"></path>
        <path d="M1507.7,1268.6c-105-35-200-141-222-248c-43-206,163-412,369-369c155,32,275,190,260,339c-11,105-90,213-190,262        C1663.7,1281.6,1569.7,1288.6,1507.7,1268.6z"></path>
      </g>
    </svg>
  );
}

function Image() {
  return <img class="profile-img" src={image} alt="Emmanuel Boucicaut" />;
}
