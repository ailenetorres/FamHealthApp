from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/")
def hello():
    user = {'username': 'FamHealth'}
    return render_template('index.html', title='FamHealth', user=user)

if __name__ == "__main__":
    app.run(host="0.0.0.0")