
import React from 'react'
import './HeroSection.css'

const HeroSection = () => {
  const scrollToLeadForm = () => {
    document.getElementById('lead-capture')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-pattern"></div>
      </div>
      <div className="hero-content">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text">
              <div className="hero-badge">
                <span className="badge-icon">📍</span>
                Mohali's Trusted Recruitment Partner
              </div>
              <h1 className="hero-title">
                EarlyJobs 
                <span className="hero-title-highlight">Mohali</span>
              </h1>
              <p className="hero-subtitle">
                Your Local Partner in Hiring and Career Growth
              </p>
              <p className="hero-description">
                Connecting Mohali's job-ready talent with the region's fastest-growing 
                industries and employers across IT, biotech, and manufacturing sectors.
              </p>
              
              <button className="hero-cta-button" onClick={scrollToLeadForm}>
                Start with EarlyJobs Mohali
                <span className="arrow-icon">→</span>
              </button>

              <div className="hero-stats">
                <div className="stats-avatars">
                  <div className="avatar"></div>
                  <div className="avatar"></div>
                  <div className="avatar"></div>
                  <div className="avatar"></div>
                </div>
                <div className="stats-text">
                  <p className="stats-number">500+ Students Placed</p>
                  <p className="stats-period">This Year</p>
                </div>
              </div>
            </div>
            
            <div className="hero-image">
              <div className="image-glow"></div>
              <img 
                src="https://i.ibb.co/N2xbPqKn/Resume-folder-pana.png" 
                alt="Mohali professionals"
                className="hero-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
