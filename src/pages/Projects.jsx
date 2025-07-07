
import React from 'react';

const Projects = () => {
  return (
    <section className="p-10 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="space-y-6">
        <div className="p-4 border rounded-lg">
          <h3 className="text-xl font-semibold">AI Chatbot</h3>
          <p>
            Developed using Hugging Face Transformers and DialoGPT. Features contextual conversations,
            history tracking, and runs in a Python CLI.
          </p>
        </div>
        <div className="p-4 border rounded-lg">
          <h3 className="text-xl font-semibold">SQL Injection Vulnerability Scanner</h3>
          <p>
            A Python script that detects SQL injection vulnerabilities using error-based, blind, and time-based techniques.
            Includes secure logging and access control.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
