import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../global/AuthContext';

const Home = () => {
  const { user } = useContext(AuthContext);

  const username = user?.username || user?.displayName || "User";


  return (
    <div className="overflow-hidden h-[calc(100vh-70px)] top-[70px] bg-body flex flex-col justify-center items-center text-text">
      <div className="text-center space-y-6 max-w-2xl px-4">
        <h1 className="xs:text-3xl md:text-5xl font-extrabold md:leading-[55px]">
          Welcomess <span className="text-blue-500">{username}</span> to the Test Generator
        </h1>
        <p className="text-xl">
          Generate custom tests for your Computer Science study material in just a few clicks.
        </p>
        <Link to="/generate-test">
          <button className="mt-5 w-[270px] bg-navbar hover:bg-black text-white text-lg py-2 rounded-lg shadow-lg">
            Start Generating Test
          </button>
        </Link>
      </div>

    
    </div>
  );
};

export default Home;
