
//Function to invoke the array of questions
(function(whichFunc){
//function(questions){
  var addQuestions = function(numbers){
    return [
      "Ben has "+numbers[0]+" counter(s) and Tilly has "+numbers[1]+" counter(s), how many are counters altogether?",
      "David and Liz have "+numbers[0]+" coloured bead(s) and "+numbers[1]+" coloured bead(s), how many beads altogether?",
      "Mary has "+numbers[0]+" earring(s) and Tina has "+numbers[1]+" earring(s), what is the total number of earrings?",
      "Robert and Albert have "+numbers[0]+" coloured sticker(s) and "+numbers[1]+" coloured sticker(s), how many coloured stickers altogether?",
      "David has "+numbers[0]+" mixed fruit and Liz has "+numbers[1]+" mixed fruit, what is the total number of mixed fruit?",
      "Tino and Rita have "+numbers[0]+" bean(s) and "+numbers[1]+" bean(s), how many beans altogether?",
      "Thuli has "+numbers[0]+" jelly bean(s) and Ariko has "+numbers[1]+" jelly bean(s), what is the total number of jelly beans?",
      "Tandana has "+numbers[0]+" ball(s) and Flora has ball(s), how many balls?",
      "Marie has "+numbers[0]+" magnet(s) and Lewis has " +numbers[1]+ "magnet(s), what is the total number of magnets?",
      "Fiona has "+numbers[0]+" coloured rock(s) and Daniel has "+numbers[1]+" coloured rock(s), what is the total number of coloured rocks?"
    ];
  }

  var minusQuestions = function(numbers){
    return [
      "Ben has "+numbers[0]+" counter(s) and gives Tilly "+numbers[1]+" counter(s), how many are counters does Ben now have?",
      "Emmanuel has "+numbers[0]+" coloured bead(s) and drops "+numbers[1]+" coloured bead(s), how many beads does David have left?",
      "Mary has "+numbers[0]+" earring(s) and puts "+numbers[1]+" earring(s) in a box, how many earrings are left?",
      "Robert had "+numbers[0]+" coloured sticker(s) but has lost "+numbers[1]+" coloured sticker(s), how many coloured stickers does Robert have left?",
      "David has "+numbers[0]+" pieces of mixed fruit and eats "+numbers[1]+", how many does David have left?",
      "Tino has "+numbers[0]+" bean(s) and has eaten "+numbers[1]+" beans, how many bean(s) does Tino have left to eat?",
      "Thuli has "+numbers[0]+" jelly bean(s) and has given Ariko "+numbers[1]+" jelly bean(s), how many jelly beans does Thuli have now?",
      "Tandana has "+numbers[0]+" ball(s) and has left "+numbers[1]+" ball(s) in the shed, how many balls does Tandana have to play with?",
      "Marie has "+numbers[0]+" magnet(s) and gives Lewis "+numbers[1]+" magnet(s), how many magnets does Marie have?",
      "Fiona has collected "+numbers[0]+" coloured rock(s) but left "+numbers[1]+" coloured rock(s) behind, how many coloured rocks does Fiona have?"
    ];
  }

  var multiplyQuestions = function(numbers){
    return [
      "Ben has "+numbers[0]+" counter(s) in every tin. There are "+numbers[1]+" tin(s). How many are counters altogether?",
      "Liz has "+numbers[0]+" coloured bead(s) in each of her "+numbers[1]+" baskets, how many beads altogether?",
      "Mary has "+numbers[0]+" earring(s) in each box. There are "+numbers[1]+" boxes. What is the total number of earrings?",
      "Albert has "+numbers[0]+" coloured sticker(s) on every page of his book. There are "+numbers[1]+" page(s). How many coloured stickers altogether?",
      "Timothy has "+numbers[1]+" mixed fruit in every bowl. There are "+numbers[1]+" bowl(s). How much mixed fruit altogether?",
      "Tino has "+numbers[0]+" bean(s) in every packet. There are "+numbers[1]+" packet(s). How many beans altogether?",
      "Thuli has "+numbers[0]+" jelly bean(s) in each bag. There are "+numbers[1]+" bags(s). What is the total number of jelly beans?",
      "Tandana has "+numbers[0]+" ball(s) in each basket. There are "+numbers[1]+" basket(s). How many balls altogether?",
      "Marie has "+numbers[0]+" magnet(s) in each drawer. There are "+numbers[1]+" drawer(s). How many drawers altogether?",
      "Fiona has "+numbers[0]+" coloured rock(s) in each box. There are "+numbers[1]+" boxes. How many coloured rocks altogether?"
    ];
  }

  var divideQuestions = function(numbers){
    return [
      "Ben has "+numbers[0]+" counter(s) and "+numbers[1]+" friend(s), if Ben shares the counter(s) equally how many can each of them have? There may be some left over.",
      "David has "+numbers[0]+" coloured bead(s) and "+numbers[1]+" boxes, if David shares the bead(s) equally how many in each box? There may be some left over.",
      "Mary has "+numbers[0]+" earring(s) and wants to share them equally with her "+numbers[1]+" sister(s), how many does each sister get? There may be some left over.",
      "Pearl has "+numbers[0]+" coloured sticker(s) and wants to put the same number of sticker(s) on "+numbers[1]+" book(s), how many stickers on each book? There may be some left over.",
      "David has "+numbers[0]+" mixed fruit and "+numbers[1]+" friend(s), if David shares the mixed fruit equally how many can each of them have? There may be some left over that David can eat.",
      "Rita havs "+numbers[0]+" bean(s) and "+numbers[1]+" boxes. If Rita shares the bean(s) equally how many in each box? There may be some left over.",
      "Thuli has "+numbers[0]+" jelly bean(s) and "+numbers[1]+" brother(s), if Thuli shares the bean(s) equally how many can each of them have? There may be some left over.",
      "Tandana has "+numbers[0]+" ball(s) and "+numbers[1]+" basket(s). If Tandana puts the same number in each basket, how many balls in each basket? There may be some left over.",
      "Marie has "+numbers[0]+" magnet(s) and "+numbers[1]+" fridge(s). If Marie puts the same number of magnet(s) on each fridge, how many magnets are on each fridge? There may be some left over.",
      "Fiona has "+numbers[0]+" coloured rock(s) and "+numbers[1]+" bag(s). If Fiona puts the same number of coloured rock(s) in each bag, how many coloured rocks are in each bag? There may be some left over.",,
    ];
  }

  whichFunc.questions = {
  //questions = {
    add: addQuestions,
    minus: minusQuestions,
    multiply: multiplyQuestions,
    divide: divideQuestions
  }
})(this);
// console.log('window.questions['add']', window.questions['add']);
