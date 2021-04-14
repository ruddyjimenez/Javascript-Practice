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

let name = '';

for (let i = 0; i < nightClubRegister.length; i++) {
     if(nightClubRegister[i].age <= 21 && nightClubRegister[i].gender === 'male') {
        console.log('Mr. ' + nightClubRegister[i].name + ' , you are not old enough, you cannot enter.')
    } else if (nightClubRegister[i].age >= 22 && nightClubRegister[i].gender === 'male') {
        console.log('Mr. ' + nightClubRegister[i].name + ' , you are old enough, you can enter')
    } else if(nightClubRegister[i].age <= 21 && nightClubRegister[i].gender === 'female') {
        console.log('Ms. ' + nightClubRegister[i].name + ' , you are not old enough, you cannot enter.')
    } else if (nightClubRegister[i].age >= 22 && nightClubRegister[i].gender === 'female') {
        console.log('Ms. ' + nightClubRegister[i].name + ' , you are old enough, you can enter')
    }
}

//console.log(nightClubRegister)
//This log is for testing-only purposes.