import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>Privacy Policy</h1>
        <p style={styles.subtext}>Last updated: May 2026</p>
        <div style={styles.divider}></div>

        <section style={styles.section}>
          <h2 style={styles.subHeading}>1. Information We Collect</h2>
          <p style={styles.text}>
            We collect information to provide better services to all our users. This includes 
            information you provide to us, such as your name, email address, and account preferences, 
            as well as automated data like your IP address and device details.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subHeading}>2. How We Use Information</h2>
          <p style={styles.text}>
            The data we collect is used to maintain, protect, and improve our services, 
            as well as to develop new features and protect both our users and our platform.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subHeading}>3. Data Security</h2>
          <p style={styles.text}>
            We work hard to protect our platform and our users from unauthorized access, alteration, 
            disclosure, or destruction of information we hold. Your trust is important to us.
          </p>
        </section>
      </div>
    </div>
  );
};

// UI එක හැඩගැන්වීම සඳහා සරල පිරිසිදු CSS Styles
const styles = {
  container: {
    padding: '40px 20px',
    minHeight: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa', // ඉතා ලා පැහැති පසුබිමක්
  },
  card: {
    maxWidth: '800px',
    width: '100%',
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.05)', // මෘදු හෙවනැල්ලක් (Soft Shadow)
    border: '1px solid rgba(0, 0, 0, 0.05)',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#1a1a1a',
    marginBottom: '8px',
    fontWeight: '700',
  },
  subtext: {
    fontSize: '0.9rem',
    color: '#8c8c8c',
    marginBottom: '24px',
  },
  divider: {
    height: '2px',
    backgroundColor: '#4f46e5', // ප්‍රධාන කැපී පෙනෙන වර්ණය (Indigo)
    width: '60px',
    marginBottom: '32px',
    borderRadius: '2px',
  },
  section: {
    marginBottom: '28px',
  },
  subHeading: {
    fontSize: '1.3rem',
    color: '#2d3748',
    marginBottom: '12px',
    fontWeight: '600',
  },
  text: {
    fontSize: '1rem',
    color: '#4a5568',
    lineHeight: '1.7', // පේළි අතර පරතරය වැඩි කර කියවීමේ පහසුව ඇති කිරීම
  },
};

export default PrivacyPolicy;