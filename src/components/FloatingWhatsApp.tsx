import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "2348139375655";
    const message = "Hello! I'm interested in your love spell services. Can you help me?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="h-14 w-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 animate-pulse"
        size="icon"
      >
        <MessageCircle className="h-7 w-7" />
      </Button>
      <div className="absolute -top-12 right-0 bg-green-500 text-white text-xs px-3 py-1 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        Chat with us on WhatsApp
      </div>
    </div>
  );
};

export default FloatingWhatsApp;