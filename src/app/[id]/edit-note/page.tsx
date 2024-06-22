import { Note } from "@/app/page";
import { getNoteDetails } from "../page"
import NoteForm from "@/components/NoteForm";

export default async function page({params}: {params: {id: string}}) {

  const selectedNote: Note = await getNoteDetails(params.id);

  return (
    <NoteForm 
      initialFormData={{title: selectedNote.title, body: selectedNote.body}}
      method="PUT"
      id={selectedNote._id}
    />
  )
}
