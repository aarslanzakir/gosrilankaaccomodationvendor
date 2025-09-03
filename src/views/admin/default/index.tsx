import { FaBed, FaDollarSign, FaRegCalendarCheck, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import React from "react";

interface Booking {
  guest: string;
  room: string;
  checkIn: string;
  checkOut: string;
  image: string;
}

interface Review {
  name: string;
  text: string;
  rating: number;
}

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const bookings: Booking[] = [
    {
      guest: "Tyronne Premasiri",
      room: "Deluxe Room",
      checkIn: "12 Sep",
      checkOut: "15 Sep",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5yzfIuVvIZQsm9YfsvP8OTAzHbdDCP7ANbQ&s",
    },
    {
      guest: "Ali Arslan Zakir",
      room: "Standard Room",
      checkIn: "10 Sep",
      checkOut: "11 Sep",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR58fRlzU8L5TuYzX5W01faI732hiFRBkUDeA&s",
    },
    {
      guest: "Nuwan Perera",
      room: "Family Suite",
      checkIn: "8 Sep",
      checkOut: "10 Sep",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5yzfIuVvIZQsm9YfsvP8OTAzHbdDCP7ANbQ&s",
    },
  ];

  const reviews: Review[] = [
    {
      name: "Sanduni Silva (Sri Lanka)",
      text: "Great stay, clean rooms and friendly staff.",
      rating: 4,
    },
    {
      name: "Chaminda Fernando (Sri Lanka)",
      text: "Perfect location, will book again!",
      rating: 5,
    },
    {
      name: "Dilani Jayasuriya (Sri Lanka)",
      text: "Good service but Wi-Fi could be better.",
      rating: 3,
    },
  ];

  return (
    <div className="p-6 dark:bg-navy-900 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Accommodation Vendor Dashboard
        </h1>
        <button
          onClick={() => navigate("/admin/add-listing")}
          className="px-6 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition font-medium shadow-md"
        >
          + Add Listing
        </button>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-5 bg-white dark:bg-navy-800 rounded-2xl shadow flex items-center gap-4">
          <FaBed className="text-blue-500 text-2xl" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Total Rooms</p>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">24</h2>
          </div>
        </div>
        <div className="p-5 bg-white dark:bg-navy-800 rounded-2xl shadow flex items-center gap-4">
          <FaRegCalendarCheck className="text-green-500 text-2xl" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Active Bookings</p>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">12</h2>
          </div>
        </div>
        <div className="p-5 bg-white dark:bg-navy-800 rounded-2xl shadow flex items-center gap-4">
          <FaDollarSign className="text-yellow-500 text-2xl" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Monthly Revenue</p>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">$4,250</h2>
          </div>
        </div>
        <div className="p-5 bg-white dark:bg-navy-800 rounded-2xl shadow flex items-center gap-4">
          <FaStar className="text-purple-500 text-2xl" />
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Avg. Rating</p>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">4.6 / 5</h2>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent bookings */}
        <div className="bg-white dark:bg-navy-800 p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Recent Bookings</h2>
          <div className="space-y-4">
            {bookings.map((b, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 border-b border-gray-200 dark:border-gray-700 pb-4 last:border-none"
              >
                <img
                  src={b.image}
                  alt={b.room}
                  className="w-28 h-20 object-cover rounded-lg shadow-sm"
                />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{b.guest}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{b.room}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">
                    {b.checkIn} - {b.checkOut}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent reviews */}
        <div className="bg-white dark:bg-navy-800 p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Recent Reviews</h2>
          <div className="space-y-4 text-sm">
            {reviews.map((r, idx) => (
              <div
                key={idx}
                className="border-b border-gray-200 dark:border-gray-700 pb-3 last:border-none"
              >
                <p className="font-semibold text-gray-900 dark:text-white">{r.name}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-1">“{r.text}”</p>
                <div className="flex text-yellow-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>{i < r.rating ? "★" : "☆"}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
