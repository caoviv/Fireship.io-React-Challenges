import { useEffect, useState } from "react";

function ErrorBoundary() {
  const [hasError, setHasError] = useState(false);

  useEffect(()=> {
    if (hasError) {
        //Log the error or send it to an error tracking service
        console.error('Error occurred within the ErrorBoundry')
    }
  })
  return (
    <div>
      <h2>Error Boundaries </h2>
    </div>
  );
}

export default ErrorBoundary;
