FROM python:3.8   

WORKDIR /app  

RUN pip install --upgrade pip  

COPY . /app/  

RUN pip install -r requirements.txt  

EXPOSE 8080  

CMD python manage.py runserver 