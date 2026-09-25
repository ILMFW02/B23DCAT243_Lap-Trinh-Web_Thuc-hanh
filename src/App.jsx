import { useEffect, useState } from 'react'

import heroScene from './assets/mountain.jpg'
import avatar from './assets/fuji.jpg'

const profile = {
  name: 'Trần Duy Phương',
  role: 'SOC Intern · Cybersecurity Student',
  email: 'phuong681875@gmail.com',
  school: 'PTIT',
  location: 'Hà Nội, Việt Nam',
  birthday: '2005',
  gpa: '3.37',

  bio:
    'Sinh viên năm 4 ngành An toàn thông tin, có nền tảng về hệ thống, mạng máy tính và an toàn thông tin. Tôi quan tâm đến Security Monitoring, Log Analysis, SIEM và các giải pháp bảo mật doanh nghiệp.',

  github: 'https://github.com/ILMFW02',
}

const projects = [
  {
    name: 'User Behavior Anomaly Detection with ML',
    category: 'Security Research',
    period: 'Jul – Sep 2026',

    description:
      'Xây dựng pipeline giám sát hành vi người dùng từ log, tạo behavioral profile và phát hiện các hoạt động bất thường.',

    technologies: [
      'Python',
      'Pandas',
      'Scikit-learn',
      'Splunk',
      'Isolation Forest',
    ],
  },

  {
    name: 'Threat Detection & Security Monitoring',
    category: 'Security Project',
    period: 'Feb – Jun 2026',

    description:
      'Xây dựng pipeline phân tích Nginx access log để phát hiện lưu lượng web đáng ngờ và tích hợp hệ thống cảnh báo, lưu trữ và tự động hóa.',

    technologies: [
      'Python',
      'Nginx',
      'FastAPI',
      'Docker',
      'SQLite',
      'n8n',
    ],
  },
]

const skills = [
  {
    icon: '🌐',
    title: 'Networking',
    description:
      'TCP/IP, DNS, HTTP/HTTPS, Network Security',
  },

  {
    icon: '🖥️',
    title: 'System',
    description:
      'Windows/Linux, Windows Server, System Troubleshooting',
  },

  {
    icon: '🛡️',
    title: 'Security Monitoring',
    description:
      'Log Monitoring, SIEM & SOAR, Endpoint Security',
  },

  {
    icon: '🔐',
    title: 'Security Tools',
    description:
      'Splunk, Suricata, Wireshark, Burp Suite, Nmap, Docker',
  },
]

const achievements = [
  {
    icon: '🏆',
    title: 'Top 7 ScriptCTF 2026',
    description: 'Thành tích trong cuộc thi CTF',
  },

  {
    icon: '🏆',
    title: 'Top 6 GasLightCTF 2026',
    description: 'Thành tích trong cuộc thi CTF',
  },

  {
    icon: '🛡️',
    title: 'PTIT CTF 2025 · 2026',
    description: 'Tham gia hoạt động CTF',
  },

  {
    icon: '🏅',
    title: 'Swin Hackathon 2026',
    description: 'Applied AI & Machine Learning',
  },
]

const sections = [
  'home',
  'about',
  'projects',
  'skills',
  'achievements',
]

