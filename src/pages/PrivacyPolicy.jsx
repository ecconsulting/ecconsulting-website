import LegalPage from '../components/LegalPage.jsx';
import { privacyPolicy } from '../data/legal.js';

export default function PrivacyPolicy() {
  return <LegalPage policy={privacyPolicy} />;
}
