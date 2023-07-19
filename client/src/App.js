import { GoogleOAuthProvider } from '@react-oauth/google';

//Components
import Messenger from "./components/messenger";
import AccountProvider from './context/AccountProvider';

function App() {

  const clientId = '549452593906-t4b4ucp3t2lok63enjb73p5d0kohr1fn.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;