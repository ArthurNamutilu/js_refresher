// setting default parameter
function calculateAge(dob, year = 2023){      // = 2023 -> default parameter
    let age = year - dob;
    console.log(`Age is ${age}`);
}

calculateAge(1999, 2024)