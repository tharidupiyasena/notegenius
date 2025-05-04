


import { Link } from 'react-router-dom';

const features = [
  { title: "Add Manual Note", icon: "➕", path: "/manual-note" },
  { title: "Voice to Note", icon: "🎤", path: "/voice-to-text" },
  { title: "Image to Note", icon: "🖼️", path: "/image-to-text" },
  { title: "Summarizer", icon: "🧠", path: "/summarizer" },
  { title: "MCQ Generator", icon: "❓", path: "/mcq-generator" },
];

const Home = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Hello, User</h1>
      <hr style={styles.divider} />
      <div style={styles.cardContainer}>
        {features.map((feature, index) => (
          <Link to={feature.path} key={index} style={styles.card}>
            <div style={styles.icon}>{feature.icon}</div>
            <div>{feature.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#0e0e0e',
    color: 'white',
    minHeight: '100vh',
  },
  heading: {
    color: '#4287f5',
    fontSize: '2.5rem',
    fontWeight: 'bold',
  },
  divider: {
    margin: '1rem 0',
    border: '1px solid #ccc',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.5rem',
  },
  card: {
    background: 'linear-gradient(145deg, #1a1a1a, #111)',
    color: 'white',
    padding: '2rem',
    borderRadius: '12px',
    textAlign: 'center',
    textDecoration: 'none',
    width: '200px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
    transition: 'transform 0.2s',
  },
  icon: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
};

export default Home;
