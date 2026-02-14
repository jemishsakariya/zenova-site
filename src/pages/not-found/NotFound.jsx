import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Container className="d-flex align-items-center justify-content-center min-vh-100 min-vw-100">
      <div className="text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="fs-3">
          <span className="text-danger">Oops!</span> Page not found.
        </p>
        <p className="lead">The page you're looking for doesn't exist.</p>
        <Button variant="primary" onClick={() => navigate('/')}>
          Go To Home
        </Button>
      </div>
    </Container>
  );
};

export default NotFound;
