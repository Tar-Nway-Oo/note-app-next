import NoteDetails from "@/components/NoteDetails";
import { Note } from "../page";

type Params = {
   id: string
}

export async function getNoteDetails(id: string) {
   const response = await fetch(`http://localhost:3000/api/notes/get-note-details?id=${id}`,
      {
         method: "GET",
         cache: "no-store"
      }
   );
   const result = await response.json();
   if (result.success) {
      return result.data;
   } else {
      console.log(result.message)
   }
}

export default async function page({params}: {params: Params}) {

   const selectedNote: Note = await getNoteDetails(params.id);

  return (
    <NoteDetails {...selectedNote} />
  )
}
