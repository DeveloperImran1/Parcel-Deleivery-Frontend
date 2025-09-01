import { motion } from "framer-motion";

const features = [
  {
    title: "On Demand Delivery",
    desc: "Left your charger or keys at home? Have it delivered to you with Pathao Parcel, without any hassle!",
    img: "https://pathao.com/wp-content/uploads/2018/12/Express-Standard-Delivery.png",
  },
  {
    title: "Trust Us",
    desc: "You can trust us to deliver your most confidential documents to the desired place absolutely intact right on time!",
    img: "https://pathao.com/wp-content/uploads/2018/12/Cash-on-Delivery.png",
  },
  {
    title: "Emergency? Deliver via Parcel!",
    desc: "Because your emergencies are Parcel’s biggest concern!",
    img: "https://pathao.com/wp-content/uploads/2018/12/Nationwide-delivery.png",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-10 text-center">
        {features.map((feat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="space-y-4 p-6 rounded-2xl shadow hover:shadow-lg transition cursor-pointer"
          >
            <img
              src={feat.img}
              alt={feat.title}
              className="w-28 h-20 mx-auto"
            />
            <h3 className="font-bold text-lg">{feat.title}</h3>
            <p className="text-gray-600 text-sm">{feat.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
