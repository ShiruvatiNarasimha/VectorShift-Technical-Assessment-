from fastapi import FastAPI, Form

# Create a FastAPI app instance
app = FastAPI()

# Define a GET route for the root URL
@app.get('/')
def read_root():
    # Return a dictionary with a key 'Ping' and value 'Pong'
    return {'Ping': 'Pong'}

# Define a GET route for the '/pipelines/parse' URL
@app.get('/pipelines/parse')
def parse_pipeline(pipeline: str = Form(...)):
    # Return a dictionary with a key 'status' and value 'parsed'
    return {'status': 'parsed'}
