
import { FaTiktok, FaInstagram, FaDiscord } from "react-icons/fa";

const socialLinks = [
  {
    name: "TikTok",
    icon: FaTiktok,
    url: "https://www.tiktok.com/@wanaka_world?_t=ZM-90yiHhLYDeq&_r=1",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    url: "https://www.instagram.com/wanaka_wow?igsh=aTRuM3FyaDFsaXNv",
  },
  {
    name: "Discord",
    icon: FaDiscord,
    url: "https://discord.gg/quJN7hUxdh",
  },
];

const SocialLinks = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-2xl font-bold text-secondary-dark mb-8 uppercase">Connect With Me</h2>
        <div className="flex justify-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="p-4 bg-white border-2 border-secondary-dark transition-all duration-300 hover:-translate-y-1 hover:border-primary">
                <social.icon
                  size={24}
                  className="text-secondary-dark transition-colors group-hover:text-primary"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
