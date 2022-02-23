from flask import Flask, render_template, request
import pandas
import json
import os

app = Flask(__name__)

# load levels from static csv
path = os.path.dirname(__file__)
levels = pandas.read_csv(os.path.join(path, "static/levels.csv"), delimiter=";")

# fetch next row from levels DataFrame
def fetchNextLevel(userAnswer):
    nextLevel = levels.loc[levels.lastAnswer==userAnswer]
    if nextLevel.empty:
        return fetchNextLevel("lose")   # no match: trigger lose condition
    elif len(nextLevel) > 1:
        return nextLevel.head(1)        # for multiple matches take the first one
    else:
        return nextLevel

# compile level infromation into JSON
def compileLevel(nextLevel):
    return {
        "title":        nextLevel.title.item(),
        "currentLevel": nextLevel.number.item(),
        "maxLevel":     levels.number.max(),
        "message":      nextLevel.message.item(),
        "choices":      nextLevel.choices.item().split(),
    }

# receives user answers via POST and responds with next game state
@app.route("/", methods = ["POST","GET"])
def gameLoop():
    userAnswer = "start"

    if request.method == "POST":
        userAnswer = request.form["answer"]

    levelJSON = compileLevel(fetchNextLevel(userAnswer))
    return render_template("game.html", level=levelJSON)

    # t, l, m, c = fetchNextLevel(userAnswer)
    # return render_template("game.html", title=t, level=l, message=m, choices=json.dumps(c))

if __name__ == "__main__":
    app.run(debug=True, port=5000)