function App() {
  const [activeTab, setActiveTab] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180

      let currentSection = 'home'

      sections.forEach((id) => {
        const element = document.getElementById(id)

        if (
          element &&
          scrollPosition >= element.offsetTop
        ) {
          currentSection = id
        }
      })

      setActiveTab(currentSection)
    }

    window.addEventListener('scroll', handleScroll)

    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      })
    }

    setActiveTab(id)
  }

  return (
    <div className="profile-page">

      {/* ================= HEADER ================= */}

      <header className="site-header">
        <div className="header-inner">

          <button
            className="brand"
            onClick={() => scrollToSection('home')}
          >
            <span>GOOD</span>
            <strong>PROFILE</strong>
          </button>

          <nav className="nav-menu">

            <button
              className={`nav-link ${
                activeTab === 'home' ? 'active' : ''
              }`}
              onClick={() => scrollToSection('home')}
            >
              Home
            </button>

            <button
              className={`nav-link ${
                activeTab === 'about' ? 'active' : ''
              }`}
              onClick={() => scrollToSection('about')}
            >
              About me
            </button>

            <button
              className={`nav-link ${
                activeTab === 'projects' ? 'active' : ''
              }`}
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </button>

            <button
              className={`nav-link ${
                activeTab === 'skills' ? 'active' : ''
              }`}
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </button>

            <a
              className="header-github"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

          </nav>

        </div>
      </header>


      {/* ================= COVER ================= */}

      <section
        id="home"
        className="cover-section"
      >
        <img
          className="cover-image"
          src={heroScene}
          alt="Profile cover"
        />

        <div className="cover-overlay" />
      </section>


      {/* ================= MAIN ================= */}

      <main className="profile-layout">


        {/* ================= LEFT COLUMN ================= */}

        <aside className="left-column">

          <section className="profile-sidebar">

            <div className="sidebar-avatar-wrap">

              <img
                className="sidebar-avatar"
                src={avatar}
                alt={profile.name}
              />

            </div>


            <h1>
              {profile.name}
            </h1>


            <p className="sidebar-role">
              {profile.role}
            </p>


            <div className="sidebar-divider" />


            <div className="sidebar-info">

              <div>
                <span>✉️</span>
                <span>{profile.email}</span>
              </div>

              <div>
                <span>📍</span>
                <span>{profile.location}</span>
              </div>

              <div>
                <span>🎓</span>
                <span>{profile.school}</span>
              </div>

              <div>
                <span>📅</span>
                <span>{profile.birthday}</span>
              </div>

            </div>


            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="profile-action"
            >
              GitHub
            </a>

          </section>


          {/* QUICK STATS */}

          <section className="mini-card">

            <div className="mini-stat">
              <strong>{projects.length}</strong>
              <span>Dự án</span>
            </div>

            <div className="mini-stat">
              <strong>{skills.length}</strong>
              <span>Kỹ năng</span>
            </div>

            <div className="mini-stat">
              <strong>{profile.gpa}</strong>
              <span>GPA</span>
            </div>

          </section>

        </aside>


        {/* ================= CENTER COLUMN ================= */}

        <section className="center-column">


          {/* ================= ABOUT ================= */}

          <article
            id="about"
            className="content-card"
          >

            <div className="content-title">

              <span>👤</span>

              <h2>
                About me
              </h2>

            </div>


            <p className="about-description">
              {profile.bio}
            </p>


            <div className="about-grid">

              <div>
                <span>Chuyên ngành</span>
                <strong>
                  An toàn thông tin
                </strong>
              </div>


              <div>
                <span>Định hướng</span>
                <strong>
                  SOC / Security Monitoring
                </strong>
              </div>


              <div>
                <span>Trường</span>
                <strong>
                  PTIT
                </strong>
              </div>


              <div>
                <span>Trạng thái</span>

                <strong className="status">
                  ● Open to Internship
                </strong>

              </div>

            </div>

          </article>


          {/* ================= PROJECTS ================= */}

          <article
            id="projects"
            className="content-card"
          >

            <div className="content-title">

              <span>📚</span>

              <h2>
                Projects
              </h2>

            </div>


            <div className="project-list">

              {projects.map((project) => (

                <article
                  className="project-card"
                  key={project.name}
                >

                  <div className="project-header">

                    <div>

                      <h3>
                        {project.name}
                      </h3>

                      <span className="project-meta">
                        {project.category}
                        {' · '}
                        {project.period}
                      </span>

                    </div>

                    <span>
                      🔹
                    </span>

                  </div>


                  <p>
                    {project.description}
                  </p>


                  <div className="technology-list">

                    {project.technologies.map(
                      (technology) => (
                        <span key={technology}>
                          {technology}
                        </span>
                      )
                    )}

                  </div>

                </article>

              ))}

            </div>

          </article>


          {/* ================= SKILLS ================= */}

          <article
            id="skills"
            className="content-card"
          >

            <div className="content-title">

              <span>🛡️</span>

              <h2>
                Skills
              </h2>

            </div>


            <div className="skills-grid">

              {skills.map((skill) => (

                <article
                  className="skill-card"
                  key={skill.title}
                >

                  <div className="skill-icon">
                    {skill.icon}
                  </div>


                  <div>

                    <h3>
                      {skill.title}
                    </h3>

                    <p>
                      {skill.description}
                    </p>

                  </div>

                </article>

              ))}

            </div>

          </article>

        </section>


        {/* ================= RIGHT COLUMN ================= */}

        <aside className="right-column">


          {/* ACHIEVEMENTS */}

          <section
            id="achievements"
            className="achievement-card"
          >

            <div className="content-title">

              <span>🏆</span>

              <h2>
                Thành tích
              </h2>

            </div>


            <div className="achievement-list">

              {achievements.map(
                (achievement) => (

                  <article
                    className="achievement-item"
                    key={achievement.title}
                  >

                    <div className="achievement-icon">
                      {achievement.icon}
                    </div>


                    <div>

                      <h3>
                        {achievement.title}
                      </h3>

                      <p>
                        {achievement.description}
                      </p>

                    </div>

                  </article>

                )
              )}

            </div>

          </section>


          {/* CONTACT */}

          <section className="contact-card">

            <h2>
              Liên hệ
            </h2>

            <p>
              Quan tâm đến các dự án, hoạt động hoặc
              cơ hội thực tập trong lĩnh vực an toàn
              thông tin.
            </p>


            <div className="contact-buttons">

              <a
                href={`mailto:${profile.email}`}
              >
                ✉️ Email
              </a>


              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

            </div>

          </section>

        </aside>

      </main>


      {/* ================= FOOTER ================= */}

      <footer className="site-footer">
        © 2026 {profile.name} · React Profile
      </footer>

    </div>
  )
}

export default App