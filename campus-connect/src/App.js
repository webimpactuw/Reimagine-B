import Navbar from './Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import Awaaz from './Multicultural/Awaaz'
import Bengali from './Asian Heritage/Bengali'
import HongKong from './Asian Heritage/HongKong';
import Khmer from './Asian Heritage/Khmer';
import Lao from './Asian Heritage/Lao';
import Taiwanese from './Asian Heritage/Taiwanese';
import Filipino from './Asian Heritage/Filipino';
import Indian from './Asian Heritage/Indian';
import Korean from './Asian Heritage/Korean';
import Taiwanese_Overseas from './Asian Heritage/TaiwaneseOverseas';
import Vietnamese from './Asian Heritage/Vietnamese';
import Chinese from './Asian Heritage/Chinese';
import Hmong from './Asian Heritage/Hmong';
import Japanese from './Asian Heritage/Japanese';
import Kendo from './Asian Heritage/Kendo';
import TaiwaneseStudent from './Asian Heritage/TaiwaneseStudent';
import Akdphi from './Frats/Akdphi';
import KappaDelta from './Frats/KappaDelta';
import LambdaTheta from './Frats/LambdaTheta';
import SigmaLambda from './Frats/SigmaLambda';
import ChiDelta from './Frats/ChiDelta';
import ChiSigma from './Frats/ChiSigma';
import DeltaPi from './Frats/DeltaPi';
import LambdaPhi from './Frats/LambdaPhi';
import OmegaDelta from './Frats/OmegaDelta';
import SigmaLambdaGamma from './Frats/SigmaLambdaGamma';
import PiNu from './Frats/PiNu';
import DeltaKappa from './Frats/DeltaKappa';
import GammaAlpha from './Frats/GammaAlpha';
import LambdaThetaAlpha from './Frats/LambdaThetaAlpha';
import SigmaBeta from './Frats/SigmaBeta';
import SigmaPsi from './Frats/SigmaPsi';
import Latine from './Multicultural/Latine';
import Hui from './Multicultural/Hui';
import Aztlan from './Multicultural/Aztlan';
import Ukranian from './Multicultural/Ukranian';
import Desi from './Multicultural/Desi';
import Kahaani from './Multicultural/Kahaani';
import Polynesian from './Multicultural/Polynesian';
import BlackUnion from './Multicultural/BlackUnion';
import FirstNations from './Multicultural/FirstNations';
import Micronesian from './Multicultural/Micronesian';
import Punjab from './Multicultural/Punjab';
import African from './African Heritage/African';
import Oromo from './African Heritage/Oromo';
import EastAfrican from './African Heritage/EastAfrican';
import AfricanStudies from './African Heritage/AfricanStudies';
import Bhakti from './Religious/Bhakti';
import Muslim from './Religious/Muslim';
import YUVAraga from './Religious/YUVAraga';
import Sikh from './Religious/Sikh';
import Chanoyu from './Interest/Chanoyu';
import Taiko from './Interest/Taiko';
import Salsa from './Interest/Salsa';
import ChineseDance from './Interest/ChineseDance';
import PublicHealth from './Interest/PublicHealth';
import Theatre from './Asian Heritage/Theatre';
import DeltaLambda from './Frats/DeltaLambda';
import AfricanHeritageList from './RSOLists/AfricanHeritageList';
import AsianHeritageList from './RSOLists/AsianHeritageList';
import CulturalFraternityList from './RSOLists/CulturalFraternityList';
import MulticulturalList from './RSOLists/MulticulturalList';
import ReligiousSpiritualList from './RSOLists/ReligiousSpiritual';
import InterestActivityList from './RSOLists/InterestActivityList';


