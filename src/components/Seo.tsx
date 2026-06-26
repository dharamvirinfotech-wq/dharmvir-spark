import { Helmet } from "react-helmet-async";

const SITE = "https://dharmvir-spark.lovable.app";

type Props = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

const Seo = ({ title, description, path, image }: Props) => {
  const url = `${SITE}${path}`;
  const ogImage = image ? `${SITE}${image}` : undefined;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta name="twitter:card" content={ogImage ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
};

export default Seo;
