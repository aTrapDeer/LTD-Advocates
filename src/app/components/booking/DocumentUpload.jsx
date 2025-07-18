'use client'
import { useState } from 'react'

export default function DocumentUpload({ calendlyEmail = "", onUploadSuccess }) {
  const [files, setFiles] = useState([])
  const [isUploading, setIsUploading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState('')
  const [manualEmail, setManualEmail] = useState('')

  const allowedFileTypes = {
    'application/pdf': '.pdf',
    'application/msword': '.doc',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': '.docx',
    'image/jpeg': '.jpg',
    'image/png': '.png',
    'text/plain': '.txt'
  }

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files)
    console.log('Selected files:', selectedFiles.map(f => ({ name: f.name, type: f.type })))
    
    const validFiles = selectedFiles.filter(file => 
      Object.keys(allowedFileTypes).includes(file.type)
    )

    if (validFiles.length !== selectedFiles.length) {
      setUploadStatus(`Some files were removed. Only ${Object.values(allowedFileTypes).join(', ')} files are allowed.`)
    }

    setFiles(validFiles)
  }

  const handleUpload = async (e) => {
    e.preventDefault()
    
    if (!files.length) {
      setUploadStatus('Please select files to upload')
      return
    }

    try {
      setIsUploading(true)
      setUploadStatus('Preparing files for upload...')
      
      const formData = new FormData()
      
      files.forEach((file) => {
        formData.append('files', file)
      })
      
      formData.append('email', calendlyEmail || manualEmail)

      console.log('Starting upload with files:', files.map(f => f.name))
      
      const response = await fetch('/api/gdrive', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Upload failed')
      }
      
      console.log('Upload response:', data)
      setUploadStatus('Files uploaded successfully!')
      setFiles([])
      
      // Call onUploadSuccess if provided
      if (onUploadSuccess) {
        onUploadSuccess()
      }
    } catch (error) {
      console.error('Upload error:', error)
      setUploadStatus(`Upload failed: ${error.message}`)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Upload Documents</h2>
      <div className="text-gray-600 mb-4">
        <p className="mb-2">Please upload any relevant documents such as:</p>
        <ul className="list-disc ml-6">
          <li>Medical records</li>
          <li>Previous disability claims</li>
          <li>Supporting documentation</li>
        </ul>
      </div>
      <form onSubmit={handleUpload} className="space-y-4">
        {!calendlyEmail && (
          <div className="mb-4 bg-yellow-50 p-4 rounded-lg border-2 border-yellow-200">
            <label htmlFor="email" className="block text-base font-semibold text-gray-800 mb-2">
              *Your Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              value={manualEmail}
              onChange={(e) => setManualEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border-2 border-yellow-300 shadow-md focus:border-blue-500 focus:ring-blue-500 text-base"
              placeholder="Enter your email address"
            />
          </div>
        )}

        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
          <input
            type="file"
            multiple
            onChange={handleFileChange}
            className="file-input file-input-bordered w-full"
            accept=".pdf,.doc,.docx,.jpg,.png,.txt"
          />
          <p className="text-sm text-gray-500 mt-2">
            Accepted file types: PDF, DOC, DOCX, JPG, PNG, TXT (max 4MB each)
          </p>
        </div>

        {files.length > 0 && (
          <div className="bg-gray-50 p-3 rounded">
            <p className="font-medium mb-2">Selected files:</p>
            <ul className="text-sm text-gray-600">
              {Array.from(files).map((file, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span>📄</span> {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                </li>
              ))}
            </ul>
          </div>
        )}

        {uploadStatus && (
          <div className={`text-sm p-3 rounded ${
            uploadStatus.includes('success') 
              ? 'bg-green-50 text-green-600' 
              : 'bg-red-50 text-red-600'
          }`}>
            {uploadStatus}
          </div>
        )}

        <button
          type="submit"
          disabled={!files.length || isUploading}
          className={`btn btn-primary w-full ${!files.length || isUploading ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isUploading ? (
            <>
              <span className="loading loading-spinner"></span>
              Uploading...
            </>
          ) : (
            'Upload Documents'
          )}
        </button>
      </form>
    </div>
  )
}