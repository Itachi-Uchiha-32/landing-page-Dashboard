"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, ShoppingCart, Star, CheckCircle2 } from "lucide-react";
import Hero from "@/components/Hero";
import BenefitsGrid from "@/components/BenefitsGrid";
import ProblemSection from "@/components/ProblemSection";
import HealthTips from "@/components/HealthTips";
import Hotline from "@/components/Hotline";
import Youtube from "@/components/Youtube";
import CallAction from "@/components/CallAction";
import WhyBuySection from "@/components/WhyBuySection";
import CheckoutForm from "@/components/CheckoutForm";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function LandingPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <Hotline />
      <ProblemSection />
      <Youtube />
      <BenefitsGrid />
      <HealthTips />
      <CallAction />
      <WhyBuySection/>
      <CheckoutForm/>
      <Reviews/>
      <Footer/>
    </main>
  );
}