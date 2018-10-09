---
title: Abstract Classes in Java
---

Lets discuss abstract classes. Before diving into this tutorial it is better that you have understood concepts of classes
and inheritance.

Abstract classes are classes that can be subclassed (i.e. extended) but cannot be instantiated. You can think of them as a **class version** of interfaces. 

Consider the following example to understand abstract classes:
You have a class Vehicle which defines certain basic functionality (methods) and certain components (object variables) that a machinery should have, to be classified as a vehicle. You cannot create an object of Vehicle because a vehicle in itself is an abstract concept. You can however extend the functionality of the vehicle class to create a Car or a Bike.

``` java
abstract class Vehicle
{
  //variable that is used to declare the no. of wheels in a vehicle
  private int wheels;
  
  //Variable to define the type of motor used
  private Motor motor;
  
  //an abstract method that only declares, but does not define the start 
  //functionality because each vehicle uses a different starting mechanism
  abstract void start();
}

public class Car extends Vehicle
{
  ...
}

public class Bike extends Vehicle
{
  ...
}
```

You cannot create an object of Vehicle class anywhere in your program. You can however, extend the abstract vehicle class and create objects of the child classes;

``` java
Vehicle newVehicle = new Vehicle();    // Invalid
Vehicle car = new Car();  // valid
Vehicle bike = new Bike();  // valid

Car carObj = new Car();  // valid
Bike bikeObj = new Bike();  // valid
```

## Constructor in an Abstract Class

Yes, you can define a constructor in an abstract class if you are in one of these situations:

1. You want to perform some initialization before the instantiation of a subclass actually takes place.
2. You have defined final fields in the abstract class but you did not initialize them in the declaration itself, in this case, you must have a constructor to initialize these fields.

Points to remember:

1. You can define more than one constructor (with different arguments).
2. You can define all your constructors protected (making them public is pointless anyway).
3. Your subclass constructors can call one constructor of the abstract class. It may even have to call it (if there is no no-arg constructor in the abstract class).
