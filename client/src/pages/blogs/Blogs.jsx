import MainLayout from '../../components/MainLayout';
import { useQuery } from '@tanstack/react-query';
import { getAllPosts } from '../../services/index/posts';
import toast from 'react-hot-toast';
import ArticleCardSkeleton from '../../components/ArticleCardSkeleton';
import ErrorMessage from '../../components/ErrorMessage';
import ArticleCard from '../../components/ArticleCard';



const Blogs = () => {

  const { data, isLoading, isError } = useQuery({
    queryFn: () => getAllPosts(),
    queryKey: ['posts'],
    onError: (error) => {
      toast.error(error.message);
      console.log(error);
    }
  });

  return (
    <MainLayout>
      <div className="container mx-auto flex flex-col  px-5 py-10">
        <div className="flex flex-row items-center justify-between">
          <h1 className="mb-4 text-center text-3xl font-bold">Makaleler</h1>
          <span className=" text-lg text-dark-light ">{data?.length} makale bulundu</span>
        </div>
        <div className=" flex flex-wrap gap-y-5 pb-10 md:gap-x-5">
          {isLoading ? (
            [...Array(3)].map((item, index) => (
              <ArticleCardSkeleton key={index} className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-21px)]" />
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

      </div>
    </MainLayout>
  );
};
export default Blogs;
