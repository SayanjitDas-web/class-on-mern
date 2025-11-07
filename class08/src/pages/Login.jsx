import Option from "../components/form/Option";
import Selectt from "../components/form/Selectt";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Login() {
  return (
    <div>
      <select name="" id="">
        <option value="100">100</option>
        <option value="100">200</option>
        <option value="100">300</option>
      </select>
      <Selectt>
        <Option value="option1" />
        <Option value="option2" />
        <Option value="option3" />
      </Selectt>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          <SelectItem value="dark">Dark</SelectItem>
          <SelectItem value="system">System</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default Login;
