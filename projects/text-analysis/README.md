# Text Analysis

In this code snippet I used the python library [TextBlob](https://textblob.readthedocs.io) to analyze text.

Data is a valuable capital and companies have been collecting data in their basements or on their servers for decades. Processing these large amounts of data is a crucial challenge for companies of today. The field of using computers to analyze text is called of natural language processing or NLP for short. It is a combined effort of linguistics and cutting edge computer science. The library I used for this project can dissect, classify and translate textual data.


```python
text = '...'

blob = TextBlob(text)

for sentence in blob.sentences:
    print(sentence.detect_language())
    print(len(sentence.words))
    for noun in sentence.noun_phrases:
        print('  - "' + noun + '": ' + str(noun.definitions))
    print(sentence.sentiment)
```

My script loads the text from an external file. I showcase some of TextBlob's features one sentence at a time. This snippet detects the given language and prints the number of words. The inner loop then looks up definitions for the nouns, which might be useful for comprehending more complex texts. A more advanced function determines the mood of a sentence. All words are basically compared with a large list of words and phrases. Positive words (e.g. beautiful) will push the value towards the upper limit of 1.0, while negative words push towards -1.0. We are left with an indicator of the tone of this sentence. The example sentence is from the opening text crawl from '_Star Wars: Episode IV – A New Hope_'.

```
$ python script.py
...
4: "Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy..."
- language: en
- word count: 30
- definitions:
  - "pursued": ['a person who is being chased', 'carry out or participate in an activity; be involved in', 'follow in or as if in pursuit', 'go in search of or hunt for', 'carry further or advance', 'followed with enmity as if to harm']
- mood: -0.5
  ...
<Press "Enter" to continue.>
```

The real fun begins when combining the features of a text. For example quantifying relationships between characters by averaging over the moods of their scenes together.
