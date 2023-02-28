
import React from "react";

import Alert from 'react-bootstrap/Alert';

const AlertBoostrap: React.FC<any> = ({setShowAlert, type, message}) => {
  
      return (
        <>
          <Alert variant={type} dismissible  onClose={() => setShowAlert(false)}>
            {message}
          </Alert>
        </>
      )
}

export default AlertBoostrap;