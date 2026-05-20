import React from 'react';

const LicenseTerms = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.heading}>License Terms</h1>
        <p style={styles.subtext}>Please read these terms carefully before using our software.</p>
        <div style={styles.divider}></div>

        <div style={styles.alertBox}>
          <strong>Important Notice:</strong> By downloading, installing, or using this application, you agree to be bound by the terms and conditions outlined below.
        </div>

        <section style={styles.section}>
          <h2 style={styles.subHeading}>1. License Grant</h2>
          <p style={styles.text}>
            We grant you a revocable, non-exclusive, non-transferable, limited license to download, 
            install, and use the application strictly in accordance with the terms of this agreement.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subHeading}>2. Restrictions</h2>
          <p style={styles.text}>
            You agree not to license, sell, rent, lease, assign, distribute, transmit, host, outsource, 
            disclose, or otherwise commercially exploit the application or make the platform available to any third party.
          </p>
        </section>

        <section style={styles.section}>
          <h2 style={styles.subHeading}>3. Termination</h2>
          <p style={styles.text}>
            This agreement shall remain in effect until terminated by either you or us. We may, in our 
            sole discretion, at any time and for any or no reason, suspend or terminate this agreement.
          </p>
        </section>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '40px 20px',
    minHeight: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f6f9',
  },
  card: {
    maxWidth: '800px',
    width: '100%',
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.03)',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#0f172a',
    marginBottom: '8px',
    fontWeight: '700',
  },
  subtext: {
    fontSize: '0.95rem',
    color: '#64748b',
    marginBottom: '24px',
  },
  divider: {
    height: '2px',
    backgroundColor: '#0ea5e9', // ලස්සන තද නිල්/කොළ පැහැයක් (Sky Blue)
    width: '60px',
    marginBottom: '24px',
    borderRadius: '2px',
  },
  alertBox: {
    backgroundColor: '#f0fdf4', // ලා කොළ පැහැති පසුබිමක් (Alert Box)
    borderLeft: '4px solid #22c55e',
    padding: '16px',
    borderRadius: '4px',
    color: '#166534',
    marginBottom: '32px',
    fontSize: '0.95rem',
    lineHeight: '1.5',
  },
  section: {
    marginBottom: '28px',
  },
  subHeading: {
    fontSize: '1.3rem',
    color: '#1e293b',
    marginBottom: '12px',
    fontWeight: '600',
  },
  text: {
    fontSize: '1rem',
    color: '#475569',
    lineHeight: '1.7',
  },
};

export default LicenseTerms;