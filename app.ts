const person: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string];
} = {
    name: 'Steve',
    age: 30,
    hobbies: ['aquscaping', 'powerlifiting'],
    role: [2, 'author'],
};

let favoriteActivities: string[];
favoriteActivities = ['sports'];

console.log(person);

for (const hobby of person.hobbies) {
    console.log(hobby);
}
