// Google Analytics 4 Event Tracking Utilities
// Make sure window.gtag is available before calling these functions

/**
 * TRACKED EVENTS:
 * - contact_form_submit: Contact form submissions 
 * - phone_click: Phone number clicks from various locations
 * - booking_click: Consultation booking button clicks
 * - calendly_booking_complete: Successful Calendly bookings
 * - document_upload: Document upload events
 * - section_view: Important page section views
 * - email_click: Email address clicks
 * - external_link_click: External website clicks
 * 
 * PRODUCTION NOTE: Remove console.log below for production deployment
 */

export const trackEvent = (eventName, parameters = {}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
    // console.log('📊 GA Event:', eventName, parameters); // TODO: Remove in production
  }
};

// Contact form submission tracking
export const trackContactFormSubmission = (formData) => {
  trackEvent('contact_form_submit', {
    event_category: 'engagement',
    event_label: formData.reason || 'general',
    value: 1,
    custom_parameters: {
      form_type: 'contact',
      reason: formData.reason,
      user_email: formData.email.replace(/@.*$/, '@***'), // Privacy-safe email tracking
    }
  });
};

// Phone number click tracking
export const trackPhoneClick = (source = 'unknown') => {
  trackEvent('phone_click', {
    event_category: 'engagement',
    event_label: source,
    value: 1,
    custom_parameters: {
      phone_number: '314-640-8720',
      click_source: source
    }
  });
};

// Booking consultation clicks
export const trackBookingClick = (source = 'unknown', bookingType = 'consultation') => {
  trackEvent('booking_click', {
    event_category: 'conversion',
    event_label: `${bookingType}_${source}`,
    value: 1,
    custom_parameters: {
      booking_type: bookingType,
      click_source: source,
      page_path: typeof window !== 'undefined' ? window.location.pathname : 'unknown'
    }
  });
};

// Document upload tracking
export const trackDocumentUpload = (documentType = 'unknown') => {
  trackEvent('document_upload', {
    event_category: 'engagement',
    event_label: documentType,
    value: 1,
    custom_parameters: {
      document_type: documentType
    }
  });
};

// Page section view tracking (for important sections)
export const trackSectionView = (sectionName, page = 'unknown') => {
  trackEvent('section_view', {
    event_category: 'engagement',
    event_label: `${page}_${sectionName}`,
    custom_parameters: {
      section_name: sectionName,
      page_name: page
    }
  });
};

// Email click tracking
export const trackEmailClick = (source = 'unknown') => {
  trackEvent('email_click', {
    event_category: 'engagement',
    event_label: source,
    value: 1,
    custom_parameters: {
      email: 'contact@ltdadvocates.com',
      click_source: source
    }
  });
};

// External link tracking
export const trackExternalLink = (url, linkText = '') => {
  trackEvent('external_link_click', {
    event_category: 'engagement',
    event_label: url,
    custom_parameters: {
      link_url: url,
      link_text: linkText
    }
  });
};

// Calendly booking completion (if possible to detect)
export const trackCalendlyBooking = (eventData = {}) => {
  trackEvent('calendly_booking_complete', {
    event_category: 'conversion',
    event_label: 'consultation_scheduled',
    value: 10, // High value event
    custom_parameters: {
      booking_platform: 'calendly',
      ...eventData
    }
  });
}; 