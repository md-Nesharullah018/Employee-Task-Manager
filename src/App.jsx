

import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDash from "./components/Dashboard/EmployeeDash";
import AdminDash from "./components/Dashboard/AdminDash";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData] = useContext(AuthContext);

  // Restore login after refresh
  useEffect(() => {
    const stored = localStorage.getItem("loggedInUser");

    if (stored && userData.length) {
      const parsed = JSON.parse(stored);
      setUser(parsed.role);

      if (parsed.role === "employee") {
        const employee = userData.find(
          (e) => e.email === parsed.email
        );
        setLoggedInUserData(employee);
      }
    }
  }, [userData]);

  const handleLogin = (email, password) => {
    // ADMIN LOGIN
    if (email === "admin@me.com" && password === "123") {
      setUser("admin");
      localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ role: "admin" })
      );
      return;
    }

    // EMPLOYEE LOGIN
    if (userData.length) {
      const employee = userData.find(
        (e) => e.email === email && e.password === password
      );

      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({
            role: "employee",
            email: employee.email //store identifier only
          })
        );
        return;
      }
    }

    // if both case are failed
    alert("Invalid Credentials");
  };

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}

      {user === "admin" && <AdminDash changeUser={setUser} />}

      {user === "employee" && (
        <EmployeeDash changeUser={setUser} data={loggedInUserData} />
      )}
    </>
  );
};

export default App;
