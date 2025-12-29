import { Link } from "react-router-dom";
import { useAshram } from "../../context/AshramContext";

function EventsSection() {
  const { upcomingEvents } = useAshram();

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <section className="py-20 md:py-28 bg-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-rose-700 mb-4">
            Upcoming Events
          </h2>
          <div className="h-1 w-24 bg-rose-600 mx-auto mb-6 rounded"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us in our spiritual and social initiatives
          </p>
        </div>

        {/* Events List */}
        <div className="space-y-6 mb-12">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl hover:translate-x-2 transition-all duration-300 border-l-4 border-rose-600 p-6"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                {/* Date Badge */}
                <div className="shrink-0">
                  <div className="bg-rose-600 text-white rounded-lg p-4 text-center shadow-lg border-2 border-orange-300">
                    <div className="text-sm font-bold uppercase">
                      {new Date(event.date).toLocaleDateString("en-US", {
                        month: "short",
                      })}
                    </div>
                    <div className="text-3xl font-bold">
                      {new Date(event.date).getDate()}
                    </div>
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-2">
                    {formatDate(event.date)}
                  </p>
                  <p className="text-gray-600">{event.description}</p>
                  {event.registrationOpen && (
                    <div className="mt-3">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full animate-pulse">
                        Registration Open
                      </span>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2 w-full md:w-auto">
                  <Link
                    to="/events"
                    className="px-6 py-2 bg-rose-600 text-white font-bold rounded-full text-center hover:shadow-lg transition-all duration-300"
                  >
                    Details
                  </Link>
                  {event.registrationOpen && (
                    <button className="px-6 py-2 border-2 border-rose-600 text-rose-600 font-bold rounded-full hover:bg-rose-50 transition-all duration-300">
                      Register
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center">
          <Link
            to="/events"
            className="inline-block px-8 py-3 bg-rose-600 text-white font-bold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}

export default EventsSection;
