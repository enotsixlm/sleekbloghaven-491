import { motion } from "framer-motion";
import { ExternalLink, Smartphone } from "lucide-react";
const ProductLinks = () => {
  const products = [{
    id: 1,
    title: "Wanaka Studio",
    description: "Explore our web platform",
    url: "https://www.wanaka.fun",
    icon: ExternalLink
  }, {
    id: 2,
    title: "Wanaka App",
    description: "Download on the App Store",
    url: "https://apps.apple.com/us/app/wanaka/id6749002333",
    icon: Smartphone
  }];
  return <section className="relative py-20 bg-gradient-to-b from-secondary/5 via-primary/5 to-background overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-muted">
            Our Products
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our platforms and applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {products.map((product, index) => {
          const Icon = product.icon;
          return <motion.a key={product.id} href={product.url} target="_blank" rel="noopener noreferrer" initial={{
            opacity: 0,
            y: 30,
            scale: 0.95
          }} whileInView={{
            opacity: 1,
            y: 0,
            scale: 1
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.7,
            delay: index * 0.15,
            type: "spring",
            stiffness: 100
          }} whileHover={{
            y: -8,
            scale: 1.02
          }} className="group relative overflow-hidden rounded-2xl bg-card p-10 transition-all duration-500 border-2 border-border hover:border-primary/50 shadow-lg hover:shadow-2xl hover:shadow-primary/20">
                {/* Card gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full transform translate-x-12 -translate-y-12 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500" />
                
                <div className="flex flex-col items-center text-center relative z-10">
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="mb-6 p-5 rounded-2xl bg-gradient-to-br from-primary/20 to-primary-muted/20 group-hover:from-primary/30 group-hover:to-primary-muted/30 transition-all duration-500 shadow-lg"
                  >
                    <Icon className="h-10 w-10 text-primary" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {product.title}
                  </h3>
                  
                  <div className="inline-flex items-center text-primary font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                    Visit <ExternalLink className="h-4 w-4 group-hover:rotate-45 transition-transform duration-300" />
                  </div>
                </div>
              </motion.a>;
        })}
        </div>
      </div>
    </section>;
};
export default ProductLinks;