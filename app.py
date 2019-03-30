from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/")
def hello():
    page = {'title': 'FamHealth'}
    return render_template('index.html', page=page)

if __name__ == "__main__":
    app.run(host="0.0.0.0")