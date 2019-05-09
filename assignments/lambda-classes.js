class Person {
    constructor({name, age, location}) {
        this.name = name;
        this.age = age;
        this.location = location;
    }   

    speak() {
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}.`);
    }
}

class Instructor extends Person {
    constructor({specialty, favLanguage, catchPhrase, ...rest}) {
        super(rest);

        this.specialty = specialty;
        this.favLanguage = favLanguage;
        this.catchPhrase = catchPhrase;
    }

    demo(subjectStr) {
        console.log(`Today we are learning about ${subjectStr}.`);
    }

    grade(student, subjectStr) {
        console.log(`${student.name} receives a perfect score on ${subjectStr}!`);
    }

    score(student) {
        let coinFlip = getRandomInt(2);

        if(student.grade == 'Graduated!') {
            console.log(`Silly ${this.name}, ${student.name} already graduated!`);
        } else {
            if(coinFlip === 0) { 
                student.grade -= 10; 
            } 
            
            else { 
                student.grade += 10; 
            }

            console.log(`${student.name}'s grade has been changed to ${student.grade}.`);
        }
    }
}

class Student extends Person {
    constructor({prevBackground, className, favSubs, grade, ...rest}) {
        super(rest);

        this.prevBackground = prevBackground;
        this.className = className;
        this.favSubs = favSubs;
        this.grade = grade;
    }

    listsSubjects(subjectArr) {
        subjectArr.forEach(subject => {
            console.log(subject);
        });
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge on ${subject}.`)
    }

    graduate() {
        if(this.grade >= 70) {
            this.grade = 'Graduated!';
            console.log(`Wow congrats, ${this.name}! You graduated!`);
        } else {
            console.log(`Keep trying, ${this.name}. You'll get there!`);
        }
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

class ProjectManager extends Instructor {
    constructor({gradClassName, favInstructor, ...rest}) {
        super(rest);

        this.gradClassName = gradClassName;
        this.favInstructor = favInstructor;
    }

    standUp(slackChannelStr) {
        console.log(`${this.name} announces to ${slackChannelStr}, @channel standy times!`);           
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs code for ${student.name} on ${subject}.`)
    }
}


const chris = new Student({
    name: 'Chris', 
    age: 23, 
    location: 'Los Angeles', 
    prevBackground: 'Sales', 
    className: 'Web20', 
    favSubs: ['JS', 'CSS', 'HTML'],
    grade: 50
});

const winnie = new Student({
    name: 'Winnie',
    location: 'Flushing',
    age: 22,
    prevBackground: `MUA`,
    className: `Web20`,
    favSubs: ['CSS', 'HTML', 'LESS'],
    grade: 50
});

const micah = new Student({
    name: 'Micah',
    age: 23,
    location: 'Provo',
    prevBackground: 'Office Manager',
    className: 'Web20',
    favSubs: ['CSS', 'JS', 'HTML'],
    grade: 50
});

const ramses = new Student({
    name: 'Ramses', 
    age: 25, 
    location: 'Miami', 
    prevBackground: 'Real Estate', 
    className: 'Web20', 
    favSubs: ['CSS', 'HTML', 'JS'],
    grade: 50
});

let web20Class = [chris, winnie, micah, ramses];

console.table(web20Class);
chris.speak();
winnie.sprintChallenge('JavaScript');
console.log(`Micah used to be an ${micah.prevBackground}.`);
console.log(`It sure is nice over here in ${ramses.location}!`);

const josh = new ProjectManager({
    name: 'Josh',
    age: 25,
    location: 'Home',
    specialty: 'Being Awesome',
    favLanguage: 'JavaScript',
    catchPhrase: '-smooth sax begins to play-',
    gradClassName: 'web19',
    favInstructor: 'Dan Levy'
});

josh.speak();
josh.standUp('web20_joshua_w');
josh.score(chris);
josh.score(chris);
josh.score(chris);
josh.score(chris);
josh.score(chris);
josh.score(chris);
josh.score(chris);

chris.graduate();