import React, { useState} from "react";
import { StaticImage } from "gatsby-plugin-image"
import { InView } from 'react-intersection-observer';


const Open = () => {
  return <span id="open">
            <StaticImage 
            src="../../images/isi-open.svg"
            alt="open ISI" 
            placeholder="blurred" 
            layout="constrained" 
            width={30} 
          />
        </span>
}
const Closed = () => {
  return <span id="closed">
          <StaticImage 
            src="../../images/isi-open.svg"
            alt="open ISI" 
            placeholder="blurred" 
            layout="constrained" 
            width={30} 
          />
        </span>
}


const IsiInqovi = () => {
  return <div id="inqoviISI">
    
      <p className="header">Indications and Important Safety Information</p>
      
      <p className="header">INDICATIONS</p>
      <p>INQOVI is indicated for treatment of adult patients with myelodysplastic syndromes (MDS), including previously treated and untreated, de novo and secondary MDS with the following French-American-British subtypes (refractory anemia, refractory anemia with ringed sideroblasts, refractory anemia with excess blasts, and chronic myelomonocytic leukemia [CMML]) and intermediate-1, intermediate-2, and high-risk International Prognostic Scoring System groups.</p>

      <p className="header">IMPORTANT SAFETY INFORMATION</p>
      <p className="header">WARNINGS AND PRECAUTIONS</p>

      <p className="mb-0 md_mb-0"><b>Myelosuppression</b></p>
      <p>Fatal and serious myelosuppression can occur with INQOVI. Based on laboratory values, new or worsening thrombocytopenia occurred in 82% of patients, with Grade 3 or 4 occurring in 76%. Neutropenia occurred in 73% of patients, with Grade 3 or 4 occurring in 71%. Anemia occurred in 71% 
      of patients, with Grade 3 or 4 occurring in 55%. Febrile neutropenia occurred in 33% of patients, with Grade 3 or 4 occurring in 32%. 
      Myelosuppression (thrombocytopenia, neutropenia, anemia, and febrile neutropenia) is the most frequent cause of INQOVI dose reduction or interruption, occurring in 36% of patients. Permanent discontinuation due to myelosuppression (febrile neutropenia) occurred in 1% of patients. Myelosuppression and worsening neutropenia may occur more frequently in the first or second treatment cycles and may not necessarily indicate progression of underlying MDS.</p>

      <p>Fatal and serious infectious complications can occur with INQOVI. Pneumonia occurred in 21% of patients, with Grade 3 or 4 occurring in 15%. 
      Sepsis occurred in 14% of patients, with Grade 3 or 4 occurring in 11%. Fatal pneumonia occurred in 1% of patients, fatal sepsis in 1%, and fatal septic shock in 1%.</p>

      <p>Obtain complete blood cell counts prior to initiation of INQOVI, prior to each cycle, and as clinically indicated to monitor response and toxicity. Administer growth factors and anti-infective therapies for treatment or prophylaxis as appropriate. Delay the next cycle and resume at the same or reduced dose as recommended.</p>

      <p className="mb-0 md_mb-0"><b>Embryo-Fetal Toxicity</b></p>
      <p>INQOVI can cause fetal harm. Advise pregnant women of the potential risk to a fetus. Advise patients to use effective contraception during treatment and for 6 months (females) or 3 months (males) after last dose.</p>

      <p className="header">ADVERSE REACTIONS</p>

      <p>Serious adverse reactions in > 5% of patients included febrile neutropenia (30%), pneumonia (14%), and sepsis (13%). Fatal adverse reactions included sepsis (1%), septic shock (1%), pneumonia (1%), respiratory failure (1%), and one case each of cerebral hemorrhage and sudden death.</p>

      <p>The most common adverse reactions (&ge; 20%) were fatigue (55%), constipation (44%), hemorrhage (43%), myalgia (42%), mucositis (41%), arthralgia (40%), nausea (40%), dyspnea (38%), diarrhea (37%), rash (33%), dizziness (33%), febrile neutropenia (33%), edema (30%), headache (30%), cough (28%), decreased appetite (24%), upper respiratory tract infection (23%), pneumonia (21%), and transaminase increased (21%). The most common Grade 3 or 4 laboratory abnormalities (&ge; 50%) were leukocytes decreased (81%), platelet count decreased (76%), neutrophil count decreased (71%), and hemoglobin decreased (55%).</p>

      <p className="header">USE IN SPECIFIC POPULATIONS</p>

      <p className="mb-0 md_mb-0"><b>Lactation</b></p>
      <p>Because of the potential for serious adverse reactions in the breastfed child, advise women not to breastfeed during treatment with INQOVI and for 2 weeks after the last dose.</p>

      <p className="mb-0 md_mb-0"><b>Renal Impairment</b></p>
      <p>No dosage modification of INQOVI is recommended for patients with mild or moderate renal impairment (creatinine clearance [CLcr] of 30 to 89 mL/min based on Cockcroft-Gault). Due to the potential for increased adverse reactions, monitor patients with moderate renal impairment (CLcr 30 to 59 mL/min) frequently for adverse reactions. INQOVI has not been studied in patients with severe renal impairment (CLcr 15 to 29 mL/min) or end-stage renal disease (ESRD: CLcr &lt;15 mL/min).</p>
      <p><b>Please see full <a href="/media/04-prescribing-information/inqovi_prescribing_information.pdf" rel="noreferrer" target="_blank">Prescribing Information</a>.</b></p>

  </div>
}

