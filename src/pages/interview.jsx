import TopNavbar from '../components/Navbar';
import InterviewPrep from '../components/InterviewPrep/InterviewPrep';
import { questions } from '../lib/InterviewPrep';

export default function Interview() {
  return (
    <>
      <TopNavbar />
      <main>
        <InterviewPrep questions={questions} />
      </main>
    </>
  );
}
