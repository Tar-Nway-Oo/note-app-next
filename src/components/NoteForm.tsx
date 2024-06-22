"use client"

import { Note } from "@/app/page"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useState } from "react"

type NoteFormData = {
  title: string
  body: string
}

type NoteFormProps = {
   initialFormData: NoteFormData
   method: string
   id: string | null
}

async function addNote(data: NoteFormData) {
  const response = await fetch("/api/notes/add-note", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(data)
   });

   const result = await response.json();

   return result;
}

export default function NoteForm({initialFormData, method}: NoteFormProps) {

   const [formData, setFormData] = useState(initialFormData);

   const router = useRouter();

   function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
      const name = e.target.name;
      const value = e.target.value;
      setFormData(prevState => ({...prevState, [name]: value}));
   }

   async function handleSubmit(e: FormEvent) {
     e.preventDefault();
     if (method === "POST") {
      const result = await addNote(formData);
       if (result.success) {
         router.push("/");
       }
     }
   }

  return (
    <form className="p-1 flex flex-col gap-2" onSubmit={handleSubmit}>
       <label htmlFor="title" className="text-bold">Title: </label>
       <input 
         autoFocus
         required
         className="px-1 py-0.5 border border-gray-400 outline-none rounded focus:border-gray-600"
         type="text" 
         id="title" 
         name="title" 
         value={formData.title} 
         onChange={handleChange}
       />
       <label htmlFor="Body" className="text-bold">Body: </label>
       <textarea 
         required
         className="px-1 py-0.5 border border-gray-400 outline-none rounded focus:border-gray-600"
         rows={10} 
         id="body" 
         name="body" 
         value={formData.body} 
         onChange={handleChange} 
       />
       <div className="flex justify-end items-baseline gap-5">
         <Link href="../" className="px-2 py-1 border border-gray-500 rounded hover:border-gray-700">Cancel</Link>
         <button className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600" type="submit">Submit</button>
       </div>
    </form>
  )
}
