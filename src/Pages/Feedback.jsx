import React, { useState } from 'react';

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback submitted:', feedback);
    setFeedback({ name: '', email: '', message: '' });
    const { name, email, message } = feedback;
    const mailtoLink = `mailto:your_email@gmail.com?subject=Feedback from ${name}&body=${message}%0D%0A${email}`;
  
    window.location.href = mailtoLink;
  };

  return (
    <div className='mt-16 ms-16'>
      <br />
      <br />
      <br />

      <div
        className="feed max-w-md mx-auto p-6 bg-gradient-to-r from-slate-900 to-slate-700 rounded-lg"
        style={{ backgroundImage: "url('https://i.pinimg.com/originals/73/39/eb/7339ebff79d3ca233f062add9595cc40.jpg')" }}
      >
        <h2 className="text-2xl font-bold mb-4 text-white">Feedback Form</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-white font-bold mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={feedback.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-white font-bold mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={feedback.email}
                onChange={handleChange}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-white font-bold mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={feedback.message}
                onChange={handleChange}
                rows="4"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                placeholder="Your feedback"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-blue-300 font-bold"
            >
              Submit
            </button>
          </form>
      </div>
    </div>
  );
};

export default Feedback;
