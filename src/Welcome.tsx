interface WelcomeProps {
  greeting?: string
  person: string
  punctuation?: string
}

export default function Welcome ({
  greeting = 'Welcome',
  person,
  punctuation
}: WelcomeProps) {
  return <p>{greeting} {person}{punctuation}</p>
}