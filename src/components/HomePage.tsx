import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';
import { 
  Upload, 
  Shield, 
  Clock, 
  Share, 
  Star, 
  CheckCircle,
  ArrowRight,
  FileText,
  Heart,
  Users,
  Scan,
  Globe,
  Sparkles,
  Baby,
  Stethoscope,
  HeartHandshake,
  AlertCircle,
  Zap,
  TrendingUp,
  MapPin
} from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';

export default function HomePage() {
  const [activeAudience, setActiveAudience] = useState(0);

  const features = [
    {
      icon: Upload,
      title: "Upload & Store Reports",
      description: "Securely upload and organize all your medical documents in one place"
    },
    {
      icon: Shield,
      title: "Emergency Health Card",
      description: "Quick access to critical health information when you need it most"
    },
    {
      icon: Clock,
      title: "Timeline of Medical History",
      description: "View your health journey with a comprehensive timeline"
    },
    {
      icon: Share,
      title: "Secure Sharing with Doctors",
      description: "Share reports instantly with healthcare providers securely"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Caregiver",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote: "MediPocket has been a lifesaver managing my elderly mother's medical records. Everything is organized and accessible when we need it."
    },
    {
      name: "Michael Chen",
      role: "Chronic Patient",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "Living with diabetes means constant monitoring. MediPocket helps me track everything and share data with my doctors effortlessly."
    },
    {
      name: "Emily Rodriguez",
      role: "Family Admin",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "Managing health records for a family of five was chaos. Now everything is in one secure place, and I can access any record instantly."
    }
  ];

  const credibilityPoints = [
    {
      icon: AlertCircle,
      stat: "₹12,000",
      description: "Average cost of reconstructing lost medical records per family"
    },
    {
      icon: Shield,
      stat: "1 in 4",
      description: "patients unable to provide critical medical history during emergencies"
    },
    {
      icon: Users,
      stat: "68%",
      description: "of families struggle to manage health records for elderly parents"
    }
  ];

  const howItWorksSteps = [
    {
      step: "1",
      icon: Upload,
      title: "Upload Documents",
      description: "Take a photo or upload prescriptions and medical reports directly to the app"
    },
    {
      step: "2",
      icon: Scan,
      title: "OCR Scans & Organizes",
      description: "Our system automatically reads and categorizes your medical information"
    },
    {
      step: "3",
      icon: Globe,
      title: "Access Anytime, Anywhere",
      description: "View and manage your health records securely from any device"
    },
    {
      step: "4",
      icon: Sparkles,
      title: "Future Insights",
      description: "Get intelligent reminders and health analytics as we grow"
    }
  ];

  const targetAudiences = [
    {
      icon: Stethoscope,
      title: "Long-term Care Patients",
      description: "Managing chronic conditions or recurring treatments with multiple specialists and ongoing documentation needs"
    },
    {
      icon: Baby,
      title: "Families with Multiple Members",
      description: "Parents managing health records for children, elderly parents, or multiple family members in one place"
    },
    {
      icon: HeartHandshake,
      title: "Caregivers & Dependents",
      description: "Those supporting elderly parents, relatives, or loved ones who need organized medical record access"
    }
  ];

  const productPhases = [
    {
      phase: "Phase 1",
      status: "Launching February",
      title: "MVP - Core Features",
      icon: Zap,
      features: [
        "Upload prescriptions and reports",
        "Basic OCR scanning",
        "Family access and management",
        "View and organize medical records"
      ],
      color: "emerald"
    },
    {
      phase: "Phase 2",
      status: "Coming Soon",
      title: "Enhanced Organization",
      icon: Shield,
      features: [
        "Digital health card",
        "Health analytics dashboard",
        "Advanced organization tools",
        "Medical history summaries"
      ],
      color: "blue"
    },
    {
      phase: "Phase 3",
      status: "Future",
      title: "Intelligent Insights",
      icon: TrendingUp,
      features: [
        "Find doctors near you",
        "Doctor ratings and reviews",
        "AI-powered health insights",
        "Smart notifications and reminders"
      ],
      color: "purple"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100">
                🏥 Digital Health Revolution
              </Badge>
              <h1 className="text-5xl md:text-6xl lg:text-7xl text-gray-900 leading-tight">
                Your Health, Always in One{' '}
                <span className="text-emerald-600">Safe Pocket</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-xl">
                A secure, digital locker for all your medical reports – accessible anytime, 
                anywhere. Never lose important health documents again.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg">
                  Coming Soon!
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-emerald-300 text-emerald-700 hover:bg-emerald-50 px-8 py-6 text-lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691461932-d0aa0ebf6b31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwcmVjb3JkcyUyMGRpZ2l0YWwlMjBoZWFsdGh8ZW58MXx8fHwxNzU4NzI1MDI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Digital health records transformation"
                className="w-full h-[28rem] object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
                <div className="flex items-center space-x-4">
                  <div className="w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-7 h-7 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-base font-medium">Secure & Encrypted</p>
                    <p className="text-sm text-gray-500">HIPAA Compliant</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-emerald-700">
              Everything You Need for Digital Health Management
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools designed to make healthcare management simple, secure, and accessible.
            </p>
          </div>
          
          {/* Two column asymmetric layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Primary Feature - Larger */}
            <div className="lg:row-span-2 bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-full flex flex-col">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-md">
                  <Upload className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">{features[0].title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed flex-grow">{features[0].description}</p>
                <div className="mt-6 pt-6 border-t border-emerald-200">
                  <p className="text-sm text-emerald-700 font-medium">✓ Core Feature</p>
                </div>
              </div>
            </div>

            {/* Secondary Features - Smaller stacked */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{features[1].title}</h3>
                  <p className="text-base text-gray-700 leading-relaxed">{features[1].description}</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{features[2].title}</h3>
                  <p className="text-base text-gray-700 leading-relaxed">{features[2].description}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Fourth Feature - Full Width Banner Style */}
          <div className="mt-8 bg-gradient-to-r from-teal-50 via-emerald-50 to-cyan-50 rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-md">
                <Share className="w-10 h-10 text-teal-600" />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{features[3].title}</h3>
                <p className="text-lg text-gray-700 leading-relaxed">{features[3].description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem → Solution Section */}
      <section className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col h-full space-y-8">
              <div>
                <Badge className="bg-red-100 text-red-700 hover:bg-red-100 mb-6">
                  ❌ The Problem
                </Badge>
                <h2 className="text-4xl md:text-5xl mb-8 text-gray-900">
                  Scattered Files, Endless Frustration
                </h2>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <FileText className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-600">Lost medical reports when you need them most</p>
                </div>
                <div className="flex items-start space-x-4">
                  <FileText className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-600">Difficulty sharing records with multiple doctors</p>
                </div>
                <div className="flex items-start space-x-4">
                  <FileText className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-600">No clear timeline of your health journey</p>
                </div>
              </div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1542387740-67856d836e59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2F0dGVyZWQlMjBtZWRpY2FsJTIwcGFwZXJzJTIwZG9jdW1lbnRzfGVufDF8fHx8MTc1ODcyNTAyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Scattered medical papers and documents"
                className="w-full h-72 object-cover rounded-xl shadow-lg mt-auto"
              />
            </div>
            
            <div className="flex flex-col h-full space-y-8">
              <div>
                <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 mb-6">
                  ✅ The Solution
                </Badge>
                <h2 className="text-4xl md:text-5xl mb-8 text-gray-900">
                  One App, All Your Health Data
                </h2>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-600">All records organized and searchable in one place</p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-600">Instant, secure sharing with healthcare providers</p>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                  <p className="text-lg text-gray-600">Complete health timeline with AI insights</p>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg mt-auto h-72 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <Heart className="w-6 h-6 text-emerald-600" />
                    <span className="text-base font-medium">MediPocket App</span>
                  </div>
                  <Badge className="bg-emerald-100 text-emerald-700">Live</Badge>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Blood Test - Jan 2024</span>
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">X-Ray Report - Dec 2023</span>
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Prescription - Nov 2023</span>
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Digital Medical Records Matter */}
      <section className="py-20 md:py-24 bg-gradient-to-br from-red-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-gray-900">
              The Real Cost of Disorganized Health Records
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding the impact of lost and scattered medical documents
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {credibilityPoints.map((point, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-emerald-300 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center">
                      <point.icon className="w-7 h-7 text-red-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-3xl font-bold text-red-600 mb-3">{point.stat}</div>
                    <p className="text-base text-gray-700 leading-relaxed">{point.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              These challenges are why families need a reliable digital solution for medical record management
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl mb-4 text-emerald-700">
              How It Works
            </h2>
            <p className="text-lg md:text-xl text-gray-600">
              Simple steps to organize your health records
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-32 left-0 right-0 h-1 bg-gradient-to-r from-emerald-200 via-emerald-300 to-emerald-200 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
              {howItWorksSteps.map((item, index) => (
                <div key={index} className="relative flex flex-col">
                  <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 border-emerald-100 relative z-10 flex-1 flex flex-col h-[280px]">
                    {/* Step Number Badge */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                      {item.step}
                    </div>
                    
                    {/* Icon Container */}
                    <div className="mt-8 mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl flex items-center justify-center mx-auto shadow-md">
                        <item.icon className="w-10 h-10 text-emerald-600" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 text-center">{item.title}</h3>
                      <p className="text-sm text-gray-600 leading-relaxed text-center">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Arrow Connector - properly aligned at center */}
                  {index < howItWorksSteps.length - 1 && (
                    <div className="hidden lg:flex absolute top-32 -right-10 transform -translate-y-1/2 items-center justify-center z-20">
                      <div className="bg-white rounded-full p-2 shadow-lg">
                        <ArrowRight className="w-6 h-6 text-emerald-500" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl mb-6 text-emerald-700">
              Who Is This For?
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              MediPocket helps various people manage their health information effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {targetAudiences.map((audience, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-10 text-center">
                  <div className="w-20 h-20 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-8">
                    <audience.icon className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-6">{audience.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{audience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Product Phases / Roadmap Section */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <Badge className="bg-emerald-100 text-emerald-700 hover:bg-emerald-100 mb-8 text-base px-6 py-2">
              Product Roadmap
            </Badge>
            <h2 className="text-4xl md:text-5xl mb-6 text-emerald-700">
              Built Responsibly, In Phases
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're launching thoughtfully with core features first, adding more capabilities based on user needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {productPhases.map((item, index) => (
              <Card key={index} className={`border-0 shadow-xl hover:shadow-2xl transition-all duration-300 ${
                index === 0 ? 'ring-2 ring-emerald-500 ring-offset-4' : ''
              }`}>
                <CardHeader className="text-center pb-6 pt-8">
                  <Badge className={`${
                    item.color === 'emerald' ? 'bg-emerald-100 text-emerald-700' :
                    item.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                    'bg-purple-100 text-purple-700'
                  } hover:bg-opacity-100 mb-6 text-base px-4 py-2`}>
                    {item.status}
                  </Badge>
                  <div className={`w-20 h-20 ${
                    item.color === 'emerald' ? 'bg-emerald-100' :
                    item.color === 'blue' ? 'bg-blue-100' :
                    'bg-purple-100'
                  } rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <item.icon className={`w-10 h-10 ${
                      item.color === 'emerald' ? 'text-emerald-600' :
                      item.color === 'blue' ? 'text-blue-600' :
                      'text-purple-600'
                    }`} />
                  </div>
                  <div className="text-sm font-semibold text-gray-500 mb-3">{item.phase}</div>
                  <CardTitle className="text-2xl text-gray-900">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-8 pb-8">
                  <ul className="space-y-4">
                    {item.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start space-x-3">
                        <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                          item.color === 'emerald' ? 'text-emerald-500' :
                          item.color === 'blue' ? 'text-blue-500' :
                          'text-purple-500'
                        }`} />
                        <span className="text-gray-600 leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto border border-emerald-200">
            <p className="text-lg text-gray-700 leading-relaxed">
              We're starting with Phase 1 MVP in February 2026. Each phase builds on user feedback and real-world usage, 
              ensuring we deliver value responsibly without overpromising.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-r from-emerald-600 to-teal-600">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl mb-8 text-white leading-tight">
            No More Lost Reports. No More Chaos.
          </h2>
          <p className="text-xl md:text-2xl text-emerald-100 mb-12 leading-relaxed">
            Join thousands of families who have already simplified their healthcare with MediPocket.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-50 px-10 py-6 text-lg">
              Get Started Free
              <Users className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white bg-white/10 hover:bg-white hover:text-emerald-600 px-10 py-6 text-lg">
              Watch Demo
            </Button>
          </div>
          <p className="text-base text-emerald-200 mt-10">
            Free forever • No credit card required • HIPAA compliant
          </p>
        </div>
      </section>
    </div>
  );
}