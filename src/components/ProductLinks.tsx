import { motion } from "framer-motion";
import { ExternalLink, Smartphone } from "lucide-react";

const ProductLinks = () => {
  const products = [
    {
      id: 1,
      title: "Wanaka Fun",
      description: "Explore our web platform",
      url: "https://www.wanaka.fun",
      icon: ExternalLink,
    },
    {
      id: 2,
      title: "Wanaka App",
      description: "Download on the App Store",
      url: "https://apps.apple.com/us/app/wanaka/id6749002333",
      icon: Smartphone,
    },
  ];

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Products
          </h2>
          <p className="text-muted-foreground">
            Discover our platforms and applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.a
                key={product.id}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg bg-card p-8 hover:shadow-xl transition-all duration-300 border border-border"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-semibold text-card-foreground mb-2">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="inline-flex items-center text-primary group-hover:translate-x-1 transition-transform">
                    Visit <ExternalLink className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductLinks;
