import { useEffect, useState } from 'react'
import heroScene from './assets/adventure-banner.svg'
import avatar from './assets/avatar.svg'

const glyphs = {
  mail: '✉',
  map: '⌖',
  school: '▣',
  calendar: '▦',
  user: '♙',
  award: '✦',
  code: '</>',
  shield: '◇',
  trophy: '★',
  star: '☆',
  check: '✓',
  flame: '▲',
  image: '▧',
  book: '▤',
  github: 'GH',
  external: '↗',
}

function Icon({ name, size = 18 }) {
  return (
    <span
      className="ui-icon"
      aria-hidden="true"
      style={{ fontSize: `${Math.max(11, size)}px` }}
    >
      {glyphs[name] || '•'}
    </span>
  )
}

const profile = {
  name: 'Trần Duy Phương',
  role: 'SOC Intern · Cybersecurity Student',
  email: 'phuong681875@gmail.com',
  school: 'Posts and Telecommunications Institute of Technology',
  schoolShort: 'PTIT',
  location: 'Triều Khúc, Thanh Trì, Hà Nội',
  birthday: '2005',
  gpa: '3.37',
  bio: 'Sinh viên năm 4 ngành An toàn thông tin, có nền tảng về hệ thống, mạng máy tính và an toàn thông tin. Tôi quan tâm đến Security Monitoring, Log Analysis, SIEM và các giải pháp bảo mật doanh nghiệp.',
  github: 'https://github.com/ILMFW02',
}

const achievements = [
  {
    title: 'Top 7 ScriptCTF 2026',
    description: 'Thành tích trong cuộc thi CTF',
    icon: 'trophy',
  },
  {
    title: 'Top 6 GasLightCTF 2026',
    description: 'Thành tích trong cuộc thi CTF',
    icon: 'trophy',
  },
  {
    title: 'PTIT CTF 2025 · 2026',
    description: 'Tham gia hoạt động CTF',
    icon: 'shield',
  },
  {
    title: 'Swin Hackathon 2026',
    description: 'Applied AI & Machine Learning',
    icon: 'award',
  },
  {
    title: 'SPb SUT × PTIT',
    description: 'AI & ML for Network and Security',
    icon: 'code',
  },
]

const projects = [
  {
    name: 'User Behavior Anomaly Detection with ML',
    category: 'Research Project',
    period: 'Jul – Sep 2026',
    description:
      'Xây dựng pipeline giám sát hành vi người dùng từ log, tạo behavioral profile và phát hiện các hoạt động bất thường.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Splunk', 'Isolation Forest'],
  },
  {
    name: 'Threat Detection & Security Monitoring',
    category: 'Security Project',
    period: 'Feb – Jun 2026',
    description:
      'Phân tích Nginx access log để phát hiện lưu lượng web đáng ngờ và tích hợp hệ thống cảnh báo, lưu trữ và tự động hóa.',
    technologies: ['Python', 'Nginx', 'FastAPI', 'Docker', 'SQLite', 'n8n'],
  },
]

const skills = [
  {
    title: 'Mạng & An toàn mạng',
    text: 'TCP/IP, DNS, HTTP/HTTPS, Network Security, Network Troubleshooting',
    emoji: '🌐',
  },
  {
    title: 'Hệ thống',
    text: 'Windows/Linux, Windows Server, Linux Administration Fundamentals',
    emoji: '🖥️',
  },
  {
    title: 'Security Monitoring',
    text: 'Log Monitoring, SIEM & SOAR Fundamentals, Endpoint Security Fundamentals',
    emoji: '🛡️',
  },
  {
    title: 'Công cụ bảo mật',
    text: 'Splunk, Suricata, Wireshark, Burp Suite, Nmap, Docker',
    emoji: '🔐',
  },
]

const sections = ['home', 'about', 'achievements', 'projects', 'skills']

