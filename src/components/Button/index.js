import styles from './Button.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Button = ({
  to,
  href,
  text = false,
  primary = false,
  outline = false,
  small = false,
  medium = false,
  large = false,
  disable = false,
  rounded,
  onClick,
  className,
  children,
  leftIcon,
  rightIcon,
  ...passProps
}) => {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  if (disable) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof props[key] === 'function') {
        delete props[key];
      }
    });
  }

  const classes = cx('wrapper', {
    primary,
    outline,
    text,
    small,
    large,
    disable,
    rounded,
    [className]: className,
  });

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
};

export default Button;
