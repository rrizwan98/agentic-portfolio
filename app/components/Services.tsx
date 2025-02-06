"use client"

import { motion } from "framer-motion"
import { Code, Layout, Server, Smartphone } from "lucide-react"
import Image from "next/image"

export default function Services() {
  const services = [
    {
      icon: <Layout className="w-12 h-12 text-blue-500" />,
      title: "Vertical AI Agents",
      description: "Automate your specific job. For example, automating the entire HR process.",
    },
    {
      icon: <Server className="w-12 h-12 text-green-500" />,
      title: "Agentic Apps",
      description: "Those applications where agents are running, such as in education and customer care apps.",
    },
    {
      icon: <Code className="w-12 h-12 text-purple-500" />,
      title: "API Powered APIs",
      description:
        "RESTful APIs where AI agents will be running in the back. They will use custom data, RAGs, and save memory.",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-yellow-500" />,
      title: "Agentic Systems",
      description: "An advanced agentic system. controlled by your voice, read images and respond, read documents to reply with specific content (RAGs), and comprehend text.",
    },
  ]

  return (
    <section
      id="services"
      className="py-20 bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-gray-900 dark:to-blue-900 transition-colors duration-300 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                {service.icon}
                <h3 className="text-2xl font-semibold ml-4 dark:text-white">
                  {service.title === "Vertical AI Agents" ? "Vertical AI Agents" : service.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {service.title === "Vertical AI Agents"
                  ? "Custom, efficient Agentic AI for niche tasks."
                  : service.title === "Agentic Apps"
                    ? "Innovative Agentic AI applications for fast, reliable service."
                    : service.title === "API Powered APIs"
                      ? "Seamless Agentic API integrations with LLM and RESTful design."
                      : "Voice-controlled and image-enabled Agentic AI systems."}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 left-0 w-64 h-64 -mt-32 -ml-32 opacity-20">
        <Image src="/placeholder.svg?height=256&width=256" alt="Decorative background" width={256} height={256} />
      </div>
    </section>
  )
}

