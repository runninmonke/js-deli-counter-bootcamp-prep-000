function takeANumber(line, person) {
  line = [...line, ...person]
  return line.length + 1
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
  for (var i = 0;)
}