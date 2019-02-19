from textblob import TextBlob

file = open('./input.txt','r') # load text file

# aggregate lines to text
text = ''
for line in file:
    text += line

print('Text Analysis - one sentence at a time: \n')

blob = TextBlob(text)
count = 0

for sentence in blob.sentences:
    count += 1
    # text analysis
    print(str(count) + ': "' + str(sentence) + '"')
    print('- language: ' + str(sentence.detect_language()))
    print('- mood: ' + str(sentence.sentiment.polarity))
    print('- word count: ' + str(len(sentence.words)))
    print('- definitions:')
    for noun in sentence.noun_phrases:
        print('  - "' + noun + '": ' + str(noun.definitions))

    # pause until random key is pressed
    anykey = input('<Press "Enter" to continue.> \n')

print('No more sentences left. Analysis is done. Have a nice day!')
