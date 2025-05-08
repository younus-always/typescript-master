function formatString(input: string, toUpper?: boolean) {
      if (toUpper || toUpper === undefined) {
            const upperText = input.toUpperCase()
            return upperText
      } else {
            const lowerText = input.toLowerCase()
            return lowerText
      }
};
formatString("Hello")
formatString("Hello", true)
formatString("Hello", false)



function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
      const rating = items.filter(item => item.rating >= 4)
      return rating
}
const books = [
      { title: "Book A", rating: 4.5 },
      { title: "Book B", rating: 3.2 },
      { title: "Book C", rating: 5.0 }
];
filterByRating(books)


function concatenateArrays<T>(...arrays: T[][]): T[] {
      const concateArray = arrays.flat()
      return concateArray
};
concatenateArrays(["a", "b"], ["c"])
concatenateArrays([1, 2], [3, 4], [5])


class Vehicle {
      constructor(private make: string, private year: number) { }
      getInfo() {
            return `Make: ${this.make}, Year: ${this.year}`
      }
}

class Car extends Vehicle {
      constructor(make: string, year: number, public model: string) {
            super(make, year)
      }
      getModel() {
            return `Model: ${this.model}`
      }
};
const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();  
myCar.getModel();  


