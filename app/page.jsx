import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Star,
  Check,
  Zap,
  Shield,
  Users,
  CreditCard,
  Smartphone,
  Globe,
  PieChart,
  PlayIcon,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FEATURES, STEPS, TESTIMONIALS } from "@/lib/landing";

// Add these imports for rating section
const RATINGS = [
  { stars: 5, label: "App Store", count: "4.9" },
  { stars: 5, label: "Google Play", count: "4.8" },
  { stars: 5, label: "Trustpilot", count: "4.7" },
];

// Additional features for PayCircle
const ADDITIONAL_FEATURES = [
  {
    title: "Instant Settlement",
    description: "Send and receive money instantly with no delays.",
    Icon: Zap,
    bg: "bg-blue-100",
    color: "text-blue-600",
  },
  {
    title: "Bank-Level Security",
    description:
      "Your financial data is protected with enterprise-grade encryption.",
    Icon: Shield,
    bg: "bg-purple-100",
    color: "text-purple-600",
  },
  {
    title: "Group Expenses",
    description: "Split bills among any number of friends or colleagues.",
    Icon: Users,
    bg: "bg-indigo-100",
    color: "text-indigo-600",
  },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      {/* ───── Hero ───── */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="container mx-auto max-w-7xl relative">
          {/* Background decorative elements */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

          <div className="relative z-10 text-center space-y-8">
            <Badge
              variant="outline"
              className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-blue-200 px-4 py-1.5 rounded-full shadow-sm hover:shadow-md transition-shadow"
            >
              <Sparkles className="w-3.5 h-3.5 mr-2" />
              Smart payments. Seamless splits.
            </Badge>

            <h1 className="mx-auto max-w-6xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Welcome to PayCircle
              </span>
              <span className="block mt-2 text-gray-900">
                The modern way to manage shared expenses
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-gray-600 md:text-xl/relaxed">
              Split bills, track expenses, and settle up instantly with friends,
              roommates, and colleagues. No more awkward money conversations.
            </p>

            {/* Rating Section */}
            <div className="pt-4 pb-8">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
                {RATINGS.map((rating, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm"
                  >
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <span className="text-lg font-bold text-gray-900">
                      {rating.count}
                    </span>
                    <span className="text-sm text-gray-600">
                      {rating.label}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500">
                Trusted by over 50,000+ users worldwide
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 sm:flex-row justify-center pt-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-200 rounded-full px-8 py-6 text-base font-semibold"
              >
                <Link href="/dashboard" className="flex items-center gap-2">
                  Get Started for Free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700 rounded-full px-8 py-6 text-base font-semibold transition-all duration-200"
              >
                <Link href="#how-it-works" className="flex items-center">
                  <PlayIcon></PlayIcon>
                  Watch Demo
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero Dashboard Mockup */}
          {/* Hero Visual - Animated Money Flow */}
          <div className="relative mt-20 mx-auto max-w-6xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur-2xl opacity-10"></div>

            <div className="relative overflow-hidden rounded-3xl border border-gray-100 shadow-2xl bg-gradient-to-br from-white to-gray-50 p-8 md:p-12">
              {/* Animated Money Flow Graphic */}
              <div className="relative h-64 md:h-80 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 overflow-hidden">
                {/* Animated Circles */}
                <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-indigo-200 rounded-full opacity-20 animate-pulse animation-delay-1000"></div>

                {/* Money Flow Lines */}
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 800 400"
                >
                  {/* Connection lines */}
                  <path
                    d="M100,200 Q400,100 700,200"
                    stroke="url(#gradient1)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-dash"
                  />
                  <path
                    d="M150,250 Q400,150 650,250"
                    stroke="url(#gradient2)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-dash animation-delay-500"
                  />

                  {/* Person nodes */}
                  {[
                    { x: 100, y: 200, color: "bg-blue-500", label: "You" },
                    { x: 300, y: 150, color: "bg-purple-500", label: "Group" },
                    { x: 500, y: 250, color: "bg-green-500", label: "Friends" },
                    { x: 700, y: 200, color: "bg-indigo-500", label: "Paid" },
                  ].map((node, i) => (
                    <g key={i} className="group">
                      <circle
                        cx={node.x}
                        cy={node.y}
                        r="20"
                        className={`${node.color} transition-all duration-300 group-hover:r-24`}
                        fill="currentColor"
                      />
                      <text
                        x={node.x}
                        y={node.y + 35}
                        textAnchor="middle"
                        className="text-xs font-semibold fill-gray-700"
                      >
                        {node.label}
                      </text>
                    </g>
                  ))}

                  {/* Money icons moving along paths */}
                  <g className="animate-float">
                    <circle cx="250" cy="180" r="8" className="fill-yellow-400">
                      <animateMotion
                        path="M100,200 Q400,100 700,200"
                        dur="8s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>

                  <defs>
                    <linearGradient
                      id="gradient1"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
                      <stop
                        offset="100%"
                        stopColor="#8b5cf6"
                        stopOpacity="0.5"
                      />
                    </linearGradient>
                    <linearGradient
                      id="gradient2"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.5" />
                      <stop
                        offset="100%"
                        stopColor="#3b82f6"
                        stopOpacity="0.5"
                      />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Floating stats */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-600">Real-time tracking</p>
                  <p className="text-lg font-bold text-blue-600">$1,245.50</p>
                </div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                  <p className="text-sm text-gray-600">This month</p>
                  <p className="text-lg font-bold text-green-600">+12 splits</p>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    label: "Active Users",
                    value: "50K+",
                    icon: Users,
                    color: "text-blue-600",
                    bg: "bg-blue-100",
                  },
                  {
                    label: "Total Splits",
                    value: "2.1M+",
                    icon: PieChart,
                    color: "text-purple-600",
                    bg: "bg-purple-100",
                  },
                  {
                    label: "Avg. Saved",
                    value: "3.2hrs",
                    icon: Zap,
                    color: "text-green-600",
                    bg: "bg-green-100",
                  },
                  {
                    label: "Satisfaction",
                    value: "98%",
                    icon: Star,
                    color: "text-yellow-600",
                    bg: "bg-yellow-100",
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white rounded-xl border border-gray-100"
                  >
                    <div className={`p-2 rounded-lg ${stat.bg}`}>
                      <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── Features ───── */}
      <section
        id="features"
        className="py-20 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge
              variant="outline"
              className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-blue-200 px-4 py-1.5 rounded-full mb-4"
            >
              <Zap className="w-4 h-4 mr-2" />
              Why PayCircle
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              <span className="text-gray-900 block">
                Everything you need for
              </span>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                effortless expense sharing
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Powerful features designed to make shared finances simple, fair,
              and stress-free.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {[...FEATURES, ...ADDITIONAL_FEATURES].map((feature, index) => (
              <Card
                key={index}
                className="group border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white/50 backdrop-blur-sm"
              >
                <CardContent className="p-8">
                  <div
                    className={`rounded-2xl p-4 w-fit ${feature.bg} group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.Icon className={`h-7 w-7 ${feature.color}`} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700 transition-colors">
                      Learn more →
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Feature Highlights */}
          <div className="mt-20 max-w-5xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  Built for every situation
                </h3>
                <ul className="space-y-3">
                  {[
                    "Roommate bills & rent",
                    "Group trips & vacations",
                    "Dinner out with friends",
                    "Office lunch orders",
                    "Event tickets & reservations",
                    "Shared subscriptions",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-blue-600" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-gray-600">Split Summary</p>
                    <p className="text-2xl font-bold text-gray-900">
                      Beach Trip 2024
                    </p>
                  </div>
                  <Badge className="bg-blue-100 text-blue-700">6 People</Badge>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Accommodation", amount: "$1,200", person: "You" },
                    { label: "Food & Drinks", amount: "$450", person: "Sarah" },
                    { label: "Activities", amount: "$300", person: "Mike" },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                    >
                      <span className="text-gray-700">{item.label}</span>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">
                          {item.amount}
                        </p>
                        <p className="text-sm text-gray-500">
                          Paid by {item.person}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───── How it works ───── */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge
              variant="outline"
              className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-blue-200 px-4 py-1.5 rounded-full mb-4"
            >
              How It Works
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              <span className="text-gray-900 block">Get started in</span>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                3 simple steps
              </span>
            </h2>
            <p className="text-lg text-gray-600">
              Follow these simple steps to start tracking and splitting expenses
              with friends.
            </p>
          </div>

          <div className="mt-20 relative">
            <div className="hidden md:block absolute left-1/2 top-12 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-blue-200 to-indigo-200"></div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              {STEPS.map(({ label, title, description }, index) => (
                <div
                  key={label}
                  className="relative flex flex-col items-center text-center group"
                >
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 text-2xl font-bold text-blue-700 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {label}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300"></div>
                  </div>

                  <div className="mt-8 p-6 rounded-2xl bg-gradient-to-b from-white to-gray-50 border border-gray-100 shadow-sm group-hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── Testimonials ───── */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <Badge
              variant="outline"
              className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 border-blue-200 px-4 py-1.5 rounded-full mb-4"
            >
              Testimonials
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              <span className="text-gray-900 block">Loved by</span>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                thousands of users
              </span>
            </h2>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            {TESTIMONIALS.map(({ quote, name, role, image }) => (
              <Card
                key={name}
                className="border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 bg-white/60 backdrop-blur-sm group"
              >
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 italic leading-relaxed mb-8">
                    "{quote}"
                  </p>
                  <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                    <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                      <AvatarImage src={image} alt={name} />
                      <AvatarFallback className="bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-700 font-semibold uppercase">
                        {name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="text-left">
                      <p className="font-semibold text-gray-900">{name}</p>
                      <p className="text-sm text-gray-500">{role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ───── Call‑to‑Action ───── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600"></div>

        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
              Start splitting expenses the smart way
            </h2>
            <p className="text-xl text-blue-100/90 mb-10 max-w-2xl mx-auto">
              Join 50,000+ users who trust PayCircle for their shared expenses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-700 hover:bg-gray-100 rounded-full px-10 py-7 text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 group"
              >
                <Link href="/dashboard" className="flex items-center gap-3">
                  Create Free Account
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-white/30 text-white hover:bg-white/10 rounded-full px-10 py-7 text-lg font-semibold backdrop-blur-sm transition-all duration-300"
              >
                <Link href="/pricing">View Pricing Plans</Link>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[
                { icon: Shield, label: "Bank-Level Security" },
                { icon: CreditCard, label: "No Fees" },
                { icon: Smartphone, label: "Mobile Apps" },
                { icon: Globe, label: "Global Support" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-2">
                  <item.icon className="w-6 h-6 text-white/80" />
                  <span className="text-sm text-white/70">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───── Footer ───── */}
      <footer className="border-t border-gray-100 bg-white py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-left">
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                PayCircle
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Making shared finances simple, fair, and stress-free.
              </p>
            </div>

            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Terms
              </Link>
              <Link
                href="/contact"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/help"
                className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
              >
                Help Center
              </Link>
            </div>

            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} PayCircle. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Add Play icon component
<PlayIcon className="w-5 h-5 mr-2" />;
