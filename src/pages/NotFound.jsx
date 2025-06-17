
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home } from "lucide-react";
import { Link } from "react-router-dom";
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <div className="notfound-text">
          <h1 className="notfound-title">404</h1>
          <h2 className="notfound-subtitle">Page Not Found</h2>
          <p className="notfound-description">
            Sorry, the page you are looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="notfound-actions">
          <Link to="/">
            <Button className="notfound-button notfound-button-primary">
              <Home className="notfound-button-icon" />
              Go Home
            </Button>
          </Link>
          <Button 
            variant="outline" 
            onClick={() => window.history.back()}
            className="notfound-button notfound-button-secondary"
          >
            <ArrowLeft className="notfound-button-icon" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
