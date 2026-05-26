const Loader = ({ message = "Loading..." }) => {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '50px 20px',
    color: 'var(--color-brown)',
  };

  const spinnerStyle = {
    width: '50px',
    height: '50px',
    border: '5px solid var(--color-peach)',
    borderTop: '5px solid var(--color-orange)',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    marginBottom: '20px',
  };

  return (
    <div style={containerStyle}>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
      <div style={spinnerStyle}></div>
      <p style={{ fontWeight: '600' }}>{message}</p>
    </div>
  );
};

export default Loader;
