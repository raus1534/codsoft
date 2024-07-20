import { AuthContextType } from "@context/AuthProvider";
import { useAuth } from "@hooks/index";
import { ImSpinner5 } from "react-icons/im";

export default function Comment() {
  const { authInfo } = useAuth() as AuthContextType;
  const { isLoggedIn, profile } = authInfo;
  return (
    <div className="">
      <h1 className="text-2xl font-semibold">Comments</h1>
      {isLoggedIn ? (
        <>
          <textarea
            name="comment"
            rows={5}
            className="w-full p-1 bg-transparent border-2 border-gray-600 rounded outline-primary"
            placeholder="Write your thoughts"
          />
          {true ? (
            <button
              type="submit"
              className="flex items-center justify-center w-full h-10 p-1 text-lg font-semibold text-white transition rounded cursor-pointer bg-primary hover:bg-opacity-90"
            >
              {false ? <ImSpinner5 className="animate-spin" /> : "Submit"}
            </button>
          ) : null}
        </>
      ) : (
        <span className="text-sm italic">
          Login First To Share Your Thoughts
        </span>
      )}
    </div>
  );
}
