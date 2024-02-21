from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/about')
def about():
    return 'About page'

@app.errorhandler(404)
def page_not_found(error):
    return 'Page not found', 404

if __name__ == '__main__':
    app.run()


# это простой http сервер на flask