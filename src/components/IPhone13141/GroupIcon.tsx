import { memo, SVGProps } from 'react';

const GroupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3.21147 8L9.60573 14.3943L8 16L0 8L8 1.49012e-08L9.60573 1.60573L3.21147 8Z'
      fill='#6C72E9'
    />
  </svg>
);

const Memo = memo(GroupIcon);
export { Memo as GroupIcon };
