// root.js

function WelcomeMessagesTitle() {
    return <p>Welcome Messages</p>
  }
  
function WelcomeMessage(props) {
    return <li>Welcome {props.name} from {props.country}</li>
  }
/*
  function WelcomeMessageTom() {
    return <li>Welcome Tom from Singapore</li>
  }
  
  function WelcomeMessageJerry() {
    return <li>Welcome Jerry from Malaysia</li>
  }
  
  function WelcomeMessageSarah() {
    return <li>Welcome Sarah from Indonesia</li>
  }
  */

  //Imagine API call to get users
  const users = [
    { name: 'Tom', country: 'Singapore' },
    { name: 'Jerry', country: 'Malaysia' },
    { name: 'Sarah', country: 'Indonesia' }
  ];

  function WelcomeMessagesList() {
    return <ul>
        {users.map((user) => <WelcomeMessage key={user.name} name={user.name} country={user.country} />)}
    </ul>
  }
  
  function WelcomeMessagesSection() {
    return <div>
      <WelcomeMessagesTitle />
      <WelcomeMessagesList />
    </div>
  }
  
  function App() {
    return <div>
      <WelcomeMessagesSection />
    </div>
  }
  
  const domContainer = document.getElementById('root');
  const root = ReactDOM.createRoot(domContainer);
  root.render(<App />)




