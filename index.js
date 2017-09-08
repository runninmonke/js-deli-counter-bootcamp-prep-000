function takeANumber(line, person) {
  line.push(person)
  return `Welcome, ${person}. You are number ${line.length + 1} in line.`
}

function nowServing(line) {
  if (line.length < 1) {
    return "There is nobody waiting to be served!"
  }
  var person = line.shift()
  return person
}

function currentLine(line) {
  if (line.length < 1) {
    return "The line is currently empty"
  }
  verboseLine = "The line is currently:"
  for (var i = 0; i < line.length; i++) {
    verboseLine = verboseLine + ` ${i + 1}. ${line[i]}`
  }
  return verboseLine
}
