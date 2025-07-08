import React from "react";

const AboutPage = () => {
  return (
    <section className="bg-white text-gray-800">
        <div className="container mx-auto py-10">
            <h1 className="text-4xl font-bold text-center text-[#ff4c11] mb-6">
                About Phonora
            </h1>
            <p className="text-lg text-gray-700 mb-4 text-justify max-w-3xl mx-auto">
                Welcome to <strong className="text-[#ff4c11]">Phonora</strong> – your trusted destination for the latest and most reliable smartphones. We are passionate about helping people find the right mobile devices that match their lifestyle, needs, and budget.
            </p>
            
            <div className="mt-8 max-w-3xl mx-auto space-y-6">
                <section>
                <h2 className="text-2xl font-semibold">Our Mission</h2>
                <p className="text-gray-600 mt-2">
                    At phonora, our mission is to provide customers with high-quality mobile phones, exceptional service, and honest guidance. Whether you're looking for the newest flagship or a reliable budget-friendly phone, we’re here to make sure you find the perfect fit.
                </p>
                </section>

                <section>
                <h2 className="text-2xl font-semibold">Why Choose Us?</h2>
                <ul className="list-disc list-inside text-gray-600 mt-2">
                    <li>Wide range of brands and models</li>
                    <li>Transparent pricing and secure payment</li>
                    <li>Fast and reliable delivery</li>
                    <li>Dedicated customer support</li>
                </ul>
                </section>

                <section>
                <h2 className="text-2xl font-semibold">Contact Us</h2>
                <p className="text-gray-600 mt-2">
                    Have questions or need support? We’d love to hear from you.
                </p>
                <div className="mt-2 text-gray-700">
                    <p>Email: <a href="mailto:support@phonora.com" className="text-primary">support@phonora.com</a></p>
                    <p>Phone: <a href="tel:+8801765227054" className="text-primary">+880 1765 227 054</a></p>
                    <p>Address: 123 Mobile Street, Dhaka, Bangladesh</p>
                </div>
                </section>
            </div>
        </div>
    </section>
  );
};

export default AboutPage;
