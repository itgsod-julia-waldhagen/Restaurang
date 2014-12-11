__author__ = 'Plommonsorbet'
from flask import Flask
from flask import render_template
app = Flask(__name__)



@app.route('/')
def index():
    return render_template('index.html')


@app.route('/boka')
def boka():
    return render_template('boka.html')

@app.route('/hitta')
def hitta():
    return render_template('hitta.html')

@app.route('/meny')
def meny():
    return render_template('meny.html')


app.run(debug=True, host='0.0.0.0')

