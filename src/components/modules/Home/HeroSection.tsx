import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="relative z-10 text-white bg-cover bg-center rounded-2xl"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(75, 85, 99, 0.7), rgba(75, 85, 99, 0)), 
      url('https://pathao.com/wp-content/uploads/2018/12/Pathao-Parcel-1.png')`,
      }}
    >
      <div className="max-w-7xl  mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side Text */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-start w-full">
            Fast & Reliable
            <span className="text-yellow-300">
              {" "}
              Parcel <br /> Delivery
            </span>
          </h1>
          <p className="text-lg text-gray-100 max-w-lg">
            Deliver your parcels across Bangladesh with speed, security, and
            trust. Track in real-time and enjoy hassle-free service right at
            your doorstep.
          </p>

          <div className="flex gap-4">
            <Button className="bg-white text-[#ee4b2a] hover:bg-gray-100 font-semibold px-6 py-3 rounded-2xl flex items-center gap-2">
              Get Started <ArrowRight size={18} />
            </Button>
            <Button className="border-2 border-white text-white bg-transparent hover:bg-white/10 font-semibold px-6 py-3 rounded-2xl">
              Learn More
            </Button>
          </div>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative hidden md:visible"
        >
          {/* Animated floating badge */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute top-10 -left-6 bg-white text-[#ee4b2a] font-semibold px-4 py-2 rounded-full shadow-lg"
          >
            🚚 24/7 Support
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
