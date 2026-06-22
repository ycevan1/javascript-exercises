const findTheOldest = function(people) {
    let oldestAge = 0;
    let oldestPerson;
    people.forEach((person) => {
        let deathYear;
        if (person.yearOfDeath == undefined) {
            deathYear = new Date().getFullYear();
        } else {
            deathYear = person.yearOfDeath;
        }

        if (deathYear - person.yearOfBirth > oldestAge) {
            oldestPerson = person;
            oldestAge = deathYear - person.yearOfBirth;
        }
    })
    
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
