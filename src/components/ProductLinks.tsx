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
  return <section className="py-20 bg-background relative overflow-hidden">
      <div className="container px-4 mx-auto">
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
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Products</h2>
          <p className="text-muted-foreground">
            Discover our platforms and applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {products.map((product, index) => {
          const Icon = product.icon;
          const isFirst = index === 0;
          return <motion.a key={product.id} href={product.url} target="_blank" rel="noopener noreferrer" initial={{
            opacity: 0,
            x: isFirst ? -50 : 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8,
            delay: index * 0.2,
            type: "spring",
            stiffness: 80
          }} whileHover={{
            scale: 1.05
          }} className="group relative overflow-hidden rounded-xl bg-card p-8 transition-all duration-300 border-2 border-border hover:border-primary">
                {/* Animated background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-500" />
                
                <div className="flex flex-col items-center text-center relative z-10">
                  <div className="mb-6 p-6 rounded-full bg-primary/10 group-hover:bg-primary transition-all duration-300">
                    <Icon className="h-10 w-10 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                    {product.title}
                  </h3>
                  
                  <div className="inline-flex items-center gap-2 text-primary font-medium">
                    Visit <ExternalLink className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </div>
              </motion.a>;
        })}
        </div>
      </div>
    </section>;
};
export default ProductLinks;