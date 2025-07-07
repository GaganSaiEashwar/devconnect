
import React from 'react';

const Home = () => {
  return (
    <section className="text-center p-10">
      <img src="/profile.jpg" alt="Gagan Sai Eashwar" className="w-40 h-40 rounded-full mx-auto" />
      <h1 className="text-4xl font-bold mt-4">Hi, I'm Gagan Sai Eashwar 👋</h1>
      <p className="text-xl mt-2">AI & Cybersecurity Enthusiast | Frontend Developer</p>
      <div className="mt-4 flex justify-center gap-4">
        <a href="https://github.com/GaganSaiEashwar" target="_blank">GitHub</a>
        <a href="https://linkedin.com/in/gagansaieashwar" target="_blank">LinkedIn</a>
        <a href="mailto:gagansaieashwar@gmail.com">Email</a>
      </div>
    </section>
  );
};

export default Home;
