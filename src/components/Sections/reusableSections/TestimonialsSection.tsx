'use client';

import React, { useMemo, memo, useState, useEffect } from 'react';
import Carousel from '@/components/ui/Carousel';
import Badge from '@/components/ui/Badge';
import Divider from '@/components/ui/Divider';
import RevealOnScroll from '@/components/animations/RevealOnScroll';
import GlitchText from '@/components/ui/GlitchText';
import Image from 'next/image';
import { ArrowRightIcon } from 'lucide-react';

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  image?: string;
  rating?: number;
  category?: string;
  link?: string;
}

export interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
  className?: string;
  carouselVariant?: 'default' | 'compact' | 'grid';
}

type ArrowsStyle = 'default' | 'floating' | 'outside';

// Pre-rendered star icon to avoid repetitive SVG creation
const StarIcon = memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 text-primary"
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
));
StarIcon.displayName = 'StarIcon';

// Pre-rendered quote icon to avoid repetitive SVG creation
const QuoteIcon = memo(() => (
  <svg
    className="absolute -top-4 -left-4 h-8 w-8 text-primary/20"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M11.192 16.188c0 .52-.164.96-.492 1.32-.329.36-.766.539-1.312.539-.547 0-.99-.18-1.328-.539-.328-.36-.492-.8-.492-1.32 0-.49.164-.906.492-1.25.338-.344.781-.516 1.328-.516.198 0 .388.026.57.078L12 8.25h-3.75a.75.75 0 00-.75.75v1.344c0 .844-.073 1.594-.219 2.25-.146.657-.364 1.193-.656 1.61-.292.415-.615.716-.969.905a5.41 5.41 0 01-1.125.493l.891 1.968c.667-.198 1.3-.536 1.898-1.016.599-.48 1.112-1.047 1.54-1.703.427-.656.752-1.378.976-2.165.224-.788.356-1.607.398-2.457h.211c.62 0 1.141.198 1.563.594.422.395.633.88.633 1.453v2.813c0 .49-.164.906-.492 1.25-.328.344-.766.516-1.313.516-.546 0-.989-.172-1.327-.516-.328-.344-.492-.76-.492-1.25h-1.313zm9.563 0c0 .52-.164.96-.492 1.32-.328.36-.766.539-1.313.539-.546 0-.988-.18-1.327-.539-.328-.36-.492-.8-.492-1.32 0-.49.164-.906.492-1.25.339-.344.781-.516 1.327-.516.198 0 .388.026.57.078L22.5 8.25h-3.75a.75.75 0 00-.75.75v1.344c0 .844-.073 1.594-.219 2.25-.146.657-.364 1.193-.656 1.61-.292.415-.615.716-.969.905-.354.188-.724.362-1.109.493l.891 1.968c.661-.198 1.292-.536 1.891-1.016.599-.48 1.112-1.047 1.539-1.703.428-.656.753-1.378.977-2.165.224-.788.356-1.607.398-2.457h.211c.62 0 1.141.198 1.563.594.422.395.633.88.633 1.453v2.813c0 .49-.164.906-.492 1.25-.328.344-.766.516-1.313.516-.546 0-.989-.172-1.327-.516-.328-.344-.492-.76-.492-1.25h-1.313z" />
  </svg>
));
QuoteIcon.displayName = 'QuoteIcon';

