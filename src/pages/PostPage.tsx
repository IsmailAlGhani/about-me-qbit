import { useAppDispatch, useAppSelector } from "../redux/hook";
import { PostType, missingObj } from "../util";
import {
  Button,
  Checkbox,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { updateData } from "../redux/reducer/post";
import { useFormik } from "formik";
import * as Yup from "yup";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

interface PostValue {
  title: string | undefined;
  content: string | undefined;
}

function PostPage() {
  const { data } = useAppSelector((state) => state.post);
  const dispatch = useAppDispatch();
  const formik = useFormik({
    enableReinitialize: false,
    initialValues: {
      title: "",
      content: "",
    },
    onSubmit: (values) => submitForm(values),
    validationSchema: Yup.object().shape({
      title: Yup.string()
        .min(3, "minimal 3 characters")
        .max(50, "maximal 50 characters")
        .required("title is required"),

      content: Yup.string()
        .min(20, "minimal 20 characters")
        .max(250, "maximal 250 characters")
        .required("content is required"),
    }),
  });

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    isValid,
    resetForm,
  } = formik;

  const submitForm = async (values: PostValue) => {
    const temp = {
      title: values.title ?? "",
      content: values.content ?? "",
      id: data.reduce(
        (prev, current) => (prev > current.id ? prev + 1 : current.id + 1),
        0
      ),
      isShowHome: false,
    };
    const temp2 = [...data, temp];
    console.log(temp2);
    resetForm();
    dispatch(updateData(temp2));
  };

  const handleUpdatePost = (post: PostType) => {
    const temp = data.map((item) =>
      item.id === post.id ? { ...item, isShowHome: !item.isShowHome } : item
    );
    dispatch(updateData(temp));
  };
  return (
    <div className="container min-h-screen px-[2vh] sm:px-[9vh]">
      <div className="py-12 w-full">
        <div className="mb-4 flex flex-col gap-4 w-full">
          <p className="text-3xl font-bold">Post (Active & Draft):</p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 w-full">
                <Typography
                  {...missingObj}
                  variant="h5"
                  className="font-semibold text-[#000000]"
                >
                  Title
                </Typography>
                <div className="flex flex-col gap-2 w-full">
                  <Input
                    {...missingObj}
                    crossOrigin={undefined}
                    type="text"
                    id="title"
                    name="title"
                    data-testid={"title-form"}
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    labelProps={{
                      className: "hidden",
                    }}
                    className="font-normal bg-[#FFFFFF] rounded-[10px] !border-[1px] !border-[#E6E6E6] focus:!border-[#E6E6E6]"
                    required={true}
                    error={typeof errors.title === "string" && touched.title}
                    success={errors.title === undefined && touched.title}
                  />
                  {errors.title && touched.title && (
                    <Typography
                      {...missingObj}
                      variant="small"
                      color="red"
                      className="flex items-center gap-1 font-normal"
                    >
                      <InformationCircleIcon className="w-4 h-4 -mt-px" />
                      {errors.title}
                    </Typography>
                  )}
                </div>
              </div>
              <div className="flex flex-col gap-4 w-full">
                <Typography
                  {...missingObj}
                  variant="h5"
                  className="font-semibold text-[#000000]"
                >
                  Content
                </Typography>
                <div className="flex flex-col gap-2 w-full">
                  <Textarea
                    {...missingObj}
                    id="content"
                    name="content"
                    data-testid={"content-form"}
                    variant="outlined"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    labelProps={{
                      className: "hidden",
                    }}
                    className="font-normal bg-[#FFFFFF] rounded-[10px] !border-[1px] !border-[#E6E6E6] focus:!border-[#E6E6E6]"
                    required={true}
                    value={values.content}
                    error={
                      typeof errors.content === "string" && touched.content
                    }
                    success={errors.content === undefined && touched.content}
                  />
                  {errors.content && touched.content && (
                    <Typography
                      {...missingObj}
                      variant="small"
                      color="red"
                      className="flex items-center gap-1 font-normal"
                    >
                      <InformationCircleIcon className="w-4 h-4 -mt-px" />
                      {errors.content}
                    </Typography>
                  )}
                </div>
              </div>
              <div className="flex justify-end">
                <Button
                  {...missingObj}
                  color="blue"
                  variant="gradient"
                  type="submit"
                  data-testid={"submit-form"}
                  disabled={!isValid || isSubmitting}
                >
                  Post
                </Button>
              </div>
            </div>
          </form>
        </div>

        <div className="w-full grid grid-cols-3 gap-4">
          {data.map((post, index) => (
            <div
              key={`${index}-${post.title}`}
              className="flex flex-col p-2 gap-2 w-full shadow-2xl border-2 border-blue-gray-800 rounded-2xl"
            >
              <div className="flex justify-between w-full">
                <p className="font-semibold text-2xl">{post.title}</p>
                <Checkbox
                  crossOrigin={undefined}
                  {...missingObj}
                  color="blue"
                  checked={post.isShowHome}
                  onChange={() => handleUpdatePost(post)}
                />
              </div>
              <p className="italic text-base">{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PostPage;
