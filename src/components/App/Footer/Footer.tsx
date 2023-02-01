interface SocialLinkProps {
  href: string;
  title: string;
}

function SocialLink({ href, title }: Readonly<SocialLinkProps>) {
  return (
    <a href={href} rel="nofollow noopener noreferrer" target="_blank">
      {title}
    </a>
  );
}

export default function Footer() {
  const socialLinks: SocialLinkProps[] = [
    {
      href: 'https://github.com/MeShootIn',
      title: 'GitHub',
    },
    {
      href: 'https://t.me/MeShootIn',
      title: 'Telegram',
    },
    {
      href: 'https://vk.com/meshootin',
      title: 'VK',
    },
    {
      href: 'mailto:dmitriimishutin@gmail.com?subject=%D0%A1%D1%82%D0%B0%D0%B6%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0&body=%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9%2C%20%D0%92%D1%8B%20%D0%BF%D1%80%D0%B8%D0%BD%D1%8F%D1%82%D1%8B!',
      title: 'email',
    },
  ];

  return (
    <footer>
      <div>
        <h3>Свяжитесь со мной</h3>

        <address>
          {socialLinks.map((socialLink: SocialLinkProps) => (
            <div key={socialLink.href}>
              <SocialLink href={socialLink.href} title={socialLink.title} />
            </div>
          ))}
        </address>
      </div>

      <div>
        <p>
          &copy;&nbsp;<time dateTime="2023">2023</time>&nbsp;MeShootIn
        </p>
      </div>
    </footer>
  );
}
