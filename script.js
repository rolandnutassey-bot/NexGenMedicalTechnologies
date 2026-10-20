/* ---------------- Equipment Catalogue Data ---------------- */
/* Specifications and pricing are placeholders pending confirmation by the technical team.
   No specific medical specifications, certifications or prices are invented. */
const equipment = [
  {
    id: "pm-01", name: "Multi-Parameter Patient Monitor", category: "Patient Monitoring",
    brand: "To be confirmed", availability: "Availability to be confirmed",
    image: "https://plus.unsplash.com/premium_photo-1764397720987-69fb94e23964?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVsdGlwYXJhbWV0ZXIlMjBwYXRpZW50JTIwbW9uaXRvcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Continuous monitoring of vital signs including ECG, SpO2, NIBP, respiration and temperature for ward, ICU or theatre use.",
    specs: [["Display","Specification to be confirmed"],["Power Supply","Specification to be confirmed"],["Parameters Monitored","Specification to be confirmed"],["Dimensions / Weight","Specification to be confirmed"],["Certification","To be confirmed"]],
    applications: ["General wards","Intensive care units","Operating theatres","Recovery rooms"],
    related: ["icu-01","pm-02"]
  },
  {
    id: "pm-02", name: "Portable Defibrillator", category: "Patient Monitoring",
    brand: "To be confirmed", availability: "Request Quote",
    image: "https://media.istockphoto.com/id/1201433059/photo/defibrillator.webp?a=1&b=1&s=612x612&w=0&k=20&c=fC3D1vItKxtJbn3gEx5FreNvDJ8l7iJp-RNhbFHxQR0=",
    description: "Portable defibrillation unit for emergency cardiac response in clinical and pre-hospital settings.",
    specs: [["Energy Output","Specification to be confirmed"],["Battery Life","Specification to be confirmed"],["Weight","Specification to be confirmed"],["Certification","To be confirmed"]],
    applications: ["Emergency departments","Ambulance services","Cardiac care units"],
    related: ["pm-01","icu-01"]
  },
  {
    id: "img-01", name: "Diagnostic Ultrasound System", category: "Imaging Equipment",
    brand: "To be confirmed", availability: "Request Quote",
    image: "https://plus.unsplash.com/premium_photo-1663013248555-1e4068f3018d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGlhZ25vc3RpYyUyMHVsdHJhc291bmQlMjBzeXN0ZW18ZW58MHx8MHx8fDA%3D",
    description: "General-purpose diagnostic ultrasound system for abdominal, obstetric, cardiac and vascular imaging applications.",
    specs: [["Probe Types","Specification to be confirmed"],["Display","Specification to be confirmed"],["Imaging Modes","Specification to be confirmed"],["Certification","To be confirmed"]],
    applications: ["Radiology departments","Obstetrics & gynaecology","Cardiology clinics"],
    related: ["img-02","lab-01"]
  },
  {
    id: "img-02", name: "Digital X-Ray System", category: "Imaging Equipment",
    brand: "To be confirmed", availability: "Request Quote",
    image: "https://images.unsplash.com/photo-1579684288402-e3e337bcc7af?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlnaXRhbCUyMHgtcmF5JTIwc3lzdGVtfGVufDB8fDB8fHww",
    description: "Digital radiography system for general diagnostic imaging in hospital and clinic radiology departments.",
    specs: [["Detector Type","Specification to be confirmed"],["Power Requirement","Specification to be confirmed"],["Generator Output","Specification to be confirmed"],["Certification","To be confirmed"]],
    applications: ["Radiology departments","Orthopaedic clinics","Emergency imaging"],
    related: ["img-01","icu-01"]
  },
  {
    id: "icu-01", name: "ICU Ventilator System", category: "ICU Equipment",
    brand: "To be confirmed", availability: "Request Quote",
    image: "https://images.unsplash.com/photo-1766299892683-d50398e31823?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SUNVJTIwdmVudGlsYXRvciUyMHN5c3RlbXxlbnwwfHwwfHx8MA%3D%3D",
    description: "Mechanical ventilation system supporting invasive and non-invasive ventilation modes for critical care patients.",
    specs: [["Ventilation Modes","Specification to be confirmed"],["Display","Specification to be confirmed"],["Power Supply","Specification to be confirmed"],["Certification","To be confirmed"]],
    applications: ["Intensive care units","High-dependency units","Operating theatres"],
    related: ["pm-01","img-02"]
  },
  {
    id: "lab-01", name: "Clinical Chemistry Analyzer", category: "Laboratory Equipment",
    brand: "To be confirmed", availability: "Availability to be confirmed",
    image: "https://images.unsplash.com/photo-1663365520163-cf0ef0afb744?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y2xpbmljYWwlMjBjaGVtaXN0cnklMjBhbmFseXplcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Automated analyzer for routine clinical chemistry testing in hospital and diagnostic laboratories.",
    specs: [["Throughput","Specification to be confirmed"],["Test Menu","Specification to be confirmed"],["Power Supply","Specification to be confirmed"],["Certification","To be confirmed"]],
    applications: ["Clinical laboratories","Diagnostic centres","Blood banks"],
    related: ["img-01","surg-01"]
  },
  {
    id: "surg-01", name: "Electrosurgical Unit", category: "Surgical Equipment",
    brand: "To be confirmed", availability: "Request Quote",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RWxlY3Ryb3N1cmdpY2FsfGVufDB8fDB8fHww",
    description: "Electrosurgical generator supporting monopolar and bipolar modes for a range of surgical procedures.",
    specs: [["Output Modes","Specification to be confirmed"],["Power Output","Specification to be confirmed"],["Safety Features","Specification to be confirmed"],["Certification","To be confirmed"]],
    applications: ["Operating theatres","Day-surgery units","Minor procedure rooms"],
    related: ["ster-01","icu-01"]
  },
  {
    id: "dent-01", name: "Dental Chair Unit", category: "Dental Equipment",
    brand: "To be confirmed", availability: "Availability to be confirmed",
    image: "https://images.unsplash.com/photo-1722586663955-2f96a4c1f255?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVudGFsJTIwY2hhaXIlMjB1bml0fGVufDB8fDB8fHww",
    description: "Integrated dental chair and delivery unit for general dental practice and clinics.",
    specs: [["Chair Movement","Specification to be confirmed"],["Delivery System","Specification to be confirmed"],["Power Supply","Specification to be confirmed"],["Certification","To be confirmed"]],
    applications: ["Dental clinics","Dental training institutions"],
    related: ["ster-01"]
  },
  {
    id: "ster-01", name: "Autoclave Sterilizer", category: "Sterilization Equipment",
    brand: "To be confirmed", availability: "Availability to be confirmed",
    image: "https://images.unsplash.com/photo-1623986854265-3f4f4082c4c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QXV0b2NsYXZlJTIwc3RlcmlsaXplcnxlbnwwfHwwfHx8MA%3D%3D",
    description: "Steam sterilization unit for instruments and reusable medical devices across clinical settings.",
    specs: [["Chamber Capacity","Specification to be confirmed"],["Cycle Types","Specification to be confirmed"],["Power Supply","Specification to be confirmed"],["Certification","To be confirmed"]],
    applications: ["Central sterile supply departments","Dental clinics","Operating theatres"],
    related: ["dent-01","surg-01"]
  },
  {
    id: "neo-01", name: "Infant Incubator", category: "Neonatal Equipment",
    brand: "To be confirmed", availability: "Request Quote",
    image: "https://images.unsplash.com/photo-1570479378814-54430c7f4a07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aW5mYW50JTIwaW5jdWJhdG9yfGVufDB8fDB8fHww",
    description: "Closed-care incubator providing a controlled thermal environment for premature and newborn infants.",
    specs: [["Temperature Control","Specification to be confirmed"],["Humidity Control","Specification to be confirmed"],["Alarm System","Specification to be confirmed"],["Certification","To be confirmed"]],
    applications: ["Neonatal intensive care units","Maternity wards"],
    related: ["pm-01","icu-01"]
  },
  {
    id: "phys-01", name: "Ultrasound Therapy Unit", category: "Physiotherapy Equipment",
    brand: "To be confirmed", availability: "Availability to be confirmed",
    image: "https://plus.unsplash.com/premium_photo-1661488838976-f77a25541fc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dWx0cmFzb3VuZCUyMHRoZXJhcHklMjB1bml0fGVufDB8fDB8fHww",
    description: "Therapeutic ultrasound device used in physiotherapy for pain relief and soft tissue treatment.",
    specs: [["Frequency Settings","Specification to be confirmed"],["Timer","Specification to be confirmed"],["Power Supply","Specification to be confirmed"],["Certification","To be confirmed"]],
    applications: ["Physiotherapy clinics","Rehabilitation centres","Sports medicine units"],
    related: ["reh-01"]
  },
  {
    id: "oph-01", name: "Slit Lamp Examination Unit", category: "Ophthalmic Equipment",
    brand: "To be confirmed", availability: "Request Quote",
    image: "https://plus.unsplash.com/premium_photo-1664375246373-6d9ef6af5839?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2xpdCUyMGxhbXAlMjBleGFtaW5hdGlvbiUyMHVuaXR8ZW58MHx8MHx8fDA%3D",
    description: "Slit lamp biomicroscope for examination of the anterior segment of the eye in ophthalmic practice.",
    specs: [["Magnification Range","Specification to be confirmed"],["Illumination","Specification to be confirmed"],["Table Type","Specification to be confirmed"],["Certification","To be confirmed"]],
    applications: ["Eye clinics","Optometry practices","Hospital ophthalmology departments"],
    related: ["phys-01"]
  },
  {
    id: "reh-01", name: "Rehabilitation Exercise System", category: "Rehabilitation Equipment",
    brand: "To be confirmed", availability: "Availability to be confirmed",
    image: "https://plus.unsplash.com/premium_photo-1661767448598-f42428886f1c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVoYWJpbGl0YXRpb24lMjBleGVyY2lzZSUyMHN5c3RlbXxlbnwwfHwwfHx8MA%3D%3D",
    description: "Multi-function rehabilitation equipment supporting mobility and strength recovery programmes.",
    specs: [["Adjustability","Specification to be confirmed"],["Load Capacity","Specification to be confirmed"],["Footprint","Specification to be confirmed"],["Certification","To be confirmed"]],
    applications: ["Rehabilitation centres","Physiotherapy clinics","Sports clinics"],
    related: ["phys-01"]
  }
];

