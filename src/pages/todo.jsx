import TopNavbar from "../components/Navbar";
import ToDoIndex from "../components/ToDo/ToDoIndex";
import { useState, useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "../lib/supabaseClient";
import Link from "next/link";
import Image from "react-bootstrap/Image";

const ToDoPage = () => {
  const [session, setSession] = useState(null);
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const {
      data: {},
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const redirectUrl = `${process.env.NEXT_PUBLIC_BASE_URL}todo`;
  const avatarUrl = session?.user?.user_metadata?.avatar_url || "";

  const email = session?.user?.email || session?.user?.user_metadata?.full_name;
  const emailHash = encodeURIComponent(email);
  const options = `seed=${emailHash}`;
  const defaultImage = encodeURIComponent(
    `https://api.dicebear.com/9.x/lorelei/png/${encodeURIComponent(options)}`
  );

  const gravatarImage = `https://www.gravatar.com/avatar/${emailHash}?d=${defaultImage}`;

  return (
    <>
      <TopNavbar />
      {session ? (
        <>
          <div className="authenticated-user">
            <div className="user-avatar-container">
              {avatarUrl ? (
                <Image
                  src={avatarUrl}
                  alt={
                    session.user.user_metadata?.full_name || session.user?.email
                  }
                  className="user-avatar"
                />
              ) : (
                <Image
                  src={gravatarImage}
                  alt={
                    session.user.user_metadata?.full_name || session.user?.email
                  }
                  className="user-avatar"
                />
              )}

              <Link href="/full-list-history">
                {session.user.user_metadata.user_name || session.user.email}
              </Link>
            </div>
            <button
              onClick={async () => await supabase.auth.signOut()}
              className="logout-button"
            >
              Log Out
            </button>
          </div>
          <ToDoIndex user={session.user} />
        </>
      ) : (
        <div className="supabase-auth">
          <h2>Sign In</h2>
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              style: {
                button: { background: "darkred", color: "white" },
                anchor: { color: "darkred" },
              },
            }}
            providers={["github"]}
            providerScopes={{
              github: "read:user user:email",
            }}
            redirectTo={redirectUrl}
          />
        </div>
      )}
    </>
  );
};

export default ToDoPage;
