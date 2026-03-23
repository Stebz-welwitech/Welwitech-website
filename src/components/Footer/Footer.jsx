import { footer } from '../../data/content'
import s from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <span className={s.brand}>{footer.brand}</span>
      <span className={s.copy}>{footer.copyright}</span>
    </footer>
  )
}
