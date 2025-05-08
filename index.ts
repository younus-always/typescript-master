function formatString(input: string, toUpper?: boolean) {
      if (toUpper || toUpper === undefined) {
            const upperText = input.toUpperCase()
            return upperText
      } else {
            const lowerText = input.toLowerCase()
            return lowerText
      }
}

const result = formatString("Hello")    
const result2 = formatString("Hello", true)   
const result3 = formatString("Hello", false)

