import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  phone,
  website,
  address,
  company
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
      <p className="text-gray-500">@{username}</p>
      <p className="text-gray-600 mt-2">📧 {email}</p>
      <p className="text-gray-600">📞 {phone}</p>
      <p className="text-gray-600">🌐 {website}</p>

      <div className="mt-4 text-sm text-gray-500">
        <p>🏢 <strong>{company.name}</strong></p>
        <p>{company.catchPhrase}</p>
        <p>{company.bs}</p>
      </div>

      <div className="mt-4 text-sm text-gray-500">
        <p>📍 {address.street}, {address.suite}, {address.city}</p>
        <p>Zipcode: {address.zipcode}</p>
        <p>Geo: {address.geo.lat}, {address.geo.lng}</p>
      </div>

      <div className="mt-4 text-xs text-gray-400">User ID: {id}</div>
    </div>
  );
};

export default UserCard;
