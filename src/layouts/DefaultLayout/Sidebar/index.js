import styles from './Sidebar.module.scss';
import className from 'classnames/bind';

const cx = className.bind(styles);

const Sidebar = () => {
  return (
    <aside className={cx('wrapper')}>
      <h2>Sidebar</h2>
    </aside>
  );
};

export default Sidebar;
