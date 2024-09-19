import { useSession, signIn, signOut } from "next-auth/react"

const Button = () => {
    return (
      <button className="h-12 rounded-lg bg-white font-bold px-5" onClick={() => window.location.href = 'http://localhost:3000/api/auth/signin'}>Sign In</button>
    );
  };
  
  export default Button;