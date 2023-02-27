// Question 1

function InstagramPost(handle, content, imageLink, numberOfViews, numberOfLikes) {
    this.Handle = handle;
    this.content = content;
    this.imageLink = imageLink;
    this.numberOfViews = numberOfViews;
    this.numberOfLikes = numberOfLikes;
};

// Question 2

const post1 = new InstagramPost("brainjotter", "We meuve!!!!!", "https://www.instagram.com/reel/CpFRLC8DEG6/?utm_source=ig_web_copy_link", 202,344, 272,715);
const post2 = new InstagramPost("oyinda.oc", "When your mum has the same vibe as you", "https://www.instagram.com/reel/Cjhyhb_Dc1W/?utm_source=ig_web_copy_link", 785, 513);

console.log(post1);
console.log(post2);

// QUESTION 3A

// A createPerson() factory function that takes name, age and location as parameters.
function createPerson(name, age, location) {
    return {
        name: name,
        age: age,
        location: location,
    }
};

// An object musaObj created from createPerson factory function taking arguments.
const musaObj = createPerson("Musa", 19, "Lekki, Lagos State");
console.log(musaObj);

//QUESTION 3B

// A factory function createJambScores() that takes eng, govt, lit, crk as parameters.
function createJambScores(Eng, Govt, Lit, Crk) {
    return {
        Eng: Eng,
        Govt: Govt,
        Lit: Lit,
        Crk: Crk
    }
};

// An object musaScore created from createJambScores factory function taking arguments.
const musaScore = createJambScores(70, 85, 82, 94);
console.log(musaScore);

// Merging the object musaScore as a property to musaObj object
Object.assign(musaObj, musaScore);
console.log(musaObj);

// QUESTION 5

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
};



for (let key of Object.keys(presidentialCandidates)) {
    console.log(`${presidentialCandidates[key]} is the presidential candidate for ${key}`);
}

//QUESTION 4


 // Objects can be cloned in 3  different ways:-
 // 1. Using Object.assign()
 // 2. Using spread syntax i.e, ...
 // 3. Using the method JSON.parse


 //  1. Using Object.assign()

 const createMe = {
    skinColor: "Fair",
    height: "1.5m",
    hairColor: "Golden"
}

const myId = Object.assign({}, createMe);
console.log("Using Object.assign()");
console.log({createMe});
console.log({myId});


 // 2. Using spread syntax i.e, ...

const myLikes = {
    food: "Abacha",
    drink: "Sprite",
    wears: "Short Gown"
}
const myLike = {...myLikes};

console.log("Using spread syntax");

console.log({myLikes});
console.log({myLike});


// 3. Using the method JSON.parse 

const mySelf = {
    hobby: "travelling",
    favMovie: "Any good one"
    
}
    const mySelf1 = JSON.parse(JSON.stringify(mySelf));
    console.log("Using JSON.parse method");
    console.log({mySelf});
    console.log({mySelf1});


