const inlineData = {"name": "Louis Maillet", "title": "Étudiant ingénieur — ESAIP (Réseaux & Informatique)", "contact": {"email": "lmaillet.ir2027@esaip.org", "phone": "07 81 86 87 17", "address": "1 Allée des Bruyères, 33290 Blanquefort"}, "summary": "Je ne cherche pas à changer le monde. Je veux construire une vie stable : travailler sérieusement, rester libre et profiter des choses simples.", "formation": [{"period": "2022–2024", "title": "Prépa MPSI → MP — Lycée Robespierre, Arras", "notes": "Formation exigeante, rigueur de travail."}, {"period": "2024–2025", "title": "ESAIP — Ingénieur Réseaux", "notes": "Pédagogie par projet, temps pour approfondir."}, {"period": "2025", "title": "Erasmus — Pilsen (6 mois)", "notes": "Échanges culturels, autonomie."}], "competences_techniques": ["Compréhension rapide", "Python", "Java", "Vision par ordinateur", "Traitement d'images", "Machine learning"], "competences_transversales": ["Rigueur", "Capacité d'adaptation", "Esprit d'analyse", "Communication interculturelle", "Écoute active"], "projet_professionnel": {"objectif": "Trouver un poste stable d'ingénieur (vision ou cybersécurité) permettant une bonne qualité de vie et des responsabilités techniques.", "projection_5_ans": ["Ingénieur confirmé (R&D ou lead technique)", "Contributions à projets techniques", "Stabilité professionnelle et expérience internationale"]}, "experiences": [{"title": "Ambassadeur ESAIP & BDE", "period": "Depuis 2024", "description": "Représentation de l'école, organisation d'événements. Interaction quotidienne avec des étudiants internationaux : accueil, orientation, médiation linguistique et culturelle. Compétences : communication interculturelle, gestion d'événements, prise de parole, coordination."}, {"title": "Projet d'analyse d'images binaires (académique)", "period": "Semestre", "description": "Développement Python pour segmentation et analyse d'objets. Compétences développées : pipeline de traitement, validation expérimentale, interprétation de résultats."}, {"title": "Implémentation de structures de données (TPs)", "period": "Travaux pratiques", "description": "Conception et tests d'une table de hachage et structures de graphe, profilage et optimisation. Compétences développées : algorithmique, tests, optimisation."}], "values": {"valeurs": ["Rigueur", "Responsabilité", "Ouverture", "Innovation"]}};
function populate(data){
  const techList = document.getElementById('tech-list');
  data.competences_techniques.forEach(t => { let li = document.createElement('li'); li.textContent = t; techList.appendChild(li);} );
  const transList = document.getElementById('trans-list');
  data.competences_transversales.forEach(t => { let li = document.createElement('li'); li.textContent = t; transList.appendChild(li);} );
  document.getElementById('projet-text')?.textContent = data.projet_professionnel.objectif;
  const proj5 = document.getElementById('proj5');
  data.projet_professionnel.projection_5_ans.forEach(p => { let li = document.createElement('li'); li.textContent = p; proj5.appendChild(li);} );
  const expList = document.getElementById('exp-list');
  data.experiences.forEach(exp => {
    const art = document.createElement('article');
    art.className = 'card';
    art.innerHTML = `<h4>${exp.title} <span class="muted">(${exp.period})</span></h4><p>${exp.description}</p>`;
    expList.appendChild(art);
  });
}
function fetchData(){ fetch('data.json').then(r => { if(!r.ok) throw new Error('no json'); return r.json(); }).then(j => { populate(j); }).catch(e => { console.warn('Using inline data fallback.', e); populate(inlineData); }); }
function reveal(){ document.querySelectorAll('section').forEach(s => { const rect = s.getBoundingClientRect(); if(rect.top < window.innerHeight - 100) s.classList.add('visible'); }); }
document.addEventListener('DOMContentLoaded', () => { fetchData(); reveal(); window.addEventListener('scroll', reveal); });
