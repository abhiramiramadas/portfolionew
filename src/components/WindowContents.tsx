'use client'

import Image from 'next/image'

export function AboutContent() {
  return (
    <div className="p-6 font-sans overflow-y-auto max-h-[400px]">
      <div className="flex items-start gap-6 mb-6">
        <div className="w-28 h-28 rounded-lg overflow-hidden shadow-lg shrink-0 relative">
          <Image src="/profile.jpg" alt="Abhirami Ramadas" fill className="object-cover" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Hello! I am Abhirami Ramadas</h1>
          <p className="text-gray-600">IT Engineering Student | Developer | ML Enthusiast</p>
        </div>
      </div>
      <div className="bg-white rounded-lg p-4 border border-gray-300 shadow-sm mb-4">
        <h2 className="font-bold text-gray-800 mb-2">About Me</h2>
        <p className="text-gray-700 leading-relaxed text-sm">
          Passionate IT engineering student with a strong interest in software development and machine learning. 
          I am currently deepening my understanding of these fields through hands-on projects and continuous learning. 
          I enjoy solving complex problems and building innovative solutions that make an impact.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
          <div>
            <p><strong>Birthday:</strong> 07 June 2004</p>
            <p><strong>City:</strong> Trivandrum, Kerala</p>
          </div>
          <div>
            <p><strong>Email:</strong> abhiramiramadas2004@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-lg p-4 border border-gray-300 shadow-sm">
        <h2 className="font-bold text-gray-800 mb-3">Interests</h2>
        <div className="grid grid-cols-2 gap-2">
          {['Web Development', 'UI/UX Design', 'Interactive Web Experiences', 'Frontend Frameworks', 'Machine Learning', 'Software Engineering', 'Creative Coding', 'Cloud Computing'].map(interest => (
            <span key={interest} className="text-xs bg-blue-100 text-blue-700 px-3 py-1.5 rounded-full text-center">{interest}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

export function EducationContent() {
  return (
    <div className="p-6 font-sans overflow-y-auto max-h-[400px]">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        Education
      </h1>
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-4 border border-gray-300 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-bold text-gray-800">B.Tech in Information Technology</h2>
              <p className="text-blue-600">LBS Institute of Technology for Women</p>
            </div>
            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">2022 - Present</span>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-300 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-bold text-gray-800">Higher Secondary Education</h2>
              <p className="text-blue-600">Carmel Girls Higher Secondary School</p>
            </div>
            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">2008 - 2022</span>
          </div>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-300 shadow-sm">
          <h3 className="font-bold text-gray-800 mb-2">Online Certifications</h3>
          <ul className="text-gray-700 space-y-2 text-sm">
            <li className="flex justify-between items-center">
              <span>Generative AI for All</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">Infosys</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Cybersecurity Analyst Job Simulation</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">Tata</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Python Programming</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded">KTU</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export function ExperienceContent() {
  return (
    <div className="p-6 font-sans overflow-y-auto max-h-[400px]">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        Volunteering
      </h1>
      <div className="space-y-4">
        <div className="bg-white rounded-lg p-4 border border-gray-300 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-bold text-gray-800">Mentor</h2>
              <a href="https://insightforinnovation.in/" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                Insight For Innovation
              </a>
            </div>
            <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">Dec 2022 - Mar 2023</span>
          </div>
          <ul className="mt-3 text-gray-700 space-y-2 text-sm">
            <li>Assisting in educational programs focused on social-emotional learning (SEL) to help children develop resilience, empathy, and critical thinking.</li>
            <li>Supporting initiatives that enable underprivileged children to explore their full potential through interactive learning.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export function ProjectsContent() {
  const projects = [
    { name: 'Cluck-o-Clock', link: 'https://v0-cluckoclock.vercel.app/', icon: '' },
    { name: 'Droplet', link: 'https://amazing-alfajores-61b61e.netlify.app/', icon: '' },
    { name: 'Tic-Tac-Toe', link: 'https://roaring-blini-15df9c.netlify.app/', icon: '' },
    { name: 'Flappy-Bird', link: 'https://abhiramiramadas.github.io/flappy-bird/', icon: '' },
    { name: 'Burn-hive', link: '', icon: '' },
    { name: 'Weatherella', link: 'https://github.com/abhiramiramadas/weatherella', icon: '' },
  ]

  return (
    <div className="p-6 font-sans overflow-y-auto max-h-[400px]">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        Projects
      </h1>
      <div className="grid grid-cols-2 gap-4">
        {projects.map(project => (
          <a 
            key={project.name} 
            href={project.link || '#'} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white rounded-lg p-4 border border-gray-300 shadow-sm hover:shadow-md hover:border-blue-400 transition-all cursor-pointer"
          >
            <div className="text-3xl mb-2">{project.icon}</div>
            <h2 className="font-bold text-gray-800">{project.name}</h2>
            {project.link && <p className="text-xs text-blue-500 mt-1">View Project</p>}
          </a>
        ))}
      </div>
    </div>
  )
}

export function SkillsContent() {
  const skillCategories = [
    { 
      category: 'Languages and Databases', 
      items: ['TypeScript', 'Python', 'Java', 'JavaScript', 'C', 'C++', 'PHP', 'Dart', 'HTML5', 'CSS3', 'MongoDB', 'MySQL', 'SQLite', 'Oracle DB'],
      icon: '' 
    },
    { 
      category: 'Frameworks and Libraries', 
      items: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Bootstrap', 'Flutter'],
      icon: '' 
    },
    { 
      category: 'Tools and Platforms', 
      items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Jupyter', 'Google Cloud', 'Canva', 'Blender', 'Photoshop'],
      icon: '' 
    },
  ]

  return (
    <div className="p-6 font-sans overflow-y-auto max-h-[400px]">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        Skills
      </h1>
      <div className="space-y-4">
        {skillCategories.map(skill => (
          <div key={skill.category} className="bg-white rounded-lg p-4 border border-gray-300 shadow-sm">
            <h2 className="font-bold text-gray-800 flex items-center gap-2 mb-3">
              <span>{skill.icon}</span> {skill.category}
            </h2>
            <div className="flex gap-2 flex-wrap">
              {skill.items.map(item => (
                <span key={item} className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function ResumeContent() {
  return (
    <div className="p-6 font-sans overflow-y-auto max-h-[400px]">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        Resume
      </h1>
      <div className="bg-white rounded-lg p-6 border border-gray-300 shadow-sm">
        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-gray-800">ABHIRAMI RAMADAS</h2>
          <p className="text-gray-600">IT Engineering Student | Developer</p>
          <p className="text-sm text-gray-500 mt-1">abhiramiramadas2004@gmail.com - Trivandrum, Kerala</p>
        </div>
        <div className="border-t pt-4">
          <h3 className="font-bold text-gray-800 mb-2">SKILLS</h3>
          <p className="text-gray-700 text-sm">TypeScript, Python, Java, JavaScript, React, Next.js, Node.js, MongoDB, MySQL, Git, Tailwind CSS</p>
        </div>
        <div className="border-t pt-4 mt-4">
          <h3 className="font-bold text-gray-800 mb-2">EDUCATION</h3>
          <p className="text-gray-700 text-sm"><strong>B.Tech Information Technology</strong> - LBS Institute of Technology for Women (2022 - Present)</p>
          <p className="text-gray-700 text-sm"><strong>Higher Secondary</strong> - Carmel Girls Higher Secondary School (2008 - 2022)</p>
        </div>
        <div className="border-t pt-4 mt-4">
          <h3 className="font-bold text-gray-800 mb-2">VOLUNTEERING</h3>
          <p className="text-gray-700 text-sm"><strong>Mentor</strong> - Insight For Innovation (Dec 2022 - Mar 2023)</p>
        </div>
        <div className="mt-6 text-center">
          <a 
            href="/resume.pdf" 
            download="Abhirami_Ramadas_Resume.pdf"
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Download PDF
          </a>
        </div>
      </div>
    </div>
  )
}

export function ContactContent() {
  return (
    <div className="p-6 font-sans overflow-y-auto max-h-[400px]">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        Contact Me
      </h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-lg p-4 border border-gray-300 shadow-sm">
          <h2 className="font-bold text-gray-800 mb-3">Send a Message</h2>
          <form className="space-y-3">
            <input type="text" placeholder="Your Name" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm" />
            <input type="email" placeholder="Your Email" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 text-sm" />
            <textarea placeholder="Your Message" rows={3} className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 resize-none text-sm" />
            <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors text-sm">Send Message</button>
          </form>
        </div>
        <div className="bg-white rounded-lg p-4 border border-gray-300 shadow-sm">
          <h2 className="font-bold text-gray-800 mb-3">Get in Touch</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl"></span>
              <div>
                <p className="text-gray-500 text-xs">Email</p>
                <a href="mailto:abhiramiramadas2004@gmail.com" className="text-blue-600 text-sm hover:underline">abhiramiramadas2004@gmail.com</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl"></span>
              <div>
                <p className="text-gray-500 text-xs">Location</p>
                <p className="text-gray-700 text-sm">Trivandrum, Kerala</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl"></span>
              <div>
                <p className="text-gray-500 text-xs">GitHub</p>
                <a href="https://github.com/abhiramiramadas" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm hover:underline">github.com/abhiramiramadas</a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-2xl"></span>
              <div>
                <p className="text-gray-500 text-xs">LinkedIn</p>
                <a href="https://www.linkedin.com/in/abhiramiramadas/" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm hover:underline">linkedin.com/in/abhiramiramadas</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function HomeContent() {
  return (
    <div className="p-6 font-sans text-center">
      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg relative">
        <Image src="/profile.jpg" alt="Abhirami Ramadas" fill className="object-cover" />
      </div>
      <h1 className="text-2xl font-bold text-gray-800 mb-2">Welcome!</h1>
      <p className="text-gray-600 mb-2">
        Hi, I am <span className="font-bold text-blue-600">Abhirami Ramadas</span>
      </p>
      <p className="text-gray-500 mb-6 text-sm">
        IT Engineering Student passionate about software development and machine learning.
      </p>
      
      <div className="flex justify-center gap-4 mb-6">
        <a href="https://www.linkedin.com/in/abhiramiramadas/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#0077B5] text-white rounded-lg hover:bg-[#006396] transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          LinkedIn
        </a>
        <a href="https://github.com/abhiramiramadas" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#333] text-white rounded-lg hover:bg-[#24292e] transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          GitHub
        </a>
        <a href="mailto:abhiramiramadas2004@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#EA4335] text-white rounded-lg hover:bg-[#d33426] transition-colors">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
          Email
        </a>
      </div>

      <div className="bg-white rounded-lg p-4 border border-gray-300 shadow-sm inline-block">
        <p className="text-gray-700 text-sm">
          Double-click on the desktop icons to explore different sections of my portfolio!
        </p>
      </div>
    </div>
  )
}
