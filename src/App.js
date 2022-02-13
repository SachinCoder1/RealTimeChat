import Home from "./components/home/Home";
import Login from "./components/login/Login";
import AccountProvider from "./context/AccountProvider";
import UserProvider from "./context/UserProvider";

function App() {
  return (
    <>
      <UserProvider>

        <AccountProvider>
          <Home />
        </AccountProvider>
      </UserProvider>
    </>
  );
}

export default App;
