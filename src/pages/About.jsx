
import React from 'react';

const About = () => {
  return (
    <section className="p-10 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="mb-4">
        I'm a Computer Science student at Lovely Professional University with a CGPA of 7.73.
        I’m passionate about Cybersecurity, Artificial Intelligence, and Frontend Development.
        I’ve completed certifications in AI, ethical hacking, and web development.
      </p>
      <p className="mb-4">
        Tools & Technologies: Python, C++, Java, HTML, CSS, MySQL, Flask, Django, PyTorch, TensorFlow, Git, Linux.
      </p>
      <a href="/src/assets/Gagan_Sai_Eashwar_CV.docx" download className="text-blue-500 underline">
        Download My CV
      </a>
    </section>
  );
};

export default About;
