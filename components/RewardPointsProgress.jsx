// This component needs to be a Client Component due to useState, useEffect, and Framer Motion usage.
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CircleDollarSign } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";

const RewardPointsProgress = ({}) => {
  const [loading, setLoading] = useState(true);
  const targetPoints = 100;
  const currentPoints = 55;
  // const progressPercentage = (currentPoints / targetPoints) * 100;
  const data = [
    {
      name: "Reward Points",
      uv: 75, // Scale to 75%
      currentPoints: currentPoints,
      targetPoints: targetPoints,
      fill: "hsl(var(--primary))",
    },
  ];

  const style = {
    top: "50%",
    right: 0,
    transform: "translate(0, -50%)",
    lineHeight: "24px",
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        // Render Skeleton loaders while data is loading.
        <Skeleton className="h-[300px] w-full rounded-lg" />
      ) : (
        <motion.div
          className="bg-card text-card-foreground rounded-lg shadow-lg p-6 flex flex-col items-center
                 justify-center border border-border text-center h-[300px]" /* Added a fixed height for the container */
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          // Framer Motion property for hover effect.
          whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
        >
          <h2 className="text-2xl font-bold mb-4">Reward Points</h2>

          <div className="relative w-full h-[250px]">
            {" "}
            <ResponsiveContainer width="100%" height="100%">
              <RadialBarChart
                cx="50%"
                cy="50%"
                innerRadius="80%"
                outerRadius="110%"
                barSize={20}
                data={data}
                startAngle={90}
                endAngle={-180}
                // endAngle={-270} // Example for 75% coverage (90 - 270 = -180, which is 270 degrees clockwise)
              >
                <RadialBar
                  minAngle={15}
                  label={{ position: "insideEnd", fill: "#fff" }}
                  background={{ fill: "hsl(var(--muted))" }}
                  clockWise
                  dataKey="uv"
                />

                <Legend
                  iconSize={0}
                  layout="horizontal"
                  verticalAlign="middleEnd"
                  wrapperStyle={style}
                />
              </RadialBarChart>
            </ResponsiveContainer>
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center pointer-events-none">
              <CircleDollarSign className="h-10 w-10 text-primary mb-1" />
            </div>
          </div>
          {/* )} */}
          <p className="text-lg text-muted-foreground">
            25 Points to your next big reward!
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default RewardPointsProgress;
