import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
      <p className="text-xl mb-8">I &apos; m a Front-end Developer passionate about creating amazing web experiences</p>
      <Button asChild>
        <a href="#contact">Get in Touch</a>
      </Button>
    </section>
  )
}