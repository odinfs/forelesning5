import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

function FrontPage() {
  return (
    <div>
      <h1>Welcome to my awesome site, you bastard!</h1>
      <ul>
        <li>
          <Link to={"Login"}>Login</Link>
        </li>
      </ul>
    </div>
  );
}

function Login() {
  return (
    <from>
      <h1>Login</h1>
      <div>
        Username <input />
      </div>
      <div>
        Password <input type={"password"} />
      </div>
      <div>
        <button>Login</button>
      </div>
    </from>
  );
}

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<FrontPage />} />
        <Route path={"/login"} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDom.render(<Application />, document.getElementById("app"));
