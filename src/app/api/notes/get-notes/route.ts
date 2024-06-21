import connectToDB from "@/database";
import Notes from "@/model/notes";
import { NextResponse } from "next/server";

export async function GET() {
   try {
      await connectToDB();
      const noteData = await Notes.find();
      if (noteData != null) {
         return NextResponse.json(
            {
               success: true,
               data: noteData,
               meaasge: "Notes received successfully."
            }
         );
      } else {
         return NextResponse.json(
            {
               success: false,
               message: "No note found."
            }
         );
      }
   } catch(error) {
      return NextResponse.json(
         {
            success: false,
            message: error
         }
      );
   }
}