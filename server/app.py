from flask import Flask, jsonify
import pandas as pd
import requests
import os.path
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt

app = Flask(__name__)

data = pd.read_csv("pepsico-files/PEPSICO HACKDFW Dataset/PEP_HACKDFW_FINAL.csv")

def check_delete(name):
    file_exist = os.path.exists('static/'+name)
    if file_exist:
        os.remove('static/'+name)

@app.route("/health")
def health():
    return {"health": "UP"}

@app.route("/countySales", methods=['GET'])
def get_county_wise_total_sales():
    total_sales = data.groupby('BRAND', as_index=False)['SALE_QUANTITY'].sum()
    res = total_sales.sort_values(by='SALE_QUANTITY', ascending=False).head(10)
    total_sales_json = res.to_json(orient='records')
    check_delete('graph_one.png')
    
    # Plot graph
    fig = plt.figure(figsize=(16,8))
    plt.bar(res["BRAND"], height=res['SALE_QUANTITY'])
    plt.title('Most Popular Pepsico Products')
    plt.xlabel("Sales (in Billion)")
    plt.ylabel("Pepsico Brands")
    fig.savefig('static/graph_one.png', dpi=fig.dpi)
    return {"response":True}

@app.route("/countyWorstProd", methods=['GET'])
def get_county_worst_product_sale():
    total_sales_in_county = data.groupby(['COUNTY', 'BRAND'], as_index=False)['SALE_QUANTITY'].sum()
    sort_worst_sales_in_county = total_sales_in_county.sort_values(by='SALE_QUANTITY')
    filtered_result = sort_worst_sales_in_county[(sort_worst_sales_in_county['SALE_QUANTITY'] >= 0)]
    filtered_result = filtered_result.head(10)
    check_delete('graph_two.png')
    worst_sales_json = filtered_result.to_json(orient='records')

    # plot graph
    fig = plt.figure(figsize=(16,8))
    pi_chart = filtered_result["COUNTY"].value_counts()
    ax = pi_chart.plot(kind="pie", autopct='%1.1f%%', shadow=True, legend=True, title='Counties to Advertise', ylabel='', labeldistance=None)
    ax.legend(bbox_to_anchor=(1, 1.02), loc='upper left')
    fig.savefig('static/graph_two.png',dpi=fig.dpi)
    return {"response":True}

@app.route("/channelSales", methods=['GET'])
def channel_sale():
    return {}
