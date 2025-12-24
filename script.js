const quizData = [
/* ================== TOPIC 1 ================== */
{q:"The nose of the redesigned Shinkansen bullet train is inspired by",o:["Kingfisher beak","Crane peak","Owl peak","Heron peak"],a:0},
{q:"Passive cooling in skyscrapers is inspired by",o:["Termite mounds","Earthwork mounds","Ant mounds","Spiro mounds"],a:0},
{q:"Belt movement of military tanks was inspired by",o:["Caterpillar movement","Termite movement","Ant movement","Butterfly movement"],a:0},
{q:"Retinal prosthetic is approved by",o:["USFDA","USEPA","CPCB","SPCB"],a:0},
{q:"GM corn gene is from",o:["Bacillus thuringiensis","Bacillus cereus","Bacillus subtilis","Bacillus anthracis"],a:0},
{q:"Insecticidal protein is",o:["Cry protein","Res protein","Try protein","Taf protein"],a:0},
{q:"Biofertilizers can",o:["Replace chemical N & P","Reduce crop yield","Destimulate growth","Reduce soil fertility"],a:0},
{q:"Microstructure analysis of self-healing concrete",o:["SEM","XRD","FTIR","XPS"],a:0},
{q:"Pollution control using bioreactor",o:["Biofiltration","Bioaugmentation","Bioleaching","Biomimetics"],a:0},
{q:"Nanoparticle size range",o:["1–100 nm","1–100 mm","1–1000 nm","1–10 µm"],a:0},
{q:"CNT strength compared to steel",o:["100 times","10","25","50"],a:0},
{q:"Nanotechnology coined by",o:["Norio Taniguchi","Feynman","Drexler","Fleming"],a:0},
{q:"Width of carbon nanotube",o:["0.5–2.5 nm","0.1–0.5 nm","2.5–4.5 nm","4.5–6.5 nm"],a:0},
{q:"Length of 10 hydrogen atoms",o:["7 nm","10 nm","2 nm","20 nm"],a:0},
{q:"Human hair size",o:["50,000–100,000 nm","500–1000 nm","500,000–1,000,000 nm","50–100 nm"],a:0},
{q:"Nano comes from",o:["Greek","French","Spanish","Latin"],a:0},
{q:"Organic farming needed due to",o:["Environmental pollution","Poverty","Road accidents","Population"],a:0},
{q:"Early cancer detection",o:["MRI","CCD","BBD","AIS"],a:0},

/* ================== TOPIC 2 ================== */
{q:"Prokaryotic cell size",o:["0.1–5.0 µm","0.1–50 µm","10–50 µm","2–10 µm"],a:0},
{q:"Cells without true nucleus",o:["Prokaryotic","Eukaryotic","Plant","Animal"],a:0},
{q:"Organelles absent in",o:["Prokaryotic cells","Eukaryotic","Plant","Animal"],a:0},
{q:"Chromosomal protein",o:["Histone","Heme","Cistone","Diastone"],a:0},
{q:"Asexual division in prokaryotes",o:["Binary fission","Conjugation","Ligation","Mitosis"],a:0},
{q:"Sexual reproduction in prokaryotes",o:["Conjugation","Binary fission","Ligation","Mitosis"],a:0},
{q:"Outer protective covering",o:["Capsule","Cell wall","Cell membrane","Cytoplasm"],a:0},
{q:"Protein synthesis organelle",o:["Ribosomes","Lysosomes","Mitochondria","Vacuoles"],a:0},
{q:"Hair-like attachment structures",o:["Pili","Capsule","Flagella","Cilia"],a:0},
{q:"Virus observed using",o:["Electron microscope","Light microscope","Naked eye","Fluorescent"],a:0},
{q:"Plasmids present in",o:["Bacteria","Fungi","Yeast","Plants"],a:0},
{q:"Bacterial cell wall component",o:["Peptidoglycan","Protein","Cellulose","Chitin"],a:0},
{q:"Chitin present in",o:["Fungal cell wall","Bacteria","Virus","Cyanobacteria"],a:0},
{q:"Gram positive bacteria have",o:["Thick peptidoglycan","Chitin","Mannose","Teichoic acid"],a:0},
{q:"Gram negative bacteria are",o:["Resistant","Susceptible","Receptive","Vulnerable"],a:0},
{q:"Low lipid content in",o:["Gram positive","Gram negative","Virus","Fungi"],a:0},
{q:"Gram positive wall thickness",o:["20–80 nm","2–8 nm","200–800 nm","150–300 nm"],a:0},
{q:"Gram positive bacteria appear",o:["Purple","Pink","Red","Brown"],a:0},
{q:"Needs host to replicate",o:["Virus","Bacteria","Fungi","Yeast"],a:0},
{q:"Hijacks cellular machinery",o:["Virus","Bacteria","Fungi","Yeast"],a:0},
{q:"Not a viral shape",o:["Trapezoid","Polyhedral","Spherical","Helical"],a:0},
{q:"Black bread mold",o:["Rhizopus stolonifer","Mucor","Aspergillus","Candida"],a:0},
{q:"Non-edible mushroom",o:["Amanita","Oyster","Morel","Portobello"],a:0},

/* ================== TOPIC 3 ================== */
{q:"Greek word Eu means",o:["Well","Large","Round","Embryo"],a:0},
{q:"Eukaryotic cell example",o:["Protozoan","Virus","Bacteria","None"],a:0},
{q:"Not eukaryotic cell",o:["Bacteria","Fungi","Protozoa","Animal"],a:0},
{q:"Not characteristic of eukaryote",o:["Circular DNA","Nucleus","Organelles","Cytoskeleton"],a:0},
{q:"Cell wall present in",o:["Only plant cells","Only animal","Both","Protozoa"],a:0},
{q:"Not function of cell wall",o:["Water transport","Shape","Protection","Interaction"],a:0},
{q:"Cell membrane also called",o:["Plasma membrane","Plasmalemma","Cell wall","Nuclear membrane"],a:0},
{q:"Cell membrane made of",o:["Phospholipid bilayer","Trilayer","Glycolipid","Single"],a:0},
{q:"Positions organelles",o:["Cytoskeleton","Cytoplasm","Membrane","Wall"],a:0},
{q:"Center of nucleus",o:["Nucleolus","Nucleoplasm","Membrane","Chromatin"],a:0},
{q:"Function of ribosomes",o:["Protein synthesis","Chromatin","ER","Enzyme"],a:0},
{q:"Ribosomes attach to",o:["ER","Golgi","Mitochondria","Lysosome"],a:0},
{q:"Cytoplasm consistency",o:["Semisolid","Solid","Liquid","Gas"],a:0},
{q:"Not cytoskeleton function",o:["Ion transport","Shape","Movement","Positioning"],a:0},
{q:"DNA in eukaryotes",o:["Linear","Circular","Flat","Irregular"],a:0},
{q:"Nucleolus produces",o:["Ribosomes","Proteins","Enzymes","Energy"],a:0},
{q:"Cholesterol synthesis",o:["Smooth ER","Rough ER","Golgi","Centromere"],a:0},
{q:"Energy molecule",o:["ATP","ADP","AMP","AP"],a:0},
{q:"Mitochondrial matrix contains",o:["DNA & ribosomes","Vacuoles","Centrioles","ER"],a:0},
{q:"Golgi releases",o:["Vesicles","Ribosomes","Vacuoles","Centrioles"],a:0},
{q:"Suicide bags",o:["Lysosomes","Centrioles","Vacuoles","Centromere"],a:0},
{q:"Vacuole membrane",o:["Tonoplast","Chloroplast","Leucoplast","Centroplast"],a:0},
{q:"Shape of plant cells",o:["Rectangular","Circular","Irregular","Flat"],a:0},

/* ================== TOPIC 4 ================== */
{q:"Not a biomolecule",o:["Calcium sulphate","Carbohydrate","Lipid","Nucleic acid"],a:0},
{q:"Lipids contain fatty acids and",o:["Glycerol","Alcohol","Hydrocarbon","Butanol"],a:0},
{q:"Palmitic acid",o:["C16","C14","C18","C20"],a:0},
{q:"No double bond fatty acids",o:["Saturated","Unsaturated","Trans","Cis"],a:0},
{q:"Derived lipid",o:["Steroids","Phospholipids","Glycolipids","Waxes"],a:0},
{q:"Phospholipids contain",o:["Phosphate group","Phosphorous","Phosphoric acid","None"],a:0},
{q:"Glycolipids contain",o:["Carbohydrates","Glucose","Sucrose","Fructose"],a:0},
{q:"Terpenes secreted by",o:["Plants","Insects","Animals","Fungi"],a:0},
{q:"Cell membrane component",o:["Phospholipid","Glycolipid","Sphingolipid","Lipoprotein"],a:0},
{q:"Myelin sheath contains",o:["Sphingolipid","Phospholipid","Glycolipid","Lipoprotein"],a:0},
{q:"Carbohydrate formula",o:["Cn(H2O)n","Cn+1(H2O)n","Cn(H2nO)n","Cn+1(H2nO)n2"],a:0},
{q:"Not complex carbohydrate",o:["Monosaccharide","Disaccharide","Oligosaccharide","Polysaccharide"],a:0},
{q:"Aldose–ketose classification based on",o:["Functional group","Carbon number","Double bond","Saccharide"],a:0},
{q:"Ribose is",o:["Pentose","Hexose","Triose","Heptose"],a:0},
{q:"Starch is",o:["Polysaccharide","Oligosaccharide","Monosaccharide","Disaccharide"],a:0},
{q:"Flatulence causing sugar",o:["Raffinose","Starch","Glycogen","Cellulose"],a:0},
{q:"Amino acids count",o:["20, 7 groups","25,7","20,8","25,8"],a:0},
{q:"Amino acids linked by",o:["Peptide bond","Phosphodiester","Hydroxyl","Amine"],a:0},
{q:"Alpha helix & beta sheet",o:["Secondary structure","Primary","Tertiary","Quaternary"],a:0},
{q:"Alpha helix per turn",o:["3.6","4","3.8","3"],a:0},
{q:"Beta sheets joined by",o:["Hydrogen bonds","Hydroxyl","Amine","Peptide"],a:0},
{q:"Strengthens bones & skin",o:["Collagen","Raffinose","Actin","Myosin"],a:0},
{q:"Actin & myosin involved in",o:["Muscle contraction","Bone strength","Circulation","Immunity"],a:0},
{q:"Antibodies are",o:["Proteins","Fats","Carbohydrates","Lipids"],a:0},
{q:"Protein synthesis from RNA",o:["Translation","Transcription","Replication","Transfusion"],a:0},
{q:"RNA base replacing thymine",o:["Uracil","Adenine","Guanine","Cytosine"],a:0},
{q:"Carries genetic code to ribosome",o:["mRNA","tRNA","rRNA","info RNA"],a:0},

/* ================== TOPIC 5 ================== */
{q:"Not produced in photosynthesis",o:["Carbon dioxide","Oxygen","Organic compounds","Glucose"],a:0},
{q:"Energy source for photosynthesis",o:["Light","ATP","Water","Oxygen"],a:0},
{q:"Calvin cycle occurs in",o:["Stroma","Thylakoid","Grana","Chlorophyll"],a:0},
{q:"ATP is a",o:["Nucleotide","Nucleoside","Protein","Lipid"],a:0},
{q:"ATP from aerobic respiration",o:["38","2","22","18"],a:0}
];

/* ===== QUIZ LOGIC ===== */
const quiz=document.getElementById("quiz");
const result=document.getElementById("result");
quizData.forEach((q,i)=>{
quiz.innerHTML+=`<div class="question">${i+1}. ${q.q}</div>
<div class="options">${q.o.map((op,j)=>`<label><input type="radio" name="q${i}" value="${j}"> ${op}</label><br>`).join("")}</div>`;
});

document.getElementById("submit").onclick=()=>{
let score=0;
quizData.forEach((q,i)=>{
let s=document.querySelector(`input[name="q${i}"]:checked`);
if(s && Number(s.value)===q.a) score++;
});
result.innerHTML=`🎯 You got ${score} / ${quizData.length}`;
};

/* ===== TIMER 120 MIN ===== */
let time=120*60;
setInterval(()=>{
let m=Math.floor(time/60),s=time%60;
document.getElementById("time").textContent=`${m}:${s<10?"0":""}${s}`;
time--;
if(time<0){document.getElementById("submit").click();alert("Time Over!");}
},1000);
