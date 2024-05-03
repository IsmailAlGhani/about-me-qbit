import { useAppSelector } from "../redux/hook";

function HomePage() {
  const { data } = useAppSelector((state) => state.post);
  return (
    <div className="container min-h-screen px-[2vh] sm:px-[9vh]">
      <div className="py-12 w-full">
        <p className="mb-4 text-center text-3xl font-bold">Post:</p>
        <div className="w-full grid grid-cols-3 gap-4">
          {data
            .filter((item) => !!item.isShowHome)
            .map((post) => (
              <div
                key={`${post.id}-${post.title}`}
                className="flex flex-col p-2 gap-2 w-full shadow-2xl border-2 border-blue-gray-800 rounded-2xl"
              >
                <p className="font-semibold text-2xl">{post.title}</p>
                <p className="italic text-base">{post.content}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
