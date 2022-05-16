import Link from 'next/link';
import { useRouter } from 'next/router';

const SubmenuLinks = [
  { name: 'Accommodations', href: '/admin' },
  { name: 'Messages', href: '/admin/messages' },
  { name: 'Enquieries', href: '/admin/enquieries' },
  { name: 'Add new', href: '/admin/addNew' },
];

export default function Submenu() {
  const router = useRouter();
  return (
    <div className='flex space-x-4 mt-4 '>
      {SubmenuLinks.map((item) => (
        <Link key={item.name} href={item.href}>
          <a
            href={item.href}
            className={`text-black font-serif text-lg hover:text-blue-2 ${
              router.pathname === item.href ? 'text-blue-3 font-bold' : ''
            }`}
          >
            {item.name}
          </a>
        </Link>
      ))}
    </div>
  );
}