/* ---------------- Render catalogue grid ---------------- */
const catalogueGrid = document.getElementById('catalogueGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const resultCount = document.getElementById('resultCount');

const categories = [...new Set(equipment.map(e => e.category))].sort();
categories.forEach(c => {
  const opt = document.createElement('option');
  opt.value = c; opt.textContent = c;
  categoryFilter.appendChild(opt);
});

function badgeClass(av){ return av === "In Stock" ? "instock" : "quote"; }

function renderCatalogue(){
  const q = searchInput.value.trim().toLowerCase();
  const cat = categoryFilter.value;
  const filtered = equipment.filter(e => {
    const matchesQ = !q || e.name.toLowerCase().includes(q) || e.category.toLowerCase().includes(q);
    const matchesCat = cat === "all" || e.category === cat;
    return matchesQ && matchesCat;
  });
  resultCount.textContent = filtered.length + (filtered.length === 1 ? " item" : " items");
  catalogueGrid.innerHTML = "";
  if(filtered.length === 0){
    catalogueGrid.innerHTML = `<div class="empty-state">
      <svg viewBox="0 0 24 24" fill="none" stroke-width="1.6"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
      <h3>No equipment found</h3>
      <p>Try a different search term or category. If you're looking for something specific, contact our team directly.</p>
    </div>`;
    return;
  }
  filtered.forEach(e => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-thumb">
        <span class="product-badge">${e.availability}</span>
        <img src="${e.image}" alt="${e.name}">
      </div>
      <div class="product-body">
        <p class="product-cat">${e.category}</p>
        <h4>${e.name}</h4>
        <p class="brand">Manufacturer: ${e.brand}</p>
        <button class="btn btn-outline-dark btn-full" onclick="openProduct('${e.id}')">View Details</button>
      </div>`;
    catalogueGrid.appendChild(card);
  });
}
searchInput.addEventListener('input', renderCatalogue);
categoryFilter.addEventListener('change', renderCatalogue);
renderCatalogue();

/* ---------------- Product modal ---------------- */
const productOverlay = document.getElementById('productOverlay');
const productModal = document.getElementById('productModal');

function openProduct(id){
  const e = equipment.find(x => x.id === id);
  if(!e) return;
  const related = e.related.map(rid => equipment.find(x => x.id === rid)).filter(Boolean);

  productModal.innerHTML = `
    <button class="modal-close" onclick="closeProduct()"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
    <div class="modal-hero"><img src="${e.image}" alt="${e.name}"></div>
    <div class="modal-body">
      <div class="modal-top">
        <div>
          <p class="modal-cat">${e.category}</p>
          <h2 class="modal-title">${e.name}</h2>
        </div>
        <span class="avail-pill ${badgeClass(e.availability)}">${e.availability}</span>
      </div>
      <div class="modal-meta"><span><strong>Manufacturer:</strong> ${e.brand}</span><span><strong>Category:</strong> ${e.category}</span></div>
      <p class="modal-desc">${e.description}</p>
      <div class="modal-actions">
        <button class="btn btn-primary" onclick="openQuote('${e.id}')">Request Quotation</button>
        <button class="btn btn-outline-dark" onclick="downloadSpec('${e.id}')">Download Specification PDF</button>
      </div>
      <div class="modal-grid">
        <div>
          <div class="modal-section">
            <h5>Specifications</h5>
            <table class="spec-table">
              ${e.specs.map(s => `<tr><td>${s[0]}</td><td>${s[1]}</td></tr>`).join('')}
            </table>
            <p class="note">Full technical specifications are confirmed by our technical team at the time of quotation.</p>
          </div>
          <div class="modal-section">
            <h5>Applications</h5>
            <ul class="app-list">${e.applications.map(a => `<li>${a}</li>`).join('')}</ul>
          </div>
        </div>
        <div class="modal-section">
          <h5>Related Equipment</h5>
          <div class="related-list">
            ${related.map(r => `
              <div class="related-item" onclick="openProduct('${r.id}')">
                <img src="${r.image}" alt="${r.name}">
                <div><p class="ri-cat">${r.category}</p><p class="ri-name">${r.name}</p></div>
              </div>`).join('') || '<p style="font-size:13.5px;color:var(--gray-600);">No related equipment listed.</p>'}
          </div>
        </div>
      </div>
    </div>`;
  productOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeProduct(){
  productOverlay.classList.remove('open');
  document.body.style.overflow = '';
}
productOverlay.addEventListener('click', e => { if(e.target === productOverlay) closeProduct(); });

/* ---------------- Projects data ---------------- */
/* Illustrative sample projects for design purposes only — not real completed client engagements.
   Client names are intentionally generic; no real organizations are represented. */
const projects = [
  {
    id: "proj-01", title: "Hospital Equipment Installation & Commissioning",
    tag: "Sample Project", client: "Sample Healthcare Facility",
    location: "Accra, Ghana", type: "Installation & Commissioning",
    equipment: ["Patient monitors", "ICU ventilators", "Medical gas outlets"],
    services: ["Site assessment", "Equipment installation", "Commissioning & testing", "Staff orientation"],
    completion: "Illustrative — completion details to be confirmed",
    cover: "https://plus.unsplash.com/premium_photo-1661895714925-2c7a6be6be32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG9zcGl0YWwlMjBFcXVpcG1lbnQlMjBJbnN0YWxsYXRpb24lMjAlMjYlMjBDb21taXNzaW9uaW5nfGVufDB8fDB8fHww",
    gallery: [
      "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=400&q=80",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&q=80",
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=400&q=80"
    ]
  },
  {
    id: "proj-02", title: "Preventive Maintenance Programme",
    tag: "Sample Project", client: "Sample Regional Clinic",
    location: "Kumasi, Ghana", type: "Preventive Maintenance",
    equipment: ["Patient monitors", "Autoclave sterilizers", "Diagnostic equipment"],
    services: ["Scheduled inspection", "Preventive servicing", "Calibration checks", "Maintenance reporting"],
    completion: "Illustrative — completion details to be confirmed",
    cover: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=400&q=80",
      "https://images.unsplash.com/photo-1581093806997-124204d9fa9d?w=400&q=80",
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=80"
    ]
  },
  {
    id: "proj-03", title: "Laboratory Equipment Calibration",
    tag: "Sample Project", client: "Sample Diagnostic Laboratory",
    location: "Takoradi, Ghana", type: "Calibration & Inspection",
    equipment: ["Clinical chemistry analyzer", "Laboratory balances", "Centrifuges"],
    services: ["Calibration", "Performance verification", "Compliance documentation"],
    completion: "Illustrative — completion details to be confirmed",
    cover: "https://images.unsplash.com/photo-1602052577122-f73b9710adba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFib3JhdG9yeSUyMGVxdWlwbWVudCUyMGNhbGxpYnJhdGlvbnxlbnwwfHwwfHx8MA%3D%3Ds",
    gallery: [
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400&q=80",
      "https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=400&q=80",
      "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=400&q=80"
    ]
  }
];

/* ---------------- Render project grid ---------------- */
const projectGrid = document.getElementById('projectGrid');
function renderProjects(){
  if(!projectGrid) return;
  projectGrid.innerHTML = "";
  projects.forEach(p => {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.onclick = () => openProject(p.id);
    card.innerHTML = `
      <div class="project-thumb">
        <span class="project-thumb-tag">${p.tag}</span>
        <img src="${p.cover}" alt="${p.title}">
        <h4 class="project-thumb-title">${p.title}</h4>
      </div>
      <div class="project-body">
        <p class="ptype">${p.type}</p>
        <div class="project-meta-row">
          <svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M12 22s7-6.5 7-12a7 7 0 10-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>
          ${p.location}
        </div>
        <span class="project-view-link">View Project <span class="arrow">→</span></span>
      </div>`;
    projectGrid.appendChild(card);
  });
}
renderProjects();

/* ---------------- Project detail modal ---------------- */
const projectOverlay = document.getElementById('projectOverlay');
const projectModal = document.getElementById('projectModal');

function openProject(id){
  const p = projects.find(x => x.id === id);
  if(!p) return;
  projectModal.innerHTML = `
    <button class="modal-close" onclick="closeProject()"><svg viewBox="0 0 24 24" fill="none" stroke-width="2"><path d="M18 6L6 18M6 6l12 12"/></svg></button>
    <div class="modal-hero"><span class="pd-badge">${p.tag}</span><img src="${p.cover}" alt="${p.title}"></div>
    <div class="modal-body">
      <p class="modal-cat">${p.type}</p>
      <h2 class="modal-title" style="margin-bottom:22px;">${p.title}</h2>
      <div class="pd-info-grid">
        <div class="pd-info-item"><p class="pd-label">Client</p><p class="pd-value">${p.client}</p></div>
        <div class="pd-info-item"><p class="pd-label">Location</p><p class="pd-value">${p.location}</p></div>
        <div class="pd-info-item"><p class="pd-label">Project Type</p><p class="pd-value">${p.type}</p></div>
        <div class="pd-info-item"><p class="pd-label">Completion</p><p class="pd-value">${p.completion}</p></div>
      </div>
      <div class="modal-grid">
        <div>
          <div class="modal-section">
            <h5>Equipment Supplied</h5>
            <ul class="app-list">${p.equipment.map(a => `<li>${a}</li>`).join('')}</ul>
          </div>
          <div class="modal-section">
            <h5>Services Performed</h5>
            <ul class="app-list">${p.services.map(a => `<li>${a}</li>`).join('')}</ul>
          </div>
        </div>
        <div class="modal-section">
          <h5>Project Photographs</h5>
          <div class="pd-gallery">
            ${p.gallery.map(g => `<img src="${g}" alt="${p.title} photograph">`).join('')}
          </div>
          <p class="note">Illustrative sample project for design purposes — not a completed client engagement.</p>
        </div>
      </div>
    </div>`;
  projectOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeProject(){
  projectOverlay.classList.remove('open');
  document.body.style.overflow = '';
}
projectOverlay.addEventListener('click', e => { if(e.target === projectOverlay) closeProject(); });

/* ---------------- Quote modal ---------------- */
const quoteOverlay = document.getElementById('quoteOverlay');
const quoteSub = document.getElementById('quoteSub');
const qfCategory = document.getElementById('qfCategory');
categories.forEach(c => {
  const opt = document.createElement('option');
  opt.value = c; opt.textContent = c;
  qfCategory.appendChild(opt);
});
qfCategory.insertAdjacentHTML('beforeend', '<option value="General Enquiry">General Enquiry</option>');

function openQuote(id){
  const e = equipment.find(x => x.id === id);
  document.getElementById('quoteForm').querySelector('form').reset();
  document.getElementById('fileUploadLabel').textContent = "Select a file to share with your enquiry";
  document.getElementById('quoteSuccessMessage').textContent = "Your email app has opened with the enquiry addressed to Lacarseraff@gmail.com. Review the details and press Send.";
  if(id === 'service'){
    quoteSub.textContent = "Tell us which service you need, where you need it and your preferred timing.";
    document.getElementById('qfEquipment').value = "Service booking request";
    qfCategory.value = "General Enquiry";
  } else if(e){
    quoteSub.textContent = "Requesting a quote for: " + e.name;
    document.getElementById('qfEquipment').value = e.name;
    qfCategory.value = e.category;
  } else {
    quoteSub.textContent = "Tell us what you need and our technical team will follow up with pricing and availability.";
  }
  document.getElementById('quoteForm').style.display = 'block';
  document.getElementById('quoteSuccess').classList.remove('show');
  quoteOverlay.classList.add('open');
}
function closeQuote(){
  quoteOverlay.classList.remove('open');
}
quoteOverlay.addEventListener('click', e => { if(e.target === quoteOverlay) closeQuote(); });
function handleFileSelect(input){
  document.getElementById('fileUploadLabel').textContent = input.files.length ? input.files[0].name : "Select a file to share with your enquiry";
}
function submitQuote(evt){
  evt.preventDefault();
  const reference = 'NGM-' + Date.now().toString(36).toUpperCase().slice(-6);
  const selectedFile = document.getElementById('qfFile').files[0] || null;
  const fields = {
    name: document.getElementById('qfName').value,
    company: document.getElementById('qfCompany').value,
    email: document.getElementById('qfEmail').value,
    phone: document.getElementById('qfPhone').value,
    equipment: document.getElementById('qfEquipment').value,
    category: document.getElementById('qfCategory').value,
    requestType: document.getElementById('qfRequestType').value,
    priority: document.getElementById('qfPriority').value,
    fileName: selectedFile ? selectedFile.name : 'No attachment selected',
    quantity: document.getElementById('qfQuantity').value || 'Not specified',
    date: document.getElementById('qfDate').value || 'Not specified',
    location: document.getElementById('qfLocation').value,
    message: document.getElementById('qfMessage').value || 'None'
  };
  const message = [
    'New NexGenMed quotation enquiry',
    `Name: ${fields.name}`,
    `Company / Hospital: ${fields.company}`,
    `Email: ${fields.email}`,
    `Phone: ${fields.phone}`,
    `Equipment / Service: ${fields.equipment}`,
    `Category: ${fields.category}`,
    `Request Type: ${fields.requestType}`,
    `Priority: ${fields.priority}`,
    `Enquiry Reference: ${reference}`,
    `Attachment: ${fields.fileName}`,
    `Quantity: ${fields.quantity}`,
    `Preferred Date: ${fields.date}`,
    `Location: ${fields.location}`,
    `Additional Requirements: ${fields.message}`
  ].join('\n');
  const emailSubject = `NexGenMed enquiry ${reference}`;
  const emailBody = `${message}\n\nSelected attachment: ${fields.fileName}${selectedFile ? ' (please attach this file before sending)' : ''}`;
  window.location.href = `mailto:Lacarseraff@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  document.getElementById('quoteForm').style.display = 'none';
  document.getElementById('enquiryReference').textContent = 'Reference: ' + reference;
  document.getElementById('quoteSuccess').classList.add('show');
}

/* ---------------- Spec PDF download ---------------- */
function downloadSpec(id){
  const e = equipment.find(x => x.id === id);
  if(!e) return;
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  let y = 20;
  doc.setFontSize(16); doc.setTextColor(11,31,77);
  doc.text("NexGenMed Technologies", 20, y); y += 8;
  doc.setFontSize(11); doc.setTextColor(90,90,90);
  doc.text("Equipment Specification Sheet", 20, y); y += 14;
  doc.setDrawColor(220,220,220); doc.line(20,y,190,y); y += 12;

  doc.setFontSize(14); doc.setTextColor(11,31,77);
  doc.text(e.name, 20, y); y += 8;
  doc.setFontSize(10); doc.setTextColor(15,184,172);
  doc.text(e.category.toUpperCase(), 20, y); y += 12;

  doc.setFontSize(10); doc.setTextColor(60,60,60);
  const descLines = doc.splitTextToSize(e.description, 170);
  doc.text(descLines, 20, y); y += descLines.length * 5 + 10;

  doc.setFontSize(11); doc.setTextColor(11,31,77);
  doc.text("Specifications", 20, y); y += 8;
  doc.setFontSize(10); doc.setTextColor(60,60,60);
  e.specs.forEach(s => {
    doc.text(`${s[0]}:`, 20, y);
    doc.text(`${s[1]}`, 75, y);
    y += 7;
  });
  y += 6;
  doc.setFontSize(11); doc.setTextColor(11,31,77);
  doc.text("Manufacturer", 20, y); y += 8;
  doc.setFontSize(10); doc.setTextColor(60,60,60);
  doc.text(e.brand, 20, y); y += 14;

  doc.setDrawColor(220,220,220); doc.line(20,y,190,y); y += 8;
  doc.setFontSize(8); doc.setTextColor(140,140,140);
  doc.text("This document is a preliminary specification summary. Confirmed technical specifications,", 20, y); y += 4.5;
  doc.text("pricing and availability are provided by NexGenMed Technologies at the time of quotation.", 20, y); y += 4.5;
  doc.text("Accra, Ghana · 0543 660 690 · Lacarseraff@gmail.com", 20, y);

  doc.save(e.name.replace(/\s+/g,'_') + "_Spec_Sheet.pdf");
}

/* ---------------- Escape key closes modals ---------------- */
document.addEventListener('keydown', e => {
  if(e.key === 'Escape'){ closeProduct(); closeQuote(); closeProject(); }
});

  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  hamburgerBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburgerBtn.classList.toggle('open', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
  });
  document.querySelectorAll('.mobile-menu a').forEach(a => {
    a.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburgerBtn.classList.remove('open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
  });

  /* Sticky header changes appearance on scroll */
  const siteHeader = document.querySelector('header');
  function updateHeaderScrollState(){
    siteHeader.classList.toggle('scrolled', window.scrollY > 24);
  }
  window.addEventListener('scroll', updateHeaderScrollState, { passive: true });
  updateHeaderScrollState();

  /* Active navigation indicator (scroll-spy) */
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"], .mobile-menu a[href^="#"]');
  const spySections = Array.from(navLinks)
    .map(a => document.querySelector(a.getAttribute('href')))
    .filter(Boolean);

  function setActiveLink(id){
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + id);
    });
  }
  if('IntersectionObserver' in window && spySections.length){
    const spyObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){ setActiveLink(entry.target.id); }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    spySections.forEach(sec => spyObserver.observe(sec));
  }

  /* Reveal content as it enters the viewport. */
  const revealTargets = document.querySelectorAll('.sec-head, .about-figure, .about > .wrap > div:last-child, .cta-banner .wrap, .newsletter .wrap');
  const staggerTargets = document.querySelectorAll('.service-grid, .product-grid, .why-grid');
  revealTargets.forEach(element => element.classList.add('reveal'));
  staggerTargets.forEach(element => element.classList.add('reveal', 'reveal-stagger'));
  if('IntersectionObserver' in window){
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: .12, rootMargin: '0px 0px -40px' });
    document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));
  } else {
    document.querySelectorAll('.reveal').forEach(element => element.classList.add('is-visible'));
  }

  document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
      const answer = question.nextElementSibling;
      const shouldOpen = question.getAttribute('aria-expanded') !== 'true';
      document.querySelectorAll('.faq-question').forEach(otherQuestion => {
        otherQuestion.setAttribute('aria-expanded', 'false');
        otherQuestion.nextElementSibling.classList.remove('open');
      });
      if(shouldOpen){
        question.setAttribute('aria-expanded', 'true');
        answer.classList.add('open');
      }
    });
  });
