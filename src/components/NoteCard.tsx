"use client"

import { Note } from "@/app/page"
import { useRouter } from "next/navigation"
import { useEffect } from "react";

export default function NoteCard({_id, title, body}: Note) {

  const router = useRouter();

  useEffect(() => {
    router.refresh();
  }, []);

  return (
    <div className="p-1 bg-blue-50 flex flex-col gap-3 items-start rounded border border-gray-300 shadow-md shadow-gray-300 hover:shadow-gray-400 cursor-pointer max-h-40 md:max-h-44 overflow-hidden" onClick={() => router.push(`/${_id}`)} >
      <p className="text-xl self-center">{title}</p>
      <p className="text-gray-800">{body}</p>
    </div>
  )
}
