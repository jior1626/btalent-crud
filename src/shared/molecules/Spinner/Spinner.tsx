import Spinner from 'react-bootstrap/Spinner';
import "./Spinner.css"

function Loading() {
  return (
    <div className="loading">
        <Spinner className='size-loading' animation="border" role="status" variant="primary" size="sm">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    </div>
  
  );
}

export default Loading;