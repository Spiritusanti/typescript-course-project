// const person: {
//     name: string;
//     age: number;
// } = {
var person = {
    name: 'Steve',
    age: 30,
    hobbies: ['aquscaping', 'powerlifiting']
};
var favoriteActivities;
favoriteActivities = ['sports'];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
