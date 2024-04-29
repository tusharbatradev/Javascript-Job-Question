// Write a program in C to calculate and print the electricity bill of a given customer. The customer ID, name, and unit consumed by the user should be captured from the keyboard to display the total amount to be paid to the customer.

function totalBill(customerId, customerName, unitConsumed) {
  let amountCharge;

  if (unitConsumed >= 600) {
    amountCharge = unitConsumed * 2;
  } else if (unitConsumed >= 401 && unitConsumed <= 600) {
    amountCharge = unitConsumed * 1.8;
  } else if (unitConsumed >= 201 && unitConsumed <= 400) {
    amountCharge = unitConsumed * 1.5;
  } else {
    amountCharge = unitConsumed * 1.2;
  }

  // Consoling details of customer
  console.log("Customer ID: " + customerId);
  console.log("Customer Name: " + customerName);
  console.log("Unit Consumed: " + unitConsumed);
  console.log("Amount Charges: " + amountCharge);

  // Finding Surcharge Amount and Total amount
  let surchargeAmount = 0;
  let totalAmount;
  if (amountCharge > 600) {
    surchargeAmount = (amountCharge * 15) / 100;
    totalAmount = amountCharge + surchargeAmount;
    console.log("Surcharge Amount: " + surchargeAmount);
    console.log("Total Amount to be Paid: " + totalAmount);
  }
}

totalBill(101, "James", 800);
