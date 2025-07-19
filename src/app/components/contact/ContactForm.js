'use client'

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
  }

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          placeholder="Your name"
          className="mt-1 block w-full rounded-md bg-gray-50 border-2 border-gray-300 
          shadow-sm focus:border-primary focus:ring-primary focus:ring-2 focus:bg-white
          transition-colors px-4 py-2"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="your.email@example.com"
          className="mt-1 block w-full rounded-md bg-gray-50 border-2 border-gray-300 
          shadow-sm focus:border-primary focus:ring-primary focus:ring-2 focus:bg-white
          transition-colors px-4 py-2"
        />
      </div>
      <div>
        <label htmlFor="reason" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
          Reason for Contact
        </label>
        <select
          id="reason"
          className="mt-1 block w-full rounded-md bg-gray-50 border-2 border-gray-300 
          shadow-sm focus:border-primary focus:ring-primary focus:ring-2 focus:bg-white
          transition-colors px-4 py-2"
        >
          <option value="">Select a reason</option>
          <option value="eligibility">Eligibility Questions</option>
          <option value="appeals">Appeals Assistance</option>
          <option value="general">General Inquiry</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
          Message
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="How can we help you?"
          className="mt-1 block w-full rounded-md bg-gray-50 border-2 border-gray-300 
          shadow-sm focus:border-primary focus:ring-primary focus:ring-2 focus:bg-white
          transition-colors px-4 py-2"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-primary-focus 
        transition-colors font-medium"
      >
        Send Message
      </button>
    </form>
  )
} 