function App() {
  // const path = winow.location.href.split("/"); // Get current url
  // const [color, setColor] = useState("#333"); 
  // const[home ] -> working on making navbar state var so doesn't show up in RSO page
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/african-heritage" element={<AfricanHeritageList />} />
          <Route path="/asian-heritage" element={<AsianHeritageList />} />
          <Route path="/cultural-fraternity" element={<CulturalFraternityList />} />
          <Route path="/multicultural" element={<MulticulturalList />} />
          <Route path="/religious-spiritual" element={<ReligiousSpiritualList />} />
          <Route path="/interest-activity" element={<InterestActivityList />} />
          <Route path="/Awaaz" element={<Awaaz />} />
          <Route path="/Bengali" element={<Bengali />} />
          <Route path="/HongKong" element={<HongKong />} />
          <Route path="/Khmer" element={<Khmer />} />
          <Route path="/Lao" element={<Lao />} />
          <Route path="/Taiwanese" element={<Taiwanese />} />
          <Route path="/Filipino" element={<Filipino />} />
          <Route path="/Indian" element={<Indian />} />
          <Route path="/Korean" element={<Korean />} />
          <Route path="/Taiwanese_Overseas" element={<Taiwanese_Overseas />} />
          <Route path="/Vietnamese" element={<Vietnamese />} />
          <Route path="/ChineseTheaterClub" element={<Theatre />} />
          <Route path="/Chinese" element={<Chinese />} />
          <Route path="/Hmong" element={<Hmong />} />
          <Route path="/Japanese" element={<Japanese />} />
          <Route path="/Kendo" element={<Kendo />} />
          <Route path="/TaiwaneseStudent" element={<TaiwaneseStudent />} />
          <Route path="/Akdphi" element={<Akdphi />} />
          <Route path="/KappaDelta" element={<KappaDelta />} />
          <Route path="/LambdaTheta" element={<LambdaTheta />} />
          <Route path="/SigmaLambda" element={<SigmaLambda />} />
          <Route path="/ChiDelta" element={<ChiDelta />} />
          <Route path="/ChiSigma" element={<ChiSigma />} />
          <Route path="/DeltaPi" element={<DeltaPi />} />
          <Route path="/LambdaPhi" element={<LambdaPhi />} />
          <Route path="/OmegaDelta" element={<OmegaDelta />} />
          <Route path="/SigmaLambdaGamma" element={<SigmaLambdaGamma />} />
          <Route path="/PiNu" element={<PiNu />} />
          <Route path="/DeltaKappa" element={<DeltaKappa />} />
          <Route path="/GammaAlpha" element={<GammaAlpha />} />
          <Route path="/LambdaThetaAlpha" element={<LambdaThetaAlpha />} />
          <Route path="/SigmaBeta" element={<SigmaBeta />} />
          <Route path="/SigmaPsi" element={<SigmaPsi />} />
          <Route path="/Latine" element={<Latine />} />
          <Route path="/Hui" element={<Hui />} />
          <Route path="/Aztlan" element={<Aztlan />} />
          <Route path="/Ukranian" element={<Ukranian />} />
          <Route path="/Desi" element={<Desi />} />
          <Route path="/Kahaani" element={<Kahaani />} />
          <Route path="/Polynesian" element={<Polynesian />} />
          <Route path="/BlackStudentUnion" element={<BlackUnion />} />
          <Route path="/FirstNationsatUW" element={<FirstNations />} />
          <Route path="/MicronesianIslandsClub" element={<Micronesian />} />
          <Route path="/PunjabSociety" element={<Punjab />} />
          <Route path="/AfricanStudentAssociation" element={<African />} />
          <Route path="/OromoStudentUnion" element={<Oromo />} />
          <Route path="/EastAfricanStudentAssociation" element={<EastAfrican />} />
          <Route path="/AfricanStudentsAssociation" element={<AfricanStudies />} />
          <Route path="/BhaktiYogaClub" element={<Bhakti />} />
          <Route path="/MuslimStudentAssociation" element={<Muslim />} />
          <Route path="/YUVAraga" element={<YUVAraga />} />
          <Route path="/SikhStudentAssociation" element={<Sikh />} />
          <Route path="/ChanoyuClub" element={<Chanoyu />} />
          <Route path="/TaikoKai" element={<Taiko />} />
          <Route path="/SalsaClub" element={<Salsa />} />
          <Route path="/SalsaClub" element={<Salsa />} />
          <Route path="/TraditionalChineseDance" element={<ChineseDance />} />
          <Route path="/StudentsOfColorForPublicHealth" element={<PublicHealth />} />
          <Route path="/DeltaLambdaPhi" element={<DeltaLambda />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
