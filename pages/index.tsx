import type { NextPage } from 'next'
import Header from '../components/header'
import Banner from '../components/community/Banner'
import CreatePost from '../components/feed/CreatePost'
import About from '../components/community/About'
import Feed from '../components/feed'
import useSWR from 'swr'
import { useContext, useEffect, useState } from 'react'
import Login from "../components/Login"
import {SherlockContext} from "../context/SherlockContext"
import { supabase } from "../Services/supabaseClient"
const style = {
  wrapper: `flex min-h-screen flex-col bg-black text-white`,
  main: `mx-auto flex w-full max-w-5xl flex-1 space-x-6 py-5 px-6`,
  content: `w-full space-y-4 lg:w-2/3`,
  infoContainer: `hidden w-1/3 lg:block`,
}

const Home: NextPage = () => {
  const {currentUser,fetcher}=useContext(SherlockContext)
  const [myPosts, setMyPosts] = useState([])
  
  const { data, error } = useSWR('/api/get-posts', fetcher,{refreshInterval:200})
   
  console.log(data, "yaaa")
  // const saveAndUpdateUser =async()=>{
  //   if(!currentUser) return 

  //   await supabase.from('users').upsert(
  //     {
  //     // email:currentUser.user_metadata.email,
  //     // name:currentUser.user_metadata.full_name,
  //     // profileImage:currentUser.user_metadata.avatar_url,
  //     email:"mansi@gamnasd",
  //     name:"mansi",
  //     profileImage:"bla bla bla"
  //   },{
  //     // onConflict:"email"
  //   })
  // }
  
  const saveAndUpdateUser = async () => {
      
      if (!currentUser) return;

       await supabase.from('users').upsert({
          email: currentUser.user_metadata.email,
          name: currentUser.user_metadata.full_name,
          profileImage: currentUser.user_metadata.avatar_url
      }, {
      });
    // const { data, error } = await supabase
    // .from('users')
    // .insert([
    //     { name: 'John', email: 'john@example.com',profileImage:'snedfvas' },
    //     { name: 'Jane', email: 'jane@example.com',profileImage:'snedfvas' }
    // ]);
  }
  if (error) {
    throw error;
  }


  useEffect(()=>{
    if(!data) return 
    setMyPosts(data.data)
  },[data])
  useEffect(()=>{
    saveAndUpdateUser()
    console.log('save user')
  },[currentUser])
  console.log(error)
  return (
    <>
     {currentUser ? (
       <HomePage myPosts={myPosts}/>
      // <HomePage/>
     ) : (
       <Login />
     )}
      {/* <Login/> */}
      </>
    
  )
}
// const HomePage=({myPosts:any})=>{
//   return(
//     <div className={style.wrapper}>
//        <Header />
//        <Banner />
//        <main className={style.main}>
//          <div className={style.content}>
//            <CreatePost />
//            <Feed posts={myPosts} />
//          </div>
//          <div className={style.infoContainer}>
//            <About />
//          </div>
//        </main>
//      </div>
//   )
const HomePage=()=>{
  return(
    <div className={style.wrapper}>
       <Header />
       <Banner />
       <main className={style.main}>
         <div className={style.content}>
           <CreatePost />
           {/* <Feed  posts={myPosts}/> */}
           <Feed/>
         </div>
         <div className={style.infoContainer}>
           <About />
         </div>
       </main>
     </div>
  )
}
export default Home
