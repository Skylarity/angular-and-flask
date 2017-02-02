from flask import Flask, send_file, request
import json
app = Flask(__name__)


@app.route("/")
def hello_world():
	return send_file("templates/index.html")


@app.route("/api/post/", methods=["GET", "POST"])
def post():
	if request.method == "GET":
		to_return = ["Test", "Testing", "This is also a test", "More", "Tests", "Are", "Here"]
		return json.dumps(to_return)
	if request.method == "POST":
		return "Post ID {} posted.".format(request.get_json()["id"])  # Use request.get_json() so we can grab the "id" key


if __name__ == "__main__":
	app.run(host="0.0.0.0")
