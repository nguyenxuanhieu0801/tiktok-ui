import images from '@/assets/images';
import Button from '@/components/Button';
import { UploadIcon } from '@/components/Icon';
import Image from '@/components/Image';
import Menu from '@/components/Popper/Menu';
import {
  faCircleQuestion,
  faCoins,
  faEarthAsia,
  faEllipsisVertical,
  faGears,
  faKeyboard,
  faSignOut,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react';
import classNames from 'classnames/bind';
import { InboxIcon, MessageIcon } from 'components/Icon';
import 'tippy.js/dist/tippy.css';
import Search from '../Search';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faEarthAsia} />,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          type: 'language',
          code: 'en',
          title: 'English',
        },
        {
          type: 'language',
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faCircleQuestion} />,
    title: 'Feedback and help',
    to: '/feeback',
  },
  {
    icon: <FontAwesomeIcon icon={faKeyboard} />,
    title: 'Keyboard shortcuts',
  },
];

const Header = () => {
  const handleMenuChange = (menuItem) => {
    switch (menuItem.type) {
      case 'language':
        break;
      default:
        break;
    }
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faUser} />,
      title: 'View profile',
      to: '/feeback',
    },
    {
      icon: <FontAwesomeIcon icon={faCoins} />,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: <FontAwesomeIcon icon={faGears} />,
      title: 'Settings',
      to: '/settings',
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];

  const currentUser = true;

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <img src={images.logo} alt="Tiktok" />

        <Search />

        <div className={cx('actions')}>
          {currentUser ? (
            <>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <UploadIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon />
                </button>
              </Tippy>
              <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                <button className={cx('action-btn')}>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button text>Upload</Button>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
            {currentUser ? (
              <Image
                className={cx('user-avatar')}
                src="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                alt=""
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
