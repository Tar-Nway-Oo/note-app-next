import { Note } from "@/app/page";
import connectToDB from "@/database";
import Notes from "@/model/notes";
import { NextResponse } from "next/server";

export async function POST(req: any) {
   try {
      await connectToDB();
      const data = await req.json();
      if (data == null) {
         return NextResponse.json(
            {
              success: false,
              message: "Data is needed."
            }
         );
      }
      const newNote = await Notes.create(data);
      if (newNote == null) {
         return NextResponse.json(
            {
            success: false,
            message: "Failed to add a new note."
            }
         );
         }
      return NextResponse.json(
         {
            success: true,
            message: "Note added successfully."
         }
      );
   } catch(error) {
      return NextResponse.json(
         {
           success: false,
           message: "Something went wrong."
         }
      );
   }
}