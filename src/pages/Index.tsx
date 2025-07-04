import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MapPin,
  Clock,
  Users,
  Pizza,
  Calendar,
  Heart,
  Utensils,
  Home,
} from "lucide-react";

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((link) => link.addEventListener("click", handleSmoothScroll));

    return () => {
      links.forEach((link) =>
        link.removeEventListener("click", handleSmoothScroll)
      );
    };
  }, []);

  // Handler to open the booking page in a new tab
  const openBookingPopup = () => {
    window.open(
      "https://calendar.app.google/gGZnnxofhHVqzjNY6",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Pizza className="h-8 w-8 text-orange-500" />
                <span className="text-2xl font-bold text-gray-800">
                  Pizza Night!
                </span>
              </div>
              <div className="hidden md:flex space-x-6">
                <a
                  href="#about"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  About
                </a>
                <a
                  href="#details"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Details
                </a>
                <a
                  href="https://calendar.app.google/DaqbCYADwsqs94Y86"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-orange-500 transition-colors"
                >
                  Pick
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
                🍕 Epic Pizza Night! 🍕
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Okay maybe not ‘epic’, but enjoyable? I think we can say
                enjoyable. Join us for an evening of delicious pizza and great
                company!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={openBookingPopup}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Pick Your Night!
                </Button>
                {/* remove this button 
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white text-lg px-8 py-6 rounded-full transition-all duration-300"
                  onClick={() =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Learn More
                </Button> */}
              </div>
            </div>

            {/* Hero Image */}
            <div className="mt-16 rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-4xl animate-scale-in">
              <img
                src="https://photos.smugmug.com/photos/i-ppHgLXS/1/MCPPVXPtbLFfzpHZHghdCfvVBKHKKjMbWCd7wSxWb/L/i-ppHgLXS-L.jpg"
                alt="Delicious pizza"
                className="w-full h-64 md:h-[28rem] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                What's the Deal? 🤔
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We value community and friendships — and honestly we just don’t
                see you enough! Between COVID, busy family life and living in
                the ‘burbs, well you gotta make that extra special effort or it
                just doesn’t happen. So as a family we’ve decided to host a
                series of Pizza Nights to catch up with many of our favorite
                peeps!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Pizza className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Fresh, Homemade Pizzas
                    </h3>
                    <p className="text-gray-600">
                      We’ve got an outdoor pizza oven and we know how to use it
                      (sorta). We will have the dough, sauce, cheese, basil and
                      pepperoni. If you have favorite, special, or unique
                      toppings you want to try — bring ‘em, let’s get crazy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Great Company
                    </h3>
                    <p className="text-gray-600">
                      We’re us and you’re you so it’s going to be good. Let’s
                      swap some laughs, stories and create some new memories
                      together.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Home className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Homey Atmosphere
                    </h3>
                    <p className="text-gray-600">
                      We’re not getting fancy here people. We’re keeping it
                      relaxed and casual. We do not live in a magazine and while
                      we will try and clean up a bit for you it’s not gonna be
                      perfect. That’s good, our commitment to mediocre cleaning
                      means this is a sustainable practice for us.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Home className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                      Contribution
                    </h3>
                    <p className="text-gray-600">
                      You don’t need to bring anything but if you want to bring
                      a bottle of wine or a little something for dessert it
                      doesn’t hurt!
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="https://photos.smugmug.com/photos/i-MN4XPSN/0/MvrDmm3HcrKKv3sB5XG2DrPmrnbQJp3Vw6kGVwQCc/M/i-MN4XPSN-M.jpg"
                  alt="Cozy Kitchen Gathering"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
              What else to Expect 🌟
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Heart,
                  title: "Bring the Littles",
                  desc: "Making pizza with kids is chaotic. We’ll lean into that. They can watch a movie after we eat.",
                },
                {
                  icon: Users,
                  title: "Great Vibes",
                  desc: "Positive energy — around the kitchen island talking and making food.",
                },
                {
                  icon: Pizza,
                  title: "Pizza",
                  desc: "Obviously. Pizza for dinner. We have basic toppings, feel free to bring your own!",
                },
                {
                  icon: Home,
                  title: "Limited Time",
                  desc: "We do these things in about 2 hours. You can get the kids to bed on time.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group hover:scale-105 transition-transform duration-300"
                >
                  <div className="bg-gradient-to-br from-orange-100 to-red-100 p-6 rounded-2xl shadow-md group-hover:shadow-lg transition-shadow">
                    <item.icon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Let's be real Section */}
        <section
          id="details"
          className="py-16 px-4 bg-gradient-to-r from-orange-100 to-red-100"
        >
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                Let's be real 💯
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg">
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-center">
                  Look, we know having a whole website and a booking page might
                  seem a little...impersonal? Silly? But it is just so we are
                  able to easily show our availability and give you a way to
                  easily say yes -- all in hopes that we actually get something
                  with you on our calendar. We know you've got a million things
                  going on, but this is just one relaxed 2ish hour evening --
                  just good food, good people, and probably too much cheese.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section
          id="booking"
          className="py-16 px-4 bg-gradient-to-r from-orange-500 to-red-500 text-white"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Join the Fun? 🎉
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We know we're a little extra but we schedule these out WAY in
              advance so you have no excuses. Take a look at the options and
              fill out our booking form, that's it! If we have to cancel on you
              or vice versa, no biggie, we take rain checks.
            </p>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-8">
              <p className="text-lg mb-6">
                Click the button below to choose your preferred date and time:
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-orange-500 hover:bg-gray-100 text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mt-6"
              >
                <a
                  href="https://calendar.app.google/gGZnnxofhHVqzjNY6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="mr-3 h-6 w-6" />
                  Pick Your Night!
                </a>
              </Button>
            </div>

            <p className="text-sm opacity-75">
              Questions? Feel free to{" "}
              <a
                href="mailto:casablahnik@gmail.com"
                className="underline text-white hover:text-orange-100"
              >
                reach out to us directly!
              </a>
            </p>
          </div>

          {/* Google Calendar Integration handled via React useEffect and ref */}
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-gray-800 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Pizza className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold">Pizza Night</span>
            </div>
            <p className="text-gray-400 mb-4">
              Friends, community, social networking the old fashioned way
            </p>
            <p className="text-sm text-gray-500">
              Can't wait to see you there! 🍕❤️
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Index;
