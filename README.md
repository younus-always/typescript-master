# What are some differences between interfaces and types in TypeScript?

## Type in TypeScript

TypeScript types are utilized to define data types for variables. This includes built-in types, user-defined types, and additional features such as type aliases. The fundamental types in TypeScript comprise string, Boolean, number, union, and intersection.

```
// Define the type
type Person = {
  name: string;
  age: number;
};

type MorePerson = {
  email: string;
};
// merged type with intersection
type CombinedPerson = Person & MorePerson;

const person: CombinedPerson = {
  name: "JoneDoe",
  age: 20,
  email: "jonedoe@gmail.com"
};
console.log(person);
// output : {name:'JoneDoe', age:20, email:"jonedoe@gmail.com"}
```

## Interface in TypeScript

An Interface in TypeScript is a syntactical contract that entities must adhere to. It can only contain the declaration of properties, methods, and events, without any implementation. Interfaces define a standard structure that implementing classes must follow.

```
// Define the interface
interface Person {
name: string;
age: number;
}

interface Person {
roll: number;
}
// Person = { name: string; age: number; roll: number }

// Using the merged interface
const student: Person = {
name: 'JoneDoe',
age: 17,
roll: 8
}

console.log(student)
// output : {name:'JoneDoe', age:17, roll:8}


interface WithId {
id: string;
}
//Inherit WithId in the User interface using extends
interface User extends WithId {
name: string;
}

const user: User = {
id: "123",
name: "Karl",
}
```

# Example of using **union** and **intersection** types in TypeScript.

#### A **union** type means a value can be _one of many types_. You use the `|` symbol.

🧠 **Think:** “this OR that”

```
type ID = string | number;

let userId: ID;

userId = "abc123"; // valid
userId = 101;      // valid
userId = true;     // Error: boolean is not allowed
```

#### An **intersection** type combines multiple types into one. You use the `&` symbol.

🧠 **Think:** “this AND that”

```
type HasName = { name: string };
type HasAge = { age: number };

type Person = HasName & HasAge;

const user: Person = {
  name: "Ali",
  age: 25,
};
```

## Create files and folders

### 1. **`any`** – _"I don't care what it is"_

- `any` disables all type checking. You can assign anything to it, and assign it to anything else.
- It's like opting out of TypeScript completely.

```
let value: any;

value = 5;
value = "hello";
value = true;

let num: number = value; //  No error, even if value is a string
```

### 2. **`unknown`** – _"I don't know what it is yet"_

- Safer version of `any`. You **can assign anything** to `unknown`, but **you can’t use it** unless you check its type first.

```
let input: unknown = "hello";

input.toUpperCase(); // Error: You must check the type

if (typeof input === "string") {
  console.log(input.toUpperCase()); // HELLO
};
```

### 3. **`never`** – _"This should never happen"_

- Used for values that should **never exist**.
- Often used in functions that **never return** (like throwing errors or infinite loops).

```
function throwError(message: string): never {
  throw new Error(message); // This function never returns
}

function handleValue(value: string | number): void {
  if (typeof value === "string") {
    console.log("It's a string:", value);
    return;
  }

  if (typeof value === "number") {
    console.log("It's a number:", value);
    return;
  }

  // This block should never be reached if all types are handled
  const check: never = value; // TypeScript will error if `value` is not string or number
};
```
