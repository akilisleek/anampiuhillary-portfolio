const app = document.querySelector("#app");

const navigation = [
  ["/", "Home"],
  ["/services", "Services"],
  ["/skills", "Skills"],
  ["/projects", "Projects"],
  ["/experience", "Experience"],
  ["/about", "About"],
  ["/contact", "Contact"]
];

const projects = [
  {
    title: "LarrynetBilling",
    type: "WiFi billing system",
    image: "/assets/project-dashboards.png",
    alt: "Business dashboard interface preview",
    description: "A payment-connected MikroTik hotspot system that turns successful M-Pesa payments into timed WiFi access.",
    tags: ["FastAPI", "PayHero", "MikroTik", "SQLite"],
    state: "Live operations build"
  },
  {
    title: "HomelinkGlobal",
    type: "Property and relocation prototype",
    image: "/assets/project-homelink.png",
    alt: "HomelinkGlobal property platform preview",
    description: "A clickable platform concept for property discovery, relocation requests, service suppliers, and operations.",
    tags: ["Product UI", "Web platform", "Admin flows"],
    action: ["https://akilisleek.github.io/homelink-sample/", "View live demo"]
  },
  {
    title: "GoldTower XAUUSD",
    type: "Trading automation",
    image: "/assets/project-goldtower.png",
    alt: "GoldTower trading automation preview",
    description: "A private Expert Advisor project built around execution rules, risk controls, and test-led iteration.",
    tags: ["MQL5", "MetaTrader 5", "Risk controls"],
    state: "Private build"
  },
  {
    title: "QuantumTradingFunds",
    type: "Trader tools and product direction",
    image: "/assets/project-dashboards.png",
    alt: "Operations tools preview",
    description: "An evolving product space for clearer trading workflows, performance thinking, and practical digital tools.",
    tags: ["Product strategy", "Trading tools", "Research"],
    state: "In progress"
  }
];

function routeLink(path, label, className = "") {
  return `<a class="${className}" href="${path}" data-route>${label}</a>`;
}

function header() {
  return `
    <header class="site-header">
      <div class="shell nav-shell">
        ${routeLink("/", "<span class=\"mark\">HA</span><span>Hillary Anampiu</span>", "brand")}
        <button class="menu-button" type="button" aria-controls="main-nav" aria-expanded="false">Menu</button>
        <nav id="main-nav" class="main-nav" aria-label="Main navigation">
          ${navigation.map(([path, label]) => routeLink(path, label)).join("")}
        </nav>
        <a class="github-link" href="https://github.com/akilisleek" target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </header>`;
}

function footer() {
  return `
    <footer class="site-footer">
      <div class="shell footer-shell">
        <p>&copy; ${new Date().getFullYear()} Hillary Anampiu. Built with practical intent.</p>
        <div><a href="mailto:anampiuhillary@gmail.com">Email</a><a href="https://github.com/akilisleek" target="_blank" rel="noreferrer">GitHub</a></div>
      </div>
    </footer>`;
}

function pageHero(eyebrow, title, text, theme = "blue") {
  return `
    <section class="page-hero theme-${theme}">
      <div class="shell">
        <p class="eyebrow">${eyebrow}</p>
        <h1>${title}</h1>
        <p>${text}</p>
      </div>
    </section>`;
}

function projectCard(project) {
  const action = project.action
    ? `<a class="inline-link" href="${project.action[0]}" target="_blank" rel="noreferrer">${project.action[1]} <span aria-hidden="true">&rarr;</span></a>`
    : `<span class="status-label">${project.state}</span>`;
  return `
    <article class="project-card">
      <img src="${project.image}" alt="${project.alt}" loading="lazy">
      <div class="project-content">
        <p class="card-eyebrow">${project.type}</p>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <div class="tag-row">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
        ${action}
      </div>
    </article>`;
}

