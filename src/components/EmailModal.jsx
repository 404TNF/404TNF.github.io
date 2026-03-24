import { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import {Send} from 'lucide-react'

export default function EmailModal({ triggerText = 'Send an email from website' }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState('')
  const formRef = useRef(null)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSending(true)
    setStatus('')

    try {
      await emailjs.sendForm(
        'service_tk8j4lm',
        'template_8zlzxms',
        formRef.current,
        'hRPK9H6UtF-cvINm-'
      )

      setStatus('success')
      formRef.current.reset()

      setTimeout(() => {
        setIsOpen(false)
        setStatus('')
      }, 1200)
    } catch (error) {
      setStatus('error')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-xl border border-white/15 px-3 font-medium text-white transition hover:bg-white/5"
      >
        <Send />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-slate-950/80 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl rounded-3xl border border-white/10 bg-slate-900/95 p-6 shadow-[0_20px_80px_rgba(0,0,0,0.45)] md:p-8">
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close email modal"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            <div className="mb-8">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-sky-400">
                Contact
              </p>
              <h3 className="text-3xl font-bold tracking-tight text-white">
                Send an email
              </h3>
              <p className="mt-3 max-w-xl text-slate-300">
                Fill in the form below and send your message directly from the website.
              </p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Your name"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/40 focus:bg-white/[0.07]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/40 focus:bg-white/[0.07]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-200">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="6"
                  placeholder="Write your message..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/40 focus:bg-white/[0.07]"
                />
              </div>

              <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                <button
                  type="submit"
                  disabled={isSending}
                  className={`rounded-2xl px-5 py-3 font-semibold transition ${
                    isSending
                      ? 'cursor-not-allowed bg-white/70 text-slate-800'
                      : 'bg-white text-slate-950 hover:opacity-90'
                  }`}
                >
                  {isSending ? 'Sending...' : 'Send email'}
                </button>

                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white transition hover:bg-white/10"
                >
                  Cancel
                </button>
              </div>

              {status === 'success' && (
                <p className="text-sm text-emerald-400">
                  Message sent successfully.
                </p>
              )}

              {status === 'error' && (
                <p className="text-sm text-red-400">
                  Something went wrong. Please try again.
                </p>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  )
}