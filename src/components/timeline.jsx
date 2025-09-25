// components/Timeline.jsx
import React, { useEffect, useRef, useState } from "react";

// TimelineItem Component
const TimelineItem = ({ item, index, onClick }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex items-center justify-between mb-12 transition-all duration-700 ${
        index % 2 === 0 ? "flex-row-reverse" : ""
      } ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <div className={`w-5/12 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
        <div className="relative">
          <div className="p-6 bg-white/10 backdrop-blur-md rounded-lg border border-white/10 relative z-10 transition-transform duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]">
            <div className="flex items-center mb-2">
              <img
                src={item.icon}
                alt="icon"
                className="w-15 h-15 mr-3 p-0 object-contain"
              />
              <h3 className="text-xl font-semibold text-white font-enriqueta">
                {item.title}
              </h3>
            </div>
            <p className="text-sm text-purple-200 font-medium mb-3 font-enriqueta">
              {item.date}
            </p>
            <button
              onClick={() => onClick(item)}
              className="bg-white text-purple-700 px-4 py-2 rounded-lg font-semibold hover:bg-purple-100 transition-colors font-enriqueta"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="w-10 h-10 absolute left-1/2 transform -translate-x-1/2 bg-purple-800 rounded-full border-2 border-white shadow-lg flex items-center justify-center z-10">
        <span className="text-white text-sm font-bold font-enriqueta">
          {item.id}
        </span>
      </div>
      <div className="w-5/12"></div>
    </div>
  );
};

// EventModal Component
const EventModal = ({ event, onClose }) => {
  const statusColors = {
    upcoming: "bg-yellow-500 text-black",
    ongoing: "bg-green-500 text-white",
    completed: "bg-gray-500 text-white",
  };
  return (
    <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50 p-4">
      <div className="bg-[#02020E] border-2 border-purple-500 rounded-xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-purple-300"
        >
          ✕
        </button>
        <h3 className="text-2xl font-bold text-white mb-4 font-enriqueta">
          {event.title}
        </h3>
        <div className="space-y-3 text-purple-200 font-enriqueta">
          <p><span className="font-semibold">Date:</span> {event.date}</p>
          <p><span className="font-semibold">Time:</span> {event.time}</p>
          <p><span className="font-semibold">Venue:</span> {event.venue}</p>
          <p><span className="font-semibold">Description:</span> {event.description}</p>
          <p>
            <span className="font-semibold">Status:</span>
            <span className={`ml-2 px-2 py-1 rounded-full text-xs ${statusColors[event.status]}`}>
              {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

// Main Timeline Component
const Timeline = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Timeline data
  const timelineData = [
    {
      id: 3,
      title: "Startup Pitching Competition: Ideathon 2025",
      date: "26th August 2025",
      time: "2:00 PM - 5:00 PM",
      venue: "AISSMS COE CITP Hall",
      description: "Our very first event, encouraging students to pitch innovative startup ideas.",
      icon: "/icons/competition.png",
      status: "completed",
    },
    {
      id: 2,
      title: "SPPU E-Cell Meetup",
      date: "23rd August 2025",
      time: "2:00 PM - 5:00 PM",
      venue: "SPPU Campus",
      description: "Connected with other E-Cells and built our network.",
      icon: "/icons/meetup.png",
      status: "completed",
    },
    {
      id: 1,
      title: "Establishment of E-CELL at AISSMS COE",
      date: "3rd August 2025",
      time: "11:00 AM - 1:00 PM",
      venue: "Online Meet",
      description: "Formed the official team & welcomed members with an online meet.",
      icon: "/icons/establish.png",
      status: "completed",
    },
  ].sort((a, b) => {
    const order = { upcoming: 1, ongoing: 2, completed: 3 };
    return order[a.status] - order[b.status];
  });

  return (
    <section id="timeline" className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto relative z-10">
        <h1 className="text-3xl font-bold text-center text-white mb-2 font-enriqueta">
          Event Schedule & Timeline
        </h1>
        <p className="text-lg text-center text-purple-200 mb-12 font-enriqueta">
          Follow our journey from establishment to innovation
        </p>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white opacity-60 shadow-[0_0_15px_rgba(255,255,255,0.8)]"></div>
          {timelineData.map((item, i) => (
            <TimelineItem key={item.id} item={item} index={i} onClick={setSelectedEvent} />
          ))}
        </div>
      </div>

      {selectedEvent && (
        <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
      )}
    </section>
  );
};

export default Timeline;