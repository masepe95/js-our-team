console.log('JS OK') 

const cardsField = document.getElementById('cardsField');

const membri = [
	{
		nome: "Wayne",
		cognome: "Barnett",
		grado: "Founder & CEO",
		immagine: "../img/wayne-barnett-founder-ceo.jpg",
		fullName: function () {
			return this.nome + " " + this.cognome;
		},
	},
	{
		nome: "Angela",
		cognome: "Caroll",
		grado: "Chief Editor",
		immagine: "../img/angela-caroll-chief-editor.jpg",
		fullName: function () {
			return this.nome + " " + this.cognome;
		},
	},
	{
		nome: "Walter",
		cognome: "Gordon",
		grado: "Office Manager",
		immagine: "../img/walter-gordon-office-manager.jpg",
		fullName: function () {
			return this.nome + " " + this.cognome;
		},
	},
	{
		nome: "Angela",
		cognome: "Lopez",
		grado: "Social Media Manager",
		immagine: "../img/angela-lopez-social-media-manager.jpg",
		fullName: function () {
			return this.nome + " " + this.cognome;
		},
	},
	{
		nome: "Scott",
		cognome: "Estrada",
		grado: "Developer",
		immagine: "../img/scott-estrada-developer.jpg",
		fullName: function () {
			return this.nome + " " + this.cognome;
		},
	},
	{
		nome: "Barbara",
		cognome: "Ramos",
		grado: "Graphic Designer",
		immagine: "../img/barbara-ramos-graphic-designer.jpg",
		fullName: function () {
			return this.nome + " " + this.cognome;
		},
	},
];

console.log(membri);
for (const membro of membri) {
	console.table(membro.fullName());
}

let memberCard = '';

for (let i = 0; i < membri.length; i++) {
    const member = membri[i];
    memberCard += `
    <div class="col">
                <div class="card">
                    <img src=${member.immagine} class="card-img-top" alt="img">
                    <div class="card-body text-center">
                        <h5 class="card-title">${member.fullName()}</h5>
                        <p class="card-text">${member.grado}</p>
                    </div>
                </div>
    </div>
    `
}

cardsField.innerHTML = memberCard;