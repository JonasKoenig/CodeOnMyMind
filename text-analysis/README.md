## Text Analysis

In this code snippet I used the python library [TextBlob](https://textblob.readthedocs.io) to analyse text.

```python
blob = TextBlob(text)

for sentence in blob.sentences:
    print(sentence.detect_language())
    print(sentence.sentiment))
    print(len(sentence.words))
```

The script loads the text from a file and then dissects it using TextBlob. Then I showcase some features one sentence at a time. This example is a sentence from the opening text crawl from '_Star Wars: Episode IV – A New Hope_'.

```
$ python script.py
...
4: "Pursued by the Empire's sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy..."
- language: en
- mood: -0.5
- word count: 30
- definitions:
  - "pursued": ['a person who is being chased', 'carry out or participate in an activity; be involved in', 'follow in or as if in pursuit', 'go in search of or hunt for', 'carry further or advance', 'followed with enmity as if to harm']
  ...
<Press "Enter" to continue.>
```

I could imagine this tool to reveal interesting data about entire books. For example quantifying relationships between characters by averaging over the moods of their scenes together.
