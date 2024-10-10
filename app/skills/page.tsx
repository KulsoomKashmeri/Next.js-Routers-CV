import React from "react"
import Link from "next/link"

export default function Skills() {
  return (
    <div>
<h4 className="bg-pink-500 font-bold text-center">Simple Resume:</h4>
<ul className="flex justify-center bg-blue-300">

  <Link href="/"><li className="inline-block m-3">Home</li></Link>
  <Link href="/information"><li className="inline-block m-3">Information</li></Link>
  <Link href="/education"><li className="inline-block m-3">Education</li></Link>
  <Link href="/skills"><li className="inline-block m-3">Skills</li></Link>
  <Link href="/experience"><li className="inline-block m-3">Experience</li></Link>
</ul>
<h3 className="text-center font-bold text-red-600 p-4 bg-gray-300">SKILLS</h3>
<div>
<ul className="border-4 border-solid border-black m-20 p-6 w-[300px] leading-relaxed">
    <h1 className="text-center font-bold text-red-600 p-4">Skills:</h1>
    <li className="text-center font-bold">HTML</li>
    <li className="text-center font-bold">CSS</li>
    <li className="text-center font-bold">JavaScript</li>
    <li className="text-center font-bold">TypeScript</li>
    <li className="text-center font-bold">MS Office</li>
    <li className="text-center font-bold">Amazon VA</li>
</ul>

<h3 className="font-bold">Email:</h3>
<a href="moonnayab786@gmail.com" className="text-center font-bold text-blue-600">moonnayab786@gmail.com
</a>
    
    <h3 className="font-bold">LinkedIn Profile:</h3> 
    <a href="https://www.linkedin.com/in/kulsoom-kashmeri-3832512b8" className="text-center font-bold text-blue-600">Kulsoom Kashmeri www.linkedin.com/in/kulsoom-kashmeri-3832512b8</a>
<br/>
<h3 className="font-bold">GitHub Profile:</h3> 
<a href="https://github.com/KulsoomKashmeri" target="blank" className="text-center font-bold text-blue-600">KulsoomKashmeri https://github.com/KulsoomKashmeri</a>
    </div>
    </div>
  )
}

