import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Users,
  UserRound,
} from "lucide-react";

import events from "../data/events";
import EventModal from "./EventModal";
import "./Timeline.css";

export default function Timeline() {
  const [activeEvent, setActiveEvent] = useState(0);
  const [activeImage, setActiveImage] = useState(0);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const event = events[activeEvent];

  const gallery =
    event.gallery && event.gallery.length > 0
      ? event.gallery
      : [event.image];

  const nextEvent = () => {
    setActiveEvent((current) =>
      current === events.length - 1 ? 0 : current + 1
    );
    setActiveImage(0);
  };

  const previousEvent = () => {
    setActiveEvent((current) =>
      current === 0 ? events.length - 1 : current - 1
    );
    setActiveImage(0);
  };

  const nextImage = () => {
    setActiveImage((current) =>
      current === gallery.length - 1 ? 0 : current + 1
    );
  };

  const previousImage = () => {
    setActiveImage((current) =>
      current === 0 ? gallery.length - 1 : current - 1
    );
  };

  const selectEvent = (index) => {
    setActiveEvent(index);
    setActiveImage(0);
  };

  return (
    <>
      <section className="journey-section" id="timeline">
        {/* Event Timeline */}
        <div className="event-selector">
          <button
            className="selector-arrow"
            onClick={previousEvent}
            aria-label="Previous event"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="event-selector-track">
            {events.map((item, index) => (
              <button
                key={item.id}
                className={`event-selector-item ${
                  activeEvent === index ? "active" : ""
                }`}
                onClick={() => selectEvent(index)}
                aria-label={`Select ${item.title}`}
              >
                <strong className="event-selector-title">
                  {item.title}
                </strong>

                <div className="event-selector-image">
                  <img
                    src={item.image}
                    alt={item.title}
                    onError={(e) => {
                      e.currentTarget.style.visibility = "hidden";
                    }}
                  />
                </div>

                <span className="event-selector-year">
                  {item.year}
                </span>
              </button>
            ))}
          </div>

          <button
            className="selector-arrow"
            onClick={nextEvent}
            aria-label="Next event"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Featured Event */}
        <motion.div
          className="featured-event"
          key={event.id}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          {/* Gallery Section */}
          <div className="event-gallery">
            <div className="main-gallery-image">
              <img
                src={gallery[activeImage]}
                alt={`${event.title} ${activeImage + 1}`}
                onError={(e) => {
                  e.currentTarget.style.visibility = "hidden";
                }}
              />

              <button
                className="gallery-arrow gallery-arrow-left"
                onClick={previousImage}
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                className="gallery-arrow gallery-arrow-right"
                onClick={nextImage}
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>

              <div className="gallery-counter">
                {activeImage + 1} / {gallery.length}
              </div>

              <div className="gallery-label">
                <MapPin size={16} />
                ACM Community
              </div>
            </div>

            {/* Gallery Thumbnails */}
            <div className="gallery-thumbnails">
              {gallery.map((image, index) => (
                <button
                  key={index}
                  className={`gallery-thumbnail ${
                    activeImage === index ? "active" : ""
                  }`}
                  onClick={() => setActiveImage(index)}
                  aria-label={`View image ${index + 1}`}
                >
                  <img
                    src={image}
                    alt={`${event.title} thumbnail ${index + 1}`}
                    onError={(e) => {
                      e.currentTarget.style.visibility = "hidden";
                    }}
                  />
                </button>
              ))}

              {gallery.length > 5 && (
                <div className="gallery-more">
                  +{gallery.length - 5}
                </div>
              )}
            </div>
          </div>

          {/* Event Details */}
          <div className="featured-event-content">
            <span className="featured-date">{event.date}</span>

            <h2>{event.title} Events</h2>

            <div className="featured-line"></div>

            <p>{event.description}</p>

            <div className="featured-meta">
              <span>
                <UserRound size={19} />
                {event.category}
              </span>

              <span>
                <MapPin size={19} />
                {event.location}
              </span>

              <span>
                <Users size={19} />
                {event.audience || "Students"}
              </span>
            </div>

            <button
              className="featured-button"
              onClick={() => setSelectedEvent(event)}
            >
              View Gallery
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </section>

      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </>
  );
}