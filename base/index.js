// pass by value : string, number, boolean,..

// pass by reference : array, object   ????
// array : phần tử, giá trị, vị trí (index ),  [ ]
// lưu 10 sdt => 1 array để chứa
// lưu tên, tuổi, giới tính, sdt, quốc tịch của 1 học viên  => dùng 1 object
//  key:value

var name1 = "Alice";
var age1 = 2;
var name2 = "Bob";
var age2 = "4";
// object ={
// key:value
// }
var sv1 = {
  name: "alice",
  age: 2,
};
var sv2 = {
  name: "bob",
  age: 4,
};
var cat = {
  name: "miu",
  age: 2,
  mom: {
    name: " miu bà ngoại",
    age: 4,
  },
  children: [
    {
      name: " miu con 1",
      age: 0.5,
    },
    {
      name: "miu con 2",
      age: 0.5,
    },
  ],
};

var dog = {
  age: 2,
  name: "lulu",
  speak: function () {
    console.log("gâu gâu , tao là : ", this.name);
  },
};

// truy xuất value => dùng key
console.log(name);

// update value của key

console.log(" dog before", dog);
dog.name = "golden";
console.log(" dog after", dog);

// speack : method ~ phương thức
dog.speak();
dog.speak();
dog.speak();

// pass by value

var a = 2;
var b = a;
//
b = 5;

// pass by reference

var alice = {
  score: 10,
};

var bob = alice;
console.log(" before  alice", alice);
console.log(" before bob", bob);

bob.score = 2;

console.log(" after  alice", alice);
console.log(" after bob", bob);
