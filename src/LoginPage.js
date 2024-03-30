import React from 'react';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports'; // Path to your aws-exports file

Amplify.configure(awsExports);

function LoginPage() {
  return (
    <div className="App-header"> 
      <Authenticator>
        {({ signOut, user }) => (
          <div>
            <h1>Welcome, {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </div>
        )}
      </Authenticator>
    </div>
  );
}

export default LoginPage;
