/** OBJECTS ARE NOT COPIED BY VALUE BUT ARE COPIED BY REFRENCE */

const person1={
    name:"vaishnav",
    age:19

}
console.log(person1);

// creating new object with the same old object

const person2=person1;// new obj with same properties is created
console.log(person2);

// if we change the value of a key in person 2 the value in person1 also changes and vice-versa
person2.age=20;
console.log(person1);
console.log(person2);  

// // C++ program for the above approach
// #include <iostream>
// using namespace std;

// // Box Class
// class box {
// private:
//     int length;
//     int breadth;
//     int height;
//       int *p;

// public:
//     // Function that sets the dimensions
//     void set_dimensions(int length1, int breadth1,
//                         int height1,int x)
//     {
//         length = length1;
//         breadth = breadth1;
//         height = height1;
//           p=new int;
//       *p=x;
//     }

//     // Function to display the dimensions
//     // of the Box object
//     void show_data()
//     {
//         cout << " Length = " << length
//              << "\n Breadth = " << breadth
//              << "\n Height = " << height
//              << "\n P int pointing to = "<<p
//              << endl;
//     }
// };

// // Driver Code
// int main()
// {
//     // Object of class Box
//     box B1, B3;

//     // Set dimensions of Box B1
//     B1.set_dimensions(14, 12, 16,100);
//     B1.show_data();

//     // When copying the data of object
//     // at the time of initialization
//     // then copy is made through
//     // COPY CONSTRUCTOR
//     box B2 = B1;
//     B2.show_data();

//     // When copying the data of object
//     // after initialization then the
//     // copy is done through DEFAULT
//     // ASSIGNMENT OPERATOR
//     B3 = B1;
//     B3.show_data();

//     return 0;
// }