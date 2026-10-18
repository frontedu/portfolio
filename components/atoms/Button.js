import cx from "components/utilities/cx";
import Text from "components/atoms/Text";
import Icon from "components/atoms/Icon";
import LinkTo from "components/utilities/LinkTo";
import styles from "./Button.module.css";

const Button = (props) => {
  const {
    children,
    iconName,
    href = false,
    locale,
    variant,
    className,
    ...rest
  } = props;
  const buttonElement = (
    <button
      className={cx(
        styles.button,
        variant === "ghost" && styles.ghost,
        className,
      )}
      {...rest}
    >
      {iconName && <Icon name={iconName} className={styles.icon} />}
      <Text preset="body" className={iconName && styles.labelWithIcon}>
        {children}
      </Text>
    </button>
  );
  if (href) {
    return (
      <LinkTo href={href} locale={locale}>
        {buttonElement}
      </LinkTo>
    );
  } else {
    return buttonElement;
  }
};

export default Button;
