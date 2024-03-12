// import {createContext,useEffect,useState} from 'react'
// import {supabase} from '../Services/supabaseClient'
// export const SherlockContext=createContext();

// export const SherlockProvider=({children})=>{
//   const [currentUser,setCurrentUser]=useState(null)
//   const fetcher = async (...args) => fetch(...args).then(
//     res=>res.json()
//   )
//   }
//   useEffect(()=>{
//     const {user}=supabase.auth.session ||{user:null}
//     setCurrentUser(user)
//     console.log({user},{context:"HI"})
//     supabase.auth.onAuthStateChange((_event,session)=>{
//       setCurrentUser(session?.user)
//     })
//     // const user = supabase.auth.session?.user || null;
//     // console.log(user);
//   },[])
//   return(
//     <SherlockContext.Provider
//       value={{
//         currentUser,
//         fetcher
//       }}>{children}</SherlockContext.Provider>
//   )
// }
import {createContext,useEffect,useState} from 'react'
import {supabase} from '../Services/supabaseClient'
export const SherlockContext=createContext();

export const SherlockProvider=({children})=>{
  const [currentUser,setCurrentUser]=useState(null)
  const fetcher = async (...args) => fetch(...args).then(
    res=>res.json()
  )

  useEffect(()=>{
    const {user}=supabase.auth.session ||{user:null}
    setCurrentUser(user)
    console.log({user},{context:"HI"})
    supabase.auth.onAuthStateChange((_event,session)=>{
      setCurrentUser(session?.user)
    })
    // const user = supabase.auth.session?.user || null;
    // console.log(user);
  },[])

  return(
    <SherlockContext.Provider
      value={{
        currentUser,
        fetcher
      }}>{children}</SherlockContext.Provider>
  )
}