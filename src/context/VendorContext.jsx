import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const VendorContext = createContext(null);

const DEFAULT_LISTINGS = [
  {
    id: "LST-1001",
    name: "Colombo City Hotel - Deluxe",
    type: "Hotels (3–5 star)",
    price: 120,
    availability: "Available",
    description: "Central location, breakfast included.",
    imageUrl: "https://images.unsplash.com/photo-1551776235-dde6d4829808?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "LST-1002",
    name: "Lakeview Boutique Villa",
    type: "Boutique villas & guesthouses",
    price: 180,
    availability: "Available",
    description: "Calm lake view, private garden.",
    imageUrl: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "LST-1003",
    name: "Knuckles Eco-Lodge - Cabin 2",
    type: "Eco-lodges & camping sites",
    price: 95,
    availability: "Maintenance",
    description: "Wooden cabin, off-grid experience.",
    imageUrl: "https://images.unsplash.com/photo-1505692794403-34d4982f88aa?q=80&w=1200&auto=format&fit=crop",
  },
];

const DEFAULT_BOOKINGS = [
  {
    id: "BK-10241",
    guest: "John Doe",
    listingId: "LST-1002",
    room: "Superior Villa Suite",
    checkIn: "2025-09-12",
    checkOut: "2025-09-15",
    status: "Confirmed",
    payout: 420,
    imageUrl: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "BK-10242",
    guest: "Maria Khan",
    listingId: "LST-1001",
    room: "Deluxe Room",
    checkIn: "2025-09-10",
    checkOut: "2025-09-11",
    status: "Checked-out",
    payout: 110,
    imageUrl: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "BK-10243",
    guest: "Nuwan Perera",
    listingId: "LST-1003",
    room: "Eco Cabin",
    checkIn: "2025-09-08",
    checkOut: "2025-09-10",
    status: "Confirmed",
    payout: 190,
    imageUrl: "https://images.unsplash.com/photo-1520256862855-398228c41684?q=80&w=1200&auto=format&fit=crop",
  },
];

const DEFAULT_REVIEWS = [
  { id: "RV-9001", guest: "Sanduni Silva", country: "Sri Lanka", rating: 4, comment: "Great stay, clean rooms and friendly staff.", date: "2025-08-26" },
  { id: "RV-9002", guest: "Chaminda Fernando", country: "Sri Lanka", rating: 5, comment: "Perfect location, will book again!", date: "2025-08-21" },
  { id: "RV-9003", guest: "Dilani Jayasuriya", country: "Sri Lanka", rating: 3, comment: "Good service but Wi-Fi could be better.", date: "2025-08-18" },
];

export function VendorProvider({ children }) {
  const [listings, setListings] = useState(() => {
    const saved = localStorage.getItem("vendor_listings");
    return saved ? JSON.parse(saved) : DEFAULT_LISTINGS;
  });
  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem("vendor_bookings");
    return saved ? JSON.parse(saved) : DEFAULT_BOOKINGS;
  });
  const [reviews, setReviews] = useState(() => {
    const saved = localStorage.getItem("vendor_reviews");
    return saved ? JSON.parse(saved) : DEFAULT_REVIEWS;
  });

  useEffect(() => localStorage.setItem("vendor_listings", JSON.stringify(listings)), [listings]);
  useEffect(() => localStorage.setItem("vendor_bookings", JSON.stringify(bookings)), [bookings]);
  useEffect(() => localStorage.setItem("vendor_reviews", JSON.stringify(reviews)), [reviews]);

  const addListing = (payload) => {
    const id = "LST-" + Math.floor(1000 + Math.random() * 9000);
    setListings((prev) => [{ id, ...payload }, ...prev]);
    return id;
  };

  const metrics = useMemo(() => {
    const activeBookings = bookings.filter(b => ["Confirmed", "Checked-in"].includes(b.status)).length;
    const monthlyRevenue = bookings.reduce((sum, b) => sum + (b.payout || 0), 0);
    const avgRating = reviews.length ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length) : 0;
    return {
      totalRooms: listings.length,
      activeBookings,
      monthlyRevenue,
      avgRating: Number(avgRating.toFixed(1)),
    };
  }, [listings, bookings, reviews]);

  const value = { listings, bookings, reviews, addListing, metrics };
  return <VendorContext.Provider value={value}>{children}</VendorContext.Provider>;
}

export const useVendor = () => useContext(VendorContext);
