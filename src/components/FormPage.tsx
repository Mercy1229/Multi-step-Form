import { Link, Outlet } from 'react-router-dom';

function FormPage() {
  return (
    <div className="w-2/4 max-h-fit flex flex-row mx-auto bg-white py-2 ps-0 rounded-lg space-x-10">
      {/* Sidebar */}
      <div className="bg-Desktop p-10 rounded-md ms-2">
        <div className="flex flex-row space-x-5 my-2">
          <div className="my-auto">
            <Link to="/">
              <button className="border rounded-full bg-none px-3 py-1 text-white">1</button>
            </Link>
          </div>
          <div className='w-full'>
            <h1 className="text-gray-300 text-sm">STEP 1</h1>
            <p className="text-white font-bold text-md">YOUR INFO</p>
          </div>
        </div>
        
        <div className="flex flex-row space-x-5 my-2">
          <div className="my-auto">
            <Link to="/selectplan">
              <button className="border rounded-full bg-none px-3 py-1 text-white">2</button>
            </Link>
          </div>
          <div>
            <h1 className="text-gray-300 text-sm">STEP 2</h1>
            <p className="text-white font-bold text-md">SELECT PLAN</p>
          </div>
        </div>
        
        <div className="flex flex-row space-x-5 my-2">
          <div className="my-auto">
            <Link to="/addons">
              <button className="border rounded-full bg-none px-3 py-1 text-white">3</button>
            </Link>
          </div>
          <div>
            <h1 className="text-gray-300 text-sm">STEP 3</h1>
            <p className="text-white font-bold text-md">ADD ON'S</p>
          </div>
        </div>
        
        <div className="flex flex-row space-x-5 my-2">
          <div className="my-auto">
            <Link to="/summary">
              <button className="border rounded-full bg-none px-3 py-1 text-white">4</button>
            </Link>
          </div>
          <div>
            <h1 className="text-gray-300 text-sm">STEP 4</h1>
            <p className="text-white font-bold text-md">SUMMARY</p>
          </div>
        </div>
      </div>

      <div className='mb-16 me-8 w-full'>
        <Outlet />
      </div>
    </div>
  );
}

export default FormPage;