import React from 'react'
import { MdOutlineDarkMode } from "react-icons/md";

export default function Header() {
  return (
    <header>
        <div className="flex justify-between px-10 py-3 border-b-2">
            <h2 className="font-serif font-bold text-2xl">
                <a href="">Where in the World?</a>
            </h2>
            <p className=" text-nowrap self-center">
                <i className="flex items-center gap-2"><MdOutlineDarkMode /> Dark Mode</i>
            </p>
        </div>
    </header>
  )
}
