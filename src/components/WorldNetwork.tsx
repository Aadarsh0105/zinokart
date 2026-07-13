import React from 'react';
type WorldNetworkProps = {
  className?: string;
};
export function WorldNetwork({ className = '' }: WorldNetworkProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden="true">
      
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 680 560"
        fill="none">
        
        <g opacity="0.45" stroke="#D7B76B" strokeWidth="1">
          <path d="M90 185C125 108 214 95 269 146C305 179 290 234 244 249C183 270 116 245 90 185Z" />
          <path d="M286 142C354 88 467 100 521 170C563 226 534 302 464 322C389 342 318 300 290 235C278 207 274 169 286 142Z" />
          <path d="M447 347C498 313 566 337 590 386C612 430 576 477 524 470C472 463 438 407 447 347Z" />
          <path d="M130 285C178 255 235 279 250 329C265 380 221 423 168 405C121 389 97 327 130 285Z" />
        </g>
        <g
          stroke="#F0BD45"
          strokeWidth="1.4"
          strokeDasharray="4 9"
          opacity="0.75">
          
          <path d="M75 302C155 206 236 258 310 292C397 333 473 212 615 182" />
          <path d="M152 145C235 198 284 174 348 196C430 225 509 298 572 377" />
          <path d="M182 407C276 352 356 407 452 366C514 339 558 340 612 379" />
        </g>
        <g fill="#F9A825">
          <circle cx="175" cy="240" r="4" />
          <circle cx="342" cy="195" r="4" />
          <circle cx="516" cy="238" r="4" />
          <circle cx="460" cy="372" r="4" />
        </g>
      </svg>
    </div>);

}