import { Disclosure } from '@headlessui/react';
import { Menu2, X, UserCircle } from 'tabler-icons-react';
import Link from 'next/link';
import Logo from './logo';
import styles from '../../styles/Home.module.css';

const navigation = [
  { name: 'Home', href: '/', current: true },
  { name: 'Search', href: '/search', current: false },
  { name: 'Contact', href: '/contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure as='nav' className='bg-bgColor'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open ? (
                    <X className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <Menu2 className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
              <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                <div className='flex-shrink-0 flex items-center'>
                  <Logo className='block lg:hidden h-8 w-auto' />
                  <div className='hidden lg:block h-8 w-auto flex items-center'>
                    <h2 className={styles.logoText}>
                      Holida<span className={styles.logoTextSpan}>z</span>e
                    </h2>
                  </div>
                </div>
                <div className='hidden sm:block sm:ml-6'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-blue-2 text-black'
                              : 'text-black hover:bg-linkHoverColor hover:text-black',
                            'px-3 py-2 rounded-md text-sm font-bold font-serif2'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                <Link key={navigation.name} href='/login'>
                  <a>
                    <UserCircle size={30} />
                  </a>
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <Link key={item.name} href={item.href} passHref>
                  <Disclosure.Button
                    key={item.name}
                    as='a'
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-blue-2 text-black'
                        : 'text-black hover:bg-linkHoverColor hover:text-black',
                      'block px-3 py-2 rounded-md text-base font-bold font-serif'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}