import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <Image
          src="/hero-background.jpg"
          alt="Network diagram"
          layout="fill"
          objectFit="cover"
          className="absolute z-0"
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl font-bold mb-4">Simplify Configuration Management with Automated Best Practices</h1>
          <p className="text-xl mb-8">Streamline your DevOps workflow with AI-powered configuration analysis and optimization.</p>
          <div className="space-x-4">
            <Link href="/compare" className="bg-blue-500 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition duration-300">
              Get Started
            </Link>
            <Link href="/learn-more" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-500 transition duration-300">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { title: 'Upload', description: 'Upload your YAML file', icon: '📤' },
            { title: 'Compare', description: 'Compare against best practices', icon: '🔍' },
            { title: 'Analyze', description: 'Analyze missing configurations', icon: '📊' },
            { title: 'Remediate', description: 'Implement suggested remediations', icon: '🔧' },
          ].map((step, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl mb-4 transform group-hover:scale-110 transition duration-300">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Automatic Comparison', description: 'Instantly compare your configurations against industry best practices', icon: '🔄' },
              { title: 'Detailed Analysis', description: 'Get in-depth insights into your configuration health', icon: '📈' },
              { title: 'Customizable Best Practices', description: 'Tailor benchmarks to your organization\'s needs', icon: '⚙️' },
              { title: 'Real-Time Remediation', description: 'Receive actionable suggestions for immediate improvements', icon: '⚡' },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Link href={`/features/${feature.title.toLowerCase().replace(' ', '-')}`} className="text-blue-500 hover:underline">
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'John Doe', role: 'DevOps Engineer at TechCorp', quote: 'DevSecOps Doctor has revolutionized our configuration management process.', image: '/john-doe.jpg' },
            { name: 'Jane Smith', role: 'Security Analyst at SecureNet', quote: 'The insights provided by this tool have significantly improved our security posture.', image: '/jane-smith.jpg' },
            { name: 'Alex Johnson', role: 'CTO at InnovateTech', quote: 'This tool is a game-changer for maintaining consistent best practices across our infrastructure.', image: '/alex-johnson.jpg' },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <Image src={testimonial.image} alt={testimonial.name} width={50} height={50} className="rounded-full mr-4" />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <p className="italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { question: 'How do I get started?', answer: 'Simply sign up for an account and upload your first configuration file to begin.' },
              { question: 'What file formats are supported?', answer: 'We currently support YAML, JSON, and XML configurations.' },
              { question: 'Is there a free trial?', answer: 'Yes, we offer a 14-day free trial with full access to all features.' },
              { question: 'How do I contact support?', answer: 'You can reach our support team via email at support@devsecops-doctor.com or through the in-app chat.' },
            ].map((faq, index) => (
              <details key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <summary className="text-xl font-semibold cursor-pointer">{faq.question}</summary>
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}