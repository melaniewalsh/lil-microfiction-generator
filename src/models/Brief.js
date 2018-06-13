import makeRandom from '../utilities/makeRandom';
import adjectives from '../data/adjectives.json';
import people from '../data/people.json';
import animals from '../data/animals.json';
import interjections from '../data/interjections.json';
import interjections2 from '../data/interjections2.json';
import drunk from '../data/drunk.json';
import food from '../data/food.json';
import description from '../data/description.json';
import description2 from '../data/description2.json';
import shakespeare from '../data/shakespeare.json';
import subjects from "../data/subjects.json";

class Brief {
  constructor() {
    this.adjective = makeRandom(adjectives);
    this.adjective2 = makeRandom(adjectives);
    this.category = makeRandom(Object.keys(subjects));
    this.animalOccupation = subjects[this.category].animalOccupation;
    this.celebrity = makeRandom(subjects[this.category].celebrity);
    this.table = subjects[this.category].Table;
    this.subject = subjects[this.category].Subject;
    this.conflictPerson = subjects[this.category].conflictPerson;
    this.conflictPersonSpecific = subjects[this.category].conflictPersonSpecific;
    this.conflictPersonSpeaking = subjects[this.category].conflictPersonSpeaking;
    this.currentSubject = subjects[this.category].currentSubject;
    this.Action1 = subjects[this.category].Action1;
    this.Action2 = subjects[this.category].Action2;
    this.animal = makeRandom(animals).name;
    this.people = makeRandom(people);
    this.interjection = makeRandom(interjections);
    this.interjection2 = makeRandom(interjections2);
    this.interjection3 = makeRandom(interjections2);
    this.drunk = makeRandom(drunk);
    this.food = makeRandom(food);
    this.food2 = makeRandom(food);
    this.food3 = makeRandom(food);
    this.description = makeRandom(description);
    this.description2 = makeRandom(description2);
    this.description3 = makeRandom(description2);
    this.shakespeare = makeRandom(shakespeare).trim();

  }
}

export default Brief;
/*
const audience = makeRandom(audiences);
const adjective;
const businessType;
const businessName;
const city;*/
