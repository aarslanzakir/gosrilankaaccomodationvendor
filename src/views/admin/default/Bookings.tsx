import React from "react";

interface Booking {
  guest: string;
  room: string;
  checkIn: string;
  checkOut: string;
  image: string;
  charge: number;
}

const Bookings: React.FC = () => {
  const bookings: Booking[] = [
    {
      guest: "Tyronne Premasiri",
      room: "Deluxe Room",
      checkIn: "12 Sep",
      checkOut: "15 Sep",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5yzfIuVvIZQsm9YfsvP8OTAzHbdDCP7ANbQ&s",
      charge: 450,
    },
    {
      guest: "Ali Arslan Zakir",
      room: "Standard Room",
      checkIn: "10 Sep",
      checkOut: "11 Sep",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR58fRlzU8L5TuYzX5W01faI732hiFRBkUDeA&s",
      charge: 120,
    },
    {
      guest: "Nuwan Perera",
      room: "Family Suite",
      checkIn: "8 Sep",
      checkOut: "10 Sep",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5yzfIuVvIZQsm9YfsvP8OTAzHbdDCP7ANbQ&s",
      charge: 300,
    },
  ];

  return (
    <div className="p-6 bg-gray-100 dark:bg-navy-900 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        Bookings
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.map((b, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-navy-800 rounded-2xl shadow overflow-hidden hover:shadow-lg transition"
          >
            <img
              src={b.image}
              alt={b.room}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {b.guest}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {b.room}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                {b.checkIn} → {b.checkOut}
              </p>
              <p className="mt-2 font-medium text-blue-600 dark:text-blue-400">
                ${b.charge}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookings;
