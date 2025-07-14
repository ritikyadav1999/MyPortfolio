import {Dot} from "lucide-react";
import {cn} from "@/lib/utils";

interface DividerProps {
  className?: string;
}

const Divider = ({ className }: DividerProps) => {
  return (
    <div className={cn("flex justify-center", className)}>
      <Dot size={36}/>
      <Dot size={36}/>
      <Dot size={36}/>
      <Dot size={36}/>
    </div>
  );
}
export default Divider;