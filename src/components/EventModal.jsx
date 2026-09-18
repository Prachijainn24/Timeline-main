import React from "react";
import { X, CalendarDays, MapPin } from "lucide-react";
import "./EventModal.css";

export default function EventModal({ event, onClose }) {
  if (!event) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="event-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal-close"
          onClick={onClose}
          aria-label="Close event details"
        >
          <X size={20} />
        </button>

        <img
          src={event.image}
          alt={`${event.title} event`}
          className="modal-image"
        />

        <div className="modal-content">
          <span className="modal-category">
            {event.category}
          </span>

          <h2>{event.title}</h2>

          <div className="modal-info">
            <span>
              <CalendarDays size={16} />
              {event.date}
            </span>

            <span>
              <MapPin size={16} />
              {event.location}
            </span>
          </div>

          <p>{event.description}</p>
        </div>
      </div>
    </div>
  );
}