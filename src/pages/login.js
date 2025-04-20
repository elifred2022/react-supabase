import { useState } from "react";
import { supabase } from "../supabase/client";

function Login() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await supabase.auth.signInWithOtp({
        email: email,
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          placeholder="escribi tu email"
        />
        <button>Send</button>
      </form>
    </div>
  );
}

export default Login;
