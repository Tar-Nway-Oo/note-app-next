import { Note } from "@/app/page";

export default function NoteDetails({title, body}: Note) {
  return (
    <div className="p-1 w-full">
       <h2 className="text-2xl text-center">{title}</h2>
       <p className="ms-3">{body}</p>
    </div>
  )
}
