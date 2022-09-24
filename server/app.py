from flask import Flask, jsonify
import pandas as pd
import requests

app = Flask(__name__)

data = pd.read_csv("pepsico-files/PEPSICO HACKDFW Dataset/PEP_HACKDFW_FINAL.csv")

@app.route("/health")
def health():
    return {"health": "UP"}

@app.route("/countySales", methods=['GET'])
def get_county_wise_total_sales():
    total_sales = data.groupby('BRAND', as_index=False)['SALE_QUANTITY'].sum()
    res = total_sales.sort_values(by='SALE_QUANTITY', ascending=False).head(10)
    total_sales_json = res.to_json(orient='records')
    return total_sales_json

@app.route("/countyWorstProd", methods=['GET'])
def get_county_worst_product_sale():
    total_sales_in_county = data.groupby(['COUNTY', 'BRAND'], as_index=False)['SALE_QUANTITY'].sum()
    sort_worst_sales_in_county = total_sales_in_county.sort_values(by='SALE_QUANTITY')
    filtered_result = sort_worst_sales_in_county[(sort_worst_sales_in_county['SALE_QUANTITY'] >= 0)]
    filtered_result = filtered_result.head(10)
    worst_sales_json = filtered_result.to_json(orient='records')
    return worst_sales_json
