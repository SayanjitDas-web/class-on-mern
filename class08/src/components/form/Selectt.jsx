import { ChevronDown, ChevronLeft } from "lucide-react";
import { useState } from "react";

function Selectt({ children }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`inline-block gap-2`}>
      <section className={`relative z-10 flex justify-between items-center flex-wrap gap-3 p-2`}>
        {children[0]}
        <button onClick={() => setToggle(!toggle)}>
            {toggle ? <ChevronDown /> : <ChevronLeft />}
        </button>
      </section>
      <section className={toggle ? "absolute border py-2 p-0.5" : ""}>
       {toggle ? children : ""} 
      </section>
    </div>
  );
}

export default Selectt;
