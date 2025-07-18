import DocumentUpload from '../components/booking/DocumentUpload'

export default function DocsUploadPage() {
  return (
    <main className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">Document Upload Portal</h1>
          <p className="text-xl text-gray-600">Secure submission of your legal documents</p>
        </header>

        <section className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-800">Purpose & Analysis</h2>
          <div className="space-y-4 text-gray-700">
            <p className="leading-relaxed">
              This dedicated document upload portal serves as a secure, centralized hub for submitting legal documents 
              related to your disability claim or consultation. By separating document submission from the booking process, 
              we ensure that clients can upload materials at their convenience, without the pressure of concurrent scheduling.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-700">Key Benefits:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Streamlined workflow separating scheduling from document submission</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Reduced cognitive load during the booking process</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Flexible document submission timing</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-500 mr-2">✓</span>
                    <span>Enhanced security through dedicated processing</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3 text-blue-700">Document Types Accepted:</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">📄</span>
                    <span>Medical records and reports</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">📋</span>
                    <span>Previous disability claims</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">📑</span>
                    <span>Employment history documentation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">🗂️</span>
                    <span>Supporting legal documents</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-6">
          <DocumentUpload />
        </section>

        <section className="mt-8 text-center">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-2 text-gray-800">Need Help?</h3>
            <p className="text-gray-600 mb-4">
              Having trouble with document upload? Our team is here to assist you.
            </p>
            <div className="flex justify-center gap-4">
              <a 
                href="/contact" 
                className="btn btn-outline btn-primary"
              >
                Contact Support
              </a>
              <a 
                href="/booking" 
                className="btn btn-primary"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
} 