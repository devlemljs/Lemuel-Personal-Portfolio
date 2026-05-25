import React, { useState } from 'react';

interface FeedbackFormProps {
  isDarkMode: boolean;
  onModalToggle?: (isOpen: boolean) => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ isDarkMode, onModalToggle }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Notify parent when modal state changes
  React.useEffect(() => {
    if (onModalToggle) {
      onModalToggle(isModalOpen);
    }
  }, [isModalOpen, onModalToggle]);
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [allowUsage, setAllowUsage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const [showThankYou, setShowThankYou] = useState(false);

  // Replace this with your actual Google Apps Script Web App URL
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx40BFW5xS52cvYWzLj-o6qsIkRYcPuNMTQtSq5G8JWqHrrIhKI0JtgI7XIFcFfE-Rr/exec';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const formData = new FormData();
    formData.append('name', isAnonymous ? 'Anonymous' : name);
    formData.append('feedback', feedback);
    formData.append('allowUsage', allowUsage ? 'Yes' : 'No');
    formData.append('timestamp', new Date().toISOString());

    try {
      // Using no-cors as requested. Note: You won't be able to read the response body.
      await fetch(SCRIPT_URL, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      });
      
      setSubmitStatus('success');
      setShowThankYou(true);
      setName('');
      setFeedback('');
      setIsAnonymous(false);
      setAllowUsage(false);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsModalOpen(false);
    // Reset states after modal is closed
    setTimeout(() => {
      setShowThankYou(false);
      setSubmitStatus('idle');
    }, 300);
  };

  return (
    <>
      {/* Feedback Box Trigger */}
      <div 
        onClick={() => setIsModalOpen(true)}
        className={`p-4 h-[134px] flex flex-col justify-center items-center rounded-xl border glossy-glow text-center relative overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
          isDarkMode ? 'bg-[#111111] border-white/5 hover:border-purple-500/30' : 'bg-gray-50 border-black/5 hover:border-purple-500/30'
        }`}
      >
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center mb-1">
            <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
            </svg>
          </div>
          <span className={`font-bold text-xs uppercase tracking-widest ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Leave a Feedback
          </span>
          <span className="text-purple-400 text-[10px] font-medium uppercase tracking-widest">
            Share your thoughts or recommendations
          </span>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center px-4">
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => !isSubmitting && handleClose()}
          ></div>
          
          <div className={`relative w-full max-w-md p-6 rounded-2xl border shadow-2xl animate-in fade-in zoom-in duration-300 ${
            isDarkMode ? 'bg-[#0f0f0f] border-white/10 text-white' : 'bg-white border-black/10 text-black'
          }`}>
            {!showThankYou ? (
              <>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-bold uppercase tracking-widest">Feedback Form</h3>
                  <button 
                    onClick={handleClose}
                    className={`p-1 rounded-full transition-colors ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-black/10'}`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className={`block text-[10px] font-bold uppercase tracking-widest mb-1.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Your Name
                    </label>
                    <input 
                      type="text"
                      value={isAnonymous ? '' : name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={isAnonymous}
                      style={{ '--input-bg': isDarkMode ? '#1a1a1a' : '#f9fafb' } as React.CSSProperties}
                      placeholder={isAnonymous ? 'Anonymous' : 'Enter your name'}
                      required={!isAnonymous}
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all input-active-glow ${
                        isDarkMode 
                          ? 'bg-[#1a1a1a] border-white/10 text-white placeholder:text-gray-600 focus:bg-[#1a1a1a]' 
                          : 'bg-gray-50 border-black/10 text-black placeholder:text-gray-400 focus:bg-gray-50'
                      } ${isAnonymous ? 'opacity-50 cursor-not-allowed' : ''}`}
                    />
                  </div>

                  <div>
                    <label className={`block text-[10px] font-bold uppercase tracking-widest mb-1.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                      Feedback / Recommendation
                    </label>
                    <textarea 
                      value={feedback}
                      onChange={(e) => setFeedback(e.target.value)}
                      placeholder="Write your feedback here..."
                      style={{ '--input-bg': isDarkMode ? '#1a1a1a' : '#f9fafb' } as React.CSSProperties}
                      required
                      rows={4}
                      className={`w-full px-4 py-2.5 rounded-lg border text-sm transition-all input-active-glow resize-none ${
                        isDarkMode 
                          ? 'bg-[#1a1a1a] border-white/10 text-white placeholder:text-gray-600 focus:bg-[#1a1a1a]' 
                          : 'bg-gray-50 border-black/10 text-black placeholder:text-gray-400 focus:bg-gray-50'
                      }`}
                    />
                  </div>

                  <div className="space-y-3 pt-2">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative">
                        <input 
                          type="checkbox"
                          checked={isAnonymous}
                          onChange={(e) => setIsAnonymous(e.target.checked)}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded border transition-all flex items-center justify-center ${
                          isAnonymous 
                            ? 'bg-purple-600 border-purple-600' 
                            : (isDarkMode ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5')
                        }`}>
                          {isAnonymous && (
                            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className={`text-[11px] font-medium transition-colors ${isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-gray-600 group-hover:text-black'}`}>
                        Submit anonymously
                      </span>
                    </label>

                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative">
                        <input 
                          type="checkbox"
                          checked={allowUsage}
                          onChange={(e) => setAllowUsage(e.target.checked)}
                          className="sr-only"
                        />
                        <div className={`w-5 h-5 rounded border transition-all flex items-center justify-center ${
                          allowUsage 
                            ? 'bg-purple-600 border-purple-600' 
                            : (isDarkMode ? 'border-white/20 bg-white/5' : 'border-black/20 bg-black/5')
                        }`}>
                          {allowUsage && (
                            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className={`text-[11px] font-medium transition-colors ${isDarkMode ? 'text-gray-400 group-hover:text-white' : 'text-gray-600 group-hover:text-black'}`}>
                        Allow my testimonial for other usage
                      </span>
                    </label>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all mt-4 flex items-center justify-center gap-2 ${
                      isSubmitting 
                        ? 'opacity-70 cursor-not-allowed' 
                        : 'hover:-translate-y-1 active:scale-95'
                    } ${
                      isDarkMode 
                        ? 'bg-white text-black hover:bg-white/90' 
                        : 'bg-black text-white hover:bg-black/90'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Submitting...
                      </>
                    ) : (
                      'Submit Feedback'
                    )}
                  </button>

                  {submitStatus === 'error' && (
                    <p className="text-red-500 text-[10px] font-bold text-center uppercase tracking-widest animate-in fade-in slide-in-from-top-1">
                      Error submitting feedback. Please try again.
                    </p>
                  )}
                </form>
              </>
            ) : (
              <div className="py-12 flex flex-col items-center text-center animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-2 uppercase tracking-tight">Thank You!</h3>
                <p className={`text-sm mb-8 max-w-[280px] leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Your feedback has been shared. I truly appreciate you taking the time to help me improve.
                </p>
                <button 
                  onClick={handleClose}
                  className={`px-8 py-3 rounded-xl font-bold text-xs uppercase tracking-widest transition-all hover:-translate-y-1 active:scale-95 ${
                    isDarkMode 
                      ? 'bg-white text-black hover:bg-white/90' 
                      : 'bg-black text-white hover:bg-black/90'
                  }`}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackForm;
