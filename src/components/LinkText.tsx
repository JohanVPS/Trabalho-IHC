import React from 'react';

interface LinkTextProps {
  text: string;
  linkText: string;
  href?: string;
  onClick?: () => void;
}

const LinkText: React.FC<LinkTextProps> = ({ text, linkText, href, onClick }) => {
  return (
    <p className="text-center mt-3 text-muted">
      {text} <a href={href} onClick={onClick} className="fw-bold text-decoration-none">
        {linkText}
      </a>
    </p>
  );
};

export default LinkText;
