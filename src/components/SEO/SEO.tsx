import React from 'react';

interface SEOProps {
  title: string;
  description?: string;
  name?: string;
  type?: string;
  keywords?: string[];
}

const SEO: React.FC<SEOProps> = ({
  title,
  description = "A software engineering portfolio showcasing interactive web experiences.",
  name = "Interactive Coder",
  type = "website",
  keywords = []
}) => {
  return (
    <>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keywords' content={keywords.join(', ')} />
      
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* <meta property="og:image" content={image} />  -- Add this when we have an image */}
      
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* <meta name="twitter:image" content={image} /> -- Add this when we have an image */}
    </>
  );
};

export default SEO;