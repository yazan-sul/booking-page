// components/Booking.tsx
"use client"; // Form needs client interactivity
import React, { useState } from "react";

interface BookingData {
  name: string;
  date: string;
  time: string;
}

const Booking: React.FC = () => {
  const [booking, setBooking] = useState<BookingData>({
    name: "",
    date: "",
    time: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBooking({ ...booking, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Booking confirmed for ${booking.name} on ${booking.date} at ${booking.time}`
    );
    setBooking({ name: "", date: "", time: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ margin: "2rem" }}>
      <h2>Book Your Appointment</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={booking.name}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="date"
        value={booking.date}
        onChange={handleChange}
        required
      />
      <input
        type="time"
        name="time"
        value={booking.time}
        onChange={handleChange}
        required
      />
      <button type="submit">Book Now</button>
    </form>
  );
};

export default Booking;
