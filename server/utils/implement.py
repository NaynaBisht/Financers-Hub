import pandas as pd
import joblib
import sys
import os

# Load the trained model
model = joblib.load('credit_score.joblib')

def preprocess_data(df):
    """Preprocess the DataFrame to extract required features."""
    
    # Step 1: Summarize the data to create features
    summary = df.groupby(['year', 'category', 'sub_category']).agg({'value_000': 'sum'}).unstack(fill_value=0)
    summary.columns = ['_'.join(col).strip() for col in summary.columns.values]
    summary.reset_index(inplace=True)

    # Step 2: Extract required features
    closing_balance = summary.get('value_000_Closing Balance', 0).sum()  # Sum if multiple entries
    opening_balance = summary.get('value_000_Opening Balance', 0).sum()  # Sum if multiple entries
    payments = summary.get('value_000_Payments', 0).sum()  # Sum if multiple entries
    receipts = summary.get('value_000_Receipts', 0).sum()  # Sum if multiple entries

    # Create a DataFrame with the required data
    user_data = pd.DataFrame({
        'value_000_Closing Balance': [closing_balance],
        'value_000_Opening Balance': [opening_balance],
        'value_000_Payments': [payments],
        'value_000_Receipts': [receipts],
    })

    return user_data

def calculate_credit_score_from_excel(file_path):
    # Step 1: Read the CSV file
    try:
        df = pd.read_csv(file_path)
        print("CSV file loaded successfully.")
        
        # Step 2: Check the structure of the DataFrame
        print("Data in CSV file:")
        print(df.head())  # Display the first few rows for verification
        
        # Step 3: Preprocess the data to extract relevant columns
        user_data = preprocess_data(df)

        # Step 4: Make the prediction
        predicted_credit_score = model.predict(user_data)[0]
        print(f"The predicted credit score for the input data is: {predicted_credit_score:.2f}")
        
    except Exception as e:
        print(f"An error occurred: {e}")

# # Example usage
# file_path = ''  # Replace with the actual file path
# calculate_credit_score_from_excel(file_path)
if __name__ == "__main__":
    # The file path should now point to the data folder
    file_path = os.path.join(os.path.dirname(__file__), '../data/augmented_cashflow_data.csv')
    
    # Calculate credit score and print the result
    result = calculate_credit_score_from_excel(file_path)
    print(result)