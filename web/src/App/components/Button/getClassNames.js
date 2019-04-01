import styles from './styles.css'

export default function(props) {
  const classes = [styles.button]

  if (props.disabled) classes.push(styles.disabled)
  else if (props.loading) classes.push(styles.loading)
  else if (props.danger) classes.push(styles.danger)
  else if (props.primary) classes.push(styles.primary)

  if (props.big) classes.push(styles.big)

  return classes.join(' ')
}
