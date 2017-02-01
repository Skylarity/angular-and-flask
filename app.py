from flask import Flask, send_file, request
import json
app = Flask(__name__)


@app.route("/")
def hello_world():
	return send_file("templates/index.html")


@app.route("/api/post/", methods=["GET"])
def post():
	if request.method == "GET":
		to_return = ["Test", "Testing", "This is also a test", "More", "Tests", "Are", "Here"]
		return json.dumps(to_return)


@app.route("/api/post/<int:post_id>", methods=["POST"])
def make_post(post_id):
	if request.method == "POST":
		return "Post ID %s posted." % post_id


if __name__ == "__main__":
	app.run(host="0.0.0.0")
