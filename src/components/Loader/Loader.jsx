import { Spinner } from 'react-bootstrap';

const Loader = ({ size = 'md', variant = 'primary', text = 'Loading...' }) => {
  const spinnerSize = size === 'sm' ? 'sm' : undefined;

  return (
    <div className="spinner-container">
      <div className="text-center">
        <Spinner animation="border" variant={variant} size={spinnerSize} />
        {text && <div className="mt-3 text-muted">{text}</div>}
      </div>
    </div>
  );
};

export default Loader;
