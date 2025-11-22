import React from 'react';
import { footerConfig } from '@/data/portfolio';

const Footer = () => {
  return (
    <footer className="bg-secondary/30 py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-8 mb-8">
          {footerConfig.icons.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110"
              >
                <Icon size={30} />
              </a>
            );
          })}
        </div>
        <p className="text-muted-foreground">
          Designed & Built by Harikesh Kushwaha
        </p>
        <p className="text-sm text-muted-foreground/60 mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
