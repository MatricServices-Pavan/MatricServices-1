import React, { useState, useEffect } from 'react';
import theme from '../../theme'

// Simple and clean animation keyframes
const slideInUp = `
  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const bounceIn = `
  @keyframes bounceIn {
    0% {
      opacity: 0;
      transform: scale(0.3);
    }
    50% {
      opacity: 1;
      transform: scale(1.05);
    }
    70% {
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const shimmer = `
  @keyframes shimmer {
    0% {
      background-position: -200px 0;
    }
    100% {
      background-position: calc(200px + 100%) 0;
    }
  }
`;

// Just one simple floating animation
const gentleFloat = `
  @keyframes gentleFloat {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-5px);
    }
  }
`;

const services = [
  {
    category: "Mobile App Development",
    badge: "Most Popular",
    color: "#4CAF50",
    services: [
      "iOS App Development (Swift, Objective-C)",
      "Android App Development (Kotlin, Java)",
      "Cross-Platform Development (React Native, Flutter)",
      "Progressive Web Apps (PWA)",
      "Hybrid App Development"
    ]
  },
  {
    category: "UI/UX Design",
    badge: "Creative",
    color: "#2196F3",
    services: [
      "Mobile App UI/UX Design",
      "Wireframing & Prototyping",
      "User Research & Testing",
      "Design System Creation",
      "Brand Identity Integration"
    ]
  },
  {
    category: "Backend Development",
    badge: "Technical",
    color: "#FF9800",
    services: [
      "RESTful API Development",
      "Database Design & Management",
      "Cloud Integration (AWS, Firebase)",
      "Authentication & Security",
      "Real-time Features (Chat, Notifications)"
    ]
  },
  {
    category: "Specialized Solutions",
    badge: "Advanced",
    color: "#9C27B0",
    services: [
      "E-commerce Mobile Apps",
      "Social Media Applications",
      "IoT Mobile Integration",
      "AR/VR Mobile Experiences",
      "Enterprise Mobile Solutions"
    ]
  },
  {
    category: "Quality Assurance",
    badge: "Essential",
    color: "#F44336",
    services: [
      "Manual & Automated Testing",
      "Performance Optimization",
      "Security Testing & Compliance",
      "Device Compatibility Testing",
      "App Store Optimization (ASO)"
    ]
  },
  {
    category: "Maintenance & Support",
    badge: "Ongoing",
    color: "#607D8B",
    services: [
      "24/7 Technical Support",
      "Regular Updates & Patches",
      "Performance Monitoring",
      "Bug Fixes & Improvements",
      "Feature Enhancement"
    ]
  }
];

const AppServices = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  useEffect(() => {
    // Simple stagger effect
    services.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards(prev => [...prev, index]);
      }, index * 100);
    });
  }, []);

  return (
    <>
      <style>{slideInUp}</style>
      <style>{bounceIn}</style>
      <style>{shimmer}</style>
      <style>{gentleFloat}</style>
      
      <div style={{
        width: '100%',
        margin: '2rem 0 2rem 0',
        padding: '3rem 0 3rem 0',
        backgroundColor: theme.colors.thirty,
      }}
        >
        <div style={{
          maxWidth: '1200px',
          width: '95%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          fontFamily: 'system-ui, -apple-system, sans-serif',
          margin: '0 auto'
        }}>
          {/* Header - keeping original but with gentle float */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginBottom: '4rem'
          }}>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 5vw, 3rem)',
              fontWeight: '700',
              animation: 'slideInUp 1s ease-out, gentleFloat 4s ease-in-out infinite 2s',
              marginBottom: '1rem'
            }}>
              Our Service Offerings
            </h2>
            
            <div style={{
              width: '80px',
              height: '4px',
              background: '#4CAF50',
              borderRadius: '20px',
              animation: 'bounceIn 1s ease-out 0.2s both',
              marginBottom: '2rem'
            }} />
            
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              color: '#666',
              maxWidth: '800px',
              lineHeight: '1.8',
              textAlign: 'center',
              animation: 'slideInUp 1s ease-out 0.4s both'
            }}>
              From concept to deployment and beyond, we offer comprehensive mobile app development services tailored to your business needs.
            </p>
          </div>

          {/* Services Grid - simple and clean */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem',
            width: '100%'
          }}>
            {services.map((service, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  padding: '1.5rem',
                  borderRadius: '20px',
                  boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                  border: '1px solid #f0f0f0',
                  position: 'relative',
                  overflow: 'hidden',
                  opacity: visibleCards.includes(index) ? 1 : 0,
                  transform: visibleCards.includes(index) ? 'translateY(0)' : 'translateY(50px)',
                  transition: 'all 0.6s ease',
                  cursor: 'pointer',
                  animation: visibleCards.includes(index) 
                    ? `slideInUp 0.8s ease-out ${0.15 * (index + 1)}s both, gentleFloat 6s ease-in-out infinite ${index * 0.5}s`
                    : 'none'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                  // Simple shimmer on hover
                  const shimmerEl = e.currentTarget.querySelector('.shimmer');
                  if (shimmerEl) {
                    shimmerEl.style.left = '100%';
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
                  // Reset shimmer
                  const shimmerEl = e.currentTarget.querySelector('.shimmer');
                  if (shimmerEl) {
                    shimmerEl.style.left = '-100%';
                  }
                }}
              >
                {/* Top colored border */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: service.color,
                  borderRadius: '20px 20px 0 0'
                }} />

                {/* Simple shimmer effect */}
                <div 
                  className="shimmer"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: '-100%',
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                    transition: 'left 0.6s ease',
                    zIndex: 1
                  }} 
                />

                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  position: 'relative',
                  zIndex: 2
                }}>
                  {/* Badge and Category */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    width: '100%'
                  }}>
                    <span style={{
                      background: service.color,
                      color: 'white',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.75rem',
                      fontWeight: '600'
                    }}>
                      {service.badge}
                    </span>
                  </div>

                  <h3 style={{
                    fontSize: 'clamp(1.2rem, 3vw, 1.4rem)',
                    fontWeight: '700',
                    color: '#2D3748',
                    lineHeight: '1.3'
                  }}>
                    {service.category}
                  </h3>

                  {/* Services List */}
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem'
                  }}>
                    {service.services.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        style={{
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.75rem',
                          transition: 'transform 0.2s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateX(5px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateX(0)';
                        }}
                      >
                        <div style={{
                          width: '6px',
                          height: '6px',
                          background: service.color,
                          borderRadius: '50%',
                          marginTop: '0.5rem',
                          flexShrink: 0
                        }} />
                        <span style={{
                          fontSize: 'clamp(0.85rem, 2vw, 0.95rem)',
                          color: '#4A5568',
                          lineHeight: '1.6',
                          flex: 1
                        }}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppServices;