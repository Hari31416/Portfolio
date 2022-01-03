from datetime import MAXYEAR
import webdriver_manager
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
from webdriver_manager.firefox import GeckoDriverManager
from IPython.display import clear_output
import pandas as pd
import time


class Driver:
    def __init__(self):
        self.driver = webdriver.Chrome(ChromeDriverManager().install())

    def close(self):
        self.driver.close()

    def get(self, url):
        self.driver.get(url)

    def current_url(self):
        return self.driver.current_url


class Webpage(Driver):
    def __init__(self, url):
        super().__init__()
        self.url = url

    def get_page(self):
        self.driver.get(self.url)


zlib = Webpage("https://www.google.com/")
zlib.get_page()
print(zlib.current_url())
time.sleep(5)
zlib.close()
