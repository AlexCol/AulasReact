import { Link } from 'react-router-dom';
import styles from './NoContent.module.css';

const NoContent = () => {
  return (
    <div className={styles.NoContent}>
      <div className={styles.Menu}>
        <details className={styles.MainDetail}>
          <summary>NoContent</summary>
            <details>
              <summary>Sub1</summary>
              <ul>
                <li>SubItem</li>
                <li>SubItem2</li>
              </ul>
            </details>
        </details>
        <details>
          <summary>NoContent2</summary>
            <details>
              <summary>Sub1</summary>
              <ul>
                <li><Link to="/" className='link'>Home</Link></li>
              </ul>
            </details>
        </details>
      </div>
      <h1>NoContent</h1>
    </div>
  )
}
export default NoContent