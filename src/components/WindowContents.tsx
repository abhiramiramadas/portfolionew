'use client'

import Image from 'next/image'

export function AboutContent() {
  return (
    <div className="p-6 font-sans overflow-y-auto max-h-[400px] bg-white">
      <div className="flex items-start gap-6 mb-6">
        <div className="w-24 h-24 rounded-lg overflow-hidden shadow-sm shrink-0 relative border border-gray-200">
          <Image src="/profile.jpg" alt="Abhirami Ramadas" fill className="object-cover" />
        </div>
        <div>
          <h1 className="text-xl font-semibold text-gray-800 mb-1">Abhirami Ramadas</h1>
          <p className="text-gray-500 text-sm">IT Engineering Student • Developer • ML Enthusiast</p>
        </div>
      </div>
      <div className="space-y-4">
        <div>
          <h2 className="font-medium text-gray-700 mb-2 text-sm uppercase tracking-wide">About</h2>
          <p className="text-gray-600 leading-relaxed text-sm">
            Passionate IT engineering student with a strong interest in software development and machine learning. 
            I enjoy solving complex problems and building innovative solutions that make an impact.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm pt-2 border-t border-gray-100">
          <div className="space-y-2">
            <p className="text-gray-500"><span className="text-gray-700 font-medium">Birthday:</span> 07 June 2004</p>
            <p className="text-gray-500"><span className="text-gray-700 font-medium">City:</span> Trivandrum, Kerala</p>
          </div>
          <div>
            <p className="text-gray-500"><span className="text-gray-700 font-medium">Email:</span> abhiramiramadas2004@gmail.com</p>
          </div>
        </div>
        <div className="pt-2 border-t border-gray-100">
          <h2 className="font-medium text-gray-700 mb-3 text-sm uppercase tracking-wide">Interests</h2>
          <div className="flex flex-wrap gap-2">
            {['Web Development', 'UI/UX Design', 'Frontend', 'Machine Learning', 'Software Engineering', 'Cloud Computing'].map((interest) => (
              <span key={interest} className="text-xs px-3 py-1.5 bg-gray-100 text-gray-600 rounded-md">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export function EducationContent() {
  return (
    <div className="p-6 font-sans overflow-y-auto max-h-[400px] bg-white">
      <h1 className="text-xl font-semibold text-gray-800 mb-4">Education</h1>
      <div className="space-y-4">
        <div className="p-4 border border-gray-200 rounded-lg">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-medium text-gray-800">B.Tech in Information Technology</h2>
              <p className="text-gray-500 text-sm">LBS Institute of Technology for Women</p>
            </div>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">2022 - Present</span>
          </div>
        </div>
        <div className="p-4 border border-gray-200 rounded-lg">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-medium text-gray-800">Higher Secondary Education</h2>
              <p className="text-gray-500 text-sm">Carmel Girls Higher Secondary School</p>
            </div>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">2008 - 2022</span>
          </div>
        </div>
        <div className="pt-4 border-t border-gray-100">
          <h3 className="font-medium text-gray-700 mb-3 text-sm uppercase tracking-wide">Certifications</h3>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li className="flex justify-between items-center">
              <span>Generative AI for All</span>
              <span className="text-xs text-gray-500">Infosys</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Cybersecurity Analyst Job Simulation</span>
              <span className="text-xs text-gray-500">Tata</span>
            </li>
            <li className="flex justify-between items-center">
              <span>Python Programming</span>
              <span className="text-xs text-gray-500">KTU</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export function ExperienceContent() {
  return (
    <div className="p-6 font-sans overflow-y-auto max-h-[400px] bg-white">
      <h1 className="text-xl font-semibold text-gray-800 mb-4">Experience</h1>
      <div className="space-y-4">
        <div className="p-4 border border-gray-200 rounded-lg">
          <div className="flex justify-between items-start mb-3">
            <div>
              <h2 className="font-medium text-gray-800">Mentor</h2>
              <a href="https://insightforinnovation.in/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                Insight For Innovation
              </a>
            </div>
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Dec 2022 - Mar 2023</span>
          </div>
          <ul className="text-gray-600 space-y-2 text-sm">
            <li>• Assisting in educational programs focused on social-emotional learning (SEL)</li>
            <li>• Supporting initiatives for underprivileged children through interactive learning</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export function ProjectsContent() {
  const projects = [
    { name: 'Cluck-o-Clock', link: 'https://v0-cluckoclock.vercel.app/', desc: 'Fun alarm app' },
    { name: 'Droplet', link: 'https://amazing-alfajores-61b61e.netlify.app/', desc: 'Water tracker' },
    { name: 'Tic-Tac-Toe', link: 'https://roaring-blini-15df9c.netlify.app/', desc: 'Classic game' },
    { name: 'Flappy-Bird', link: 'https://abhiramiramadas.github.io/flappy-bird/', desc: 'Browser game' },
    { name: 'Burn-hive', link: '', desc: 'Fitness app' },
    { name: 'Weatherella', link: 'https://github.com/abhiramiramadas/weatherella', desc: 'Weather app' },
  ]

  return (
    <div className="p-6 font-sans overflow-y-auto max-h-[400px] bg-white">
      <h1 className="text-xl font-semibold text-gray-800 mb-4">Projects</h1>
      <div className="grid grid-cols-2 gap-3">
        {projects.map((project) => (
          <a 
            key={project.name} 
            href={project.link || '#'} 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:bg-gray-50 transition-all"
          >
            <h2 className="font-medium text-gray-800">{project.name}</h2>
            <p className="text-gray-500 text-xs mt-1">{project.desc}</p>
            {project.link && (
              <p className="text-blue-600 text-xs mt-2 hover:underline">View Project →</p>
            )}
          </a>
        ))}
      </div>
    </div>
  )
}

export function SkillsContent() {
  const skillCategories = [
    { 
      category: 'Languages & Databases', 
      items: ['TypeScript', 'Python', 'Java', 'JavaScript', 'C', 'C++', 'PHP', 'Dart', 'HTML5', 'CSS3', 'MongoDB', 'MySQL', 'SQLite', 'Oracle DB'],
    },
    { 
      category: 'Frameworks & Libraries', 
      items: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Bootstrap', 'Flutter'],
    },
    { 
      category: 'Tools & Platforms', 
      items: ['Git', 'GitHub', 'VS Code', 'Figma', 'Jupyter', 'Google Cloud', 'Canva', 'Blender', 'Photoshop'],
    },
  ]

  return (
    <div className="p-6 font-sans overflow-y-auto max-h-[400px] bg-white">
      <h1 className="text-xl font-semibold text-gray-800 mb-4">Skills</h1>
      <div className="space-y-5">
        {skillCategories.map((skill) => (
          <div key={skill.category}>
            <h2 className="font-medium text-gray-700 mb-2 text-sm">{skill.category}</h2>
            <div className="flex gap-2 flex-wrap">
              {skill.items.map((item) => (
                <span 
                  key={item} 
                  className="text-xs px-3 py-1.5 bg-gray-100 text-gray-600 rounded-md"
                >
                  {item}
                </span>
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
    <div className="p-6 font-sans overflow-y-auto max-h-[400px] bg-white">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold text-gray-800">Resume</h1>
        <a 
          href="/resume.pdf" 
          download="Abhirami_Ramadas_Resume.pdf"
          className="inline-flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium"
        >
          Download PDF
        </a>
      </div>
      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <iframe 
          src="/resume.pdf" 
          className="w-full h-[350px]"
          title="Resume"
        />
      </div>
    </div>
  )
}

export function ContactContent() {
  return (
    <div className="p-6 font-sans overflow-y-auto max-h-[400px] bg-white">
      <h1 className="text-xl font-semibold text-gray-800 mb-4">Contact</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="border border-gray-200 rounded-lg p-4">
          <h2 className="font-medium text-gray-700 mb-3 text-sm">Send a Message</h2>
          <form className="space-y-3">
            <input type="text" placeholder="Your Name" className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 text-sm" />
            <input type="email" placeholder="Your Email" className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 text-sm" />
            <textarea placeholder="Your Message" rows={3} className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-gray-400 resize-none text-sm" />
            <button className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm font-medium">
              Send Message
            </button>
          </form>
        </div>
        <div className="border border-gray-200 rounded-lg p-4">
          <h2 className="font-medium text-gray-700 mb-3 text-sm">Get in Touch</h2>
          <div className="space-y-3">
            <a href="mailto:abhiramiramadas2004@gmail.com" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <p className="text-gray-400 text-xs">Email</p>
              <p className="text-gray-700 text-sm">abhiramiramadas2004@gmail.com</p>
            </a>
            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-gray-400 text-xs">Location</p>
              <p className="text-gray-700 text-sm">Trivandrum, Kerala</p>
            </div>
            <a href="https://github.com/abhiramiramadas" target="_blank" rel="noopener noreferrer" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <p className="text-gray-400 text-xs">GitHub</p>
              <p className="text-gray-700 text-sm">github.com/abhiramiramadas</p>
            </a>
            <a href="https://www.linkedin.com/in/abhiramiramadas/" target="_blank" rel="noopener noreferrer" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <p className="text-gray-400 text-xs">LinkedIn</p>
              <p className="text-gray-700 text-sm">linkedin.com/in/abhiramiramadas</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export function HomeContent() {
  return (
    <div className="p-6 font-sans text-center bg-white">
      <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-sm relative border border-gray-200">
        <Image src="/profile.jpg" alt="Abhirami Ramadas" fill className="object-cover" />
      </div>
      <h1 className="text-xl font-semibold text-gray-800 mb-1">Welcome!</h1>
      <p className="text-gray-600 mb-1 text-sm">
        Hi, I am <span className="font-medium">Abhirami Ramadas</span>
      </p>
      <p className="text-gray-500 mb-6 text-sm">
        IT Engineering Student passionate about building things for the web.
      </p>
      
      <div className="flex justify-center gap-3 mb-6">
        <a href="https://www.linkedin.com/in/abhiramiramadas/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-[#0077B5] text-white rounded-lg hover:bg-[#006699] transition-colors text-sm">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          LinkedIn
        </a>
        <a href="https://github.com/abhiramiramadas" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors text-sm">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
          GitHub
        </a>
        <a href="mailto:abhiramiramadas2004@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors text-sm">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
          Email
        </a>
      </div>

      <p className="text-gray-500 text-sm">
        Double-click icons to explore my portfolio
      </p>
    </div>
  )
}
