import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordInput = () => {
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <div className="max-w-60 flex-col justify-center items-center flex-wrap">
      <label htmlFor="password">Password:</label>
      <div className="flex justify-center items-center">
        <input
          value={password}
          type={toggle ? "text" : "password"}
          name="password"
          id="password"
          className="border-y-2 border-l-2 p-1"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="p-1 border-y-2 border-r-2"
          onClick={() =>
            password.length !== 0 ? setToggle(!toggle) : setToggle(false)
          }
        >
          {toggle ? <EyeOff /> : <Eye />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;
