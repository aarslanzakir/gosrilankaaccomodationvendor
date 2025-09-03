"use client";
import { useState } from "react";
import { Upload, X } from "lucide-react";

const AddListing = () => {
  const [formData, setFormData] = useState({
    roomName: "",
    type: "Standard",
    price: "",
    availability: "Available",
    description: "",
  });

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const removeImage = () => {
    setImage(null);
    setPreview(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("New Listing:", { ...formData, image });
    alert("Listing added successfully ✅");
  };

  return (
    <div className="min-h-screen w-full dark:bg-navy-900 p-6">
      <div >
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
          Add New Listing
        </h1>

        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-navy-900 p-8 rounded-2xl shadow-lg space-y-6"
        >
          {/* Top section in grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Room Name */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Room Name
              </label>
              <input
                type="text"
                name="roomName"
                value={formData.roomName}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 
                bg-white dark:bg-navy-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
                placeholder="Deluxe Room"
                required
              />
            </div>

            {/* Room Type */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Room Type
              </label>
              <select
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 
                bg-white dark:bg-navy-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
              >
                <option>Standard</option>
                <option>Deluxe</option>
                <option>Family Suite</option>
                <option>Villa</option>
              </select>
            </div>

            {/* Price */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Price (per night)
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 
                bg-white dark:bg-navy-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
                placeholder="100"
                required
              />
            </div>

            {/* Availability */}
            <div>
              <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
                Availability
              </label>
              <select
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 
                bg-white dark:bg-navy-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
              >
                <option>Available</option>
                <option>Booked</option>
                <option>Maintenance</option>
              </select>
            </div>
          </div>

          {/* Description full width */}
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg p-3 
              bg-white dark:bg-navy-900 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500"
              rows={4}
              placeholder="Describe the room, facilities, etc."
            ></textarea>
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Room Image
            </label>
            <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-6 cursor-pointer 
            bg-gray-50 dark:bg-navy-900 border-gray-300 dark:border-gray-600">
              {preview ? (
                <div className="relative">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-72 h-44 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-2 right-2 bg-red-600 text-white p-1 rounded-full hover:bg-red-700"
                  >
                    <X size={16} />
                  </button>
                </div>
              ) : (
                <label className="flex flex-col items-center text-gray-500 dark:text-gray-300">
                  <Upload size={40} className="mb-2" />
                  <span>Click to upload image</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                </label>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition 
            font-medium shadow-md"
          >
            Save Listing
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddListing;
