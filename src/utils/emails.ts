export const sendEmail = async (email: string, subject: string, message: string) => {

  const fd = new FormData()
  fd.append('email', email)
  fd.append('subject', subject)
  fd.append('message', message)
  
  return fetch('/api/contact', {method: 'POST', body: fd})
};