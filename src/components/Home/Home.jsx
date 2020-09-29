import React from 'react';
import PropTypes from 'prop-types';
import Typewriter from 'typewriter-effect';

Home.propTypes = {};

function Home(props) {
  return (
    <div>
      <h1 className="flex items-center h-screen justify-center text-6xl text-yellow-900">
        Welcome to <span className="mr-1"></span>
        <Typewriter
          options={{
            strings: ['Banas Pay 🍌'],
            autoStart: true,
            loop: true,
          }}
        />
      </h1>
    </div>
  );
}

export default Home;
