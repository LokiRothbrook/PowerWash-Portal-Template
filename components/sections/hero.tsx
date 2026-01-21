"use client"

import * as React from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { heroSectionContent } from "@/lib/data"

function RainBackground() {
  // Generate rain drops only on client to avoid hydration mismatch
  const [rainDrops, setRainDrops] = React.useState<Array<{
    id: number;
    left: string;
    delay: number;
    duration: number;
    size: 'large' | 'small';
  }>>([]);

  React.useEffect(() => {
    setRainDrops(
      Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 3,
        duration: 1 + Math.random() * 1.5,
        size: Math.random() > 0.7 ? 'large' : 'small',
      }))
    );
  }, []);

  return (
    // Container for the background elements, ensuring overflow is hidden and elements don't interfere with interactions.
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Rain drops */}
      {rainDrops.map((drop) => (
        <div
          key={drop.id}
          className={`rain-drop ${drop.size === 'large' ? 'rain-drop-large' : ''}`}
          style={{
            left: drop.left,
            animationDelay: `${drop.delay}s`,
            animationDuration: `${drop.duration}s`,
          }}
        />
      ))}

      {/* Water mist/spray effects */}
      <motion.div
        className="water-mist w-[400px] h-[400px] top-[10%] left-[-5%]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="water-mist w-[500px] h-[500px] bottom-[5%] right-[-10%]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.15, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="water-mist w-[300px] h-[300px] top-[50%] left-[40%]"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle water ripple pattern overlay */}
      <div className="absolute inset-0 water-pattern opacity-50" />
    </div>
  )
}

export function HeroSection() {
  // Reference to the main container for scroll-based animations.
  const containerRef = React.useRef<HTMLDivElement>(null)
  // useScroll hook tracks the scroll progress of the container.
  // offset: ["start start", "end start"] means the scroll progress is 0 when the top of the container hits the top of the viewport,
  // and 1 when the bottom of the container hits the top of the viewport.
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  // useTransform maps the scrollYProgress (0 to 1) to other values for animation.
  // 'y' transforms scroll progress to a vertical translation, creating a parallax effect.
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  // 'opacity' transforms scroll progress to an opacity value, making elements fade out.
  // The fade starts when the section is approximately 60% scrolled and completes by the end of the scroll target.
  const opacity = useTransform(scrollYProgress, [0.6, 1], [1, 0])

  return (
    // Main section for the hero component, covering the full viewport height.
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Renders the animated rain/water background elements. */}
      <RainBackground />

      {/* Main content wrapper, applies parallax 'y' and fade 'opacity' animations. */}
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        {/* Main Hero Content - Title, subtitle, and primary/secondary call-to-action buttons. */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }} // Initial animation state (hidden, slightly below)
            animate={{ opacity: 1, y: 0 }} // Animation target (visible, at original position)
            transition={{ duration: 0.6, delay: 0.1 }} // Animation properties
            className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="block gradient-text">{heroSectionContent.title.line1}</span>
            <span className="block gradient-text">{heroSectionContent.title.line2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            {heroSectionContent.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {/* Primary CTA Button */}
            <Button asChild size="lg" className="text-base px-8 glow-blue">
              <Link href={heroSectionContent.buttons.primary.href}>
                {heroSectionContent.buttons.primary.text}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            {/* Secondary CTA Button */}
            <Button asChild variant="outline" size="lg" className="text-base px-8 glass">
              <Link href={heroSectionContent.buttons.secondary.href}>
                {heroSectionContent.buttons.secondary.text}
              </Link>
            </Button>
          </motion.div>

          {/* Trust Badges - Displaying key assurances like "Fully Insured", "Licensed Pros". */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-8 mt-12 text-sm text-muted-foreground"
          >
            {heroSectionContent.trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2">
                <badge.icon className="w-5 h-5 text-primary" />
                <span>{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero Cards Grid - Displays feature/service highlights in a grid layout. */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {heroSectionContent.heroCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 40 }} // Cards initially hidden and slightly below their final position.
              animate={{ opacity: 1, y: 0 }} // Animate to full opacity and correct vertical position.
              transition={{ duration: 0.6, delay: 0.4 + card.delay }} // Staggered animation delay.
              whileHover={{ y: -8, scale: 1.02 }} // Interactive hover effect.
              className="group relative"
            >
              {/* Decorative background blur on hover. */}
              <div className={`
                absolute inset-0 rounded-2xl bg-primary/20 opacity-0
                group-hover:opacity-100 blur-xl transition-opacity duration-500
              `} />
              {/* Card content wrapper. */}
              <div className={`
                relative h-full p-8 rounded-2xl
                ${card.cardClass}
                overflow-hidden
                ${index === 1 ? 'md:-mt-4 md:mb-4' : ''} // Styling adjustment for the middle card.
              `}>
                {/* Shimmer Effect for visual flair on hover. */}
                <div className="absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Individual Card Content */}
                <div className="relative z-10">
                  {/* Card Icon */}
                  <div className={`
                    w-14 h-14 rounded-xl bg-primary/20
                    flex items-center justify-center mb-6
                    group-hover:scale-110 transition-transform duration-300
                  `}>
                    <card.icon className="w-7 h-7 text-primary" />
                  </div>

                  {/* Card Title and Subtitle */}
                  <p className="text-sm text-primary font-medium mb-2">{card.subtitle}</p>
                  <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                  <p className="text-muted-foreground mb-6">{card.description}</p>

                  {/* Call to action within the card. */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-primary">{card.stats}</span>
                  </div>
                </div>

                {/* Decorative background elements within the card. */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-accent/10 to-transparent rounded-tr-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
