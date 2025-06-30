// This component needs to be a Client Component due to useState, useEffect, and Framer Motion.
"use client";

import React, { useState, useEffect } from "react";
import BenefitCard from "./BenefitCard";
import { Skeleton } from "@/components/ui/skeleton";
import { motion } from "framer-motion";
import { fetchBenefits } from "@/lib/api";

// Framer Motion variants
const containerVariants = {
  hidden: { opacity: 0 }, // Initial state: fully transparent
  show: {
    opacity: 1, // Final state: fully opaque
    transition: {
      staggerChildren: 0.1, // Delay of 0.1 seconds between each child's animation start
    },
  },
};

// Framer Motion variants for individual items
const itemVariants = {
  hidden: { opacity: 0, y: 20 }, // Initial state: transparent and slightly moved down
  show: { opacity: 1, y: 0, transition: { duration: 0.3 } }, // Animates to opaque and original position
};

const BenefitsGrid = () => {
  const [loading, setLoading] = useState(true);
  const [benefits, setBenefits] = useState([]);

  useEffect(() => {
    const loadBenefits = async () => {
      setLoading(true);
      try {
        const data = await fetchBenefits();
        setBenefits(data);
      } catch (error) {
        console.error("Failed to fetch benefits:", error);
      } finally {
        setLoading(false);
      }
    };

    loadBenefits();
  }, []);

  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-lg p-6 border border-border">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Your Exclusive Benefits
      </h2>
      {loading ? (
        // Render Skeleton loaders while data is loading.
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <Skeleton key={index} className="h-[200px] w-full rounded-lg" />
          ))}
        </div>
      ) : (
        // Once data is loaded, render the actual BenefitCards.
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {benefits.map((benefit) => (
            <motion.div key={benefit.id} variants={itemVariants}>
              <BenefitCard {...benefit} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default BenefitsGrid;
