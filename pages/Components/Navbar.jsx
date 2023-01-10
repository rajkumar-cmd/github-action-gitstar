import React from 'react'
import Link from "next/link"
import {useRouter} from "next/router"

const Navbar = () => {
    const router=useRouter();
    const onClickAll=()=>{
        router.push("/");
    }
    const onClickHTML=()=>{
        router.push("/html");
    }
    const onClickCSS=()=>{
        router.push("/css");
    }
    const onClickJavascript=()=>{
        router.push("/javascript");
    }
  return (
    <div style={{display:"flex",gap:"2rem"}}>
        <button style={{border:"1px soild black",padding:"1rem",borderRadius:"10px"}} onClick={onClickAll}>All</button>
        <button style={{border:"1px soild black",padding:"1rem",borderRadius:"10px"}} onClick={onClickHTML}>HTML</button>
        <button style={{border:"1px soild black",padding:"1rem",borderRadius:"10px"}} onClick={onClickCSS}>CSS</button>
        <button style={{border:"1px soild black",padding:"1rem",borderRadius:"10px"}} onClick={onClickJavascript}>Javascript</button>
    </div>
  )
}

export default Navbar