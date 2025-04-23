export interface FaqItem {
  title: string;
  content: string;
}

export interface FaqCategory {
  id: string;
  name: string;
  items: FaqItem[];
}

export const faqData: FaqCategory[] = [
  {
    id: 'services',
    name: 'Services',
    items: [
      {
        title: 'What services do you offer?',
        content: 'We offer a comprehensive range of digital services including web design and development, mobile app development, UI/UX design, digital marketing, and more. Our team of experts is dedicated to delivering high-quality solutions tailored to your business needs.'
      },
      {
        title: 'Do you create custom solutions or use templates?',
        content: 'We primarily focus on custom solutions tailored to your specific business needs. However, for certain projects with budget constraints, we may utilize premium templates as a starting point, which we then customize extensively to match your brand and requirements.'
      },
      {
        title: 'Can you help with website maintenance and updates?',
        content: 'Yes, we offer comprehensive website maintenance and update services to keep your site secure, up-to-date, and performing optimally. Our maintenance packages include regular updates, security monitoring, performance optimization, and technical support.'
      }
    ]
  },
  {
    id: 'process',
    name: 'Process & Timeline',
    items: [
      {
        title: 'How long does a typical project take?',
        content: 'Project timelines vary depending on the scope and complexity of the work. A simple website might take 2-4 weeks, while a complex web application could take 3-6 months. During our initial consultation, we\'ll provide you with a more accurate timeline based on your specific requirements.'
      },
      {
        title: 'What is your development process?',
        content: 'Our development process follows these key stages: 1) Discovery and requirements gathering, 2) Planning and strategy, 3) Design concepts and approval, 4) Development and implementation, 5) Testing and quality assurance, 6) Launch and deployment, and 7) Post-launch support and optimization. We maintain clear communication throughout each stage.'
      },
      {
        title: 'How do I get started with your services?',
        content: 'Getting started is easy! Simply contact us through our website, email, or phone. We\'ll schedule an initial consultation to discuss your needs, provide recommendations, and outline the next steps for your project.'
      }
    ]
  },
  {
    id: 'pricing',
    name: 'Pricing & Payment',
    items: [
      {
        title: 'What is your pricing structure?',
        content: 'Our pricing is project-based and depends on the scope, complexity, and timeline of your requirements. We provide detailed quotes after understanding your project needs. We also offer flexible payment options including milestone-based payments for larger projects.'
      },
      {
        title: 'Do you require a deposit before starting work?',
        content: 'Yes, we typically require a 30-50% deposit before beginning any project. This helps us allocate resources and commit fully to your project. The remainder is usually paid in milestones or upon project completion, depending on the project size and duration.'
      },
      {
        title: 'Do you offer maintenance packages?',
        content: 'Yes, we offer various support and maintenance packages to ensure your digital products continue to perform optimally. These include regular updates, security monitoring, performance optimization, and technical support.'
      }
    ]
  },
  {
    id: 'support',
    name: 'Support & Training',
    items: [
      {
        title: 'Do you provide ongoing support after project completion?',
        content: 'Yes, we offer various support and maintenance packages to ensure your digital products continue to perform optimally. These include regular updates, security monitoring, performance optimization, and technical support.'
      },
      {
        title: 'Do you provide training on how to use my website or application?',
        content: 'Yes, we provide comprehensive training to ensure you can effectively manage your website or application. This typically includes video tutorials, documentation, and hands-on training sessions. We can also provide additional training sessions as needed for new team members.'
      },
      {
        title: 'What is your typical response time for support requests?',
        content: 'For clients on our support plans, our standard response time is within 24 hours for normal requests and 4-8 hours for urgent issues. Premium support plans include faster response times and dedicated support channels.'
      }
    ]
  }
]; 