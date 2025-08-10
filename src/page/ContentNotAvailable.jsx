import React from "react";
import { useNavigate } from "react-router";

function ContentNotAvailable() {
  const navigate = useNavigate();

  return (
  <div 
  style={{ 
    minHeight: '100vh',
    background: 'linear-gradient(90deg, rgb(84, 6, 84), rgb(204, 13, 133) 50%, rgb(84, 6, 84) 100%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    padding: '20px'
  }}
>
  <div style={{
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(10px)',
    padding: '40px',
    borderRadius: '15px',
    maxWidth: '600px',
    width: '90%',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  }}>
    <h2 style={{
      fontSize: '2.5rem',
      marginBottom: '20px',
      fontWeight: '700',
      color: 'white'
    }}>
      Content Not Available
    </h2>
    
    <p style={{
      fontSize: '1.2rem',
      marginBottom: '30px',
      opacity: '0.9'
    }}>
      The page you're looking for is currently unavailable or doesn't exist.
    </p>
    
    <button
      onClick={() => navigate("/")}
      style={{
        padding: '12px 30px',
        fontSize: '1rem',
        cursor: 'pointer',
        backgroundColor: 'white',
        color: 'rgb(84, 6, 84)',
        border: 'none',
        borderRadius: '50px',
        fontWeight: '600',
        transition: 'all 0.3s ease',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
        marginTop: '10px'
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = 'white';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      Go to Home
    </button>
  </div>
</div>
  );
}

export default ContentNotAvailable;
