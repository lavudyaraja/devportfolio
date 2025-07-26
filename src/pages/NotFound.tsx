import { Button } from '@/components/ui/button';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-400 via-cyan-500 to-blue-600 p-6 text-center relative">
      {/* Geometric shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-400 rotate-45 opacity-70"></div>
        <div className="absolute bottom-32 right-16 w-16 h-16 bg-pink-500 rounded-full opacity-60"></div>
        <div className="absolute top-1/3 right-20 w-12 h-24 bg-orange-500 opacity-50"></div>
        <div className="absolute bottom-20 left-1/4 w-14 h-14 bg-purple-500 rotate-12 opacity-80"></div>
      </div>

      <div className="relative z-10 max-w-xl">
        {/* Main content */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-white/50">
          <div className="space-y-6">
            {/* 404 number */}
            <h1 className="text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-pink-600">
              4🔍4
            </h1>
            
            {/* Error message */}
            <div className="space-y-3">
              <h2 className="text-3xl font-bold text-gray-800">
                Page Not Found!
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Looks like this page went on vacation without telling us! 
                Let's get you back on track.
              </p>
            </div>

            {/* Illustration */}
            <div className="py-6">
              <div className="mx-auto w-32 h-32 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-6xl">🏠</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                asChild
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                <a href="/">
                  Go Home
                </a>
              </Button>
              
              <Button 
                variant="outline" 
                onClick={() => window.history.back()}
                className="border-2 border-gray-800 text-gray-800 font-bold py-4 px-8 rounded-xl hover:bg-gray-800 hover:text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                Go Back
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom message */}
        <div className="mt-8 text-white/90 text-sm">
          <p>Need help? Contact our support team</p>
        </div>
      </div>
    </div>
  );
}