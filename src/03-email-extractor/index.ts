type User = {
  id: number
  name: string
  email: string
  age: number
}

export function extractEmails(users: User[]): string[] {
  const emails: string[] = []

  for (const user of users) {
    if (user && user.email && !emails.includes(user.email)) {
      emails.push(user.email)
    }
  }

  return emails
}
