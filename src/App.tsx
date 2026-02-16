import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { Leaf, Heart, Users, Target, DollarSign, Menu, X, ChevronRight, TreePine, Mountain } from 'lucide-react'
import { useState } from 'react'

function App() {
  return (
    <Router basename="/chugach-foundation">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mission" element={<MissionPage />} />
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  )
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-green-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <TreePine className="h-8 w-8 text-green-400" />
            <span className="text-xl font-bold">Chugach Foundation</span>
          </Link>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            {isOpen ? <X /> : <Menu />}
          </button>

          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="hover:text-green-300 transition">Home</Link>
            <Link to="/mission" className="hover:text-green-300 transition">Mission</Link>
            <Link to="/volunteer" className="hover:text-green-300 transition">Volunteer</Link>
            <Link to="/contact" className="hover:text-green-300 transition">Contact</Link>
            <Link to="/donate" className="bg-green-500 hover:bg-green-600 px-6 py-2 rounded-lg font-semibold transition">
              Donate
            </Link>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link to="/" className="block hover:text-green-300" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/mission" className="block hover:text-green-300" onClick={() => setIsOpen(false)}>Mission</Link>
            <Link to="/volunteer" className="block hover:text-green-300" onClick={() => setIsOpen(false)}>Volunteer</Link>
            <Link to="/contact" className="block hover:text-green-300" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link to="/donate" className="block hover:text-green-300" onClick={() => setIsOpen(false)}>Donate</Link>
          </div>
        )}
      </div>
    </nav>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <TreePine className="h-6 w-6 text-green-400" />
              <span className="font-bold">Chugach Foundation</span>
            </div>
            <p className="text-slate-400 text-sm">Preserving the Chugach wilderness for future generations.</p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Conservation</h3>
            <div className="space-y-2 text-sm">
              <Link to="/mission" className="block text-slate-400 hover:text-white">Our Mission</Link>
              <Link to="/mission" className="block text-slate-400 hover:text-white">Programs</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Get Involved</h3>
            <div className="space-y-2 text-sm">
              <Link to="/donate" className="block text-slate-400 hover:text-white">Donate</Link>
              <Link to="/volunteer" className="block text-slate-400 hover:text-white">Volunteer</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-sm text-slate-400">
              <p>Anchorage, Alaska</p>
              <p>(907) 555-0400</p>
              <p>info@chugachfoundation.com</p>
              <p className="text-xs mt-4">501(c)(3) Nonprofit • EIN: 92-XXXXXXY</p>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
          <p>&copy; {new Date().getFullYear()} Chugach Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Chugach Foundation - Preserving Alaska's Wilderness</title>
        <meta name="description" content="Chugach Foundation: Dedicated to protecting and preserving the Chugach forests and wilderness. Support conservation through donations and volunteerism." />
      </Helmet>

      <Navigation />

      <section className="relative h-[600px] flex items-center justify-center text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-green-900 via-emerald-800 to-teal-900"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9InRyZWUiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAzMCAwIEwgMzAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjxwYXRoIGQ9Ik0gMCAzMCBMIDYwIDMwIiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjdHJlZSkiLz48L3N2Zz4=')]"></div>
        
        <div className="relative z-10 text-center container mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Protecting Chugach Wilderness</h1>
          <p className="text-xl md:text-2xl mb-8 text-green-200">Conservation, education, and stewardship since 1990</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/donate" className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg font-semibold transition inline-flex items-center">
              <Heart className="mr-2 h-5 w-5" /> Support Conservation
            </Link>
            <Link to="/volunteer" className="bg-white text-green-900 hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition">
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">50K+</div>
              <div className="text-slate-600">Acres Protected</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">1,200+</div>
              <div className="text-slate-600">Volunteers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">85</div>
              <div className="text-slate-600">Conservation Projects</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">33</div>
              <div className="text-slate-600">Years of Service</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-900">Our Conservation Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition">
              <TreePine className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Forest Protection</h3>
              <p className="text-slate-600">Preserving old-growth forests and restoring damaged ecosystems throughout the Chugach region.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition">
              <Mountain className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Wilderness Stewardship</h3>
              <p className="text-slate-600">Maintaining trails, protecting wildlife corridors, and ensuring sustainable recreation access.</p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border hover:shadow-xl transition">
              <Users className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Education Programs</h3>
              <p className="text-slate-600">Teaching environmental stewardship through workshops, school programs, and community outreach.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Protect Alaska's Wilderness</h2>
          <p className="text-xl mb-8 text-green-100">Your donation directly funds conservation projects.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/donate" className="inline-flex items-center bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-slate-100 transition">
              <DollarSign className="mr-2" /> Donate Now <ChevronRight className="ml-2" />
            </Link>
            <Link to="/volunteer" className="inline-flex items-center bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transition border-2 border-white">
              Volunteer With Us
            </Link>
          </div>
          <p className="mt-6 text-sm text-green-200">Tax-deductible • 501(c)(3) nonprofit</p>
        </div>
      </section>

      <Footer />
    </div>
  )
}

function MissionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Our Mission - Chugach Foundation</title>
        <meta name="description" content="Chugach Foundation mission: Preserve Chugach forests and wilderness through conservation, education, and community engagement." />
      </Helmet>
      <Navigation />
      
      <div className="bg-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Mission</h1>
          <p className="text-xl text-green-100">Preserving the Chugach for future generations</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto prose prose-lg mb-12">
          <p className="text-lg text-slate-700">
            The Chugach Foundation is dedicated to protecting and preserving the pristine forests, 
            mountains, and watersheds of Alaska's Chugach region. Through science-based conservation, 
            community education, and sustainable stewardship, we ensure this wilderness remains intact 
            for wildlife and future generations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {[
            {
              title: 'Land Protection',
              items: [
                'Acquire critical habitat areas',
                'Establish conservation easements',
                'Restore damaged ecosystems',
                'Monitor protected lands'
              ]
            },
            {
              title: 'Wildlife Conservation',
              items: [
                'Protect migration corridors',
                'Support salmon habitat',
                'Monitor species populations',
                'Partner with wildlife agencies'
              ]
            },
            {
              title: 'Education & Outreach',
              items: [
                'School environmental programs',
                'Public workshops and events',
                'Volunteer training',
                'Community science projects'
              ]
            },
            {
              title: 'Sustainable Recreation',
              items: [
                'Trail maintenance',
                'Leave No Trace education',
                'Responsible access planning',
                'Outdoor ethics programs'
              ]
            }
          ].map((section, idx) => (
            <div key={idx} className="bg-green-50 p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-6 text-slate-900">{section.title}</h2>
              <ul className="space-y-3">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700">
                    <ChevronRight className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}

function DonatePage() {
  const [amount, setAmount] = useState('50')
  const [frequency, setFrequency] = useState('once')

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Donate - Chugach Foundation</title>
        <meta name="description" content="Support Chugach wilderness conservation. Tax-deductible donations protect forests and wildlife." />
      </Helmet>
      <Navigation />
      
      <div className="bg-green-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Support Conservation</h1>
          <p className="text-xl text-green-100">Protect the Chugach wilderness with your donation</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Make Your Gift</h2>
              
              <div className="bg-white border rounded-xl p-8 shadow-lg">
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-3">Gift Type</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setFrequency('once')}
                      className={`px-4 py-3 rounded-lg font-semibold transition ${
                        frequency === 'once'
                          ? 'bg-green-600 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      One-Time
                    </button>
                    <button
                      onClick={() => setFrequency('monthly')}
                      className={`px-4 py-3 rounded-lg font-semibold transition ${
                        frequency === 'monthly'
                          ? 'bg-green-600 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      Monthly
                    </button>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-3">Donation Amount</label>
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    {['25', '50', '100', '250', '500', '1000'].map((amt) => (
                      <button
                        key={amt}
                        onClick={() => setAmount(amt)}
                        className={`px-4 py-2 rounded-lg font-semibold transition ${
                          amount === amt
                            ? 'bg-green-600 text-white'
                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                        }`}
                      >
                        ${amt}
                      </button>
                    ))}
                  </div>
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    placeholder="Other amount"
                  />
                </div>

                <button className="w-full bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition text-lg">
                  Donate ${amount} {frequency === 'monthly' && '/month'}
                </button>

                <p className="text-sm text-slate-500 mt-4 text-center">
                  Secure payment via Stripe • SSL encrypted
                </p>
              </div>

              <div className="mt-6 bg-slate-100 p-4 rounded-lg text-sm text-slate-600">
                <strong className="block mb-2">Legacy Giving</strong>
                Contact us about including Chugach Foundation in your estate planning.
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">Your Impact</h2>
              
              <div className="space-y-4 mb-8">
                {[
                  { amount: 25, impact: 'Plants 50 native trees' },
                  { amount: 50, impact: 'Maintains 1 mile of wilderness trail' },
                  { amount: 100, impact: 'Educates 30 students about conservation' },
                  { amount: 250, impact: 'Monitors wildlife camera for one year' },
                  { amount: 500, impact: 'Restores 1 acre of damaged habitat' },
                  { amount: 1000, impact: 'Funds comprehensive stream restoration project' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-green-50 p-4 rounded-lg flex items-center gap-4">
                    <div className="font-bold text-2xl text-green-700 min-w-[80px]">${item.amount}</div>
                    <div className="text-slate-600">{item.impact}</div>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 p-6 rounded-lg">
                <h3 className="font-semibold mb-3 text-slate-900 flex items-center gap-2">
                  <Target className="h-5 w-5 text-green-600" />
                  Tax Deductible
                </h3>
                <p className="text-sm text-slate-600">
                  Chugach Foundation is a 501(c)(3) tax-exempt organization. 
                  Your donation is tax-deductible to the fullest extent of the law. 
                  Tax receipts provided for all donations.
                </p>
                <p className="text-xs text-slate-500 mt-3">EIN: 92-XXXXXXY</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

function VolunteerPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Volunteer - Chugach Foundation</title>
        <meta name="description" content="Volunteer with Chugach Foundation. Help protect Alaska's wilderness through hands-on conservation work." />
      </Helmet>
      <Navigation />
      
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Volunteer Opportunities</h1>
          <p className="text-xl text-slate-300">Join us in protecting the Chugach wilderness</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            {
              title: 'Trail Maintenance',
              description: 'Help maintain hiking trails and wildlife corridors. Weekend projects throughout summer.',
              commitment: '1-2 days/month'
            },
            {
              title: 'Habitat Restoration',
              description: 'Plant native species, remove invasive plants, and restore damaged areas.',
              commitment: 'Flexible schedule'
            },
            {
              title: 'Wildlife Monitoring',
              description: 'Assist with camera trap checks, species surveys, and data collection.',
              commitment: '1 day/week'
            },
            {
              title: 'Education Programs',
              description: 'Lead school groups, give presentations, and support environmental education.',
              commitment: '2-4 hours/week'
            }
          ].map((opp, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg border shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-3 text-slate-900">{opp.title}</h3>
              <p className="text-slate-600 mb-4">{opp.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">Time: {opp.commitment}</span>
                <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition text-sm font-semibold">
                  Sign Up
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-green-50 p-8 rounded-xl max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-slate-900">Volunteer Application</h2>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
              <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Phone</label>
              <input type="tel" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Areas of Interest</label>
              <select multiple className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500" size={4}>
                <option>Trail Maintenance</option>
                <option>Habitat Restoration</option>
                <option>Wildlife Monitoring</option>
                <option>Education Programs</option>
              </select>
            </div>
            <button className="w-full bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition font-semibold">
              Submit Application
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  )
}

function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Contact - Chugach Foundation</title>
        <meta name="description" content="Contact Chugach Foundation for conservation partnerships and volunteer opportunities." />
      </Helmet>
      <Navigation />
      
      <div className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-slate-300">We'd love to hear from you</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Contact Form</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Name</label>
                <input type="text" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                <input type="email" className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                <select className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500">
                  <option>Volunteer Opportunity</option>
                  <option>Partnership Inquiry</option>
                  <option>Donation Question</option>
                  <option>General Question</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea rows={5} className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-green-500"></textarea>
              </div>
              <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition font-semibold">
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-slate-900">Office Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-slate-900">Location</h3>
                <p className="text-slate-600">
                  Chugach Foundation<br />
                  750 Conservation Way<br />
                  Anchorage, AK 99515
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-slate-900">Contact</h3>
                <p className="text-slate-600">
                  Phone: (907) 555-0400<br />
                  Email: info@chugachfoundation.com<br />
                  Volunteer: volunteer@chugachfoundation.com
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-slate-900">Office Hours</h3>
                <p className="text-slate-600">
                  Monday - Friday: 9 AM - 5 PM<br />
                  Saturday: 10 AM - 2 PM<br />
                  Sunday: Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
