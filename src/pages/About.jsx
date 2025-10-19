import { companyInfo } from '../data/products'
import broom1 from '../assets/brooms_image/IMG_20200820_103326.jpg'
import broom2 from '../assets/brooms_image/IMG_20200825_135236.jpg'
import broom3 from '../assets/brooms_image/IMG-20200807-WA0009.jpeg'

const About = () => {
  const milestones = [
    { year: '1999', event: 'Company Founded', description: 'Started with a vision to manufacture quality brooms' },
    { year: '2005', event: 'First Export', description: 'Began exporting to neighboring countries' },
    { year: '2010', event: 'ISO Certification', description: 'Achieved international quality standards' },
    { year: '2015', event: 'Expansion', description: 'Expanded production capacity to 10,000+ brooms/month' },
    { year: '2020', event: 'Global Reach', description: 'Now exporting to 15+ countries worldwide' },
    { year: '2024', event: 'Digital Presence', description: 'Launched modern digital platform for global customers' }
  ]

  const values = [
    {
      title: 'Quality First',
      description: 'We never compromise on quality. Every broom undergoes rigorous quality checks.',
      icon: '⭐'
    },
    {
      title: 'Sustainability',
      description: 'Using 100% natural coconut fiber, we promote eco-friendly cleaning solutions.',
      icon: '🌱'
    },
    {
      title: 'Innovation',
      description: 'Combining traditional craftsmanship with modern manufacturing techniques.',
      icon: '💡'
    },
    {
      title: 'Customer Focus',
      description: 'Our customers success is our success. We build lasting relationships.',
      icon: '🤝'
    }
  ]

  const achievements = [
    { metric: '25+', label: 'Years of Excellence' },
    { metric: '10,000+', label: 'Brooms per Month' },
    { metric: '15+', label: 'Export Countries' },
    { metric: '500+', label: 'Satisfied Clients' },
    { metric: '50+', label: 'Skilled Workers' },
    { metric: '99%', label: 'Customer Satisfaction' }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">About Astraval Brooms</h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              {companyInfo.experience} Years of Manufacturing Excellence in Coconut Fiber Brooms
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Journey</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Established in {companyInfo.established}, Astraval Brooms has grown from a small local 
                manufacturer to India's leading producer of premium coconut fiber brooms. With over 
                {companyInfo.experience} years of experience, we have built a reputation for quality, 
                reliability, and innovation in the cleaning industry.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our commitment to excellence has enabled us to serve customers across India and export 
                to multiple countries, making us a trusted name in the global market. We take pride in 
                our traditional craftsmanship combined with modern manufacturing processes.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {achievements.slice(0, 4).map((achievement, index) => (
                  <div key={index} className="text-center p-4 bg-white rounded-lg shadow-md">
                    <div className="text-2xl font-bold text-green-600">{achievement.metric}</div>
                    <div className="text-sm text-gray-600">{achievement.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img src={broom1} alt="Manufacturing Process" className="rounded-lg shadow-lg" />
              <img src={broom2} alt="Quality Control" className="rounded-lg shadow-lg mt-8" />
              <img src={broom3} alt="Finished Products" className="rounded-lg shadow-lg -mt-8" />
              <div className="bg-green-600 text-white p-6 rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-bold">ISO</div>
                  <div className="text-sm">Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-green-50 transition-colors">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Milestones</h2>
            <p className="text-xl text-gray-600">Key moments in our journey of excellence</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-green-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                      <div className="text-2xl font-bold text-green-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-4 h-4 bg-green-600 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-xl text-green-100">Numbers that speak for our excellence</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{achievement.metric}</div>
                <div className="text-green-100">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About