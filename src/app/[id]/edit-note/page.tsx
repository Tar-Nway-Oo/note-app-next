import { Note } from "@/app/page";
import { getNoteDetails } from "../page"
import NoteForm from "@/components/NoteForm";

export default async function page({params}: {params: {id: string}}) {

  const selectedNote: Note = await getNoteDetails(params.id);

  return (
    <div>
      <h2 className="text-xl text-center mt-2">Edit Note</h2>
      <NoteForm 
        initialFormData={{title: selectedNote.title, body: selectedNote.body}}
        method="PUT"
        id={selectedNote._id}
      />
    </div>
  )
}
