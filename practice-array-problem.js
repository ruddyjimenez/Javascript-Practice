const nightClubRegister = [
    {
        name: 'Ahmed',
        lastname: 'Abdool',
        age: 25,
        gender: 'male'
    },
    {
        name: 'Sally',
        lastname: 'Morgan',
        age: 18,
        gender: 'female'
    },
    {
        name: 'Dionne',
        lastname: 'Brown',
        age: 29,
        gender: 'female'
    },
    {
        name: 'Max',
        lastname: 'Forrester',
        age: 20,
        gender: 'male'
    }
]

let name = null;

for (let i = 0; i < nightClubRegister.length; i++) {
     if(nightClubRegister[i] <= 21)
        console.log('Mr. ' + name + ' , you are not old enough, you cannot enter.')
    } else (nightClubRegister[i] >= 22) {
        console.log('Mr. ' + name + ' , you are old enough, you can enter')
}