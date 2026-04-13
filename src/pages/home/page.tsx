import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AIProducts from './components/AIProducts';
import CustomerSupport from './components/CustomerSupport';
import InstantROI from './components/InstantROI';
import Industries from './components/Industries';
import Pricing from './components/Pricing';
import OurWork from './components/OurWork';
import Clients from './components/Clients';
import Founder from './components/Founder';
import CTAFooter from './components/CTAFooter';
import BookAuditModal from './components/BookAuditModal';

export default function Home() {
  const [auditModalOpen, setAuditModalOpen] = useState(false);

  const openAudit = () => {
    window.open('https://calendly.com/usmannkashmirwala/30min', '_blank', 'noopener,noreferrer');
  };
  const closeAudit = () => setAuditModalOpen(false);

  useEffect(() => {
    const siteUrl = import.meta.env.VITE_SITE_URL || 'https://example.com';

    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Better Call Bot',
      alternateName: 'BCB',
      url: siteUrl,
      logo: {
        '@type': 'ImageObject',
        url: 'https://static.readdy.ai/image/ab3e1b6ace2898e0dfaefcf807841ab1/a1767f79319f0af56dbc7e60ec0f1140.png',
        width: 200,
        height: 60,
      },
      image: 'https://static.readdy.ai/image/ab3e1b6ace2898e0dfaefcf807841ab1/1e41620c00be76f39072838ff844a253.jpeg',
      description: 'Better Call Bot (BCB) is an AI automation consultancy replacing repetitive tasks, slow responses, and manual processes with intelligent systems. Save 400+ hours with AI automation. Book a free audit today.',
      email: 'hello@bettercallbot.ai',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'PK',
        addressRegion: 'Pakistan',
      },
      foundingDate: '2025',
      sameAs: [],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'hello@bettercallbot.ai',
        contactType: 'customer service',
        availableLanguage: 'English',
      },
    };

    const webSiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Better Call Bot',
      url: siteUrl,
      description: 'Better Call Bot (BCB) is an AI automation consultancy replacing repetitive tasks, slow responses, and manual processes with intelligent systems. Save 400+ hours with AI automation.',
      inLanguage: 'en-US',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${siteUrl}/?s={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    };

    const webPageSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Better Call Bot — AI Automation Consultancy',
      url: siteUrl,
      description: 'Better Call Bot (BCB) is an AI automation consultancy replacing repetitive tasks, slow responses, and manual processes with intelligent systems. Save 400+ hours with AI automation. Book a free audit today.',
      inLanguage: 'en-US',
      isPartOf: { '@type': 'WebSite', url: siteUrl },
      about: { '@type': 'Organization', name: 'Better Call Bot' },
      dateModified: '2026-04-07',
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: siteUrl,
          },
        ],
      },
    };

    const serviceSchema = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'AI Automation Consultancy',
      provider: {
        '@type': 'Organization',
        name: 'Better Call Bot',
        url: siteUrl,
      },
      name: 'AI Automation Services',
      description: 'Custom AI automation consultancy services including customer support agents, lead qualification bots, workflow automation, and voice AI for businesses of all sizes.',
      areaServed: 'Worldwide',
      offers: {
        '@type': 'Offer',
        priceCurrency: 'USD',
        price: '0',
        description: 'Custom enterprise pricing — book a free audit to get a quote.',
        url: siteUrl,
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'AI Automation Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Customer Support Agent', description: 'AI-powered customer support agents that handle inquiries 24/7 without human intervention.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lead Qualification Bot', description: 'Automated lead qualification bots that identify and prioritize high-value prospects.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Workflow Automation', description: 'End-to-end workflow automation replacing manual repetitive tasks with intelligent systems.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Voice AI', description: 'Voice AI solutions for automated phone support and customer interactions.' } },
        ],
      },
    };

    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does Better Call Bot do?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Better Call Bot (BCB) is an AI automation consultancy replacing repetitive tasks, slow responses, and manual processes with intelligent systems built specifically for your business.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much does AI automation cost?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Better Call Bot offers custom enterprise pricing. Since every business has unique needs, we quote a price once we know a little about your work. Book a free audit to get started.',
          },
        },
        {
          '@type': 'Question',
          name: 'What AI automation services does Better Call Bot offer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We offer Customer Support Agents, Lead Qualification Bots, Workflow Automation, and Voice AI — all custom-built for your business.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do I get started with Better Call Bot?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Book a free audit session. We will identify where your business is losing time and money, and propose a custom AI automation solution.',
          },
        },
        {
          '@type': 'Question',
          name: 'How much time can AI automation save my business?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'The average business saves 400+ hours per year with AI automation. Many of our clients reclaim 19+ hours per week that were previously spent on repetitive manual tasks.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Better Call Bot suitable for small businesses?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes. Better Call Bot builds custom AI automation solutions for businesses of all sizes — from startups to enterprises. We tailor every system to your specific workflows and budget.',
          },
        },
      ],
    };

    const schemas = [organizationSchema, webSiteSchema, webPageSchema, serviceSchema, faqSchema];
    const scriptIds = ['schema-org', 'schema-website', 'schema-webpage', 'schema-service', 'schema-faq'];

    schemas.forEach((schema, i) => {
      let script = document.getElementById(scriptIds[i]) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = scriptIds[i];
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schema);
    });

    return () => {
      scriptIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) el.remove();
      });
    };
  }, []);

  return (
    <div className="bg-[#F5F4F0] min-h-screen">
      <Navbar onBookAudit={openAudit} />

      {/* Introduce strip between hero and products */}
      <Hero onBookAudit={openAudit} />

      {/* INTRODUCE: Where Your Money Is Leaking */}
      <section className="bg-[#F5F4F0] px-6 md:px-12 py-16 border-b border-[#CCCCCC]">
        <p className="font-['DM_Sans'] text-[10px] tracking-[0.25em] uppercase text-[#E63329] mb-4">
          INTRODUCE
        </p>
        <h2 className="font-['Anton'] text-[clamp(36px,6vw,80px)] leading-[0.92] text-[#111111] uppercase mb-8">
          Customer Support:<br />WHERE YOUR MONEY IS <span className="text-[#E63329]">LEAKING</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[#CCCCCC] pt-8">
          <div className="md:pr-10 md:border-r border-[#CCCCCC] pb-8 md:pb-0">
            <p className="font-['DM_Sans'] text-[14px] text-[#333333] leading-relaxed">
              Every unanswered message is a lost sale. Every repeated task is a hidden payroll cost. Every slow process is a customer quietly leaving.
            </p>
          </div>
          <div className="md:px-10 md:border-r border-[#CCCCCC] py-8 md:py-0 border-t md:border-t-0 border-[#CCCCCC]">
            <p className="font-['DM_Sans'] text-[14px] text-[#333333] leading-relaxed">
              We find the exact places where manual work is costing you, and automate them. Not with generic tools. With systems built specifically for your business.
            </p>
          </div>
          <div className="md:pl-10 pt-8 md:pt-0 border-t md:border-t-0 border-[#CCCCCC]">
            <p className="font-['DM_Sans'] text-[14px] text-[#555555] leading-relaxed italic">
              &ldquo;The average business wastes 19 hours per week on tasks that AI can handle in seconds. That&apos;s two and a half working days EVERY single week.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <AIProducts />
      <CustomerSupport />
      <InstantROI />
      <Industries />
      <Pricing onBookAudit={openAudit} />
      <OurWork />
      <Clients />
      <Founder />
      <CTAFooter onBookAudit={openAudit} />

      <BookAuditModal isOpen={auditModalOpen} onClose={closeAudit} />
    </div>
  );
}