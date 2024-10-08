import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

type ProfileData = {
  name: string;
  email: string;
  phone: string;
  birthdate: string;
  interests: string[];
};

const ProfilePage: React.FC = () => {
  const [profileData, setProfileData] = useState<ProfileData>({
    name: "Charlie",
    email: "charlie@gmail.com",
    phone: "9971877676",
    birthdate: "1979-08-01",
    interests: [],
  });

  const interestsList = [
    "Golf",
    "Music",
    "Movies",
    "Exploring",
    "Socializing",
    "Cooking & Eating",
    "Plays",
    "Chinese Food",
    "Screaming Children",
    "Walking for Long",
    "Water Sports",
  ];

  const handleInterestClick = (interest: string) => {
    setProfileData((prevData) => {
      const newInterests = prevData.interests.includes(interest)
        ? prevData.interests.filter((i) => i !== interest)
        : [...prevData.interests, interest];
      return { ...prevData, interests: newInterests };
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Add your save logic here
    console.log("Profile saved:", profileData);
  };

  const handleCancel = () => {
    // Add your cancel logic here
    console.log("Profile editing canceled");
  };

  return (
    <>
      <Header />

      <div className="bg-[#F9F7F2] py-10">
        <div className="p-8 max-w-lg mx-auto bg-white border border-gray-200 flex space-x-4 text-sm">
          <div>
            <img
              src="../src/assests/images/standup-comedy.png"
              alt="Profile"
              className="w-28 h-28 rounded-md opacity-80 mt-1"
            />
          </div>
          <div>
            <div className=" items-center  mb-4 ">
              <label className="text-gray-700 font-poppins ">
                What should we call you?
              </label>
              <input
                type="text"
                name="name"
                value={profileData.name}
                onChange={handleInputChange}
                className="border p-2 rounded w-full "
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-poppins ">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleInputChange}
                className="border p-2 rounded w-full"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-poppins ">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={profileData.phone}
                onChange={handleInputChange}
                className="border p-2 rounded w-full"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-poppins ">
                Birthday
              </label>
              <input
                type="date"
                name="birthdate"
                value={profileData.birthdate}
                onChange={handleInputChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2 font-poppins">
                Select Interests
              </label>
              <div className="grid grid-cols-3 gap-2">
                {interestsList.map((interest) => (
                  <button
                    key={interest}
                    onClick={() => handleInterestClick(interest)}
                    className={`p-2 rounded text-center ${
                      profileData.interests.includes(interest)
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {interest}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-poppins mb-1">
                Please let us know if you have some interests
              </label>
              <input
                className="border p-2 rounded w-full"
                placeholder="Add multiple (,) comma separated"
              ></input>
            </div>
            <div className="flex space-x-4 pt-4">
              <button
                onClick={handleSave}
                className="bg-red-500 text-white py-2 px-6 rounded"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className=" text-gray-700 py-2 px-4 border border-gray-500 rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProfilePage;
