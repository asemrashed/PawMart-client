import React from 'react';
import Swal from 'sweetalert2';

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const message = form.message.value;

        // Simulate sending data (in reality, you'd call an API here)
        console.log({ name, email, message });

        Swal.fire({
            title: "Message Sent!",
            text: "Thank you for contacting us. We will get back to you soon.",
            icon: "success",
            confirmButtonColor: "#f6a11b"
        });

        form.reset();
    };

    return (
        <div className="max-w-[1200px] mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold text-center mb-8 text-primary">Contact Us</h1>
            
            <div className="flex flex-col md:flex-row gap-10">
                {/* Contact Info */}
                <div className="flex-1 space-y-6 bg-base-200 p-8 rounded-lg">
                    <h2 className="text-2xl font-semibold text-secondary">Get in Touch</h2>
                    <p className="text-secondary/70">
                        Have questions or need assistance? We are here to help!
                    </p>
                    
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <span className="text-primary font-bold">Address:</span>
                            <span>123 Pet Street, Paw City, NY 10001</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-primary font-bold">Phone:</span>
                            <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-primary font-bold">Email:</span>
                            <span>support@pawmart.com</span>
                        </div>
                    </div>

                     <div className="mt-8">
                        <img 
                            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            alt="Contact Dog" 
                            className="rounded-lg shadow-md w-full h-[200px] object-cover"
                        />
                    </div>
                </div>

                {/* Contact Form */}
                <div className="flex-1 bg-base-100 p-8 shadow-lg rounded-lg border border-base-300">
                    <h2 className="text-2xl font-semibold mb-6 text-center text-secondary">Send a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Name</span>
                            </label>
                            <input 
                                type="text" 
                                name="name" 
                                placeholder="Your Name" 
                                className="input input-bordered w-full focus:outline-none focus:border-primary" 
                                required 
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input 
                                type="email" 
                                name="email" 
                                placeholder="Your Email" 
                                className="input input-bordered w-full focus:outline-none focus:border-primary" 
                                required 
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Message</span>
                            </label>
                            <textarea 
                                name="message" 
                                placeholder="Your Message" 
                                className="textarea textarea-bordered w-full h-32 focus:outline-none focus:border-primary" 
                                required
                            ></textarea>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary text-white font-bold">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
