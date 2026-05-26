const CategoryCard = ({ title, emoji }) => {
  const cardStyle = {
    backgroundColor: 'var(--color-white)',
    padding: '20px',
    borderRadius: 'var(--border-radius)',
    textAlign: 'center',
    cursor: 'pointer',
    boxShadow: 'var(--shadow-sm)',
    transition: 'var(--transition)',
    minWidth: '150px',
    border: '1px solid var(--color-peach)',
  };

  const emojiStyle = {
    fontSize: '2.5rem',
    marginBottom: '10px',
  };

  const titleStyle = {
    color: 'var(--color-brown)',
    fontWeight: '600',
    margin: 0,
  };

  return (
    <div style={cardStyle} className="category-card">
      <div style={emojiStyle}>{emoji}</div>
      <p style={titleStyle}>{title}</p>
    </div>
  );
};

export default CategoryCard;
