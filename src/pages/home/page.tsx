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
        url: 'https://www.bettercallbot.com/og-image.png',
        width: 1200,
        height: 630,
      },
      image: 'https://www.bettercallbot.com/og-image.png',
      description: 'Better Call Bot (BCB) is an AI consultancy that helps businesses identify where AI agents apply to their operations, then builds those agents from scratch. We audit first, build second. Book a free audit today.',
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
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Customer Support Agent', description: 'AI-powered 24/7 customer support agents that handle enquiries, resolve tickets, and escalate to humans only when needed.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Content Writing Agent', description: 'AI writing engine trained on your brand voice that produces blogs, emails, social copy, and ad creative at scale.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Financial Ops Agent', description: 'Automates financial back-office tasks including client onboarding, document collection, invoice queries, and compliance-safe response handling.' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AI Operations Audit', description: 'Free operational audit that maps your business workflows and identifies exactly where AI agents will deliver measurable ROI.' } },
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
            text: 'We offer three proven agent types — Customer Support Agent, Content Writing Agent, and Financial Ops Agent — each custom-built after a free operational audit to ensure it fits your exact workflows.',
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

      {/* INTRODUCE: AI Consultancy positioning */}
      <section className="bg-[#F5F4F0] px-6 md:px-12 py-16 border-b border-[#CCCCCC]">
        <p className="font-['DM_Sans'] text-[10px] tracking-[0.25em] uppercase text-[#E63329] mb-4">
          INTRODUCE
        </p>
        <h2 className="font-['Anton'] text-[clamp(36px,6vw,80px)] leading-[0.92] text-[#111111] uppercase mb-8">
          You Know AI Is<br />Changing Everything.<br />
          YOU JUST DON&apos;T KNOW WHERE<br />
          IT <span className="text-[#E63329]">APPLIES TO YOU.</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-[#CCCCCC] pt-8">
          <div className="md:pr-10 md:border-r border-[#CCCCCC] pb-8 md:pb-0">
            <p className="font-['DM_Sans'] text-[14px] text-[#333333] leading-relaxed">
              Most businesses know AI agents are reshaping how work gets done. Almost none know which processes in their business are actually candidates for automation — or where to start without wasting money.
            </p>
          </div>
          <div className="md:px-10 md:border-r border-[#CCCCCC] py-8 md:py-0 border-t md:border-t-0 border-[#CCCCCC]">
            <p className="font-['DM_Sans'] text-[14px] text-[#333333] leading-relaxed">
              We do the diagnosis first. We audit your operations, map where time and money bleeds, and identify the exact workflows where an AI agent pays for itself. Then we build it.
            </p>
          </div>
          <div className="md:pl-10 pt-8 md:pt-0 border-t md:border-t-0 border-[#CCCCCC]">
            <p className="font-['DM_Sans'] text-[14px] text-[#555555] leading-relaxed italic">
              &ldquo;The question is no longer whether AI will change your business. It&apos;s whether you&apos;ll be the one who decided where — or your competitor will.&rdquo;
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