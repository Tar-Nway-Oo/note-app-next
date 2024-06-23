import connectToDB from "@/database";
import Notes from "@/model/notes";
import { NextResponse } from "next/server";

export async function PUT(req: any) {
   try {
      await connectToDB();
      const {searchParams} = new URL(req.url);
      const id = searchParams.get("id");
      if (id == null) {
         return NextResponse.json(
            {
               success: false,
               message: "ID is needed."
            }
         );
      }
      const newData = await req.json();
      if (newData == null) {
         return NextResponse.json(
            {
               success: false,
               message: "Data is needed."
            }
         );
      }
      const isUpdated = await Notes.findByIdAndUpdate(id, newData);
      if (!isUpdated) {
         return NextResponse.json(
            {
               success: false,
               message: "Failed to update the note."
            }
         );
      } 
      return NextResponse.json(
         {
            success: true,
            message: "Note updated successfully."
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