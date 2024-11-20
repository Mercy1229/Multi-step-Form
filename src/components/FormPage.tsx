
import { NavLink, Outlet } from 'react-router-dom';

function FormPage() {
  return (
    <div className="w-2/3 max-h-svg flex flex-row mx-auto bg-white py-2 ps-0 rounded-lg ">
      {/* Sidebar */}
      <div className="min-h-svh h-bg bg-Desktop bg-no-repeat bg-cover min-w-72 sm:bg-mobile p-10 rounded-md ms-2 ">
        <div className="flex flex-row space-x-5 my-4">
          <div className="my-auto">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `border rounded-full px-3 py-1 text-white ${
                  isActive ? 'bg-gray-500' : 'bg-transparent'
                }`
              }
            >
              1
            </NavLink>
          </div>
          <div className="w-full">
            <h1 className="text-gray-300 text-sm">STEP 1</h1>
            <p className="text-white font-bold text-md">YOUR INFO</p>
          </div>
        </div>
        <div className="flex flex-row space-x-5 my-4">
          <div className="my-auto">
            <NavLink
              to="/selectplan"
              className={({ isActive }) =>
                `border rounded-full px-3 py-1 text-white ${
                  isActive ? 'bg-gray-500' : 'bg-transparent'
                }`
              }
            >
              2
            </NavLink>
          </div>
          <div>
            <h1 className="text-gray-300 text-sm">STEP 2</h1>
            <p className="text-white font-bold text-md">SELECT PLAN</p>
          </div>
        </div>
        <div className="flex flex-row space-x-5 my-4">
          <div className="my-auto">
            <NavLink
              to="/addons"
              className={({ isActive }) =>
                `border rounded-full px-3 py-1 text-white ${
                  isActive ? 'bg-gray-500' : 'bg-transparent'
                }`
              }
            >
              3
            </NavLink>
          </div>
          <div>
            <h1 className="text-gray-300 text-sm">STEP 3</h1>
            <p className="text-white font-bold text-md">ADD ON'S</p>
          </div>
        </div>
        <div className="flex flex-row space-x-5 my-4">
          <div className="my-auto">
            <NavLink
              to="/summary"
              className={({ isActive }) =>
                `border rounded-full px-3 py-1 text-white ${
                  isActive ? 'bg-gray-500' : 'bg-transparent'
                }`
              }
            >
              4
            </NavLink>
          </div>
          <div>
            <h1 className="text-gray-300 text-sm">STEP 4</h1>
            <p className="text-white font-bold text-md">SUMMARY</p>
          </div>
        </div>
      </div>

      <div className="px-20 w-full min-h-96">
        <Outlet />
      </div>
    </div>
  );
}

export default FormPage;
