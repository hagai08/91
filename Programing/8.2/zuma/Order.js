function Order(
  email,
  numberOfSeats,
  allergies = [],
  credit,
  comments = "No Comments",
  date,
  time,
  outside
) {
  this.orderNumber = `order_${Math.ceil(Math.random() * 99999999999)}`;
  this.email = email;
  this.numberOfSeats = +numberOfSeats;
  this.allergies = allergies;
  this.credit = credit;
  this.comments = comments;
  this.date = date;
  this.time = time;
  this.outside = outside;
}

console.log("Order is loaded!");
