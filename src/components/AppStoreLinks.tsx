import { AppleIcon, PlayIcon } from 'lucide-react';
type AppStoreLinksProps = {
  dark?: boolean;
  compact?: boolean;
};
export function AppStoreLinks({
  dark = true,
  compact = false
}: AppStoreLinksProps) {
  const className = dark ?
  'border-[#1a1a1a] bg-[#1a1a1a] text-white hover:bg-[#303030]' :
  'border-white/30 bg-white/15 text-white hover:bg-white/25';
  return (
    <div className="flex flex-wrap gap-3">
      <a
        href="https://apps.apple.com/"
        target="_blank"
        rel="noreferrer"
        aria-label="Download Zinokart on the App Store"
        className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#f9a825] focus:ring-offset-2 ${dark ? 'focus:ring-offset-[#fffdf9]' : 'focus:ring-offset-[#f9a825]'} ${className}`}>
        
        <AppleIcon size={compact ? 18 : 21} aria-hidden="true" />
        <span className="text-left leading-none">
          <span className="block text-[9px] opacity-75">Download on the</span>
          <span
            className={
            compact ? 'text-xs font-semibold' : 'text-sm font-semibold'
            }>
            
            App Store
          </span>
        </span>
      </a>
      <a
        href="https://play.google.com/store/"
        target="_blank"
        rel="noreferrer"
        aria-label="Get Zinokart on Google Play"
        className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#f9a825] focus:ring-offset-2 ${dark ? 'focus:ring-offset-[#fffdf9]' : 'focus:ring-offset-[#f9a825]'} ${className}`}>
        
        <PlayIcon
          size={compact ? 17 : 19}
          fill="currentColor"
          aria-hidden="true" />
        
        <span className="text-left leading-none">
          <span className="block text-[9px] opacity-75">GET IT ON</span>
          <span
            className={
            compact ? 'text-xs font-semibold' : 'text-sm font-semibold'
            }>
            
            Google Play
          </span>
        </span>
      </a>
    </div>);

}