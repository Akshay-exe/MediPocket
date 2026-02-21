import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';
import {
  Target,
  Eye,
  Users,
  Calendar,
  Lightbulb,
  Rocket,
  Award,
  ArrowRight,
  Shield,
  Database,
  UserCheck,
  XCircle,
  Activity,
  Search,
  Pill,
  Linkedin,
  Mail
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export default function AboutPage() {
  const timelineEvents = [
    {
      year: "2020",
      title: "The Problem Identified",
      description: "Our founders experienced firsthand the frustration of managing scattered medical records during a family health crisis.",
      icon: Lightbulb
    },
    {
      year: "2021",
      title: "The Idea Takes Shape",
      description: "After extensive research and interviews with patients and healthcare providers, the concept of MediPocket was born.",
      icon: Target
    },
    {
      year: "2022",
      title: "Building the Solution",
      description: "Our team of healthcare and technology experts came together to develop a secure, user-friendly platform.",
      icon: Rocket
    },
    {
      year: "2023",
      title: "Growing Impact",
      description: "MediPocket now serves thousands of families, helping them manage their health records with confidence.",
      icon: Award
    }
  ];

  const teamMembers = [
    {
      name: "Mr. Gagandeep Singh",
      role: "Co-Founder & CEO",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
      description: "Former physician with 15 years in healthcare technology. Sarah led digital health initiatives at major hospitals before founding MediPocket. She's passionate about patient empowerment and data ownership.",
      expertise: "Healthcare Leadership, Digital Health Strategy"
    },
    {
      name: "Manas Kolaskar",
      role: "Co-Founder & CTO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      description: "Security expert with experience at major tech companies including Google and Amazon. Michael ensures MediPocket's infrastructure meets the highest standards for data protection and privacy.",
      expertise: "Cybersecurity, Cloud Architecture"
    },
    {
      name: "Akshay Jadhav",
      role: "VP of Product",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      description: "UX researcher focused on healthcare accessibility with a background in human-computer interaction. Emily leads user research to ensure MediPocket serves diverse populations effectively.",
      expertise: "Product Design, User Research"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-teal-50 py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10 space-y-6">
              <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                🏥 About MediPocket
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
                Transforming Healthcare<br />
                Through Technology
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                We believe that <strong>managing your health</strong> should be <strong>simple, secure,</strong> and <strong>stress-free</strong>.
                That's why we created MediPocket – a <strong>digital health companion</strong> that puts you in control.
              </p>
            </div>
            <div className="relative">
              <div className="relative" style={{ animation: 'float 6s ease-in-out infinite' }}>
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1758691461990-03b49d969495?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwcHJvZmVzc2lvbmFsJTIwdHJ1c3QlMjBtZWRpY2FsJTIwY29uc3VsdGF0aW9ufGVufDF8fHx8MTc3MDcyMDk2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Healthcare professional trust and consultation"
                  className="w-full h-[28rem] object-cover rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent rounded-2xl"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-emerald-100" style={{ animation: 'pulse-slow 3s ease-in-out infinite' }}>
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Shield className="w-7 h-7 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-gray-900">Trusted Care</p>
                    <p className="text-sm text-gray-500">Family-focused solution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style dangerouslySetInnerHTML={{
          __html: `
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          @keyframes pulse-slow {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.8; }
          }
        `}} />
      </section>

      {/* Intro Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl text-gray-900">
                Who We Are & Why We Built MediPocket
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                MediPocket was born from a personal experience of healthcare chaos. When our founder's
                family faced a medical emergency, critical health records were scattered across different
                doctors, hospitals, and filing cabinets.
              </p>
              {/* <p className="text-xl text-gray-600 leading-relaxed">
                We realized that millions of people face this same challenge every day. Important medical 
                documents get lost, family health histories are incomplete, and sharing records with 
                healthcare providers is unnecessarily complicated.
              </p> */}
              <p className="text-xl text-gray-600 leading-relaxed">
                That's when we decided to build the solution we wished we had – a secure, intelligent
                digital health companion that makes healthcare management simple for everyone.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1663229049306-33b5cd9c2134?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBoZWFsdGhjYXJlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTg2Mzk2ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Family using healthcare technology"
                className="w-full h-[28rem] object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">Our Mission & Vision</h2>
            <p className="text-lg md:text-xl text-gray-600">Guiding principles that drive everything we do</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <Card className="border-2 border-emerald-200 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-10 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Target className="w-12 h-12 text-emerald-600" />
                </div>
                <h3 className="text-3xl font-bold text-emerald-700 mb-6">Our Mission</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To <strong>empower individuals and families</strong> with <strong>secure, accessible, and intelligent</strong>
                  digital health record management that <strong>simplifies healthcare navigation</strong> and
                  improves health outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 shadow-xl bg-white hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-10 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg">
                  <Eye className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-blue-700 mb-6">Our Vision</h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A world where <strong>every person has complete control</strong> over their health information,
                  enabling <strong>better healthcare decisions</strong> and <strong>stronger relationships</strong> with healthcare providers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Principles Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-6 text-emerald-700">Our Core Principles</h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">The values that shape how we build MediPocket</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <CardContent className="p-10">
                <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <Database className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Patients Own Their Data</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Your health information belongs to you. We simply provide the tools to organize
                  and access it securely.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <CardContent className="p-10">
                <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <ArrowRight className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Health Records Should Be Portable</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Medical information should move with you seamlessly across providers, cities,
                  and healthcare systems.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <CardContent className="p-10">
                <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
                  <UserCheck className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Technology Should Simplify Healthcare</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We build intuitive tools that reduce complexity, not add to it. Healthcare is
                  complicated enough.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Are Not Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">What We Are Not</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Clear boundaries help build trust. Here's what MediPocket is not designed to do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Card className="border-2 border-gray-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-10 text-center flex flex-col h-full min-h-[320px]">
                <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-8">
                  <XCircle className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Not a Hospital</h3>
                <p className="text-lg text-gray-600 leading-relaxed flex-1">
                  We don't provide medical treatment, emergency services, or replace your healthcare providers.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-10 text-center flex flex-col h-full min-h-[320px]">
                <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Activity className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Not a Diagnostic Tool</h3>
                <p className="text-lg text-gray-600 leading-relaxed flex-1">
                  We organize your health data but don't diagnose conditions or provide medical advice.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-10 text-center flex flex-col h-full min-h-[320px]">
                <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-8">
                  <Pill className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Not a Doctor Replacement</h3>
                <p className="text-lg text-gray-600 leading-relaxed flex-1">
                  Always consult with qualified healthcare professionals for medical decisions and treatment plans.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center bg-blue-50 border-2 border-blue-200 rounded-2xl p-10 max-w-3xl mx-auto">
            <p className="text-gray-700 text-xl leading-relaxed">
              <strong className="text-blue-700">We are a tool</strong> that helps you organize, access, and manage
              your medical records. We work alongside your healthcare team, not instead of them.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-6 text-emerald-700">Our Story</h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              The journey from problem to solution, and our continued growth
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-emerald-200 to-teal-200 hidden md:block"></div>

            <div className="space-y-16">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="flex-1 md:pr-12">
                    <Card className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${index % 2 === 0 ? 'md:ml-auto md:text-right' : 'md:mr-auto'}`}>
                      <CardContent className="p-8">
                        <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 mb-4">
                          {event.year}
                        </Badge>
                        <h3 className="text-2xl mb-4 text-gray-900">{event.title}</h3>
                        <p className="text-lg text-gray-600 leading-relaxed">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="flex-shrink-0 w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center relative z-10 mx-6">
                    <event.icon className="w-10 h-10 text-white" />
                  </div>

                  <div className="flex-1 md:pl-12">
                    {/* Spacer for alternating layout */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-6 text-emerald-700">Meet Our Team</h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              Healthcare experts and technology innovators working together for your health
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {teamMembers.map((member, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-3">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                      <CardContent className="p-8">
                        <div className="text-center mb-6">
                          <ImageWithFallback
                            src={member.image}
                            alt={member.name}
                            className="w-36 h-36 rounded-full object-cover mx-auto mb-6 border-4 border-emerald-100"
                          />
                          <h3 className="text-2xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                          <p className="text-emerald-600 font-medium mb-4 text-lg">{member.role}</p>
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">{member.description}</p>
                        <div className="pt-6 border-t border-gray-100">
                          <p className="text-sm text-gray-500 mb-4">
                            <strong className="text-gray-700">Expertise:</strong> {member.expertise}
                          </p>
                          <div className="flex justify-center space-x-3">
                            <button className="w-10 h-10 bg-emerald-50 hover:bg-emerald-100 rounded-full flex items-center justify-center transition-colors">
                              <Linkedin className="w-5 h-5 text-emerald-600" />
                            </button>
                            <button className="w-10 h-10 bg-emerald-50 hover:bg-emerald-100 rounded-full flex items-center justify-center transition-colors">
                              <Mail className="w-5 h-5 text-emerald-600" />
                            </button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>

          <div className="text-center mt-10">
            <p className="text-gray-600 text-lg">
              Swipe or use arrows to see more team members
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 md:py-32 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl mb-8 text-white leading-tight">
            Join Us in Transforming Healthcare
          </h2>
          <p className="text-xl md:text-2xl text-emerald-100 mb-12 leading-relaxed">
            Experience the future of health record management. Start organizing your family's
            health information today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-50 px-10 py-6 text-lg">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-emerald-600 px-10 py-6 text-lg">
              Schedule Demo
            </Button>
          </div>
          <p className="text-base text-emerald-200 mt-10">
            Join 50,000+ families already using MediPocket
          </p>
        </div>
      </section>
    </div>
  );
}