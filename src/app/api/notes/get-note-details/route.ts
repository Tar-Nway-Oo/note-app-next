import connectToDB from "@/database";
import Notes from "@/model/notes";
import { NextResponse } from "next/server";

export async function GET(req: {url: string}) {
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
      const requestedData = await Notes.findById(id);
      if (requestedData == null) {
         return NextResponse.json(
            {
               success: false,
               message: "No notes found."
            } 
         );
      } else {
         return NextResponse.json(
            {
               success: true,
               message: "Note received successfully.",
               data: requestedData
            }
         );
      }
   } catch(error) {
      return NextResponse.json(
         {
            success: false,
            message: "Something went wrong."
         }
      );
   }
}