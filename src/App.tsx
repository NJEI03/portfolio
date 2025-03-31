import React, { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, ExternalLink, Code2, Briefcase, User, GraduationCap, Send, ChevronLeft, ChevronRight, Quote, Facebook } from 'lucide-react'
import { supabase } from './lib/supabase'
import profileImage from './assets/profile-B2k7Z9QB-B2k7Z9QB.jpg'
import './App.css'
function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    document.title = 'JonesHub Inc'
  }, [])

  const testimonials = [
    {
      name: "Mbah Hilary",
      role: "Tech Lead at InnovateX",
      content: "Working with Pierrick was an absolute pleasure. His technical expertise and attention to detail made our project a huge success.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
    },
    {
      name: "Michael Che",
      role: "CTO at StartupFlow",
      content: "Pierrick's deep understanding of both frontend and backend technologies helped us deliver a complex application ahead of schedule.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400"
    },
    {
      name: "Emily Zengue",
      role: "Product Manager at TechCorp",
      content: "His ability to translate complex technical concepts into practical solutions makes him an invaluable asset to any development team.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const handleTestimonialChange = (direction: 'prev' | 'next') => {
    setCurrentTestimonial(prev => {
      if (direction === 'prev') {
        return prev === 0 ? testimonials.length - 1 : prev - 1
      }
      return (prev + 1) % testimonials.length
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const { error } = await supabase
        .from('messages')
        .insert([formData])
      
      if (error) throw error
      
      setFormData({ name: '', email: '', message: '' })
      alert('Message sent successfully!')
    } catch (error) {
      console.error('Error sending message:', error)
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section with Profile Image */}
      <header className="container mx-auto px-6 py-16 md:py-32">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">
              NJEI PIERRICK JNR(JJ)
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-400 mb-8">
              Full Stack Developer
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              I craft exceptional digital experiences with clean code and modern design.
              Specialized in React, Node.js, and TypeScript.
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/NJEI03" className="p-2 rounded-full hover:bg-orange-500/10 hover:text-orange-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/njei-pierrick-1a52aa2b8/" className="p-2 rounded-full hover:bg-orange-500/10 hover:text-orange-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            <a href="https://www.facebook.com/profile.php?id=100095500597828" className="p-2 rounded-full hover:bg-orange-500/10 hover:text-orange-400 transition-colors">
              <Facebook className="w-6 h-6" />
            </a>
              <a href="mailto:njeipierrick@gmail.com.com" className="p-2 rounded-full hover:bg-orange-500/10 hover:text-orange-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center animate-fadeInUp">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img
              src={profileImage}
                // src="https://images.unsplash.com/photo-1539701938214-0d9736e1c16b?w=400"
                alt="Profile"
                className="profile-image rounded-full object-cover w-full h-full border-4 border-orange-400 shadow-xl shadow-orange-500/20"
              />
              
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center text-orange-400">
            <Code2 className="mr-2" /> Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((project) => (
              <div key={project} className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 animate-fadeInUp">
                <img 
                  src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60`} 
                  alt="Project Preview" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                  <p className="text-gray-400 mb-4">
                    A full-stack Agro-Marketplace application built with React and Node.js, featuring real-time updates and cloud integration.
                  </p>
                  <div className="flex items-center space-x-2">
                    <a href="#" className="text-orange-400 hover:text-orange-300 flex items-center">
                      View Project <ExternalLink className="ml-1 w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center text-orange-400">
            <Quote className="mr-2" /> Testimonials
          </h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
              >
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="w-full flex-shrink-0 px-4"
                  >
                    <div className="bg-gray-800 p-8 rounded-lg text-center">
                      <div className="w-20 h-20 mx-auto mb-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <blockquote className="text-lg text-gray-300 italic mb-6">
                        "{testimonial.content}"
                      </blockquote>
                      <cite className="not-italic">
                        <div className="font-semibold text-orange-400">{testimonial.name}</div>
                        <div className="text-sm text-gray-400">{testimonial.role}</div>
                      </cite>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => handleTestimonialChange('prev')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gray-900 p-2 rounded-full hover:bg-orange-500/10 hover:text-orange-400 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => handleTestimonialChange('next')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gray-900 p-2 rounded-full hover:bg-orange-500/10 hover:text-orange-400 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentTestimonial === index ? 'bg-orange-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center text-orange-400">
            <Briefcase className="mr-2" /> Experience
          </h2>
          <div className="space-y-8">
            <div className="bg-gray-900 p-6 rounded-lg hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 animate-fadeInUp">
              <h3 className="text-xl font-semibold">Junior Developer</h3>
              <p className="text-gray-400">SEED Inc 2024 - Presnt</p>
              <p className="mt-4 text-gray-300">
              Participated development of multiple high-impact projects,
                and implemented modern development practices.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 animate-fadeInUp animate-delay-100">
              <h3 className="text-xl font-semibold">Frontend Developer</h3>
              <p className="text-gray-400">Traitz-Tech 2022- 2023</p>
              <p className="mt-4 text-gray-300">
                Developed and maintained my first portfolio website.
                Improved application performance by 40%.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center text-orange-400">
            <User className="mr-2" /> Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['React', 'Node.js', 'TypeScript', 'PostgreSQL'].map((skill, index) => (
              <div 
                key={skill} 
                className={`bg-gray-800 p-4 rounded-lg text-center hover:bg-orange-500/10 hover:text-orange-400 transition-all duration-300 animate-fadeInUp animate-delay-${index * 100}`}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="bg-gray-800 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center text-orange-400">
            <GraduationCap className="mr-2" /> Education
          </h2>
          <div className="bg-gray-900 p-6 rounded-lg hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 animate-fadeInUp">
            <h3 className="text-xl font-semibold">Bachelor of Computer Science</h3>
            <p className="text-gray-400"> University of Bamenda 2023 • present</p>
            <p className="mt-4 text-gray-300">
              Graduated with honors. Specialized in Software Engineering and Artificial Intelligence.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 flex items-center text-orange-400">
            <Mail className="mr-2" /> Get in Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6 animate-fadeInUp">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-400 focus:ring focus:ring-orange-400/20 focus:outline-none transition-colors"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-400 focus:ring focus:ring-orange-400/20 focus:outline-none transition-colors"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-orange-400 focus:ring focus:ring-orange-400/20 focus:outline-none transition-colors"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button
                type="submit"
                className="flex items-center justify-center w-full px-6 py-3 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="ml-2 w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-400">
          <p>© 2025 JonesHub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App