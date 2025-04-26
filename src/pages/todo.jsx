import TopNavbar from '../components/Navbar';
import ToDoIndex from '../components/ToDo/ToDoIndex';
import { useState, useEffect } from 'react';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import supabase from '../lib/supabaseClient';
import Image from 'react-bootstrap/Image';
import dotenv from 'dotenv';
dotenv.config();

const ToDoPage = () => {
  const [session, setSession] = useState(null);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const redirectUrl = `${process.env.NEXT_PUBLIC_BASE_URL}todo`;

  return (
    <>
      <TopNavbar />
      {session ? (
        <>
          <div className="authenticated-user">
            <div className="user-avatar-container">
              <Image
                src={session.user.user_metadata.avatar_url}
                alt={session.user.user_metadata.full_name || session.user.email}
                className="user-avatar"
              />
              <small>{session.user.user_metadata.user_name || session.user.email}</small>
            </div>
            <button onClick={async () => await supabase.auth.signOut()} className="logout-button">
              Log Out
            </button>
          </div>
          <ToDoIndex user={session.user} />
        </>
      ) : (
        <div className="supabase-auth">
          <h2>Authenticate with Supabase</h2>
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              style: { button: { background: 'darkred', color: 'white' }, anchor: { color: 'darkred' } },
            }}
            providers={['github']}
            providerScopes={{
              github: 'read:user user:email',
            }}
            redirectTo={redirectUrl}
          />
        </div>
      )}
    </>
  );
};

export default ToDoPage;
