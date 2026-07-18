import {
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  TwitterIcon,
  LinkedinIcon,
  GithubIcon,
  InstagramIcon
} from
  'lucide-react';
import { Logo } from './Logo';
const COLUMNS = [
  {
    title: 'Company',
    links: ['About', 'Platform', 'Applications', 'Business Modules']
  },
  {
    title: 'Resources',
    links: ['Documentation', 'FAQ', 'Support']
  }];

const SOCIALS = [
  {
    icon: TwitterIcon,
    label: 'Twitter'
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn'
  },
  {
    icon: GithubIcon,
    label: 'GitHub'
  },
  {
    icon: InstagramIcon,
    label: 'Instagram'
  }];

export function Footer() {
  return (
    <footer className="border-t border-[#F3E5C6] bg-[#FFFEFC]">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-ink-soft">
              A complete white-label multi-vendor marketplace platform — three
              Flutter apps, one connected infrastructure.
            </p>
            <div className="mt-5 flex gap-2">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#F3E5C6] bg-white text-ink-soft transition-colors hover:border-[#F5A300] hover:text-[#F5A300]">

                    <Icon size={17} />
                  </a>);

              })}
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) =>
            <div key={col.title}>
              <h3 className="font-display text-sm font-bold text-ink">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) =>
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-ink-soft transition-colors hover:text-[#F5A300]">

                      {link}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-bold text-ink">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink-soft">
              <li className="flex items-center gap-2.5">
                <MailIcon size={16} className="text-[#F5A300]" />
                <a
                  href="mailto:hello@zinokart.com"
                  className="hover:text-[#F5A300]">

                  hello@zinokart.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <PhoneIcon size={16} className="text-[#F5A300]" />
                <a href="tel:+10000000000" className="hover:text-[#F5A300]">
                  +1 (000) 000-0000
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPinIcon size={16} className="mt-0.5 shrink-0 text-[#F5A300]" />

                <span>Global · Remote-first team</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#F3E5C6] pt-8 sm:flex-row">
          <p className="text-xs text-ink-soft">
            © {new Date().getFullYear()} Zinokart. All rights reserved.
          </p>
        </div>
      </div>
    </footer>);

}