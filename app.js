console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
function printOdds(count){
    if (count == 0){
        count = 1;
    }

    if (count < 0){
        count *= -1;
    }
    

    for (let i = 1; i <= count; i++){
        if (i % 2 ! = 0){
            console.log(i);
        }
    }
}

printOdds(10);
printOdds(100);

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function oldEnough(age,targetAge){
    return age >= targetAge;
}


function checklicense(name,age){
    let canDrive = oldEnough(age,16);
    let canHavePermit = oldEnough(age, 15);
    let canDrink = oldEnough(age, 21);

    if (canDrink){
        console.log(
            '${name} can drink. ${name} can also drive.NOT AT THE SAME TIME.'
        );
    } else if (canDrive){
        console.log('${name} can drive.');
    } else if (canHavePermit){
        console.log('${name} can drive with another person of age');
    } else {
        console.log('${name} too young. Wait some years');
    }
}

checkAge("Supreme", 21);


//Exercise 3

function checkQuadrant(x,y){
    if (x > 0 && y > 0){
        return "Quadrant 1";
    } else if (x < 0 && y > 0){
        return "Quadrant 2";
    } else if (x < 0 && y < 0){
        return  "Quadrant 3";
    } else if (x < 0 && y > 0){
        return "Quadrant 4";
    }else if (x == 0 && y != 0){
        return "X Axis";
    }else if (x != 0 && y == 0){
        return "Y Axis";
    } else {
        return "Origin";
    }
} 

checkQuadrant(1,1);
checkQuadrant(-1,1);
checkQuadrant(-1,-1);
checkQuadrant(1,-1);


//Exercise 4
function isValidTriangle(a, b, c){
    let (isValid){
        if (a == b && b == c){
            return 'Equilateral';
        }else if (a == b || b == c || a == c){
          return 'Isosceles';
        }
    } else {
        return 'Not a valid triangle';
    }
}
checkTriangle(2, 3, 4);
checkTriangle(2, 2, 2);
checkTriangle(1, 2, 2);
checkTriangle(1, 1, 2);


// Exercise 5

function dataUsageFeedback(planLimit, day, usage){
    let periodLength = 30;
    let currentAvg = usage / day ;
    let projectedAvg = planLimit / periodLength;
    let remainingData = planLimit - usage;
    let remainingDays = periodLength - day;
    let projectedUsage = remainingDays * currentavg;
    let statusMsg;

    console.log('${day} day(s) used, ${remainingDays} day(s) remaining');
    console.log('Average projected use: ${projectedAvg} GB/day');

    if(currentavg > projectedAvg){
        statusMsg = "EXCEEDING"
    } else if (currentAvg < projectedAvg){
        statusMsg = "UNDER";
    } else{
        statusMsg = "AT";
    }

    console.log('You are ${statusMsg} your average daily use (${currentAvg} GB/day),continue this high usage, you will end using ${
        planLimit - projectedUsage
     } GB from your data limit.');
}

dataUsageFeedback(50, 15, 25);



