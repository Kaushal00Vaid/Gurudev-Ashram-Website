import { Link } from "react-router-dom";

function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-orange-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-rose-700 mb-4">
            About Shri Gurudev Ashram
          </h2>
          <div className="h-1 w-24 bg-rose-600 mx-auto mb-6 rounded"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Understanding our mission, vision, and core values
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          {/* Left Column - Text */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-rose-600 mb-4 pl-5 border-l-4 border-amber-500">
              Our Mission
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Shri Gurudev Ashram is dedicated to serving humanity through
              spiritual enlightenment and compassionate social service. We
              believe in uplifting society by providing care, education, and
              support to those in need.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-rose-600 mb-4 pl-5 border-l-4 border-amber-500">
              Our Vision
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              To create a society where spiritual growth and social welfare go
              hand in hand, where no one is left behind.
            </p>

            <Link
              to="/about"
              className="inline-block px-8 py-3 bg-rose-600 text-white font-bold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              Read Our Complete Story
            </Link>
          </div>

          {/* Right Column - Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl h-96">
            <img
              src="/images/ashram-main.jpg"
              alt="Shri Gurudev Ashram"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-end p-6">
              <div className="text-white">
                <h4 className="text-2xl font-bold mb-2">
                  Established for Service
                </h4>
                <p className="text-lg">
                  Touching thousands of lives every year
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Core Values
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: "Seva (Service)", desc: "Selfless service to humanity" },
              {
                title: "Karuna (Compassion)",
                desc: "Care for all living beings",
              },
              {
                title: "Dharma (Righteousness)",
                desc: "Moral and ethical principles",
              },
              {
                title: "Adhyatma (Spirituality)",
                desc: "Inner growth and connection",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-amber-500"
              >
                <h4 className="text-xl font-bold text-rose-600 mb-3">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { number: "500+", label: "Children Cared For" },
            { number: "200+", label: "Elderly Residents" },
            { number: "1000+", label: "Students Educated" },
            { number: "300+", label: "Cows Protected" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-rose-600 mb-3">
                {stat.number}
              </div>
              <p className="text-gray-600 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
