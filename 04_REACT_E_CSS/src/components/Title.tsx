import styles from './Title.module.css'

const Title = () => {
  return (
    <div>
        <h1 className={styles['my-title']}>Meu titulo</h1>
        <h1 className={styles.my_title2}>Meu titulo2</h1>
    </div>
  )
}

export default Title