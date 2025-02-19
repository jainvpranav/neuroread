import Link from 'next/link';
import { Brain } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center">
              <Brain className="h-6 w-6 text-blue-600" />
              <span className="ml-2 text-lg font-bold text-gray-900">NeuroRead</span>
            </Link>
            <p className="text-gray-600 text-sm">
              Early Detection, Better Learning
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/features" className="text-gray-600 hover:text-gray-900 text-sm">Features</Link></li>
              <li><Link href="/how-it-works" className="text-gray-600 hover:text-gray-900 text-sm">How It Works</Link></li>
              <li><Link href="/users" className="text-gray-600 hover:text-gray-900 text-sm">Who Can Use It?</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm">About Us</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Twitter</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">LinkedIn</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Facebook</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-gray-600 text-sm text-center">
            © {new Date().getFullYear()} NeuroRead. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}