import mongoose from "mongoose";

const NoteSchema = new mongoose.Schema(
   {
      title: String,
      body: String
   },
   {
      timestamps: true
   }
);

const Notes = mongoose.models.Notes || mongoose.model("Notes", NoteSchema);

export default Notes;