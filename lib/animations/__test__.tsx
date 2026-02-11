'use client';

/**
 * Test file to verify animation utilities work correctly
 * This can be imported in any component to test the animation setup
 */

import { motion } from 'framer-motion';
import { ScrollReveal } from './scroll-reveal';
import { fadeIn, slideInLeft, slideInRight, slideUp, scaleUp } from './variants';

export function AnimationTest() {
  return (
    <div className="space-y-8 p-8">
      {/* Test basic motion with fadeIn variant */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="p-4 bg-blue-100 rounded"
      >
        <h2 className="text-xl font-bold">FadeIn Test</h2>
        <p>This should fade in on load</p>
      </motion.div>

      {/* Test slideInLeft variant */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInLeft}
        className="p-4 bg-green-100 rounded"
      >
        <h2 className="text-xl font-bold">SlideInLeft Test</h2>
        <p>This should slide in from the left</p>
      </motion.div>

      {/* Test slideInRight variant */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={slideInRight}
        className="p-4 bg-yellow-100 rounded"
      >
        <h2 className="text-xl font-bold">SlideInRight Test</h2>
        <p>This should slide in from the right</p>
      </motion.div>

      {/* Test ScrollReveal component with slideUp variant */}
      <ScrollReveal variants={slideUp}>
        <div className="p-4 bg-purple-100 rounded">
          <h2 className="text-xl font-bold">ScrollReveal + SlideUp Test</h2>
          <p>This should animate when scrolled into view</p>
        </div>
      </ScrollReveal>

      {/* Test ScrollReveal with scaleUp variant */}
      <ScrollReveal variants={scaleUp} delay={0.2}>
        <div className="p-4 bg-pink-100 rounded">
          <h2 className="text-xl font-bold">ScrollReveal + ScaleUp Test</h2>
          <p>This should scale up when scrolled into view (with delay)</p>
        </div>
      </ScrollReveal>

      {/* Test ScrollReveal with default variants */}
      <ScrollReveal>
        <div className="p-4 bg-gray-100 rounded">
          <h2 className="text-xl font-bold">ScrollReveal Default Test</h2>
          <p>This uses default ScrollReveal animation</p>
        </div>
      </ScrollReveal>
    </div>
  );
}

export default AnimationTest;
