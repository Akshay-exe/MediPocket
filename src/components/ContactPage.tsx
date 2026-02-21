import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  HelpCircle,
  MessageCircle,
  FileText,
  CheckCircle
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Support",
      primary: "support",
      secondary: "We'll respond within 24 hours",
      color: "emerald"
    },
    {
      icon: Phone,
      title: "Phone Support",
      primary: "+1 (555) 123-4567",
      secondary: "Mon-Fri, 9 AM - 6 PM PST",
      color: "blue"
    },
    {
      icon: MapPin,
      title: "Office Location",
      primary: "123 Health Tech Blvd",
      secondary: "San Francisco, CA 94105",
      color: "purple"
    }
  ];

  const supportResources = [
    {
      icon: HelpCircle,
      title: "Help Center",
      description: "Find answers to common questions and get step-by-step guides",
      link: "Visit Help Center"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team in real-time for immediate assistance",
      link: "Start Chat"
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Detailed guides on how to use all MediPocket features",
      link: "View Docs"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 mb-6">
              💬 Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 text-gray-900">
              We're Here to{' '}
              <span className="text-emerald-600">Help</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about MediPocket? Need technical support? Want to share feedback? 
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl mb-6 text-gray-900">Send Us a Message</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and our team will get back to you as soon as possible.
              </p>

              {isSubmitted ? (
                <Card className="border-emerald-200 bg-emerald-50">
                  <CardContent className="p-8 text-center">
                    <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                    <h3 className="text-xl text-emerald-800 mb-2">Message Sent Successfully!</h3>
                    <p className="text-emerald-600">
                      Thank you for contacting us. We'll respond within 24 hours.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-gray-700 mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            required
                            className="w-full"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-gray-700 mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            required
                            className="w-full"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-gray-700 mb-2">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="What's this about?"
                          required
                          className="w-full"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-gray-700 mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us more about your question or feedback..."
                          rows={6}
                          required
                          className="w-full"
                        />
                      </div>
                      
                      <Button type="submit" size="lg" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                        Send Message
                        <Send className="ml-2 w-5 h-5" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl mb-6 text-gray-900">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Prefer to reach out directly? Here are all the ways you can contact our team.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-${info.color}-100 rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <info.icon className={`w-6 h-6 text-${info.color}-600`} />
                        </div>
                        <div>
                          <h3 className="text-lg text-gray-900 mb-1">{info.title}</h3>
                          <p className="text-gray-800 mb-1">{info.primary}</p>
                          <p className="text-sm text-gray-600">{info.secondary}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Office Hours */}
                <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-teal-50">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="text-lg text-gray-900 mb-2">Office Hours</h3>
                        <div className="space-y-1 text-sm text-gray-600">
                          <div className="flex justify-between">
                            <span>Monday - Friday:</span>
                            <span>9:00 AM - 6:00 PM PST</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Saturday:</span>
                            <span>10:00 AM - 4:00 PM PST</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Sunday:</span>
                            <span>Closed</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8">
                <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Interactive Map</p>
                    <p className="text-sm text-gray-400">123 Health Tech Blvd, San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              Need Help? We've Got You Covered
            </h2>
            <p className="text-xl text-gray-600">
              Access our comprehensive support resources for quick answers and guides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportResources.map((resource, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <CardHeader>
                  <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <resource.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">{resource.description}</p>
                  <Button variant="outline" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50">
                    {resource.link}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Emergency Support */}
          <div className="mt-16">
            <Card className="border-0 shadow-lg bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl text-gray-900 mb-2">Emergency Support</h3>
                    <p className="text-gray-600 mb-4">
                      If you're experiencing a critical issue with accessing your medical records 
                      during an emergency, please call our 24/7 emergency support line.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="bg-red-600 hover:bg-red-700 text-white">
                        Call Emergency Support
                      </Button>
                      <span className="text-red-700 self-center">+1 (555) 911-HELP</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}