function App() {
  const [activeTab, setActiveTab] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const viewportPoint = window.scrollY + 180
      let current = 'home'

      for (const id of sections) {
        const element = document.getElementById(id)
        if (element && viewportPoint >= element.offsetTop) {
          current = id
        }
      }

      setActiveTab(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setActiveTab(id)
  }

  return (
    <div className="profile-page">
      <header className="site-header">
        <div className="header-inner">
          <button
            className="brand"
            onClick={() => scrollToSection('home')}
            aria-label="Về trang chủ"
          >
            <span>GOOD</span>
            <strong>PROFILE</strong>
          </button>

          <nav className="nav-menu" aria-label="Điều hướng chính">
            {[
              ['home', 'Home'],
              ['about', 'About me'],
              ['projects', 'Projects'],
              ['skills', 'Skills'],
              ['achievements', 'Thành tích'],
            ].map(([id, label]) => (
              <button
                key={id}
                className={`nav-link ${activeTab === id ? 'active' : ''}`}
                onClick={() => scrollToSection(id)}
              >
                {label}
              </button>
            ))}

            <a
              className="logout-button"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <Icon name="github" size={14} />
              GitHub
            </a>
          </nav>
        </div>
      </header>

      <main className="content-wrap">
        <section id="home" className="hero-section">
          <div className="hero-scene">
            <img src={heroScene} alt="Phong cảnh phiêu lưu minh họa" />
          </div>

          <div className="profile-card">
            <div className="avatar-wrap">
              <img className="avatar" src={avatar} alt={`Ảnh đại diện của ${profile.name}`} />
            </div>

            <div className="profile-main">
              <span className="profile-tag">SOC Intern</span>
              <h1>{profile.name}</h1>
              <div className="name-underline" />
              <p>{profile.role}</p>
            </div>

            <div className="profile-info">
              <div>
                <Icon name="mail" size={15} />
                <span>
                  <strong>Email:</strong> {profile.email}
                </span>
              </div>
              <div>
                <Icon name="map" size={15} />
                <span>
                  <strong>Địa chỉ:</strong> {profile.location}
                </span>
              </div>
              <div>
                <Icon name="school" size={15} />
                <span>
                  <strong>Trường:</strong> {profile.schoolShort}
                </span>
              </div>
              <div>
                <Icon name="calendar" size={15} />
                <span>
                  <strong>GPA:</strong> {profile.gpa}
                </span>
              </div>
            </div>
          </div>

          <div className="quick-stats">
            <div>
              <span>{projects.length}</span>
              <small>Dự án</small>
            </div>
            <div>
              <span>{skills.length}</span>
              <small>Nhóm kỹ năng</small>
            </div>
            <div>
              <span>{achievements.length}</span>
              <small>Thành tích</small>
            </div>
          </div>
        </section>

        <section id="about" className="section-grid">
          <article className="card about-card">
            <div className="card-title">
              <Icon name="user" size={19} />
              <h2>About me</h2>
            </div>

            <p className="about-text">{profile.bio}</p>

            <div className="about-list">
              <div>
                <span>Chuyên ngành</span>
                <strong>An toàn thông tin</strong>
              </div>
              <div>
                <span>Định hướng</span>
                <strong>SOC / Security Monitoring</strong>
              </div>
              <div>
                <span>Học tập</span>
                <strong>PTIT · 2023 – Present</strong>
              </div>
              <div>
                <span>Mục tiêu</span>
                <strong className="status-inline">
                  <Icon name="check" size={14} />
                  SOC Intern
                </strong>
              </div>
            </div>
          </article>

          <article id="achievements" className="card badges-card">
            <div className="card-title">
              <Icon name="award" size={19} />
              <h2>Thành tích</h2>
            </div>

            <div className="badge-grid">
              {achievements.map(({ title, description, icon }) => (
                <div className="badge unlocked" key={title}>
                  <div className="badge-icon">
                    <Icon name={icon} size={18} />
                  </div>
                  <strong>{title}</strong>
                  <span>{description}</span>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section id="projects" className="card ranking-card">
          <div className="section-heading">
            <div className="card-title">
              <Icon name="book" size={20} />
              <h2>Projects</h2>
            </div>
            <span className="section-note">Các dự án tiêu biểu về bảo mật và giám sát</span>
          </div>

          <div className="podium" style={{ alignItems: 'stretch', paddingBottom: '10px' }}>
            {projects.map((project) => (
              <article
                className="podium-item"
                key={project.name}
                style={{ minHeight: '220px', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'stretch' }}
              >
                <div
                  className="podium-badge"
                  style={{ width: '40px', height: '40px', marginBottom: '12px', fontSize: '16px' }}
                >
                  <Icon name="shield" size={18} />
                </div>

                <strong
                  style={{ whiteSpace: 'normal', overflow: 'visible', textOverflow: 'clip', fontSize: '12px', lineHeight: '1.35' }}
                >
                  {project.name}
                </strong>

                <small style={{ alignSelf: 'flex-start', marginTop: '7px' }}>
                  {project.period}
                </small>

                <span style={{ marginTop: '10px', fontSize: '9px' }}>
                  {project.category}
                </span>

                <p
                  style={{ margin: '8px 0 10px', color: '#7f877b', fontSize: '9px', lineHeight: '1.55' }}
                >
                  {project.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: 'auto' }}>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        margin: 0,
                        padding: '4px 6px',
                        borderRadius: '999px',
                        background: '#eef7e9',
                        border: '1px solid #d9ead3',
                        color: '#5f8751',
                        fontSize: '8px',
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="card gallery-card">
          <div className="section-heading">
            <div className="card-title">
              <Icon name="shield" size={19} />
              <h2>Skills</h2>
            </div>
            <span className="section-note">Nền tảng kỹ thuật chính</span>
          </div>

          <div className="gallery-grid">
            {skills.map((skill) => (
              <article className="gallery-item" key={skill.title}>
                <div className="gallery-art">{skill.emoji}</div>
                <div>
                  <strong>{skill.title}</strong>
                  <p>{skill.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="card contact-card">
          <div>
            <div className="card-title">
              <Icon name="mail" size={19} />
              <h2>Liên hệ</h2>
            </div>
            <p>
              Quan tâm đến các dự án, hoạt động CTF hoặc cơ hội thực tập trong lĩnh vực an toàn thông tin?
            </p>
          </div>

          <div className="contact-actions">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Icon name="github" size={17} />
              GitHub
              <Icon name="external" size={14} />
            </a>
            <a href={`mailto:${profile.email}`}>
              <Icon name="mail" size={17} />
              Email
            </a>
          </div>
        </section>

        <footer className="site-footer">
          © 2026 {profile.name} · Bài thực hành Lập trình Web với React
        </footer>
      </main>
    </div>
  )
}

export default App
