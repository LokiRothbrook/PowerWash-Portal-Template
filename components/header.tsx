"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import {
  Phone,
  Menu,
  X,
  ChevronDown,
  Droplets,
  Facebook,
  Instagram,
  Youtube,
  MapPin,
  Navigation,
} from "lucide-react"
import { getIcon } from "@/lib/icon-map"

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

import { cn } from "@/lib/utils"
import { services, companyInfo, siteConfig, headerContent } from "@/lib/data"
import { Button } from "@/components/ui/button"

function SocialLink({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="relative w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 overflow-hidden group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon className="w-4 h-4 relative z-10" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity glow-blue rounded-lg" />
    </motion.a>
  )
}

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const [isServicesOpen, setIsServicesOpen] = React.useState(false)
  const [isLocationOpen, setIsLocationOpen] = React.useState(false)
  const servicesRef = React.useRef<HTMLDivElement>(null)
  const locationRef = React.useRef<HTMLDivElement>(null)

  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(companyInfo.address)}`

  React.useEffect(() => {
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false)
      }
      if (locationRef.current && !locationRef.current.contains(event.target as Node)) {
        setIsLocationOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const navItems = headerContent.navItems.filter(item => {
    if (item.href === '/pricing') return siteConfig.pages.pricing.enabled
    if (item.href === '/gallery') return siteConfig.pages.gallery.enabled
    if (item.href === '/faq') return siteConfig.pages.faq.enabled
    return true
  })

  const socialLinks = [
    { href: companyInfo.social.facebook, icon: Facebook, label: "Facebook" },
    { href: companyInfo.social.instagram, icon: Instagram, label: "Instagram" },
    { href: companyInfo.social.x, icon: XIcon, label: "X" },
    { href: companyInfo.social.youtube, icon: Youtube, label: "YouTube" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500" 
      )}
    >
      {/* Background blur layer for the header */}
      <div className="absolute inset-0 -z-10 bg-transparent glass" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/#" className="flex items-center gap-2 group">
            <motion.div
              className="relative"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center glow-blue">
                <Droplets className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="absolute inset-0 rounded-xl bg-primary/30 blur-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
            <span className="text-xl font-bold whitespace-nowrap">
              <span className="gradient-text">{companyInfo.name.split(" ")[0]}</span>
              <span className="text-foreground"> {companyInfo.name.split(" ").slice(1).join(" ")}</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} ref={item.hasDropdown ? servicesRef : undefined} className="relative">
                {item.hasDropdown ? (
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={cn(
                      "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
                      "hover:bg-primary/10 hover:text-primary",
                      isServicesOpen && "bg-primary/10 text-primary"
                    )}
                  >
                    {item.label}
                    <motion.div
                      animate={{ rotate: isServicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-primary/10 hover:text-primary whitespace-nowrap"
                  >
                    {item.label}
                  </Link>
                )}

                {/* Services Mega Dropdown */}
                <AnimatePresence>
                  {item.hasDropdown && isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[700px] p-6 rounded-2xl glass-card shadow-2xl bg-card/80"
                    >
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 rotate-45 bg-card border-l border-t border-border" />
                      <div className="relative">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold">{headerContent.servicesDropdown.title}</h3>
                          <Link
                            href="/services"
                            className="text-sm text-primary hover:underline"
                            onClick={() => setIsServicesOpen(false)}
                          >
                            {headerContent.servicesDropdown.viewAll}
                          </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {services.map((service, index) => {
                            const ServiceIcon = getIcon(service.iconName)
                            return (
                              <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link
                                  href={`/services/${service.id}`}
                                  onClick={() => setIsServicesOpen(false)}
                                  className="group flex items-start gap-3 p-3 rounded-xl hover:bg-primary/5 transition-all border border-transparent hover:border-primary/20"
                                >
                                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                                    {ServiceIcon && <ServiceIcon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <h4 className="text-sm font-medium group-hover:text-primary transition-colors">
                                      {service.title}
                                    </h4>
                                    <p className="text-xs text-muted-foreground line-clamp-1">
                                      {service.shortDescription}
                                    </p>
                                  </div>
                                </Link>
                              </motion.div>
                            )
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-1 sm:gap-3">


            {/* Divider */}
            <div className="hidden md:block w-px h-8 bg-border" />

            {/* Phone Button */}
            <motion.a
              href={`tel:${companyInfo.phone.replace(/[^0-9]/g, "")}`}
              className="flex items-center gap-2 px-2 sm:px-4 py-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all group whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
              >
                <Phone className="w-4 h-4" />
              </motion.div>
              <span className="text-sm font-medium hidden lg:inline">{companyInfo.phone}</span>
            </motion.a>

            {/* Location Button with Dropdown */}
            <div ref={locationRef} className="relative hidden sm:block">
              <motion.button
                onClick={() => setIsLocationOpen(!isLocationOpen)}
                className={cn(
                  "relative w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 overflow-hidden",
                  isLocationOpen && "bg-primary text-primary-foreground"
                )}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Get Directions"
              >
                <MapPin className="w-4 h-4 relative z-10" />
              </motion.button>

              <AnimatePresence>
                {isLocationOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full right-0 mt-2 w-72 p-4 rounded-2xl glass-card shadow-2xl backdrop-blur-xl bg-card/80"
                  >
                    <div className="absolute -top-3 right-4 w-6 h-6 rotate-45 bg-card border-l border-t border-border" />
                    <div className="relative">
                      <h3 className="text-sm font-semibold mb-3">{headerContent.locationDropdown.title}</h3>

                      {/* Map Preview */}
                      <div className="aspect-video rounded-xl bg-primary/5 border border-border overflow-hidden relative mb-3">
                        <Image
                          src="/map-preview.svg"
                          alt={`Map showing ${companyInfo.name} location`}
                          fill
                          className="object-cover"
                          sizes="288px"
                        />
                        {/* Overlay with address */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end justify-center pb-2">
                          <p className="text-xs text-muted-foreground px-2 text-center">{companyInfo.address}</p>
                        </div>
                      </div>

                      <Button asChild className="w-full glow-blue" size="sm">
                        <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                          <Navigation className="w-4 h-4 mr-2" />
                          {headerContent.locationDropdown.buttonText}
                        </a>
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <Button asChild size="sm" className="glow-blue text-xs sm:text-sm px-2 sm:px-4 whitespace-nowrap">
              <Link href="/#contact">
                <span className="hidden sm:inline">{headerContent.ctaButton.desktop}</span>
                <span className="sm:hidden">{headerContent.ctaButton.mobile}</span>
              </Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-border"
          >
            <div className="max-h-[calc(100vh-5rem)] overflow-y-auto">
              <div className="px-3 py-3 space-y-1">
                {navItems.map((item) => (
                  <div key={item.label}>
                    {item.hasDropdown ? (
                      <div className="space-y-1">
                        <Link
                          href="/services"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors"
                        >
                          {headerContent.mobileMenu.services}
                        </Link>
                        <div className="pl-3 space-y-0.5">
                          {services.map((service) => {
                            const ServiceIcon = getIcon(service.iconName)
                            return (
                              <Link
                                key={service.id}
                                href={`/services/${service.id}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                              >
                                {ServiceIcon && <ServiceIcon className="w-3.5 h-3.5" />}
                                {service.title}
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block px-3 py-2 text-base font-medium hover:text-primary transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}

                {/* Social Links - Mobile */}
                <div className="flex items-center justify-center gap-2 py-3">
                  {socialLinks.map((social) => (
                    <SocialLink key={social.label} {...social} />
                  ))}
                </div>

                <div className="pt-3 border-t border-border space-y-2">
                  <a
                    href={`tel:${companyInfo.phone.replace(/[^0-9]/g, "")}`}
                    className="flex items-center justify-center gap-2 w-full px-3 py-2.5 rounded-lg bg-primary/10 text-primary text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span className="font-medium">{companyInfo.phone}</span>
                  </a>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-3 py-2.5 rounded-lg bg-primary/10 text-primary text-sm"
                  >
                    <Navigation className="w-4 h-4" />
                    <span className="font-medium">{headerContent.mobileMenu.getDirections}</span>
                  </a>
                  <Button asChild className="w-full glow-blue" size="sm">
                    <Link href="/#contact">{headerContent.mobileMenu.getQuote}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