const TestimonialsSection = memo(function TestimonialsSection({
  subtitle = "Don&apos;t just take our word for it - hear from some of our satisfied clients about their experience working with us.",
  testimonials = [
    {
      id: '1',
      name: 'TC Cleaning Team',
      position: 'CEO',
      company: 'TOP Class Cleaning',
      content: `Exceptional Website & Booking Wizard
I couldn’t be more impressed with Muhammad Tayyab’s work on our website preview—he delivered exactly what I’d been asking for over the past several months, and he did it in just three days. His attention to detail, responsiveness, and creative problem-solving made the process seamless from start to finish.

What really blew me away was the new booking wizard: it not only checks every box we discussed, but it greatly exceeded my expectations in usability, design, and speed. Muhammad took our vision and transformed it into a polished, intuitive feature that will drive real results for our business.

If you’re looking for someone who combines technical expertise with genuine dedication—and delivers lightning-fast turnaround—Muhammad is your guy. He’s earned my highest recommendation!`,
      rating: 5,
      category: 'Web Development',
      link: 'https://www.trustpilot.com/reviews/6890dcc3d75dac2312eeaa18'
    },
    {
      id: '2',
      name: 'Estevan Lujan',
      position: 'Co-Founder',
      company: 'NovoCom Strategies',
      content: `Highly recommend RTN Global
RTN Global is very professional, reasonably priced and very responsive. We found working with RTN Global to be easy and enjoyable, while receiving a high quality product.`,
      rating: 5,
      image: 'https://user-images.trustpilot.com/688927dc04313ebf5a3cf323/73x73.png',
      category: 'Full Stack Development',
      link: 'https://www.trustpilot.com/reviews/688927e23df282642e02a06f'
    },
    {
      id: '3',
      name: 'Kim Lamar Casey Barson',
      position: 'Founder',
      company: 'Hccc Digital',
      content: `Wow!! They're amazing!!!

Wow!!! Working with RTN Global has been an incredible experience from start to finish. After dealing with a few disappointing experiences with other developers, I was cautious when reaching out for help. I found RTN Global through a third-party platform and contacted several providers. They were the first to respond, and I’m so glad I took a chance on them.

They tackled a task I had been struggling with and nailed it. That success led me to trust them with a larger, more complex project. While we encountered a challenge due to a website’s policy, RTN Global immediately stepped in with a solution. They provided a fair quote for the additional work, created an entirely new webpage, and resolved a recurring back-end issue that had been giving us trouble for ages.

Their professionalism, speed, and problem-solving ability truly stand out. I don’t know how they pulled it all off so seamlessly, but I’m beyond impressed. If you’re in need of web design, CRM development, or custom backend work—this is the team to go with. RTN Global has earned my trust, and I’ll be a customer for life. Thank you again for your outstanding service!`,
      rating: 5,
      image: 'https://user-images.trustpilot.com/686f51e38a537581388fc506/73x73.png',
      category: 'Payment Gateway Integration',
      link: 'https://www.trustpilot.com/reviews/686f51eee112d32f6becdf64'
    },
    {
      id: '4',
      name: 'Gian Baio',
      position: 'Partner',
      company: 'Vin On Spot',
      content: `Exceptional Partnership: RTN Global Takes Our Business to the Next Level
As a direct collaborator with the RTN Global team, I can confidently say they are an exceptional partner. They have been instrumental in taking my client's company to the next level by providing remarkably easy-to-manage solutions. Their foresight in building with today's latest tools has opened the door to incredible scalability for my client's business.

The RTN Global team's commitment to their clients is truly stellar. They are consistently willing to meet, patiently explain every detail, and offer insightful suggestions that genuinely contribute to business growth. What began as one project organically expanded into three distinct initiatives, a testament to their versatility and dedication. Through every phase, they have been nothing but supportive and eager to assist in any way possible.

I highly value our collaboration and eagerly anticipate strengthening my relationship with RTN Global as we continue to work together. Thank you for all that you do!`,
      rating: 5,
      image: 'https://user-images.trustpilot.com/68583f284e662d08414aefe6/73x73.png',
      category: 'Web Development',
      link: 'https://www.trustpilot.com/reviews/68583f2f8b96f53a38bcca83'
    },
    {
      id: '5',
      name: 'Rosa Bilotto',
      position: 'Founder',
      company: '',
      content: `Excellent Service and communication
Muhammad delivered exactly what I was asking for. He prompt me by asking questions that I had not previously thought of which enhance the workings of the application. Amazing service and communication. I highly his service.`,
      rating: 5,
      category: 'Web Development',
      link: 'https://www.trustpilot.com/reviews/682718d8c348f19502943eac'
    },
    {
      id: '6',
      name: 'PesTher',
      position: 'Owner',
      company: 'Tourprism',
      content: `Great Team. Amazing Support!
Muhammad and his team demonstrated deep expertise in full-stack development and brought tremendous value to our project. Their insightful suggestions significantly strengthened our technical capabilities. They took the time to fully understand our requirements and were a pleasure to work with throughout. Highly recommended!`,
      rating: 5,
      category: 'Website Development',
      link: 'https://www.trustpilot.com/reviews/680aedab15eddeab9cd8f357'
    },
    {
      id: '7',
      name: 'Nahaz Quddus',
      position: 'Co-Founder',
      company: 'Harmony 4 All',
      content: `RTN Team Rock!!!
It’s an awesome experience working with this team of talented professionals who not only resolved our problems, but also helped us to improve our work experience… we now have their team being in the background of our work… we HIGHLY RECOMMEND them, and looking forward to working together for many years…🙏💓🙏`,
      rating: 5,
      image: 'https://user-images.trustpilot.com/680a88324db5a050a9dbc9e5/73x73.png',
      category: 'Web Maintenance',
      link: 'https://www.trustpilot.com/reviews/680a883e70761283fcdeedb4'
    }
  ],
  className = "",
  carouselVariant = 'default'
}: TestimonialsSectionProps) {
  const [defaultSlidesToShow, setDefaultSlidesToShow] = useState(2);

  // Update slidesToShow based on window width
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setDefaultSlidesToShow(width < 768 ? 1 : 2);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Optimized carousel settings for better performance
  const carouselSettings = useMemo(() => {
    switch (carouselVariant) {
      default:
        return {
          slidesToShow: defaultSlidesToShow,
          gap: 30,
          arrowsStyle: 'default' as ArrowsStyle,
          showDots: true,
          progressBar: false,
          autoPlay: false,
          draggable: true,
          slideClassName: 'max-w-[90vw]' // Ensure slides don't overflow on mobile
        };
    }
  }, [carouselVariant, defaultSlidesToShow]);

  // Pre-render testimonial cards for better performance
  const carouselItems = useMemo(() => {
    return testimonials.map((testimonial) => (
      <div key={`testimonial-carousel-${testimonial.id}`} className="px-2">
        <TestimonialCard testimonial={testimonial} />
      </div>
    ));
  }, [testimonials]);

  return (
    <section className={`py-16 md:py-24 bg-background ${className}`} id="testimonials-section">
      <div className="container mx-auto px-4 relative z-10">
        <RevealOnScroll>
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Testimonials</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-white to-foreground/90 bg-clip-text text-transparent">What Our
              <span className="relative">
                <span className="text-white mx-3"><GlitchText text="Clients" /></span>
              </span>
              Say
            </h2>
            <p className="text-foreground/80 text-lg md:text-xl max-w-3xl mx-auto">
              {subtitle}
            </p>
          </div>
        </RevealOnScroll>

        <div className="mt-6" id="testimonials-container">
          <Carousel
            items={carouselItems}
            interval={4000}
            loop={true}
            className="pb-10"
            {...carouselSettings}
          />
        </div>
      </div>
    </section>
  );
});

