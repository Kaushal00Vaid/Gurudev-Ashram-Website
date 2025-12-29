import { useAshram } from "../../context/AshramContext";

function ActivitiesSection() {
  const { activities } = useAshram();

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-rose-700 mb-4">
            Our Service Activities
          </h2>
          <div className="h-1 w-24 bg-rose-600 mx-auto mb-6 rounded"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dedicated to serving humanity through multiple welfare programs
          </p>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {activities.map((activity) => (
            <div
              key={activity.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 border-t-4 border-rose-600"
            >
              <div className="text-5xl mb-4">{activity.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {activity.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                {activity.description}
              </p>
              <button className="text-rose-600 font-bold text-sm hover:text-orange-500 transition-colors">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* CTA Box */}
        <div className="bg-rose-600 rounded-2xl p-10 md:p-16 text-center text-white shadow-xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Support Our Noble Cause
          </h3>
          <p className="text-lg mb-8 opacity-95">
            Your contribution helps us continue vital services to those in need
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/donate"
              className="px-8 py-3 bg-white text-rose-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300"
            >
              Donate Now
            </a>
            <a
              href="/about"
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white/20 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ActivitiesSection;
