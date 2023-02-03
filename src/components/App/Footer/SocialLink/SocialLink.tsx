export type SocialLinkProps = {
  href: string;
  title: string;
};

export default function SocialLink({ href, title }: SocialLinkProps) {
  return (
    <a href={href} rel="nofollow noopener noreferrer" target="_blank">
      {title}
    </a>
  );
}
