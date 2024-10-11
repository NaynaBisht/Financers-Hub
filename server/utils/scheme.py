"""
Requirements:
Install the Google AI Python SDK

$ pip install google-generativeai
"""

import os
import time
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()
genai.configure(api_key=os.environ["GEMINI_API_KEY"])

def upload_to_gemini(path, mime_type=None):
  """Uploads the given file to Gemini.

  See https://ai.google.dev/gemini-api/docs/prompting_with_media
  """
  file = genai.upload_file(path, mime_type=mime_type)
  print(f"Uploaded file '{file.display_name}' as: {file.uri}")
  return file

def wait_for_files_active(files):
  """Waits for the given files to be active.

  Some files uploaded to the Gemini API need to be processed before they can be
  used as prompt inputs. The status can be seen by querying the file's "state"
  field.

  This implementation uses a simple blocking polling loop. Production code
  should probably employ a more sophisticated approach.
  """
  print("Waiting for file processing...")
  for name in (file.name for file in files):
    file = genai.get_file(name)
    while file.state.name == "PROCESSING":
      print(".", end="", flush=True)
      time.sleep(10)
      file = genai.get_file(name)
    if file.state.name != "ACTIVE":
      raise Exception(f"File {file.name} failed to process")
  print("...all files ready")
  print()

# Create the model
generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 64,
  "max_output_tokens": 8192,
  "response_mime_type": "text/plain",
}

model = genai.GenerativeModel(
  model_name="gemini-1.5-flash",
  generation_config=generation_config,
  # safety_settings = Adjust safety settings
  # See https://ai.google.dev/gemini-api/docs/safety-settings
)

# TODO Make these files available on the local file system
# You may need to update the file paths
files = [
  upload_to_gemini("MSME_Schemes.pdf", mime_type="application/pdf"),
]

# Some files have a processing delay. Wait for them to be ready.
wait_for_files_active(files)

