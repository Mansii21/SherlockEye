
import {useRouter} from 'next/router'
import {supabase} from '../../Services/supabaseClient'
import {useState} from 'react'
import Loading from "../loading"
const style={
  wrapper:"flex flex-col space-y-6",
  input:"bg-[#1a1b1b] border border-[#343536] py-2 px-4 text-left text-white text-sm focus:outline-none",
  title:"border-b border-[#343536] pb-3 text-lg font-medium ",
  postBtn:"bg-gray-200 px-4 py-2 rounded-md text-sm font-seminold text-[#1A1A1B] rounded-full",
  postBtnContainer:"flex justify-end pt-2"
}
const PostForm=()=>{
  const [loading,setisLoading]=useState(false)
  const[title,setTitle]=useState('')
  const[content,setContent]=useState('')
  const router=useRouter()
  const createPost=async event=>{
    event.preventDefault()
    try{
      setisLoading(true)
      await supabase.from('feed').insert([
        {
          author:"mansiii",
          title:title,
          content:content,
        }
      ])
    }catch(error){
      console.error(error)
    }finally{
      setisLoading(false)
      router.push('/')
    }
    
  }
  return(
    <div className={style.wrapper}>
      {loading && <Loading/>}
      <h1 className={style.title}>Create a Post</h1>
      <div className="flex flex-col space-y-2 rounded bg-[#1a1a1b] p-4">
      <input 
        className={style.input}
        type='text'
        placeholder="Title"
        value={title}
        onChange={event=>setTitle(event.currentTarget.title)}
        />
      <textarea 
        className={style.input}
        name="content"
        cols="30"
        rows="10"
        placeholder="Text (required)"
        value={content}
        onChange={event=>setContent(event.currentTarget.title)}
        />
      <div className="postBtnContainer">
      <button 
        onClick={createPost}
        className={style.postBtn}>Post</button>
        </div>
      </div>
    </div>
  )
}
export default PostForm;