import { FaExclamationCircle } from 'react-icons/fa';

const ErrorMessage = ({ message = "Something went wrong." }) => {
  const containerStyle = {
    backgroundColor: '#ffebee',
    color: '#c62828',
    padding: '20px',
    borderRadius: 'var(--border-radius)',
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    margin: '20px 0',
    border: '1px solid #ffcdd2',
  };

  return (
    <div style={containerStyle}>
      <FaExclamationCircle size={24} />
      <p style={{ margin: 0, fontWeight: '500' }}>{message}</p>
    </div>
  );
};

export default ErrorMessage;
