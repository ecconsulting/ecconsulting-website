import LegalPage from '../components/LegalPage.jsx';
import { termsConditions } from '../data/legal.js';

export default function TermsConditions() {
  return <LegalPage policy={termsConditions} />;
}
