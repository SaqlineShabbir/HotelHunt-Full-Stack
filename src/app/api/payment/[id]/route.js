import { dbConnect } from "@/connectDb/DbConnect";
import { bookingModel } from "@/models/bookingModel";
import { NextResponse } from "next/server";

export const DELETE = async (request, { params }) => {
  await dbConnect();

  try {
    const { id } = params;

    const deletedItem = await bookingModel.deleteOne({ _id: id });

    // Check if the item was found and deleted
    if (!deletedItem.deletedCount) {
      return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }

    return NextResponse.json(
      { message: "Successfully deleted" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: `Error: ${error.message}` },
      { status: 500 }
    );
  }
};
