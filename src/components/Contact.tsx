
import React, { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <div>
      <div className="mb-4 space-y-2">
        <a 
          href="mailto:anshit@example.com" 
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-neon transition-colors"
        >
          <Mail className="h-4 w-4" />
          <span>anshitraj04@gmail.com</span>
        </a>
        
        <a 
          href="https://github.com/anshitraj" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-neon transition-colors"
        >
          <Github className="h-4 w-4" />
          <span>github.com/anshitrayadav</span>
        </a>
        
        <a 
          href="https://linkedin.com/in/anshitraj" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-muted-foreground hover:text-neon transition-colors"
        >
          <Linkedin className="h-4 w-4" />
          <span>linkedin.com/in/anshitrayadav</span>
        </a>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <Input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={formData.name} 
          onChange={handleChange}
          required
          className="bg-white/5 border-white/10 text-sm"
        />
        <Input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={formData.email} 
          onChange={handleChange}
          required
          className="bg-white/5 border-white/10 text-sm"
        />
        <Textarea 
          name="message" 
          placeholder="Your Message" 
          value={formData.message} 
          onChange={handleChange}
          required
          rows={3}
          className="bg-white/5 border-white/10 text-sm resize-none"
        />
        <Button 
          type="submit" 
          disabled={isSubmitting} 
          className="w-full bg-neon hover:bg-neon/80 text-black text-sm"
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            <span className="flex items-center">
              Send Message
              <Send className="ml-2 h-3 w-3" />
            </span>
          )}
        </Button>
      </form>
    </div>
  );
};

export default Contact;
