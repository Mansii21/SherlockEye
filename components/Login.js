import {supabase} from "../Services/supabaseClient"
import loading from "../components/loading"
import {useEffect, useState} from "react"
const style={
  wrapper:'flex min-h-screen flex-col items-center justify-center space-y-2',
  loginBtn:'group flex items-center space-x-4 rounded-border-gray-300 p-4 hover:bg-white',
  loginBtnText:'font-bold group-hover:text-black'
}

const Login=()=>{
  useEffect(()=>{
    const {user}=supabase.auth.session ||{user:null}
    console.log(user)
    // const user = supabase.auth.session?.user || null;
    // console.log(user);
  },[])
  const signInWithGoogle=async()=>{
    console.log("click ho rha")
    try{
      await supabase.auth.signInWithOAuth(
        {
          provider:'google'
        }
      )
      console.log(user,"yeahhhh")
    }catch(error){
      console.error(error)
    }
    console.log("click ho rha");

    // try {
    //   console.log("supabase:", supabase); // Check if supabase is initialized correctly
    //   console.log("supabase.auth:", supabase.auth); // Check if supabase.auth exists
    //   const { user, session, error } = await supabase.auth.signInWithOAuth({ provider: 'google' });
    //   console.log("user:", user);
    //   console.log("session:", session);
    //   console.log("error:", error);
    // } catch (error) {
    //   console.error(error);
    // }
  }
  return(
    <div className={style.wrapper}>
      <img className="h-52"
        src=""
        />
      <button 
        onClick={signInWithGoogle}
        className={style.loginBtn}>
      <img className="h-6 w-6"
        src=""
        />
        <span className={style.loginBtnText}>Sign in with Google
        </span>
      </button>
      {/* <h1>Login</h1> */}
    </div>
  )
}
export default Login
// import { supabase } from "../Services/supabaseClient";
// import { useState } from "react";

// const style = {
//   wrapper: 'flex min-h-screen flex-col items-center justify-center space-y-2',
//   loginBtn: 'group flex items-center space-x-4 rounded-border-gray-300 p-4 hover:bg-white',
//   loginBtnText: 'font-bold group-hover:text-black'
// };

// const Login = () => {
//   const signInWithGoogle = async () => {
//     console.log("click ho rha");

//     try {
//       console.log("supabase:", supabase); // Check if supabase is imported correctly
//       console.log("supabase.auth:", supabase.auth); // Check if supabase.auth exists and its structure
//       const { user } = await supabase.auth.signIn({ provider: 'google' });
//       console.log("user:", user);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className={style.wrapper}>
//       <img className="h-52" src="" alt="Logo" />
//       <button onClick={signInWithGoogle} className={style.loginBtn}>
//         <img className="h-6 w-6" src="" alt="Google Icon" />
//         <span className={style.loginBtnText}>Sign in with Google</span>
//       </button>
//     </div>
//   );
// };

// export default Login;