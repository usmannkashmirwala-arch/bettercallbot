import { useState } from 'react';

interface BookAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookAuditModal({ isOpen, onClose }: BookAuditModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [charCount, setCharCount] = useState(0);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const textarea = form.querySelector('textarea');
    if (textarea && textarea.value.length > 500) return;

    setSubmitting(true);
    const formData = new FormData(form);
    const body = new URLSearchParams();
    formData.forEach((value, key) => {
      body.append(key, value.toString());
    });

    try {
      await fetch('https://readdy.ai/api/form/d73g0eifp7tlt849njng', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#111111]/90" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-[#F5F4F0] w-full max-w-lg z-10 p-8 md:p-10">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 font-['DM_Sans'] text-[#888888] hover:text-[#111111] cursor-pointer text-xl leading-none"
          aria-label="Close"
        >
          ✕
        </button>

        {!submitted ? (
          <>
            <p className="font-['DM_Sans'] text-[10px] tracking-[0.25em] uppercase text-[#E63329] mb-3">
              FREE AUDIT SESSION
            </p>
            <h2 className="font-['Anton'] text-4xl text-[#111111] uppercase mb-2">
              BOOK YOUR<br /><span className="text-[#E63329]">FREE AUDIT</span>
            </h2>
            <p className="font-['DM_Sans'] text-[13px] text-[#555555] mb-8 leading-relaxed">
              Tell us about your business and where you think time is being wasted. We&apos;ll come prepared with a specific plan.
            </p>

            <form
              data-readdy-form
              id="book-free-audit-form"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <div>
                <label className="font-['DM_Sans'] text-[11px] tracking-[0.15em] uppercase text-[#888888] block mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="full_name"
                  required
                  placeholder="Usman Kashmirwala"
                  className="w-full bg-white border border-[#CCCCCC] px-4 py-3 font-['DM_Sans'] text-sm text-[#111111] focus:outline-none focus:border-[#111111] placeholder:text-[#BBBBBB]"
                />
              </div>

              <div>
                <label className="font-['DM_Sans'] text-[11px] tracking-[0.15em] uppercase text-[#888888] block mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  className="w-full bg-white border border-[#CCCCCC] px-4 py-3 font-['DM_Sans'] text-sm text-[#111111] focus:outline-none focus:border-[#111111] placeholder:text-[#BBBBBB]"
                />
              </div>

              <div>
                <label className="font-['DM_Sans'] text-[11px] tracking-[0.15em] uppercase text-[#888888] block mb-1">
                  Business / Industry *
                </label>
                <input
                  type="text"
                  name="business"
                  required
                  placeholder="e.g. E-commerce, Legal, Real Estate"
                  className="w-full bg-white border border-[#CCCCCC] px-4 py-3 font-['DM_Sans'] text-sm text-[#111111] focus:outline-none focus:border-[#111111] placeholder:text-[#BBBBBB]"
                />
              </div>

              <div>
                <label className="font-['DM_Sans'] text-[11px] tracking-[0.15em] uppercase text-[#888888] block mb-1">
                  Where is time being wasted? ({charCount}/500)
                </label>
                <textarea
                  name="pain_points"
                  rows={4}
                  maxLength={500}
                  onChange={(e) => setCharCount(e.target.value.length)}
                  placeholder="Describe repetitive tasks, manual processes, or customer service bottlenecks..."
                  className="w-full bg-white border border-[#CCCCCC] px-4 py-3 font-['DM_Sans'] text-sm text-[#111111] focus:outline-none focus:border-[#111111] placeholder:text-[#BBBBBB] resize-none"
                />
                {charCount > 500 && (
                  <p className="font-['DM_Sans'] text-xs text-[#E63329] mt-1">Maximum 500 characters allowed.</p>
                )}
              </div>

              <button
                type="submit"
                disabled={submitting || charCount > 500}
                className="w-full font-['DM_Sans'] text-[12px] tracking-[0.15em] uppercase font-semibold bg-[#D4FF00] text-[#111111] py-4 cursor-pointer whitespace-nowrap hover:bg-[#c5f000] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? 'SENDING...' : 'BOOK MY FREE AUDIT →'}
              </button>
            </form>
          </>
        ) : (
          <div className="text-center py-8">
            <p className="font-['Anton'] text-5xl text-[#E63329] mb-4">DONE.</p>
            <h3 className="font-['Anton'] text-3xl text-[#111111] uppercase mb-4">Audit Request Received</h3>
            <p className="font-['DM_Sans'] text-[14px] text-[#555555] leading-relaxed mb-8">
              We&apos;ll review your details and reach out within 24 hours with a tailored plan. Talk soon.
            </p>
            <button
              onClick={onClose}
              className="font-['DM_Sans'] text-[12px] tracking-[0.15em] uppercase font-semibold border border-[#111111] text-[#111111] px-8 py-3 cursor-pointer hover:bg-[#111111] hover:text-[#F5F4F0] transition-colors"
            >
              CLOSE ✕
            </button>
          </div>
        )}
      </div>
    </div>
  );
}