"use client"

import { Note } from "@/app/page";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function NoteDetails({_id, title, body}: Note) {

  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, []);

  async function deleteNote() {
     const response = await fetch(`/api/notes/delete-note?id=${_id}`,
       {
         method: "DELETE"
       }
     );
     const result = await response.json();
     if (result.success) {
       router.push("/");
     }
  }

  return (
    <div className="p-3 w-full bg-blue-50 min-h-svh">
      <Link href="/" className="underline underline-offset-1 text-sm absolute top-0 left-0 text-blue-500 hover:text-blue-300">Back to previous page</Link>
      <div className="flex justify-between items-baseline border-b-2 border-b-gray-500 mt-3 mb-3">
        <h2 className="text-2xl text-center mb-3">{title}</h2>
        <div className="flex items-baseline gap-5">
          <Link href={`/${_id}/edit-note`} className="px-2 py-1 border border-blue-500  text-blue-500 rounded hover:text-blue-800">Edit</Link>
          <button className="px-2 py-1 border border-red-500  text-red-500 rounded hover:text-red-800" onClick={deleteNote}>Delete</button>
        </div>
      </div>
      <p className="max-w-screen-lg m-auto md:text-lg leading-6">{body}</p>
    </div>
  )
}
