import BudgetDetail from "../components/Budget/BudgetDetail";
import { useState, useEffect } from "react";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import supabase from "../lib/supabaseClient";

const OurBudgetPage = () => {
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

  const redirectUrl = `${process.env.NEXT_PUBLIC_BASE_URL}our-budget`;
  const user = session?.user;
  const email = user?.email;
  const hasBudgetAccess =
    email === "jpajuaar@gmail.com" || email === "genericpronoun@gmail.com";
  const name = email === "jpajuaar@gmail.com" ? "Jesse" : "Dani";

  return (
    <>
      <title>J&D Budget App</title>
      {session ? (
        <>
          <div className="budget-authenticated-user d-flex justify-content-between">
            <h1 className="budget-form-title">Welcome, {name}!</h1>

            <button
              onClick={async () => await supabase.auth.signOut()}
              className="budget-logout-button"
            >
              Log Out
            </button>
          </div>
          {hasBudgetAccess && <BudgetDetail user={user} />}
          {!hasBudgetAccess && <div>You do not have access to the budget.</div>}
        </>
      ) : (
        <div className="budget-supabase-auth">
          <h2>Sign In</h2>
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              style: {
                button: { background: "darkteal" },
                anchor: { color: "darkteal" },
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

export default OurBudgetPage;
