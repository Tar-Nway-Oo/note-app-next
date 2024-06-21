"use client"

import { useRouter } from "next/navigation"

type NoteCardProps = {
   _id: string
   title: string
   body: string
}

export default function NoteCard({_id, title, body}: NoteCardProps) {

  const router = useRouter();

  return (
    <div className="p-1 flex flex-col gap-3 items-start rounded border border-gray-300 shadow-md shadow-gray-300 hover:shadow-gray-400 cursor-pointer" onClick={() => router.push(`/${_id}`)} >
      <p className="text-xl self-center">{title}</p>
      <p className="text-gray-800 ms-1">{body}</p>
    </div>
  )
}
