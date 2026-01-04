import React from 'react';

const About = () => {
    return (
        <div className="max-w-[1200px] mx-auto px-4 py-10">
            <h1 className="text-4xl font-bold text-center mb-8 text-primary">About PawMart</h1>
            <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="flex-1">
                    <img 
                        src="https://images.unsplash.com/photo-1583511655826-05700442b31b?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                        alt="About Us" 
                        className="rounded-lg shadow-lg w-full h-[400px] object-cover"
                    />
                </div>
                <div className="flex-1 space-y-4">
                    <p className="text-lg text-secondary/80">
                        Welcome to <span className="font-bold text-primary">PawMart</span>, your one-stop destination for all things pests and pet supplies. We are passionate about animals and dedicated to connecting pet lovers with the best resources, products, and community.
                    </p>
                    <p className="text-lg text-secondary/80">
                        Our mission is to create a safe and loving environment for pets by providing a platform where you can find healthy pets, quality supplies, and expert advice. Whether you are adopting a new furry friend or looking for the best food and toys, we are here to help.
                    </p>
                    <p className="text-lg text-secondary/80">
                        We believe that every pet deserves a loving home and the best care. Join our community today and let's make the world a better place for our four-legged friends!
                    </p>
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold mb-2 text-primary">Why Choose Us?</h3>
                        <ul className="list-disc list-inside space-y-1 text-secondary/80">
                            <li>Verified Listings</li>
                            <li>Quality Supplies</li>
                            <li>Community Support</li>
                            <li>Secure Transactions</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
