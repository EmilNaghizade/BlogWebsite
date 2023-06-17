import { useMutation } from "@tanstack/react-query";
import { createPost } from "../../../../services/index/posts";
import toast from "react-hot-toast";
import TextEditor from "./TextEditor"
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useSelector } from "react-redux";
//import { WithContext as ReactTags } from 'react-tag-input';


const NewPost = () => {
  const [desc, setDesc] = useState("")

  const userState = useSelector((state) => state.user);

  const { mutate, isLoading } =
    useMutation({
      mutationFn: ({ title, caption, body, tags, token }) => {
        return createPost({ title, caption, body, token });
      },
      onSuccess: () => {
        toast.success(
          "Blogunuz başarıyla oluşturuldu"
        );
      },
      onError: (error) => {
        toast.error(error.message);
        console.log(error);
      },
    });

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      title: "",
      caption: "",
      body: "",
      tags: "",
    },
    mode: "onChange",
  });


  const pull_data = (data) => {
    setDesc(data)
  }

  const sumbitHandler = (data) => {
    const { title, caption } = data;
    mutate({ title, caption, body: desc, token: userState.userInfo.token, });
  };




  return (
    <section className="container mx-auto px-5 py-10">
      <div className="w-full  mx-auto">
        <h1 className="text-2xl font-bold text-center text-dark-hard mb-8">
          Yeni blog oluştur
        </h1>
        <form onSubmit={handleSubmit(sumbitHandler)}>
          <div className="flex flex-col mb-6 w-full">
            {/* Title */}
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="title"
                className="text-[#5a7184] font-semibold block"
              >
                Başlık
              </label>
              <input
                type="text"
                className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.title ? "border-red-500" : "border-[#c3cad9]"
                  }`}
                id="title"
                {...register("title", {
                  minLength: {
                    value: 5,
                    message: "Başlık en az 5 karakter olmalıdır",
                  },
                  required: {
                    value: true,
                    message: "Başlık zorunludur",
                  },
                })}
                placeholder="Blog başlığını giriniz"

              />
              {errors.title?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.title?.message}
                </p>
              )}
            </div>

            {/* Caption */}
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="caption"
                className="text-[#5a7184] font-semibold block"
              >
                Açıklama
              </label>
              <input
                type="text"
                className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.caption ? "border-red-500" : "border-[#c3cad9]"
                  }`}
                id="caption"
                {...register("caption", {
                  minLength: {
                    value: 5,
                    message: "Açıklama en az 5 karakter olmalıdır",
                  },
                  required: {
                    value: true,
                    message: "Açıklama zorunludur",
                  },
                })}
                placeholder="Blog açıklamasını giriniz"
              />
              {errors.caption?.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.caption?.message}
                </p>
              )}
            </div>

            <div className="flex flex-col mb-6 w-full">
              <div className='flex flex-col mb-6 w-full  border '>
                <label
                  htmlFor="caption"
                  className="text-[#5a7184] font-semibold block"
                >
                  Gövde
                </label>
                <TextEditor desc={pull_data} />
              </div>
            </div>

            <button
              type="submit"
              disabled={!isValid || isLoading}
              className={`bg-primary text-white font-bold text-lg py-4 px-8 w-full rounded-lg my-6 ${isValid ? "" : "opacity-50 cursor-not-allowed"
                } `}
            >
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
export default NewPost