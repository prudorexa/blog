import { useLocation } from "react-router-dom";

export default function ErrorPage() {
  const location = useLocation();
  const error = location.state && location.state.error;

  return (
    <div id="error-page" >
      <h1 className="color-blue-500 align-text-centre font-family-20px">Oops!</h1>
      <p className="align-content-center ">Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error ? error.message : "Not Found!"}</i>
      </p>
    </div>
  );
}
