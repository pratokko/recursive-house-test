
import { Input } from "@/components/ui/input"


const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-700 shadow-md py-4 h-[80px] border-b-2 border-b-gray-100">
        <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center ml-auto">
          <Input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 rounded-md bg-white text-black"
          />
          <button className="ml-2 px-4 py-2 bg-white text-black rounded-md">
            Search
          </button>
        </div>
        
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
