import { UserData, UserModalProps } from "@/interfaces";
import React, { useState } from "react";

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name.includes("address.")) {
      const field = name.split(".")[1];
      setUser(prev => ({
        ...prev,
        address: {
          ...prev.address,
          [field]: value
        }
      }));
    } else if (name.includes("company.")) {
      const field = name.split(".")[1];
      setUser(prev => ({
        ...prev,
        company: {
          ...prev.company,
          [field]: value
        }
      }));
    } else if (name.includes("geo.")) {
      const field = name.split(".")[1];
      setUser(prev => ({
        ...prev,
        address: {
          ...prev.address,
          geo: {
            ...prev.address.geo,
            [field]: value
          }
        }
      }));
    } else {
      setUser(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg overflow-y-auto max-h-[90vh]">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
        <form onSubmit={handleSubmit}>

          <input name="name" value={user.name} onChange={handleChange} placeholder="Name" className="w-full mb-2 p-2 border rounded" />
          <input name="username" value={user.username} onChange={handleChange} placeholder="Username" className="w-full mb-2 p-2 border rounded" />
          <input name="email" value={user.email} onChange={handleChange} placeholder="Email" className="w-full mb-2 p-2 border rounded" />
          <input name="phone" value={user.phone} onChange={handleChange} placeholder="Phone" className="w-full mb-2 p-2 border rounded" />
          <input name="website" value={user.website} onChange={handleChange} placeholder="Website" className="w-full mb-2 p-2 border rounded" />

          <p className="font-semibold mt-4">Address</p>
          <input name="address.street" value={user.address.street} onChange={handleChange} placeholder="Street" className="w-full mb-2 p-2 border rounded" />
          <input name="address.suite" value={user.address.suite} onChange={handleChange} placeholder="Suite" className="w-full mb-2 p-2 border rounded" />
          <input name="address.city" value={user.address.city} onChange={handleChange} placeholder="City" className="w-full mb-2 p-2 border rounded" />
          <input name="address.zipcode" value={user.address.zipcode} onChange={handleChange} placeholder="Zipcode" className="w-full mb-2 p-2 border rounded" />
          <input name="geo.lat" value={user.address.geo.lat} onChange={handleChange} placeholder="Latitude" className="w-full mb-2 p-2 border rounded" />
          <input name="geo.lng" value={user.address.geo.lng} onChange={handleChange} placeholder="Longitude" className="w-full mb-2 p-2 border rounded" />

          <p className="font-semibold mt-4">Company</p>
          <input name="company.name" value={user.company.name} onChange={handleChange} placeholder="Company Name" className="w-full mb-2 p-2 border rounded" />
          <input name="company.catchPhrase" value={user.company.catchPhrase} onChange={handleChange} placeholder="Catch Phrase" className="w-full mb-2 p-2 border rounded" />
          <input name="company.bs" value={user.company.bs} onChange={handleChange} placeholder="BS" className="w-full mb-4 p-2 border rounded" />

          <div className="flex justify-between">
            <button type="button" onClick={onClose} className="text-gray-600 hover:text-gray-800">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add User</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserModal;
