var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "sec-quiz-basic-probabilities",
  "level": "1",
  "url": "sec-quiz-basic-probabilities.html",
  "type": "Worksheet",
  "number": "",
  "title": "Quiz: Basic Probabilities",
  "body": " Quiz: Basic Probabilities   Name:       Red-green colorblindness is a commonly inherited form of colorblindness. The gene involved is transmitted on the X chromosome in a recessive manner. If a male inherits an affected X chromosome, he is colorblind (genotype ). A female is colorblind only if she inherits two affected copies (genotype ); heterozygous females are not colorblind.  Suppose a couple consists of a male with genotype and a female with genotype . What is the probability that the couple's child is a colorblind male?       A card is selected at random from a well-shuffled standard deck of 52 cards. What is the probability that the selected card is a diamond or a 7? Give your answer as a reduced fraction.       A student guesses on all 7 questions of a multiple-choice test. Each question has 5 answer choices, exactly one of which is correct. Assume the guesses are independent. What is the probability that the student gets at least one question wrong? Give your answer as a fraction.       People with sore throats are often tested for strep throat. A study compared the results of a rapid test with the results of a throat culture on the same patients. The results are summarized below.    Strep-Throat Status   Rapid Test  Positive    Rapid Test  Negative   Total    Have Strep Throat  378  23  401    Do Not Have Strep Throat  26  254  280    Total  404  277  681    Give each answer as a reduced fraction or as a decimal rounded to at least four decimal places.    What is the probability that a patient has strep throat, given that the rapid test is positive?    Given that a patient has a negative rapid test, what is the probability that the patient does not have strep throat?    What is the probability that the rapid test is positive, given that a patient has strep throat?      "
},
{
  "id": "ex-quiz-basic-probabilities-colorblindness",
  "level": "2",
  "url": "sec-quiz-basic-probabilities.html#ex-quiz-basic-probabilities-colorblindness",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "",
  "body": "  Red-green colorblindness is a commonly inherited form of colorblindness. The gene involved is transmitted on the X chromosome in a recessive manner. If a male inherits an affected X chromosome, he is colorblind (genotype ). A female is colorblind only if she inherits two affected copies (genotype ); heterozygous females are not colorblind.  Suppose a couple consists of a male with genotype and a female with genotype . What is the probability that the couple's child is a colorblind male?   "
},
{
  "id": "ex-quiz-basic-probabilities-cards",
  "level": "2",
  "url": "sec-quiz-basic-probabilities.html#ex-quiz-basic-probabilities-cards",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "",
  "body": "  A card is selected at random from a well-shuffled standard deck of 52 cards. What is the probability that the selected card is a diamond or a 7? Give your answer as a reduced fraction.   "
},
{
  "id": "ex-quiz-basic-probabilities-at-least-one-wrong",
  "level": "2",
  "url": "sec-quiz-basic-probabilities.html#ex-quiz-basic-probabilities-at-least-one-wrong",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "",
  "body": "  A student guesses on all 7 questions of a multiple-choice test. Each question has 5 answer choices, exactly one of which is correct. Assume the guesses are independent. What is the probability that the student gets at least one question wrong? Give your answer as a fraction.   "
},
{
  "id": "ex-quiz-basic-probabilities-strep-test",
  "level": "2",
  "url": "sec-quiz-basic-probabilities.html#ex-quiz-basic-probabilities-strep-test",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "",
  "body": "  People with sore throats are often tested for strep throat. A study compared the results of a rapid test with the results of a throat culture on the same patients. The results are summarized below.    Strep-Throat Status   Rapid Test  Positive    Rapid Test  Negative   Total    Have Strep Throat  378  23  401    Do Not Have Strep Throat  26  254  280    Total  404  277  681    Give each answer as a reduced fraction or as a decimal rounded to at least four decimal places.    What is the probability that a patient has strep throat, given that the rapid test is positive?    Given that a patient has a negative rapid test, what is the probability that the patient does not have strep throat?    What is the probability that the rapid test is positive, given that a patient has strep throat?     "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