function homePage() {
  return `
    <section class="home-hero">
      <div class="home-visual" aria-hidden="true"><img src="/assets/project-dashboards.png" alt=""></div>
      <div class="shell home-copy">
        <p class="eyebrow">Software engineer / Kenya</p>
        <h1>Useful software, built around real work.</h1>
        <p>I create web systems, operational dashboards, WiFi billing tools, and trading automation with clean interfaces and practical engineering underneath.</p>
        <div class="button-row">
          ${routeLink("/projects", "View projects", "button button-yellow")}
          ${routeLink("/contact", "Work with me", "button button-outline")}
        </div>
      </div>
      <div class="shell stats" aria-label="Portfolio summary">
        <div><strong>4</strong><span>named product builds</span></div>
        <div><strong>6+</strong><span>core technical tools</span></div>
        <div><strong>Kenya</strong><span>remote-ready delivery</span></div>
        <div><strong>Now</strong><span>building and improving</span></div>
      </div>
    </section>

    <section class="section intro-section">
      <div class="shell split-heading">
        <div><p class="eyebrow ink">What I do</p><h2>From a customer paying for WiFi to a team running a dashboard, I build the flow behind the screen.</h2></div>
        <p>I enjoy projects where software has a job: organise work, accept a payment, automate a decision, or remove a daily headache.</p>
      </div>
    </section>

    <section class="section soft-section">
      <div class="shell">
        <div class="section-title-row"><div><p class="eyebrow ink">Featured work</p><h2>Projects with a purpose.</h2></div>${routeLink("/projects", "See all projects", "inline-link")}</div>
        <div class="project-grid featured-grid">${projects.slice(0, 3).map(projectCard).join("")}</div>
      </div>
    </section>

    <section class="section service-strip">
      <div class="shell">
        <p class="eyebrow">How I can help</p>
        <div class="service-strip-grid">
          <article><span>01</span><h3>Web products</h3><p>Responsive websites, landing pages, workflows, and product interfaces.</p></article>
          <article><span>02</span><h3>Business systems</h3><p>Dashboards, records, admin actions, payments, and operations tools.</p></article>
          <article><span>03</span><h3>Automation</h3><p>Trading tools, structured rules, scripts, and repeatable processes.</p></article>
        </div>
      </div>
    </section>`;
}

function servicesPage() {
  return `
    ${pageHero("What I build", "Digital products that have a job to do.", "Clear design is important. So are the workflows, data, decisions, and handover behind it.", "cyan")}
    <section class="section"><div class="shell service-list">
      <article><span>01</span><div><h2>Websites and product interfaces</h2><p>Portfolio sites, company sites, platform concepts, responsive layouts, and product journeys designed for people to actually use.</p><div class="tag-row"><span>HTML / CSS</span><span>JavaScript</span><span>Responsive UI</span><span>Vercel</span></div></div></article>
      <article><span>02</span><div><h2>Business systems and operations tools</h2><p>Dashboards, payment flows, data records, administrative actions, user management, and useful system automation.</p><div class="tag-row"><span>Python</span><span>FastAPI</span><span>SQLite</span><span>API integrations</span></div></div></article>
      <article><span>03</span><div><h2>Network and hotspot billing</h2><p>Practical access systems that connect a customer payment to a controlled MikroTik hotspot session.</p><div class="tag-row"><span>MikroTik</span><span>M-Pesa</span><span>PayHero</span><span>RouterOS API</span></div></div></article>
      <article><span>04</span><div><h2>Trading automation</h2><p>Private tools and Expert Advisor development with clear execution conditions, risk controls, and testing cycles.</p><div class="tag-row"><span>MQL5</span><span>MetaTrader 5</span><span>Backtesting</span><span>Risk logic</span></div></div></article>
    </div></section>`;
}

function skillsPage() {
  const groups = [
    ["Frontend", "HTML5", "CSS3", "JavaScript", "Responsive design", "Product UI"],
    ["Backend and data", "Python", "FastAPI", "SQLite", "MySQL", "REST APIs"],
    ["Deployment", "Git", "GitHub", "Vercel", "Caddy", "Windows services"],
    ["Automation", "MQL5", "MetaTrader 5", "Workflow tools", "Testing", "Risk controls"],
    ["Network systems", "MikroTik", "RouterOS API", "Hotspot profiles", "Payment activation", "DHCP / DNS"],
    ["Working style", "Product thinking", "Documentation", "Troubleshooting", "Iteration", "Handover"]
  ];
  return `${pageHero("Technical toolkit", "Tools I use to make things move.", "The stack changes with the problem. The aim stays the same: a dependable result that is clear to operate.", "pink")}
    <section class="section"><div class="shell skill-grid">${groups.map(([title, ...items]) => `<article><h2>${title}</h2><ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul></article>`).join("")}</div></section>`;
}

