
import React from 'react'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <div className="not-found-content">
          <h1 className="not-found-title">404</h1>
          <div className="not-found-text">
            <h2 className="not-found-subtitle">Page Not Found</h2>
            <p className="not-found-description">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          <a href="/" className="not-found-button">
            <span className="back-icon">←</span>
            Return to Homepage
          </a>
        </div>
      </div>
    </div>
  )
}

export default NotFound
