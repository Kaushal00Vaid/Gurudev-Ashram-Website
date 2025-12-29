import { useAshram } from "../../context/AshramContext";
import { Link } from "react-router-dom";

function SocialInitiativesSection() {
  const { socialInitiatives } = useAshram();

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-rose-700 mb-4">
            Social Welfare Initiatives
          </h2>
          <div className="h-1 w-24 bg-rose-600 mx-auto mb-6 rounded"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Village outreach programs creating social awareness
          </p>
        </div>

        {/* Intro */}
        <div className="bg-orange-50 rounded-xl shadow-lg p-8 mb-12 border-l-4 border-amber-500">
          <p className="text-center text-gray-700 text-lg leading-relaxed">
            Through our Bhakt Pheri programs, we reach villages conducting
            various social awareness campaigns and welfare activities. Our
            dedicated volunteers work tirelessly to bring positive change.
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {socialInitiatives.map((initiative) => (
            <div
              key={initiative.id}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-l-4 border-rose-600 relative"
            >
              <div className="absolute top-4 right-4 text-5xl font-bold text-rose-100">
                {initiative.id}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {initiative.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {initiative.description}
              </p>
            </div>
          ))}
        </div>

        {/* Impact Box */}
        <div className="bg-gray-900 rounded-2xl p-10 md:p-16 text-white mb-12 shadow-2xl">
          <h3 className="text-3xl font-bold mb-10 text-center">Our Impact</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { number: "100+", label: "Villages Reached" },
              { number: "10,000+", label: "Lives Touched" },
              { number: "50+", label: "Annual Campaigns" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold text-orange-400 mb-2">
                  {item.number}
                </div>
                <p className="text-gray-300 text-lg">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Box */}
        <div className="bg-orange-50 rounded-2xl shadow-xl p-10 md:p-16 text-center border-4 border-rose-600">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Join Our Mission
          </h3>
          <p className="text-gray-600 text-lg mb-8">
            Be part of our social welfare initiatives and help create a better
            society
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donate"
              className="px-8 py-3 bg-rose-600 text-white font-bold rounded-full hover:shadow-lg transition-all duration-300"
            >
              Support Our Cause
            </Link>
            <button className="px-8 py-3 border-2 border-rose-600 text-rose-600 font-bold rounded-full hover:bg-rose-50 transition-all duration-300">
              Become a Volunteer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SocialInitiativesSection;
