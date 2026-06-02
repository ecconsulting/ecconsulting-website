import LegalPage from '../components/LegalPage.jsx';
import { cookiePolicy } from '../data/legal.js';

export default function CookiePolicy() {
  return <LegalPage policy={cookiePolicy} />;
}
