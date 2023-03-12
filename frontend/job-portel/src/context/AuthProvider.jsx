import { useState } from "react";
import AuthContext from "./AuthContext";

function AuthProvider(props) {
  const [authState, setAuthState] = useState({
    authenticated: false,
    token: null,
    name: null,
    id: null
  });

  const login = (token, name, id) => {
    setAuthState({ authenticated: true, token: token, name:name, id:id });
  };

  const logout = () => {
    setAuthState({ authenticated: false, token: null, name: null, id: null });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

