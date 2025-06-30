import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, Linkedin, Mail, Send, MapPin, MessageCircle, User, Calendar, Phone, Clock } from 'lucide-react';

const AnimatedContact = () => {
  const { scrollYProgress } = useScroll();
  const yParallax = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const socialLinks = [
    { 
      href: "https://github.com/VAIBHAV13S", 
      icon: Github, 
      label: "GitHub",
      color: "from-gray-500 to-gray-600"
    },
    { 
      href: "https://www.linkedin.com/in/vaibhav-sharma-8b7b10291", 
      icon: Linkedin, 
      label: "LinkedIn",
      color: "from-blue-500 to-blue-600"
    },
    { 
      href: "mailto:vaibhavsharmsk125@gmail.com", 
      icon: Mail, 
      label: "Email",
      color: "from-pink-500 to-pink-600"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "vaibhavsharmsk125@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "NIT Hamirpur, Himachal Pradesh",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Calendar,
      title: "Availability",
      value: "Open for opportunities",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <motion.section 
      id="contact" 
      className="py-20 lg:py-32 mb-32 lg:mb-40 relative overflow-hidden"
      style={{ y: yParallax }}
    >
      {/* Clean Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 grid-bg opacity-10" />
        
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <motion.div 
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Modern Header */}
        <motion.div 
          className="text-center mb-16"
          variants={itemVariants}
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text neon-text mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Get In Touch
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left - Contact Information */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            {/* Introduction */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-white" />
                </div>
                Let's Connect
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                Whether you're looking for a developer, have a project in mind, or just want to connect, 
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Information Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div 
                    key={index}
                    className="p-6 glass rounded-xl border border-white/10 backdrop-blur-xl group"
                    whileHover={{ 
                      scale: 1.02,
                      y: -3,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    variants={itemVariants}
                  >
                    <div className="flex items-center gap-4">
                      <motion.div 
                        className={`p-3 rounded-lg bg-gradient-to-r ${info.color} text-white flex-shrink-0`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <IconComponent className="w-5 h-5" />
                      </motion.div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">
                          {info.title}
                        </h4>
                        <p className="text-gray-300">{info.value}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-400" />
                Find me on
              </h4>
              <div className="grid grid-cols-3 gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-6 glass rounded-xl border border-white/10 backdrop-blur-xl group text-center transition-all duration-300"
                      whileHover={{ 
                        scale: 1.05, 
                        y: -5,
                        transition: { type: "spring", stiffness: 300 }
                      }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center mx-auto mb-3`}
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </motion.div>
                      <h5 className="text-white font-medium group-hover:gradient-text transition-all duration-300">
                        {social.label}
                      </h5>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Response Time Promise */}
            <motion.div
              className="p-6 glass rounded-xl border border-white/10 backdrop-blur-xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center gap-4">
                <motion.div 
                  className="p-3 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 text-white flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Clock className="w-5 h-5" />
                </motion.div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">
                    Quick Response
                  </h4>
                  <p className="text-gray-300">I typically respond within 24 hours</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form */}
          <motion.div 
            className="glass rounded-2xl border border-white/10 p-8 backdrop-blur-xl"
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
              <p className="text-gray-400">I'll get back to you within 24 hours</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/5 text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/5 text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/5 text-white placeholder-gray-400 transition-all duration-300"
                  placeholder="Project Collaboration / Job Opportunity / General Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-white/20 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/5 text-white placeholder-gray-400 resize-none transition-all duration-300"
                  placeholder="Tell me about your project, opportunity, or just say hello! I'd love to hear from you."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center group"
                whileHover={{ 
                  scale: 1.02, 
                  y: -2,
                  boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                Send Message
              </motion.button>
            </form>

            {/* Form Footer Note */}
            <motion.div 
              className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <p className="text-sm text-gray-300">
                  <span className="text-blue-400 font-medium">Pro tip:</span> Include details about your project timeline and budget for faster response!
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Section Spacer */}
        <div className="mt-24 lg:mt-32">
          <motion.div 
            className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            viewport={{ once: true }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AnimatedContact;