import NoteForm from "@/components/NoteForm"; 

export default function page() {
  return (
    <div>
      <h2 className="text-xl text-center mt-2">New Note</h2>
      <NoteForm initialFormData={{title: "", body: ""}} method="POST" id={null} />
    </div>
  )
}
