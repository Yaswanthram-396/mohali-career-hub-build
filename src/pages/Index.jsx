
import React from 'react'
import HeroSection from '../components/HeroSection'
import './Index.css'

const Index = () => {
  return (
    <div className="page-index">
      <HeroSection />
      
      {/* About Section */}
      <section className="about-section">
        <div className="container">
          <div className="about-content">
            <h2 className="section-title">About EarlyJobs Mohali</h2>
            <p className="section-description">
              EarlyJobs is an AI-enabled, human-backed recruitment platform that bridges the gap 
              between talented individuals and growing companies. Our Mohali franchise supports 
              the industrial and educational strengths of the city, including IT, biotech, and 
              manufacturing sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title text-center">Why Choose EarlyJobs Mohali?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon student-icon">🎓</div>
              <h3>For Students</h3>
              <ul>
                <li>Apply for verified internships and job roles in Mohali</li>
                <li>Resume review and career guidance</li>
                <li>Weekly job alerts and walk-in interview updates</li>
              </ul>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon college-icon">🏫</div>
              <h3>For Colleges</h3>
              <ul>
                <li>Drive campus hiring through EarlyJobs platform</li>
                <li>Track student placements and progress</li>
                <li>Partner on local skill-development initiatives</li>
              </ul>
            </div>
            
            <div className="benefit-card">
              <div className="benefit-icon employer-icon">🏢</div>
              <h3>For Employers</h3>
              <ul>
                <li>Hire locally for roles in IT, logistics, biotech, sales</li>
                <li>Screened candidate pool from across Mohali and nearby areas</li>
                <li>Fast turnaround and zero subscription cost</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section">
        <div className="container">
          <h2 className="section-title text-center">How It Works</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Register</h3>
              <p>Sign up on the EarlyJobs Mohali portal with your details</p>
            </div>
            
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Upload</h3>
              <p>Submit your resume or post your job requirements</p>
            </div>
            
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Get Matched</h3>
              <p>Get matched, interviewed, and placed through our platform</p>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Capture Form */}
      <section id="lead-capture" className="lead-capture-section">
        <div className="container">
          <div className="form-container">
            <h2 className="form-title">Connect with EarlyJobs Mohali</h2>
            <p className="form-description">
              Ready to take the next step in your career or hiring journey?
            </p>
            
            <form className="lead-form">
              <div className="form-row">
                <input type="text" placeholder="Full Name" className="form-input" required />
                <input type="email" placeholder="Email Address" className="form-input" required />
              </div>
              <div className="form-row">
                <input type="tel" placeholder="Mobile Number" className="form-input" required />
                <select className="form-input" required>
                  <option value="">Choose Role</option>
                  <option value="student">Student</option>
                  <option value="college">College</option>
                  <option value="employer">Employer</option>
                </select>
              </div>
              <input type="hidden" value="Mohali" name="city" />
              <button type="submit" className="form-submit-btn">
                Connect with EarlyJobs Mohali
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title text-center">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Is EarlyJobs Mohali open for walk-ins?</h3>
              <p>Yes, we welcome walk-ins during business hours. Please call ahead to schedule an appointment.</p>
            </div>
            
            <div className="faq-item">
              <h3>Which sectors are covered here?</h3>
              <p>We specialize in IT, biotech, manufacturing, sales, and logistics sectors in the Mohali region.</p>
            </div>
            
            <div className="faq-item">
              <h3>Can I register if I'm from Chandigarh or Panchkula?</h3>
              <p>Absolutely! We serve the entire tricity area including Chandigarh, Mohali, and Panchkula.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>EarlyJobs Mohali</h3>
              <p>Your trusted partner in career growth and hiring solutions.</p>
            </div>
            
            <div className="footer-section">
              <h4>Contact</h4>
              <p>📧 mohali@earlyjobs.in</p>
              <p>📞 +91 98765 43210</p>
              <p>📍 Sector 80, Mohali, Punjab</p>
            </div>
            
            <div className="footer-section">
              <h4>Quick Links</h4>
              <p><a href="#about">About Us</a></p>
              <p><a href="#services">Services</a></p>
              <p><a href="#contact">Contact</a></p>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 EarlyJobs Mohali. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
