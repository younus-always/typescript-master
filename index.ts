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



function processValue(value: string | number): number {
      if (typeof value === "number") {
            return value * value
      } else {
            return value.length
      }
};
processValue("hello")
processValue(10)




interface Product {
      name: string;
      price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
      if (products.length === 0) return null
      const highestProduct = products.reduce((acc, current) => current.price > acc.price ? current : acc)
      return highestProduct
};
const products = [
      { name: "Pen", price: 10 },
      { name: "Notebook", price: 25 },
      { name: "Bag", price: 50 }
];
getMostExpensiveProduct(products)




enum Day {
      Monday,
      Tuesday,
      Wednesday,
      Thursday,
      Friday,
      Saturday,
      Sunday
}

function getDayType(day: Day): string {
      if (day === 6) return 'Weekend';
      return 'Weekday';
};
getDayType(Day.Friday)
getDayType(Day.Sunday)



async function squareAsync(n: number): Promise<number> {
      return new Promise<number>((resolve, reject) => {
            if (n < 1) {
                  reject("Negative number not allowed")
            } else {
                  setTimeout(() => {
                        resolve(n * n)
                  }, 1000);
            }
      })
};
squareAsync(4).then(console.log)
squareAsync(-3).catch(console.error)
