import NavBar from "@/components/NavBar";
import NoteCard from "@/components/NoteCard";

export type Note = {
  _id: string
  title: string
  body: string
}

async function getNotes() {
  const response = await fetch("http://localhost:3000/api/notes/get-notes",
    {
      method: "GET",
      cache: "no-store"
    }
  );

  const result = await response.json();

  if (result.success) {
    return result.data;
  } else {
    console.log(result.message);
  }

}

export default async function Home() {

  const notes: Note[] = await getNotes();

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main className="px-3 py-1 grid lg:grid-cols-5 sm:grid-cols-2 gap-3">
        {notes.map(note => (
          <NoteCard key={note._id} {...note} />
        ))}
      </main>
    </>
  );
}
