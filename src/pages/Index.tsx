
import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Users, Pizza, Calendar, Heart, Utensils, Home } from 'lucide-react';

const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement;
      if (target.hash) {
        e.preventDefault();
        const element = document.querySelector(target.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => link.addEventListener('click', handleSmoothScroll));

    return () => {
      links.forEach(link => link.removeEventListener('click', handleSmoothScroll));
    };
  }, []);

  const openBookingPopup = () => {
    // The Google Calendar scheduling will be handled by the embedded script
    const script = document.createElement('script');
    script.innerHTML = `
      (function() {
        window.addEventListener('load', function() {
          if (window.calendar && window.calendar.schedulingButton) {
            calendar.schedulingButton.load({
              url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1cRyYPbXbCzP_QqnD2iEG1zUbVvgLjdQV1N_ffIGLnYWGiCl6GlFDFp4sMfIXtkI_lNq2e3sfh?gv=true',
              color: '#FF6B35',
              label: 'Book Your Spot!',
              target: document.body,
            });
          }
        });
      })();
    `;
    document.head.appendChild(script);
  };

  return (
    <>
      {/* Google Calendar Styling and Scripts */}
      <link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet" />
      <script src="https://calendar.google.com/calendar/scheduling-button-script.js" async></script>
      
      <div className="min-h-screen bg-gradient-to-b from-orange-50 to-red-50">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Pizza className="h-8 w-8 text-orange-500" />
                <span className="text-2xl font-bold text-gray-800">Pizza Party!</span>
              </div>
              <div className="hidden md:flex space-x-6">
                <a href="#about" className="text-gray-600 hover:text-orange-500 transition-colors">About</a>
                <a href="#details" className="text-gray-600 hover:text-orange-500 transition-colors">Details</a>
                <a href="#booking" className="text-gray-600 hover:text-orange-500 transition-colors">Book</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
                🍕 Epic Pizza Party Night! 🍕
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Join us for an unforgettable evening of delicious pizza, great company, and endless fun at our cozy home!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-orange-500 hover:bg-orange-600 text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  onClick={openBookingPopup}
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Reserve Your Spot!
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white text-lg px-8 py-6 rounded-full transition-all duration-300"
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="mt-16 rounded-3xl overflow-hidden shadow-2xl mx-auto max-w-4xl animate-scale-in">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=1200&q=80" 
                alt="Delicious pizza spread"
                className="w-full h-64 md:h-96 object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">What's the Deal? 🤔</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We're throwing the ultimate pizza party and you're invited! Think homemade pizzas, great music, fun games, and the best company in town.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Pizza className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Fresh, Homemade Pizzas</h3>
                    <p className="text-gray-600">We'll be making pizzas from scratch with fresh ingredients and love. Vegetarian and gluten-free options available!</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-full">
                    <Users className="h-6 w-6 text-red-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Great Company</h3>
                    <p className="text-gray-600">Join friends old and new for an evening of laughter, stories, and creating memories together.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Home className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Cozy Atmosphere</h3>
                    <p className="text-gray-600">Our home is warm, welcoming, and perfect for a relaxed evening with friends.</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80" 
                  alt="Cozy living room gathering"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section id="details" className="py-16 px-4 bg-gradient-to-r from-orange-100 to-red-100">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Party Details 📋</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-8 text-center">
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Clock className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">When</h3>
                  <p className="text-gray-600">Saturday Evening</p>
                  <p className="text-gray-600">6:00 PM - 10:00 PM</p>
                  <p className="text-sm text-gray-500 mt-2">Choose your preferred date when booking!</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-8 text-center">
                  <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Where</h3>
                  <p className="text-gray-600">Our Home</p>
                  <p className="text-gray-600">Cozy & Comfortable</p>
                  <p className="text-sm text-gray-500 mt-2">Address will be provided after booking</p>
                </CardContent>
              </Card>
              
              <Card className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                <CardContent className="p-8 text-center">
                  <div className="bg-purple-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Utensils className="h-8 w-8 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">What to Bring</h3>
                  <p className="text-gray-600">Just Yourself!</p>
                  <p className="text-gray-600">& Your Appetite</p>
                  <p className="text-sm text-gray-500 mt-2">We've got everything covered</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">Why You Should Join Us 🌟</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: Heart, title: "Made with Love", desc: "Every pizza crafted with care and the finest ingredients" },
                { icon: Users, title: "Great Vibes", desc: "Surrounded by wonderful people and positive energy" },
                { icon: Pizza, title: "Unlimited Pizza", desc: "Eat as much as you want - we've got plenty!" },
                { icon: Home, title: "Feel at Home", desc: "Relaxed, comfortable atmosphere where you can be yourself" }
              ].map((item, index) => (
                <div key={index} className="group hover:scale-105 transition-transform duration-300">
                  <div className="bg-gradient-to-br from-orange-100 to-red-100 p-6 rounded-2xl shadow-md group-hover:shadow-lg transition-shadow">
                    <item.icon className="h-12 w-12 text-orange-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section id="booking" className="py-16 px-4 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Join the Fun? 🎉</h2>
            <p className="text-xl mb-8 opacity-90">
              Space is limited, so book your spot now! We can't wait to share this amazing evening with you.
            </p>
            
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 mb-8">
              <p className="text-lg mb-6">Click the button below to choose your preferred date and time:</p>
              <Button 
                size="lg" 
                className="bg-white text-orange-500 hover:bg-gray-100 text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={openBookingPopup}
              >
                <Calendar className="mr-3 h-6 w-6" />
                Book Your Pizza Party Spot!
              </Button>
            </div>
            
            <p className="text-sm opacity-75">
              Questions? Feel free to reach out to us directly!
            </p>
          </div>

          {/* Google Calendar Integration */}
          <div id="google-calendar-booking" className="hidden">
            <script>
              {`
                (function() {
                  var target = document.currentScript;
                  window.addEventListener('load', function() {
                    if (window.calendar && window.calendar.schedulingButton) {
                      calendar.schedulingButton.load({
                        url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1cRyYPbXbCzP_QqnD2iEG1zUbVvgLjdQV1N_ffIGLnYWGiCl6GlFDFp4sMfIXtkI_lNq2e3sfh?gv=true',
                        color: '#FF6B35',
                        label: 'Book Your Pizza Party Spot!',
                        target,
                      });
                    }
                  });
                })();
              `}
            </script>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-gray-800 text-white">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Pizza className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold">Pizza Party Night</span>
            </div>
            <p className="text-gray-400 mb-4">Creating delicious memories, one slice at a time</p>
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
