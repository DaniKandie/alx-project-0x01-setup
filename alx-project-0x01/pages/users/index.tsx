import Header from "@/components/layout/Header";

const UsersPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl mb-4">Users Page</h1>
        <p>List of users will go here...</p>
      </main>
    </div>
  );
};

export default UsersPage;