chat_session = model.start_chat(
  history=[
    {
      "role": "user",
      "parts": [
        files[0],
        "can you answer my questions with context to this pdf",
      ],
    },
    {
      "role": "model",
      "parts": [
        "Okay, I can help you with that. Ask away! I have read the document and will try my best to understand your questions and provide answers with context from the document.  \n",
      ],
    },
    {
      "role": "user",
      "parts": [
        "which scheme is best for a farmer who wants to shift from traditional farming to horticulture and why is it the best?",
      ],
    },
    {
      "role": "model",
      "parts": [
        "The **\"Horticulture in Open Field\"** scheme would be best for a farmer who wants to shift from traditional farming to horticulture. Here's why:\n\n* **Financial Incentive:** This scheme provides a credit-linked back-ended subsidy of 40% of the project cost, with a ceiling of Rs. 30 lakh. This substantial financial support can help cover the initial expenses associated with setting up a horticulture farm.\n* **Area Focus:** It specifically targets horticulture projects covering an area of more than 2 to 5 hectares. This ensures that the scheme is relevant to farmers looking to establish a sizeable horticulture venture.\n* **Direct Support:** Farmers can directly apply to the Mission Director and Joint Secretary (NHM), Department of Agriculture & Cooperation, New Delhi. This simplifies the application process and ensures direct access to support.\n\nThe **\"Horticulture in Protected Cover\"** scheme could also be considered, but it focuses on a smaller area (above 2,500 sq. mt.) and has a slightly lower subsidy (50% of cost, limited to Rs. 56 lakh per project).\n\nUltimately, the best choice for a farmer would depend on their specific needs and resources, including the available land area, project scope, and financial capacity. However, the \"Horticulture in Open Field\" scheme offers the most substantial financial support and focuses on larger-scale horticulture projects, making it a strong starting point for farmers transitioning to this sector. \n",
      ],
    },
    {
      "role": "user",
      "parts": [
        "if i have made a website and want to integrate you in it, if i just make a simple form and then send the questions in the form to you using my API key will it be sufficient? and the response you'll type i'll show that to the user",
      ],
    },
    {
      "role": "model",
      "parts": [
        "That's a great idea! You can definitely integrate me into your website using a simple form and an API key. Here's how it would work:\n\n**1.  The Form:**\n\n* **Input:**  Create a simple form on your website where users can enter their questions.  Make sure the form allows for multi-line text input to accommodate detailed questions.\n* **Submission:** When the user submits the form, the data is sent to your server.\n\n**2.  Your Server:**\n\n* **API Key:**  You would need to secure an API key from me (or my provider). This key would be used to authenticate your requests.\n* **API Call:** Your server would use the API key to make an API call to me, sending the user's question as the request.\n* **Response:** I would process the question and return a response in text format.\n\n**3.  Displaying the Response:**\n\n* **Output:** Your server would take the text response from me and display it back to the user on your website.\n\n**Benefits of this approach:**\n\n* **Simplicity:** It's a straightforward way to integrate me into your website.\n* **Flexibility:** You can customize the form design and presentation of my responses to fit your website's style.\n* **Scalability:** This approach can handle a large volume of questions efficiently.\n\n**Things to consider:**\n\n* **API Limits:** I might have rate limits on the number of requests you can make within a certain time period.  You'll need to check my API documentation for those details.\n* **Response Formatting:**  The response I provide will be in plain text. You might need to apply formatting (e.g., line breaks, bolding, etc.) on your server to make the response more readable for users.\n* **Content Filtering:**  It's important to filter the questions and responses to ensure that inappropriate or harmful content is not displayed.\n\nLet me know if you have any more questions. I'm here to help! \n",
      ],
    },
    {
      "role": "user",
      "parts": [
        "you'll answer to questions whose context lies in the scope of the pdf i provided you okay?",
      ],
    },
    {
      "role": "model",
      "parts": [
        "You got it! I understand. I will only answer questions that are relevant to the content of the PDF you provided. I'm ready to assist you with any questions that fall within the scope of that document about the Ministry of Micro, Small & Medium Enterprises (MSME), the Ministry of Tribal Affairs, the Ministry of Urban Development, and the Ministry of Women and Child Development in India. Ask away! \n",
      ],
    },
    {
      "role": "user",
      "parts": [
        "what is your name?",
      ],
    },
    {
      "role": "model",
      "parts": [
        "That's a great question!  I don't have a name in the traditional sense. I'm a large language model, and my identity is based on the vast amount of text I've been trained on. You can think of me as a very sophisticated AI assistant, designed to process and generate text. \n\nWould you like me to answer a question about one of the schemes or ministries that are detailed in the PDF document? I'm ready to help! \n",
      ],
    },
    {
      "role": "user",
      "parts": [
        "what is my name?",
      ],
    },
    {
      "role": "model",
      "parts": [
        "I don't have access to personal information like your name. I'm a large language model, and I can't store or retrieve personal data about individuals. \n\nIs there anything else I can help you with regarding the content of the PDF? I'm ready to provide information and answer questions about the various schemes and ministries discussed in that document.  \n\nLet's continue our conversation about the Ministry of Micro, Small & Medium Enterprises, the Ministry of Tribal Affairs, the Ministry of Urban Development, or the Ministry of Women and Child Development in India. Just ask! 😊\n",
      ],
    },
    {
      "role": "user",
      "parts": [
        "if i fall in the small category in MSME and i am in agro-based sector with annual revenue of 2000000 and ownership is private workforce of 12 employees and location is west bengal, what is the best scheme for me",
      ],
    },
    {
      "role": "model",
      "parts": [
        "That's a great question!  Based on your information, you fall under the \"Micro\" category in the MSME sector and are located in West Bengal. \n\nUnfortunately, the PDF doesn't outline a specific scheme designed for agro-based MSMEs in West Bengal.  However, here are some general schemes and resources to explore that could be beneficial: \n\n**1.  Credit Guarantee Fund Scheme for Micro and Small Enterprises:**\n* **Purpose:** This scheme provides credit guarantees to banks for loans given to micro and small enterprises. \n* **Benefits:**  You can access loans more easily, as banks have lower risk when lending to you.\n* **How to Access:**  Apply through banks participating in the scheme. \n\n**2.  Prime Minister's Employment Generation Programme (PMEGP):**\n* **Purpose:** This scheme offers financial assistance to entrepreneurs who want to start their own micro-enterprises.\n* **Benefits:** You can receive a loan and a subsidy towards setting up your business.\n* **How to Access:**  Apply through your respective State Khadi and Village Industries Board (KVIB). \n\n**3.  Micro Credit (MC) for Self Help Groups (SHGs):**\n* **Purpose:** This scheme provides loans to SHGs,  encouraging small businesses and empowering women in rural areas. \n* **Benefits:**  You can leverage access to micro-credit if you're a member of an SHG.\n* **How to Access:**  Apply through your respective State Channellising Agency of the National Scheduled Tribes Finance & Development Corporation. \n\n**4.  Seek Local Support:**\n* **Reach out to:**  The West Bengal Small Industries Development Corporation (WSIDC) and the West Bengal Khadi and Village Industries Board (WBKVIB). They may offer specific programs and guidance tailored to agro-based MSMEs in your state.\n\n**Recommendations:**\n\n* **Connect with:**  Reach out to the West Bengal KVIB or WSIDC to inquire about specific programs and initiatives for agro-based MSMEs. \n* **Consider:**  If you're part of an SHG, explore the Micro Credit scheme to access additional financing. \n\nRemember, the best scheme depends on your specific needs and business goals. Research each program thoroughly to understand eligibility criteria and potential benefits before making your decision. \n\n\n",
      ],
    },
  ]
)

print("Welcome to the MSME chatbot! Type 'exit' or 'quit' to end the chat.")
while True:
    user_input = input("You: ")
    if user_input.lower() in ["exit", "quit"]:
        print("Exiting the chat. Goodbye!")
        break
    
    # Send the user message and receive the response
    response = chat_session.send_message(user_input)
    
    # Display the response
    print(f"Bot: {response.text}")