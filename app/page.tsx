'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Brain, FileText, LineChart, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Early Detection,{' '}
              <span className="text-blue-600">Better Learning</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              AI-powered dyslexia detection helping teachers identify and
              support young learners.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="text-lg">
                Try NeuroRead
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Empowering Education Through AI
            </h2>
            <p className="text-xl text-gray-600">
              Discover how NeuroRead transforms learning assessment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: 'Early Detection',
                description:
                  'Identify dyslexia signs early for timely intervention',
              },
              {
                icon: FileText,
                title: 'Detailed Reports',
                description: 'Get comprehensive analysis and recommendations',
              },
              {
                icon: LineChart,
                title: 'Progress Tracking',
                description: 'Monitor improvement with detailed analytics',
              },
              {
                icon: Users,
                title: 'Collaborative Care',
                description: 'Connect teachers, parents, and specialists',
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col items-center text-center">
                  <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Making a Difference
            </h2>
            <p className="text-xl text-gray-600">
              Over 3.5 crore children struggle with dyslexia. We're here to
              help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'For Teachers',
                description:
                  'Early identification tools and classroom strategies',
              },
              {
                title: 'For Parents',
                description: "Understanding and supporting your child's needs",
              },
              {
                title: 'For Schools',
                description:
                  'Comprehensive support system for inclusive education',
              },
            ].map((item, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Link
                  href="/users"
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  Learn more →
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-2xl p-8 md:p-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Learning?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of educators using NeuroRead to make a difference.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="text-lg bg-white text-blue-600 hover:bg-blue-50"
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
