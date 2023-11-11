release: python manage.py makemigrations && python manage.py migrate
web: gunicorn backend_cinematography.wsgi
web_frontend: serve -s build
