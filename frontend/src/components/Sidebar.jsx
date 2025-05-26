import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; // ✅ Correct Import

const Sidebar = () => {
  const navigate = useNavigate(); // ✅ Add this for navigation

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login"); // ✅ Redirect to login after logout
    window.location.reload(); // ✅ Ensure full page refresh
  };

  return (
    <aside className="w-64 bg-gray-200 h-screen p-6 flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold mb-10">Admin Panel</h2>
        <ul className="space-y-4">
          <li><Link to="/admin/dashboard" className="text-black font-semibold">Dashboard</Link></li>
          <li><Link to="/admin/news" className="text-black">News</Link></li>
          <li><Link to="/admin/categories" className="text-black">Categories</Link></li>
          <li><Link to="/" className="text-black">Website</Link></li>
        </ul>
      </div>
      <button onClick={logout} className="text-red-500 font-semibold">
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