// Optimized TestimonialCard component
const TestimonialCard = memo(function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  // Pre-computing stars for rating to avoid repeated renders
  const stars = useMemo(() => {
    return Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
      <StarIcon key={`star-${testimonial.id}-${i}`} />
    ));
  }, [testimonial.id, testimonial.rating]);

  const [isExpanded, setIsExpanded] = useState(false);

  const allLines = useMemo(() => {
    const content = testimonial.content || "";
    return content.split('\n').map(line => line.replace(/\r$/, ''));
  }, [testimonial.content]);

  const hasMore = allLines.length > 5;

  return (
    <div className="dark-card rounded-xl p-6 md:p-8 h-full flex flex-col border border-foreground/5">
      <div className="flex mb-3">
        {stars}
      </div>

      {testimonial.category && (
        <span className="inline-block text-xs px-2 py-1 rounded-full bg-primary/10 text-primary mb-3">
          {testimonial.category}
        </span>
      )}

      <div className="relative mb-4 flex-grow">
        <QuoteIcon />
        <div className="z-10 relative">
          <div className={`relative ${!isExpanded ? 'overflow-hidden max-h-[150px] md:max-h-[150px]' : ''}`}>
            <div className="space-y-1">
              {allLines.map((line, index) => {
                const trimmed = line.trim();
                if (trimmed.length === 0) {
                  return <div key={`br-${testimonial.id}-${index}`} className="h-2" />;
                }
                if (trimmed.startsWith('## ')) {
                  return (
                    <h4 key={`h4-${testimonial.id}-${index}`} className="text-foreground font-semibold text-sm md:text-base leading-6 md:leading-6">
                      {trimmed.slice(3)}
                    </h4>
                  );
                }
                if (trimmed.startsWith('# ')) {
                  return (
                    <h3 key={`h3-${testimonial.id}-${index}`} className="text-foreground font-semibold text-base md:text-lg leading-6 md:leading-6">
                      {trimmed.slice(2)}
                    </h3>
                  );
                }
                return (
                  <p key={`p-${testimonial.id}-${index}`} className="text-foreground/80 text-sm md:text-base leading-6 md:leading-6">
                    {line}
                  </p>
                );
              })}
            </div>
            {!isExpanded && hasMore && (
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-background to-transparent" />
            )}
          </div>
          {hasMore && !isExpanded && (
            <button
              type="button"
              onClick={() => setIsExpanded(true)}
              className="absolute bottom-0 right-0 text-primary hover:underline text-sm md:text-base"
              aria-expanded={isExpanded}
            >
              Read more
            </button>
          )}
          {hasMore && isExpanded && (
            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              className="mt-2 text-primary hover:underline text-sm md:text-base"
              aria-expanded={isExpanded}
            >
              Show less
            </button>
          )}
        </div>
      </div>

      <Divider className="my-3 opacity-20" />

      <div className="flex items-center mt-auto">
        {testimonial.image && (
          <div className="flex-shrink-0 mr-3">
            <Image
              src={testimonial.image}
              alt={`${testimonial.name}`}
              className="h-10 w-10 rounded-full object-cover border border-primary/20"
              width={40}
              height={40}
              loading="eager"
              priority={true}
              placeholder="blur"
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjY2NjY2NjNTAiIC8+Cjwvc3ZnPg=="
            />
          </div>
        )}
        <div>
          <h4 className="font-medium text-foreground text-sm md:text-base">{testimonial.name}</h4>
          <p className="text-foreground/60 text-xs md:text-sm">
            {testimonial.position}, {testimonial.company}
          </p>
        </div>
        {testimonial.link && (
          <a href={testimonial.link} target="_blank" rel="noopener noreferrer" className="text-primary text-sm md:text-base ml-auto flex items-center gap-2">
            View on Trustpilot <ArrowRightIcon className="w-4 h-4" />
          </a>
        )}
      </div>
    </div>
  );
});

export default TestimonialsSection; 