function projectsPage() {
  return `${pageHero("Projects and experiments", "Work built around practical outcomes.", "A mix of live systems, prototypes, private automation, and product directions currently taking shape.", "yellow")}
    <section class="section"><div class="shell project-grid full-project-grid">${projects.map(projectCard).join("")}</div></section>
    <section class="section note-band"><div class="shell split-heading"><div><p class="eyebrow ink">Build lab</p><h2>More is coming.</h2></div><p>Small scripts, browser experiments, trading research tools, and games will appear here as they become worth sharing.</p></div></section>`;
}

function experiencePage() {
  return `${pageHero("Background", "Engineering with a support mindset.", "I combine software development with hands-on technical support experience, which keeps the focus on how systems behave for real people.", "blue")}
    <section class="section"><div class="shell timeline">
      <article><span>2023</span><div><h2>BSc Software Engineering</h2><p>Murang'a University of Technology. Focused on software development, web systems, databases, and problem-solving.</p></div></article>
      <article><span>2023 - now</span><div><h2>Independent digital product work</h2><p>Web products, portfolio builds, payment-connected WiFi systems, dashboards, documentation, and automation experiments.</p></div></article>
      <article><span>2022</span><div><h2>Help Desk Support</h2><p>Murang'a Level 5 Hospital: workstation support, software setup, user assistance, and issue resolution.</p></div></article>
      <article><span>2021</span><div><h2>Help Desk Technician</h2><p>Mentor SACCO: technical support, reporting, user issue handling, and systems assistance.</p></div></article>
    </div></section>`;
}

function aboutPage() {
  return `${pageHero("About me", "I care about the part after launch.", "The best projects feel simple for the person using them, even when there is serious work happening underneath.", "cyan")}
    <section class="section"><div class="shell about-layout"><div><h2>Hillary Anampiu</h2><p class="lead">Software engineer based in Kenya, building practical products for businesses, everyday users, and technical workflows.</p></div><div><p>I am drawn to projects that require both curiosity and follow-through: a payment must match the right package, a dashboard action must affect the real system, and a trading rule must handle risk without drama.</p><p>I work with web technologies, Python services, databases, RouterOS systems, and MQL5 automation. I also enjoy translating complicated technical work into a setup that a client can actually run.</p>${routeLink("/contact", "Start a conversation", "button button-blue")}</div></div></section>`;
}

function contactPage() {
  return `${pageHero("Contact", "Let's talk about what needs building.", "For a web product, admin tool, WiFi billing setup, trading utility, or an idea that needs a clearer shape.", "pink")}
    <section class="section"><div class="shell contact-grid">
      <a href="mailto:anampiuhillary@gmail.com"><span>Email</span><strong>anampiuhillary@gmail.com</strong></a>
      <a href="tel:+254700019154"><span>Phone</span><strong>+254 700 019 154</strong></a>
      <a href="https://github.com/akilisleek" target="_blank" rel="noreferrer"><span>GitHub</span><strong>github.com/akilisleek</strong></a>
      <a href="https://x.com/akilisleek" target="_blank" rel="noreferrer"><span>X</span><strong>@akilisleek</strong></a>
    </div></section>`;
}

const pages = {
  "/": { title: "Hillary Anampiu | Software Engineer", render: homePage },
  "/services": { title: "Services | Hillary Anampiu", render: servicesPage },
  "/skills": { title: "Skills | Hillary Anampiu", render: skillsPage },
  "/projects": { title: "Projects | Hillary Anampiu", render: projectsPage },
  "/experience": { title: "Experience | Hillary Anampiu", render: experiencePage },
  "/about": { title: "About | Hillary Anampiu", render: aboutPage },
  "/contact": { title: "Contact | Hillary Anampiu", render: contactPage }
};

function currentPath() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  return pages[path] ? path : "/";
}

function render() {
  const path = currentPath();
  const page = pages[path];
  document.title = page.title;
  app.innerHTML = `${header()}<main>${page.render()}</main>${footer()}`;

  app.querySelectorAll("[data-route]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      window.history.pushState({}, "", link.getAttribute("href"));
      render();
      window.scrollTo({ top: 0, behavior: "auto" });
    });
  });

  const button = app.querySelector(".menu-button");
  const nav = app.querySelector(".main-nav");
  button.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
    button.textContent = open ? "Close" : "Menu";
  });
}

window.addEventListener("popstate", render);
render();
