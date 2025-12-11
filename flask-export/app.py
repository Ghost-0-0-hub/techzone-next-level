from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/contact', methods=['POST'])
def contact():
    data = request.get_json()
    name = data.get('name')
    email = data.get('email')
    phone = data.get('phone')
    course = data.get('course')
    message = data.get('message')
    
    # Process the contact form (add email sending, database storage, etc.)
    print(f"New inquiry from {name} ({email}) - Course: {course}")
    
    return jsonify({'success': True, 'message': 'Thank you for your inquiry!'})

if __name__ == '__main__':
    app.run(debug=True)
