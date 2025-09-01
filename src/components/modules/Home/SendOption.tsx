import { motion } from "framer-motion";
import { FileText, Gift, List, Package, Plug } from "lucide-react";

const sendItems = [
  { icon: <Gift size={28} />, label: "Gift" },
  { icon: <FileText size={28} />, label: "Document" },
  { icon: <Package size={28} />, label: "Package" },
  { icon: <List size={28} />, label: "Accessories" },
  { icon: <Plug size={28} />, label: "Electronics" },
];

export default function SendOptions() {
  return (
    <section className="py-16  text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        What Can You Send?
      </h2>
      <div className="flex flex-wrap justify-center gap-6">
        {sendItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white text-[#ee4b2a] p-6 rounded-xl shadow-md w-28 md:min-w-36 lg:w-44 flex flex-col items-center gap-2 hover:scale-105 transition-transform cursor-pointer"
          >
            {item.icon}
            <span className="text-sm font-medium">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
