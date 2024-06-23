import Link from "next/link";

export default function NavBar() {
  return (
    <nav className=" p-3 border-b-2 border-b-gray-500 mb-3 flex justify-between items-center">
      <h1 className=" text-2xl">Note App</h1>
      <Link href="/new-note" className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">Add Note</Link>
    </nav>
  )
}
