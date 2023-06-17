import MainLayout from "../../components/MainLayout"
import { useQuery } from "@tanstack/react-query";
import { getAllPosts } from "../../services/index/posts";
import toast from "react-hot-toast";
import ArticleCardSkeleton from "../../components/ArticleCardSkeleton";
import ErrorMessage from "../../components/ErrorMessage";
import ArticleCard from "../../components/ArticleCard";


const Blogs = () => {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getAllPosts(),
    queryKey: ["posts"],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    },
  });
  return (
    <MainLayout>
      <div className="flex flex-col container mx-auto  px-5 py-10">
        <div className="flex flex-row justify-between items-center">
          <h1 className="text-3xl font-bold text-center mb-4">Makaleler</h1>
          <span className=" text-dark-light text-lg ">{data?.length} makale bulundu</span>
        </div>
        <div className=" flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
          {isLoading ? (
            [...Array(3)].map((item, index) => (
              <ArticleCardSkeleton
                key={index}
                className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
              />
            ))
          ) : isError ? (
            <ErrorMessage message="Couldn't fetch the posts data" />
          ) : (
            data.map((post) => (
              <ArticleCard
                key={post._id}
                post={post}
                className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]"
              />
            ))
          )}
        </div>
        {/* pagination ekleme */}
      </div>
    </MainLayout>
  )
}
export default Blogs