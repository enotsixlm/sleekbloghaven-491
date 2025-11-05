import HeroSection from "@/components/HeroSection";
import BlogPosts from "@/components/BlogPosts";
import SocialLinks from "@/components/SocialLinks";
import CalendarEmbed from "@/components/CalendarEmbed";
import WorkHighlights from "@/components/WorkHighlights";
import ProductLinks from "@/components/ProductLinks";
const Index = () => {
  return <main className="min-h-screen bg-background">
      <HeroSection />
      <ProductLinks className="bg-primary-muted" />
      
      
      
      <SocialLinks />
    </main>;
};
export default Index;