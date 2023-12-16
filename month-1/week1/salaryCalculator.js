const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ->', (name) => {
  rl.question('What is base salary? ->$', (baseInput) => {
    const base = parseFloat(baseInput);
    rl.question('What is your weekly working hours? ->', (hourInput) => {
      const hour = parseInt(hourInput);
      rl.question('What is your bonus rate per hour? (0 - 1) ->', (bonusInput) => {
        const bonus = parseFloat(bonusInput);

        // Gross salary operation
        const grossSalary = bonus * hour + base;

        // Net salary operation
        const tax = grossSalary * 0.15;
        const pensionRate = grossSalary * 0.05;
        const netSalary = grossSalary - (tax + pensionRate);

        // Bonus payment operation
        const bonusPayment = bonus * hour;

        // Final output
        console.log(`Hey ${name}`);
        console.log(`Your gross salary is $${grossSalary}`);
        console.log(`Your net salary is $${netSalary}`);
        console.log(`Your bonus payment is $${bonusPayment}`);

        rl.close();
      });
    });
  });
});
