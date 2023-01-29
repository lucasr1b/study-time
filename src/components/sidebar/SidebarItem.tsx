import Link from 'next/link';
import { useRouter } from 'next/router';

type SidebarItemProps = {
  name: string;
  href: string;
  icon: any;
}

const SidebarItem = (props: SidebarItemProps) => {
  const router = useRouter();

  return (
    <li>
      <Link href={props.href} className={`flex items-center p-2.5 text-base rounded-lg ${router.pathname == props.href ? 'bg-zinc-200 font-medium' : 'hover:bg-zinc-200 '}`}>
        <span className='flex gap-2'>
          {props.icon} {props.name}
        </span>
      </Link>
    </li>
  );
}

export default SidebarItem;