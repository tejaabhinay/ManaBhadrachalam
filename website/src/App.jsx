import React from 'react';

function App() {
  // 🔗 We will put your Direct Download link here later
  const apkLink = "https://drive.google.com/uc?id=1nL5mouX9AJPvJtgd3cpu40Ry35ENGkOR&export=download"; 

  return (
    <div style={styles.container}>
      
      {/* 🕉️ HERO SECTION - The Welcome */}
      <header style={styles.header}>
        <div style={styles.overlay}>
          <h1 style={styles.title}>Welcome to Bhadrachalam</h1>
          <p style={styles.subtitle}>
            The Temple City of Lord Rama. <br/>
            Your spiritual journey begins here.
          </p>
          
          <p style={styles.description}>
            We have built a dedicated app to help pilgrims and visitors 
            find the best travel options, timings, and local guides.
          </p>

          {/* ⬇️ The Main Action */}
          <a href={apkLink} style={styles.downloadBtn}>
            Download App (APK) ⬇️
          </a>
          
          <p style={styles.versionInfo}>
            Free for Android • Version 1.0
          </p>
        </div>
      </header>

      {/* 🌿 ABOUT SECTION */}
      <section style={styles.aboutSection}>
        <h2 style={styles.sectionTitle}>Why Download?</h2>
        <p style={styles.text}>
          Bhadrachalam is a place of peace and devotion. Don't let travel stress ruin your experience.
          Our app <b>Mana Bhadrachalam</b> gives you instant access to:
        </p>
        
        <div style={styles.listContainer}>
          <div style={styles.listItem}>Real-time Bus Timings from </div>
          <div style={styles.listItem}> Train Connections & Schedules</div>
          <div style={styles.listItem}>Local Pilgrim Guidance</div>
        </div>
      </section>

      {/* 🦶 FOOTER */}
      <footer style={styles.footer}>
        <p>Jai Shriram </p>
        <p style={{fontSize: '0.8rem', opacity: 0.7}}>© 2025 Mana Bhadrachalam Project</p>
      </footer>
    </div>
  );
}

// 🎨 STYLES (Clean & Spiritual Theme)
const styles = {
  container: {
    fontFamily: "'Segoe UI', sans-serif",
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  header: {
    // A nice saffron/golden gradient representing spirituality
    background: 'linear-gradient(135deg, #ea580c 0%, #c2410c 100%)', 
    color: 'white',
    textAlign: 'center',
    padding: '60px 20px',
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: 'bold',
    marginBottom: '10px',
    textShadow: '0 2px 4px rgba(0,0,0,0.2)',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '30px',
    lineHeight: '1.4',
    fontStyle: 'italic',
  },
  description: {
    fontSize: '1.1rem',
    maxWidth: '600px',
    margin: '0 auto 40px auto',
    lineHeight: '1.6',
    opacity: '0.9',
  },
  downloadBtn: {
    backgroundColor: 'white',
    color: '#c2410c', // Dark Orange text
    fontWeight: 'bold',
    fontSize: '1.2rem',
    padding: '18px 40px',
    borderRadius: '50px',
    textDecoration: 'none',
    boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
    transition: 'transform 0.2s',
    display: 'inline-block',
  },
  versionInfo: {
    marginTop: '15px',
    fontSize: '0.9rem',
    opacity: '0.8',
  },
  aboutSection: {
    padding: '60px 20px',
    textAlign: 'center',
    backgroundColor: '#fff7ed', // Very light orange background
  },
  sectionTitle: {
    color: '#9a3412',
    fontSize: '2rem',
    marginBottom: '20px',
  },
  text: {
    color: '#4b5563',
    maxWidth: '700px',
    margin: '0 auto 30px auto',
    lineHeight: '1.6',
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    alignItems: 'center',
  },
  listItem: {
    backgroundColor: 'white',
    padding: '15px 30px',
    borderRadius: '10px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
    width: '100%',
    maxWidth: '400px',
    color: '#ea580c',
    fontWeight: '500',
  },
  footer: {
    backgroundColor: '#292524', // Dark brown
    color: '#a8a29e',
    textAlign: 'center',
    padding: '30px',
  }
};

export default App;