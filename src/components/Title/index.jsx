import styles from './titles.module.scss';

const Title = ({ size, color, subtitle, children }) => {
  const Tag = size || 'h1';
  return <Tag className={`${styles.title} ${styles[color]}`} style={subtitle ? { marginBottom: 0} : {}}>{children}</Tag>
};

export default Title;