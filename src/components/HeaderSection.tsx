import { Button, Typography } from "@material-tailwind/react";
import { missingObj } from "../util";
import {
  ArrowRightStartOnRectangleIcon,
  BookOpenIcon,
} from "@heroicons/react/24/outline";
import { useLocation, useNavigate } from "react-router-dom";

const HeaderSection = ({ userId }: { userId: boolean }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const logOut = () => {
    localStorage.removeItem("userKey");
    navigate("/");
  };
  return (
    <header className="p-4 bg-gradient-to-r from-gray-800 to-teal-700">
      <div className="flex justify-between items-center w-full">
        <Button
          {...missingObj}
          variant="text"
          className="p-0"
          onClick={() => navigate("/")}
        >
          <div className="flex gap-4 items-center">
            <BookOpenIcon strokeWidth={2} className="h-6 w-6 text-white" />
            <Typography
              {...missingObj}
              variant="lead"
              className="text-white font-bold"
            >
              About
              {/* */}
              <span className="!font-normal">Me</span>
            </Typography>
          </div>
        </Button>
        <div className="flex gap-4 items-center">
          <Button
            {...missingObj}
            className={`p-0 text-xl ${
              location.pathname === "/" ? "text-black" : "text-white"
            }`}
            onClick={() => navigate("/")}
            variant="text"
          >
            Home
          </Button>
          <Button
            {...missingObj}
            className={`p-0 text-xl ${
              location.pathname === "/about" ? "text-black" : "text-white"
            }`}
            onClick={() => navigate("/about")}
            variant="text"
          >
            About
          </Button>
          <Button
            {...missingObj}
            className={`p-0 text-xl ${
              location.pathname === "/post" ? "text-black" : "text-white"
            }`}
            onClick={() => navigate("/post")}
            variant="text"
          >
            Post
          </Button>
        </div>
        {userId ? (
          <Button
            {...missingObj}
            size="sm"
            variant="gradient"
            color="red"
            className="flex gap-4 items-center text-sm text-white"
            onClick={logOut}
          >
            <ArrowRightStartOnRectangleIcon
              strokeWidth={2}
              className="h-4 w-4 text-white"
            />
            {/* */}
            Log Out
          </Button>
        ) : (
          <Button
            {...missingObj}
            size="sm"
            variant="gradient"
            color="blue"
            className="flex gap-4 items-center text-sm text-white"
            onClick={() => navigate("login")}
          >
            Log In
          </Button>
        )}
      </div>
    </header>
  );
};

export default HeaderSection;