const IsiILonsurf = () => {
  return <div id="lonesurfISI">
    <p className="header">Indications and Important Safety Information</p>

    <p className="header">INDICATIONS</p>
    <p>LONSURF is indicated as a single agent or in combination with bevacizumab for the treatment of adult patients with metastatic colorectal cancer previously treated with fluoropyrimidine-, oxaliplatin- and irinotecan-based chemotherapy, an anti-VEGF biological therapy, and if <i>RAS</i> wild-type, an anti-EGFR therapy.</p>

    <p>LONSURF is indicated for the treatment of adult patients with metastatic gastric or gastroesophageal junction adenocarcinoma previously treated with at least two prior lines of chemotherapy that included a fluoropyrimidine, a platinum, either a taxane or irinotecan, and if appropriate, HER2/neu-targeted therapy.</p>

    <p className="header">IMPORTANT SAFETY INFORMATION</p>

    <p className="header">WARNINGS AND PRECAUTIONS</p>

    <p className="mb-1 md_mb-1"><b>Severe Myelosuppression:</b> In the 1114 patients who received LONSURF as a single agent, LONSURF caused severe or life-threatening myelosuppression (Grade 3-4) consisting of neutropenia (38%), anemia (17%), thrombocytopenia (4%) and febrile neutropenia (3%). Three patients (0.3%) died due to neutropenic infection/sepsis; four other patients (0.5%) died due to septic shock. A total of 14% of patients received granulocyte-colony stimulating factors. In the 246 patients who received LONSURF in combination with bevacizumab, LONSURF caused severe or life-threatening myelosuppression (Grade 3-4) consisting of neutropenia (52%), anemia (5%), thrombocytopenia (4%) and febrile neutropenia (0.4%). One patient (0.4%) died due to abdominal sepsis and two other patients (0.8%) died due to septic shock. A total of 29% of patients received granulocyte-colony stimulating factors. Obtain complete blood counts prior to and on Day 15 of each cycle of LONSURF and more frequently as clinically indicated. Withhold LONSURF for severe myelosuppression and resume at the next lower dosage.</p>

    <p className="mb-1 md_mb-1"><b>Embryo-Fetal Toxicity</b>: LONSURF can cause fetal harm when administered to a pregnant woman. Advise pregnant women of the potential risk to the fetus. Advise females of reproductive potential to use effective contraception during treatment and for at least 6 months after the final dose.</p>


    <p className="header">USE IN SPECIFIC POPULATIONS</p>

    <p className="mb-1 md_mb-1"><b>Lactation</b>: It is not known whether LONSURF or its metabolites are present in human milk. There are no data to assess the effects of LONSURF or its metabolites on the breastfed child or the effects on milk production. Because of the potential for serious adverse reactions in breastfed children, advise women not to breastfeed during treatment with LONSURF and for 1 day following the final dose.</p>

    <p className="mb-1 md_mb-1"><b>Male Contraception</b>: Because of the potential for genotoxicity, advise males with female partners of reproductive potential to use condoms during treatment with LONSURF and for at least 3 months after the final dose.</p>

    <p className="mb-1 md_mb-1"><b>Geriatric Use</b>: Patients 65 years of age or older who received LONSURF as a single agent had a higher incidence of the following hematologic laboratory abnormalities compared to patients younger than 65 years: Grade 3 or 4 neutropenia (46% vs 32%), Grade 3 anemia (20% vs 14%), and Grade 3 or 4 thrombocytopenia (6% vs 3%). Patients 65 years of age or older who received LONSURF in combination with bevacizumab had a higher incidence of the following hematologic laboratory abnormalities compared to patients younger than 65 years: Grade 3 or 4 neutropenia (60% vs 46%) and Grade 3 or 4 thrombocytopenia (5% vs 4%).</p>

    <p className="mb-1 md_mb-1"><b>Renal Impairment</b>: No adjustment to the starting dosage of LONSURF is recommended in patients with mild or moderate renal impairment (CLcr of 30 to 89 mL/min). Reduce the starting dose of LONSURF for patients with severe renal impairment (CLcr of 15 to 29 mL/min) to a recommended dosage of 20 mg/m<sup>2</sup>.</p>

    <p><b>Hepatic Impairment:</b> Do not initiate LONSURF in patients with baseline moderate or severe (total bilirubin &gt; 1.5 times ULN and any AST) hepatic impairment. Patients with severe hepatic impairment (total bilirubin &gt; 3 times ULN and any AST) were not studied. No adjustment to the starting dosage of LONSURF is recommended for patients with mild hepatic impairment.</p>

    <p className="header">ADVERSE REACTIONS</p>

    <p><b>Serious adverse reactions</b> occurred in 25% of patients. The most frequent serious adverse reactions (&ge;2%) were intestinal obstruction (2.8%), and COVID-19 (2%). Fatal adverse reactions occurred in 1.2% of patients who received LONSURF in combination with bevacizumab, including rectal fistula (0.4%), bowel perforation (0.4%) and atrial fibrillation (0.4%).</p>

    <p><b>The most common adverse reactions or laboratory abnormalities (&ge;10% in incidence) in patients treated with single-agent LONSURF</b> at a rate that exceeds the rate in patients receiving placebo in mCRC: anemia (77% vs 33%), neutropenia (67% vs 0.8%), asthenia/fatigue (52% vs 35%), nausea (48% vs 24%), thrombocytopenia (42% vs 8%), decreased appetite (39% vs 29%), diarrhea (32% vs 12%), vomiting (28% vs 14%), abdominal pain (21% vs 19%), and pyrexia (19% vs 14%). In metastatic gastric cancer or gastroesophageal junction (GEJ): neutropenia (66% vs 4%), anemia (63% vs 38%), nausea (37% vs 32%), thrombocytopenia (34% vs 9%), decreased appetite (34% vs 31%), vomiting (25% vs 20%), infections (23% vs 16%) and diarrhea (23% vs 14%).</p>

    <p>Pulmonary emboli occurred more frequently in LONSURF‑treated patients compared to placebo: in mCRC (2% vs 0%) and in metastatic gastric cancer and GEJ (3% vs 2%).</p>

    <p>Interstitial lung disease (0.2%), including fatalities, has been reported in clinical studies and clinical practice settings in Asia.</p>

    <p><b>The most common adverse reactions or laboratory abnormalities (&ge;20% in incidence) in patients treated with LONSURF in combination with bevacizumab</b> vs LONSURF alone were neutropenia (80% vs 68%), anemia (68% vs 73%), thrombocytopenia (54% vs 29%), fatigue (45% vs 37%), nausea (37% vs 27%), increased aspartate aminotransferase (34% vs 28%), increased alanine aminotransferase (33% vs 23%), increased alkaline phosphate (31% vs 36%), decreased sodium (25% vs 20%), diarrhea (21% vs 19%), abdominal pain (20% vs 18%), and decreased appetite (20% vs 15%).</p>

    <p><b>Please see full <a href="/media/04-prescribing-information/lonsurf_prescribing_information.pdf" rel="noreferrer" target="_blank">Prescribing Information</a>.</b></p>

  </div>
}

