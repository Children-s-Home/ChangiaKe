import { useState, useEffect } from 'react';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { Session } from '@supabase/supabase-js';

const supabase: SupabaseClient = createClient(
  'https://dqvjzoywrfdqjzwhhnpq.supabase.co/',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRxdmp6b3l3cmZkcWp6d2hobnBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUzNTkzOTEsImV4cCI6MjA0MDkzNTM5MX0.IYW9yDXiBkYCBsTaAKQjT8q0F1HxzcsKzFAxRKOLux8',
);

const UserLogIn = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
  } else {
    return (
      <div>
        <div>I am</div>
        Logged in!
      </div>
    );
  }
};
export default UserLogIn;
