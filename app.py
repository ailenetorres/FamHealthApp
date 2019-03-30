from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello():
    user = {'username': 'Miguel'}
    return '''
<html>
    <head>
        <title>Home Page - Microblog</title>
    </head>
    <body>
        <h1>Hello, ''' + user['username'] + '''!</h1>
    </body>
</html>'''

if __name__ == "__main__":
    app.run(host="0.0.0.0")