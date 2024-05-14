import type { FC } from 'react';

interface MailToProps {
  className?: string;
  email: string;
  subject?: string;
  body?: string;
  children: string;
};

const MailTo: FC<MailToProps> = ({ className, email, subject = '', body = '', children }) => {
  return (
    <a
      className={className}
      href={`mailto:${email}?subject=${encodeURIComponent(subject) || ''}&body=${encodeURIComponent(body) || ''}`}>
      {children}
    </a>
  );
};

export default MailTo;