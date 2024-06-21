"use client"

import { Note } from "@/app/page"
import { useRouter } from "next/navigation"
import { ChangeEvent, useState } from "react"

type NoteFormProps = {
   initialFormData: Partial<Note>
}
export default function NoteForm({initialFormData}: NoteFormProps) {

   const [formData, setFormData] = useState(initialFormData);

   const router = useRouter();

   function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      const name = e.target.name;
      const value = e.target.value;
      setFormData(prevState => ({...prevState, [name]: value}));
   }

  return (
    <form className="p-1 flex flex-col gap-2">
       <label htmlFor="title" className="text-bold">Title: </label>
       <input 
         className="px-1 py-0.5 border border-gray-400 outline-none rounded focus:border-gray-600"
         type="text" 
         id="title" 
         name="title" 
         value={formData.title} 
         onChange={handleChange}
       />
       <label htmlFor="Body" className="text-bold">Body: </label>
       <textarea 
         className="px-1 py-0.5 border border-gray-400 outline-none rounded focus:border-gray-600"
         rows={10} 
         id="body" 
         name="body" 
         value={formData.body} 
         onChange={handleChange} 
       />
       <div className="flex justify-end items-baseline gap-5">
         <button className="px-2 py-1 border border-gray-500 rounded hover:border-gray-700" type="button" onClick={() => router.push("../")}>Cancel</button>
         <button className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600" type="submit">Submit</button>
       </div>
    </form>
  )
}
