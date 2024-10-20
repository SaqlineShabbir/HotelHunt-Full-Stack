"use client";
import toast, { Toaster } from "react-hot-toast";
import { MdDeleteForever } from "react-icons/md";

const CardDiv = ({ name, hotelId, fetchBookings }) => {
  const deleteThisBooking = async (e) => {
    try {
      const response = await fetch(`/api/payment/${hotelId}`, {
        method: "DELETE",
      });
      const deletedBooking = await response.json();

      if (response.ok) {
        toast.success("Successfully Deleted");
        fetchBookings();
      } else {
        throw new Error(deletedBooking.message);
      }
    } catch (error) {
      console.error("Error deleting booking:", error.message);
    }
  };
  return (
    <div className="flex justify-between">
      <Toaster />
      <h3 className="text-xl font-semibold">{name}</h3>
      <MdDeleteForever
        className="cursor-pointer"
        onClick={() => deleteThisBooking()}
        color="green "
      />
    </div>
  );
};

export default CardDiv;
