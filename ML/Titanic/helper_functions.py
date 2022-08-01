from sklearn.metrics import (
    accuracy_score,
    precision_score,
    recall_score,
    f1_score,
    roc_auc_score,
    confusion_matrix,
    classification_report,
)
from matplotlib import pyplot as plt
import pandas as pd
import seaborn as sns

X_test = pd.read_csv("X_test.csv").values
y_test = pd.read_csv("y_test.csv").values
model_performance = {}


def visualize_model(model, features=X_test):
    """
    This function plots the confusion metrics and classification report

    Parameters
    ----------
    model : sklearn model

    Returns
    -------
    None
    """
    # predicting on the data
    y_pred = model.predict(features)

    # Printing the classification report
    print(classification_report(y_test, y_pred))

    # Confusion matrix
    cm = confusion_matrix(y_test, y_pred)
    plt.figure(figsize=(8, 6))
    sns.heatmap(cm, annot=True, fmt="d")
    plt.show()


def evaluate_model(model, model_name=None):
    """
    The function takes a model as input and creats a dictionary with the model's \\
        accuracy, precision, recall, f1 score, and roc_auc_score and add them to the \\
        `model_performance` dictionary and returns it. The `model_performance` dictionary \\
        is instantiated just before this function is created.

    Parameters
    ----------
    model : sklearn model

    Returns
    -------
    model_performance : dictionary
    """
    # Making predictions on the test set
    y_pred = model.predict(X_test)

    # Getting the metrics
    accuracy = accuracy_score(y_test, y_pred)
    precision = precision_score(y_test, y_pred)
    recall = recall_score(y_test, y_pred)
    f1 = f1_score(y_test, y_pred)
    roc_auc = roc_auc_score(y_test, y_pred)

    # Adding the metrics to the model_performance dictionary
    if model_name is None:
        model_name = type(model).__name__

    model_performance[model_name] = {
        "accuracy": accuracy,
        "precision": precision,
        "recall": recall,
        "f1": f1,
        "roc_auc": roc_auc,
    }
    return model_performance
