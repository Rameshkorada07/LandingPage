import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import feedback_icon from './Assets/feedback-icon.png'
import form_icon from './Assets/form-header-img.png'
import close_icon from './Assets/feedback-close.png'
import rating_star from './Assets/rating-star.png'
import rating_star_blue from './Assets/rating_star_filled.png'
const FeedbackButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({
      rating,
      feedback,
    });
    
    // Reset form
    setRating(0);
    setFeedback('');
    setIsOpen(false);
    
    // You can add a toast notification here
    alert('Thank you for your feedback!');
  };

  const StarRating = () => (
    <div className="flex gap-2 justify-start">
      {[1, 2, 3, 4, 5].map((star) => (
        <img
          key={star}
          src={star <= rating ? rating_star_blue : rating_star}
          alt="Rating Star"
          className={`w-7 h-7 cursor-pointer no-animation ${
            star <= rating
              ? 'opacity-100'
              : 'opacity-30 hover:opacity-50'
          }`}
          onClick={() => setRating(star)}
        />
      ))}
    </div>
  );

    return (
    <>
      {/* Floating Feedback Button */}
      <div className="fixed bottom-6 right-6 z-[1003]">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-transparent hover:bg-transparent border-none shadow-none p-0 h-auto w-auto focus:outline-none focus:ring-0 focus:border-none outline-none"
          size="lg"
        >
          <img src={feedback_icon} alt="Feedback" className="w-16 h-16 hover:scale-110 transition-transform duration-300" />
        </Button>
      </div>

      {/* Custom Positioned Feedback Form */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-[1001] no-animation" onClick={() => setIsOpen(false)} />
          
          {/* Feedback Form */}
          <div className="fixed bottom-28 right-6 w-96 max-w-[calc(100vw-24px)] bg-white shadow-2xl rounded-xl overflow-hidden z-[1002] md:w-96 sm:w-80 sm:right-4">
            {/* Custom Header */}
            <div className="bg-white text-gray-800 px-4 py-3 flex items-center justify-between border-b border-gray-200">
              <div className="flex items-center gap-3">
                <img src={form_icon} alt="Form" className="w-6 h-6" />
                <span className="font-medium text-sm">Feedback</span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-600 hover:text-gray-800 w-6 h-6 flex items-center justify-center"
              >
                <img src={close_icon} alt="Close" className="w-4 h-4" />
              </button>
            </div>
            
            {/* Form Content */}
            <div className="p-6 relative">
              <form onSubmit={handleSubmit}>
                {/* Title */}
                <h2 className="text-xl font-semibold text-gray-900 mb-3">
                  Rate your experience
                </h2>
                
                {/* Description */}
                <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                  Your input is valuable in helping us better understand your needs and tailor our service accordingly.
                </p>

                {/* Star Rating */}
                <div className="mb-6">
                  <StarRating />
                </div>

                {/* Suggestions Text */}
                <p className="text-sm text-gray-800 font-medium mb-3">
                  Got suggestions? we'd love to hear them!
                </p>
                
                {/* Textarea */}
                <div className="mb-6">
                  <Textarea
                    placeholder="Write here"
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    className="w-full h-24 resize-none border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md text-sm"
                  disabled={!feedback.trim()}
                >
                  Submit now
                </Button>
              </form>
              
              {/* Bottom Right Close Button */}
              
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FeedbackButton; 