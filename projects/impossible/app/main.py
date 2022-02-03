from flask import Flask, render_template, request
import pandas
import json
import os

app = Flask(__name__)

# load levels from static csv
path = os.path.dirname(__file__)
levels = pandas.read_csv(os.path.join(path, "static/levels.csv"), delimiter=";")

def fetchNextLevel(userAnswer):
    row = levels.loc[levels.lastAnswer==userAnswer]

    if row.empty:
        return fetchNextLevel("lose")   # no match: trigger lose condition
    elif len(row) > 1:
        row = row.head(1)               # for multiple matches take the first one
    
    title = row.title.item()
    level = row.level.item()
    message = row.message.item()
    choices = row.choices.item().split()
    return title, level, message, choices

# receives user answers via POST and responds with next game state
@app.route("/", methods = ["POST","GET"])
def gameLoop():
    userAnswer = "start"

    if request.method == "POST":
        userAnswer = request.form["answer"]

    t, l, m, c = fetchNextLevel(userAnswer)
    return render_template("game.html", title=t, level=l, message=m, choices=json.dumps(c))

# if __name__ == "__main__":
#     app.run(debug=True, port=5000)