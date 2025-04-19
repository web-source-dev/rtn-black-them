import Link from 'next/link';
import GridPattern from '@/components/ui/GridPattern';
import TransitionWrapper from '@/components/animations/TransitionWrapper';

export default function NotFound() {
  return (
    <TransitionWrapper>
      <main className="min-h-screen bg-background relative flex items-center justify-center">
        {/* Background grid pattern */}
        <GridPattern 
          dotColor="rgba(255,255,255,0.3)" 
          size={40} 
          dotSize={1} 
          backgroundOpacity={0.03} 
          className="fixed inset-0 z-0 pointer-events-none"
        />
        
        <div className="relative z-10 text-center px-4 py-20">
          <div className="mb-8">
            <span className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">404</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">Service Not Found</h1>
          <p className="text-foreground/70 text-xl max-w-xl mx-auto mb-10">
            We couldn't find the service you're looking for. It may have been moved or deleted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/services" 
              className="px-6 py-3 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-medium hover:shadow-glow transition-all"
            >
              Browse All Services
            </Link>
            <Link 
              href="/" 
              className="px-6 py-3 rounded-full border border-foreground/20 text-white font-medium hover:bg-foreground/10 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
    </TransitionWrapper>
  );
} 