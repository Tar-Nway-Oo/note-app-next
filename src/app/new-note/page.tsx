import NoteForm from "@/components/NoteForm"; 

export default function page() {
  return (
    <div>
      <h2 className="text-xl text-center">New Note</h2>
      <NoteForm initialFormData={{title: "", body: ""}} />
    </div>
  )
}
