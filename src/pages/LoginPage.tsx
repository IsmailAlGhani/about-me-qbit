import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, Input, Typography } from "@material-tailwind/react";
import { missingObj } from "../util";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

interface LoginValue {
  username: string | undefined;
  password: string | undefined;
}

function LoginPage() {
  const navigate = useNavigate();
  const submitForm = async (values: LoginValue) => {
    const temp = {
      username: values.username ?? "",
      password: values.password ?? "",
    };
    localStorage.setItem("userKey", JSON.stringify(temp));
    navigate("/");
  };
  const formik = useFormik({
    enableReinitialize: false,
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => submitForm(values),
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .min(3, "minimal 3 characters")
        .max(50, "maximal 50 characters")
        .required("username is required"),

      password: Yup.string()
        .required("password is required.")
        .min(8, "Password is too short - should be 8 chars minimum."),
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
  } = formik;

  return (
    <div className="flex w-full min-h-screen justify-center items-center">
      <div className="flex flex-col gap-4 shadow-2xl min-w-60 border-2 border-blue-gray-800 rounded-2xl">
        <p className="text-3xl py-2 font-bold text-center">Login Form</p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col rounded-3xl p-6 gap-6">
            <div className="flex flex-col gap-4 w-full">
              <Typography
                {...missingObj}
                variant="h5"
                className="font-semibold text-[#000000]"
              >
                Username
              </Typography>
              <div className="flex flex-col gap-2 w-full">
                <Input
                  {...missingObj}
                  crossOrigin={undefined}
                  type="text"
                  id="username"
                  name="username"
                  data-testid={"username-form"}
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  labelProps={{
                    className: "hidden",
                  }}
                  className="font-normal bg-[#FFFFFF] rounded-[10px] !border-[1px] !border-[#E6E6E6] focus:!border-[#E6E6E6]"
                  required={true}
                  error={
                    typeof errors.username === "string" && touched.username
                  }
                  success={errors.username === undefined && touched.username}
                />
                {errors.username && touched.username && (
                  <Typography
                    {...missingObj}
                    variant="small"
                    color="red"
                    className="flex items-center gap-1 font-normal"
                  >
                    <InformationCircleIcon className="w-4 h-4 -mt-px" />
                    {errors.username}
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
                Password
              </Typography>
              <div className="flex flex-col gap-2 w-full">
                <Input
                  {...missingObj}
                  crossOrigin={undefined}
                  type="password"
                  id="password"
                  name="password"
                  data-testid={"password-form"}
                  variant="outlined"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  labelProps={{
                    className: "hidden",
                  }}
                  className="font-normal bg-[#FFFFFF] rounded-[10px] !border-[1px] !border-[#E6E6E6] focus:!border-[#E6E6E6]"
                  required={true}
                  value={values.password}
                  error={
                    typeof errors.password === "string" && touched.password
                  }
                  success={errors.password === undefined && touched.password}
                />
                {errors.password && touched.password && (
                  <Typography
                    {...missingObj}
                    variant="small"
                    color="red"
                    className="flex items-center gap-1 font-normal"
                  >
                    <InformationCircleIcon className="w-4 h-4 -mt-px" />
                    {errors.password}
                  </Typography>
                )}
              </div>
            </div>
            <div className="flex justify-end align-middle">
              <Button
                {...missingObj}
                color="blue"
                variant="gradient"
                type="submit"
                data-testid={"submit-form"}
                disabled={!isValid || isSubmitting}
              >
                Login
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