const IsiLytgobi = () => {
  return <div id="lytgobiISI">

    <p className="header">Indication and Important Safety Information</p>

    <p className="header">INDICATION AND USAGE</p>

    <p>LYTGOBI is indicated for the treatment of adult patients with previously treated, unresectable, locally advanced or metastatic intrahepatic cholangiocarcinoma harboring fibroblast growth factor receptor 2 (FGFR2) gene fusions or other rearrangements.</p>

    <p>This indication is approved under accelerated approval based on overall response rate and duration of response. Continued approval for this indication may be contingent upon verification and description of clinical benefit in a confirmatory trial(s).</p>

    <p className="header">IMPORTANT SAFETY INFORMATION</p>

    <p className="header">WARNINGS AND PRECAUTIONS</p>

    <p className="mb-1 md_mb-1"><b>Ocular Toxicity</b>: LYTGOBI can cause <u>Retinal Pigment Epithelial Detachment (RPED)</u>, which may cause symptoms such as blurred vision. RPED occurred in 9% of 318 patients who received LYTGOBI across clinical trials. The median time to first onset of RPED was 40 days. RPED led to dose interruption of LYTGOBI in 1.3% of patients, dose reduction in 1.6% of patients, and permanent discontinuation in 0.3% of patients. Perform a comprehensive ophthalmological examination, including optical coherence tomography (OCT) of the macula, prior to initiation of therapy, every 2 months for the first 6 months, and every 3 months thereafter. For onset of visual symptoms, refer patients for ophthalmologic evaluation urgently, with follow-up every 3 weeks until resolution or discontinuation of LYTGOBI. Withhold or reduce the dose of LYTGOBI as recommended. <u>Dry Eye/Corneal Keratitis:</u> Among 318 patients who received LYTGOBI across clinical trials, dry eye occurred in 15% of patients. Treat patients with ocular demulcents as needed.</p>

    <p className="mb-1 md_mb-1"><b>Hyperphosphatemia and Soft Tissue Mineralization</b>: LYTGOBI can cause hyperphosphatemia leading to soft tissue mineralization, calcinosis, nonuremic calciphylaxis, and vascular calcification. Hyperphosphatemia was reported in 88% of 318 patients treated with LYTGOBI across clinical trials with a median time of onset of 5 days (range 3-117). Phosphate binders were received by 77% of patients who received LYTGOBI. Monitor for hyperphosphatemia throughout treatment. Initiate a low-phosphate diet and phosphate-lowering therapy when serum phosphate level is &ge;5.5 mg/dL; initiate or intensify phosphate-lowering therapy when &gt;7 mg/dL; reduce dose, withhold, or permanently discontinue LYTGOBI based on duration and severity of hyperphosphatemia.</p>

    <p className="mb-1 md_mb-1"><b>Embryo-fetal Toxicity</b>: Based on findings in an animal study and its mechanism of action, LYTGOBI can cause fetal harm when administered to a pregnant woman. Advise pregnant women of the potential risk to the fetus. Advise female patients of reproductive potential, and males with female partners of reproductive potential, to use effective contraception during treatment with LYTGOBI and for 1 week after the last dose.</p>

    <p className="header">ADVERSE REACTIONS</p>

    <p><b>Serious adverse reactions</b> occurred in 39% of patients receiving LYTGOBI, and in &ge;2% of patients included pyrexia (3.9%), gastrointestinal hemorrhage (3.9%), ascites (2.9%), musculoskeletal pain (2.9%), and bile duct obstruction (2.9%).</p>

    <p><b>The most common adverse reactions</b> (&ge;20%) were nail toxicity (47%), musculoskeletal pain (43%), constipation (39%), diarrhea (39%), fatigue (37%), dry mouth (35%), alopecia (34%), stomatitis (30%), abdominal pain (30%), dry skin (29%), arthralgia (25%), dysgeusia (25%), dry eye (25%), nausea (24%), decreased appetite (23%), urinary tract infection (23%), palmar-plantar erythrodysesthesia syndrome (21%), and vomiting (20%).</p>

    <p><b>The most common laboratory abnormalities</b> (&ge;20%) were increased phosphate (97%), increased creatinine (58%), decreased hemoglobin (52%), increased glucose (52%), increased calcium (51%), decreased sodium (51%), decreased phosphate (50%), increased alanine aminotransferase (50%), increased alkaline phosphatase (47%), decreased lymphocytes (46%), increased aspartate aminotransferase (46%), decreased platelets (42%), increased activated partial thromboplastin time (36%), decreased leukocytes (33%), decreased albumin (31%), decreased neutrophils (31%), increased creatine kinase (31%), increased bilirubin (28%), decreased glucose (25%), increased prothrombin international normalized ratio (25%), and decreased potassium (22%).</p>

    <p className="header">DRUG INTERACTIONS</p>

    <p><b>Dual P-gp and Strong CYP3A Inhibitors:</b> Avoid concomitant use of drugs that are dual P-gp and strong CYP3A inhibitors.</p>

    <p><b>Dual P-gp and Strong CYP3A Inducers:</b> Avoid concomitant use of drugs that are dual P-gp and strong CYP3A inducers.</p>

    <p className="header">USE IN SPECIFIC POPULATIONS</p>

    <p><b>Lactation:</b> Because of the potential for serious adverse reactions from LYTGOBI in breastfed children, advise women not to breastfeed during treatment and for 1 week after the last dose.</p>

    <p><b>Hepatic Impairment:</b> Patients with hepatic impairment may have the potential for increased adverse reactions compared to patients with normal hepatic function.</p>

    <p><b>Please see accompanying full <a href="https://taihocorp-media-release.s3.us-west-2.amazonaws.com/documents/LYTGOBI_Prescribing_Information.pdf" rel="noreferrer" target="_blank">Prescribing Information</a> for complete details.</b></p>

  </div>
}

const Isi = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <InView>
    {({ inView, ref, entry }) => (

      <section className={toggle ? "isi open" : "isi closed " + inView.toString()} >

        <div className="relative-isi" ref={ref}>
          <div className="row">
            <div className="small-12 column">
              <IsiInqovi />
              <IsiILonsurf />
              <IsiLytgobi />
            </div>
          </div>
        </div>

        <div className="sticky-isi">
          <div id="sticky">
            <div className="row">
              <div className="small-12 column text-right">
                <button onClick={() => setToggle(!toggle)}>
                  {toggle ? <Closed /> : <Open />}
                </button>
                </div>
                <div className="small-12 column">
                  <IsiInqovi />
                  <IsiILonsurf />
                  <IsiLytgobi />
              </div>
            </div>
          </div>
        </div>

      </section>

  )}
  </InView>
  )
}

export default Isi
