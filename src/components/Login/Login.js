import { useEffect, useState } from "react";
import Authorization from "../../utils/authorization";
import "./Login.css";
import App from "../App/App";

function Login() {
  const [token, setToken] = useState(null);
  const [code, setCode] = useState(null);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const codeFromUrl = searchParams.get("code");

    if (codeFromUrl && !code) {
      setCode(codeFromUrl);
    } else if (!codeFromUrl && !token) {
      Authorization.redirectToSpotifyAuthorize();
    }
  }, [code, token]);

  useEffect(() => {
    if (code && !token) {
      Authorization.getToken(code)
        .then((access_token) => {
          setToken(access_token);
        })
        .catch((error) => {
          console.error("Error getting Spotify token:", error);
        });
    }
  }, [code, token]);

  const LoginDetails = function () {
    if (token) {
      return <App token={token} />;
    } else {
      return (
        <div className="app-login">
          <p> Authorization with Spotify...</p>
        </div>
      );
    }
  };

  return <LoginDetails />;
}

export default Login;
