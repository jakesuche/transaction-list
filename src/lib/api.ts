export async function loginUser(email: string, password: string): Promise<string> {
  // Simulate API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'user@example.com' && password === 'password') {
        resolve('mock-jwt-token')
      } else {
        reject(new Error('Invalid credentials'))
      }
    }, 1000)
  })
}

