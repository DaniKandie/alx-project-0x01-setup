import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";

const PostsPage: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-8">
        <h1 className="text-3xl mb-4">Posts Page</h1>
        <PostCard />
      </main>
    </div>
  );
};

export default PostsPage;
