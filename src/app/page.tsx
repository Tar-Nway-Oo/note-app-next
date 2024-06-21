
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
    <main>
      {notes.map(note => (
        <div key={note._id}>
          <h1>{note.title}</h1>
          <p>{note.body}</p>
        </div>
      ))}
    </main>
  );
}
