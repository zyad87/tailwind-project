import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css"; // تأكد من استخدام ملف التنسيق الأساسي للتوافق مع باقي الموقع

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F3EFEE] text-center px-6">
      <h1 className="text-6xl font-Fraunces font-bold text-[#131516] mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-[#707c84] mb-8">Sorry, the page you are looking for does not exist.</p>
      <Link to="/" className="font-Montserrat text-white bg-[#BE7C68] px-6 py-3 rounded-lg hover:bg-[#D08D74] transition duration-200 ease-in-out">
        Go Back to Home
      </Link>
    </div>
  );
}

export default ErrorPage;
